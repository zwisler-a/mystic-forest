import './InstallPWA.css'
import {useEffect, useState} from 'react'
import {report} from "../Analytics/analytics.ts";

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null)
    const [showInstall, setShowInstall] = useState(false)
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e)

            setTimeout(() => {
                setShowInstall(true)
                setProgress(100)
            }, 5000);
        }
        window.addEventListener('beforeinstallprompt', handler)

        window.addEventListener('appinstalled', () => {
            setShowInstall(false)
            setDeferredPrompt(null)
        })

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
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
        const promptEvent = deferredPrompt as any;
        promptEvent.prompt()
        promptEvent.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
                report("pwa:install");
            } else {
                report("pwa:dismiss");
            }
        });
        setDeferredPrompt(null)
        setShowInstall(false)
    }

    if (!showInstall) return null

    return (
        <div className={"install-prompt glass-effect"}>
            <p>Make the page available offline?</p>
            <div className={"progress-bar"} style={{width: `${progress}%`}}/>
            <div className={"actions"}>
                <button className={"glass-effect"} onClick={handleInstallClick}>Install</button>
                <button className={"glass-effect"} onClick={() => setShowInstall(false)}>Close</button>
            </div>
        </div>
    )
}

export default InstallPWA
