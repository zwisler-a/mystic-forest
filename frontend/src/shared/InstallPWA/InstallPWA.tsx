import './InstallPWA.css'
import {useEffect, useState} from 'react'
import {report} from "../Analytics/analytics.ts"
import {useTranslation} from "react-i18next";
import {NavigateFunction, useNavigate} from "react-router";
import {BeforeInstallPromptEvent, useBeforeInstallPrompt} from "./useBeforeInstallPrompt.ts";


const isIOS = () => {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
};

const isInStandaloneMode = () =>
    ('standalone' in window.navigator) && (window.navigator['standalone']);


const promptForInstall = async (prompt: BeforeInstallPromptEvent | null, navigate: NavigateFunction) => {
    if (isIOS()) {
        navigate('pwa-ios');
        return;
    }
    if (!prompt) return

    await prompt.prompt()
    const choiceResult = await prompt.userChoice

    if (choiceResult.outcome === 'accepted') {
        report("pwa:install")
    } else {
        report("pwa:dismiss")
    }
}

export const ManualInstallButton = () => {
    const [t] = useTranslation();
    const navigate = useNavigate();
    const prompt = useBeforeInstallPrompt();

    if (isInStandaloneMode() || (!prompt && !isIOS())) return;
    return <button onClick={() => promptForInstall(prompt, navigate)}>{t("pwa.install")}</button>
}

const InstallPWA = () => {
    const [showInstall, setShowInstall] = useState(false);
    const prompt = useBeforeInstallPrompt();
    const [progress, setProgress] = useState(100);
    const [t] = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("install_prompt_shown") == "true" || isInStandaloneMode() || !prompt) return;

        setTimeout(() => {
            localStorage.setItem("install_prompt_shown", "true");
            setShowInstall(true)
            setProgress(100)
        }, 5000)

        const appInstalledHandler = () => {
            setShowInstall(false)
        }

        window.addEventListener('appinstalled', appInstalledHandler)

        return () => {
            window.removeEventListener('appinstalled', appInstalledHandler)
        }
    }, [prompt])

    useEffect(() => {
        if (!showInstall) return

        const duration = 10000
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
        if (!prompt) return;
        await promptForInstall(prompt, navigate);

        setShowInstall(false)
    }

    if (!showInstall) return null

    return (
        <div className="install-prompt glass-effect">
            <p>{t("pwa.install-request")}</p>
            <div className="progress-bar" style={{width: `${progress}%`}}/>
            <div className="actions">
                <button onClick={handleInstallClick}>{t("pwa.accept")}</button>
                <button onClick={() => setShowInstall(false)}>{t("pwa.decline")}</button>
            </div>
        </div>
    )
}

export default InstallPWA
