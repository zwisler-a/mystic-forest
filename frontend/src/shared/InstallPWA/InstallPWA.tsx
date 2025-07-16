import './InstallPWA.css'
import { useEffect, useState } from 'react'
import { report } from "../Analytics/analytics.ts"

let savedPrompt: BeforeInstallPromptEvent | null = null
const listeners: ((e: BeforeInstallPromptEvent) => void)[] = []

window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault()
    savedPrompt = e as BeforeInstallPromptEvent
    listeners.forEach(listener => listener(savedPrompt!))
})

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
    const [showInstall, setShowInstall] = useState(false)
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        const listener = (prompt: BeforeInstallPromptEvent) => {
            setDeferredPrompt(prompt)
            setTimeout(() => {
                setShowInstall(true)
                setProgress(100)
            }, 5000)
        }

        if (savedPrompt) listener(savedPrompt)
        listeners.push(listener)

        const appInstalledHandler = () => {
            setShowInstall(false)
            setDeferredPrompt(null)
            savedPrompt = null
        }

        window.addEventListener('appinstalled', appInstalledHandler)

        return () => {
            const index = listeners.indexOf(listener)
            if (index !== -1) listeners.splice(index, 1)
            window.removeEventListener('appinstalled', appInstalledHandler)
        }
    }, [])

    useEffect(() => {
        if (!showInstall) return

        const duration = 5000
        const intervalTime = 10
        let elapsed = 0

        const interval = setInterval(() => {
            elapsed += intervalTime
            setProgress(100 - (elapsed / duration) * 100)
            if (elapsed >= duration) {
                clearInterval(interval)
                setShowInstall(false)
            }
        }, intervalTime)

        return () => clearInterval(interval)
    }, [showInstall])

    const handleInstallClick = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const choiceResult = await deferredPrompt.userChoice

        if (choiceResult.outcome === 'accepted') {
            report("pwa:install")
        } else {
            report("pwa:dismiss")
        }

        setDeferredPrompt(null)
        setShowInstall(false)
        savedPrompt = null
    }

    if (!showInstall) return null

    return (
        <div className="install-prompt glass-effect">
            <p>Make the page available offline?</p>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <div className="actions">
                <button className="glass-effect" onClick={handleInstallClick}>Install</button>
                <button className="glass-effect" onClick={() => setShowInstall(false)}>Close</button>
            </div>
        </div>
    )
}

export default InstallPWA

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}
