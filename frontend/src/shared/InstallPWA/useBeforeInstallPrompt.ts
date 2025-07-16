import { useEffect, useState } from "react";


export interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}


let savedPrompt: BeforeInstallPromptEvent | null = null;
let initialized = false;

const listeners: ((prompt: BeforeInstallPromptEvent) => void)[] = [];

if (!initialized) {
    window.addEventListener("beforeinstallprompt", (e: Event) => {
        e.preventDefault();
        savedPrompt = e as BeforeInstallPromptEvent;
        listeners.forEach((cb) => cb(savedPrompt!));
    });
    initialized = true;
}

export function useBeforeInstallPrompt(): BeforeInstallPromptEvent | null {
    const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(savedPrompt);

    useEffect(() => {
        if (savedPrompt) {
            setPrompt(savedPrompt);
            return;
        }

        const listener = (e: BeforeInstallPromptEvent) => setPrompt(e);
        listeners.push(listener);

        return () => {
            const i = listeners.indexOf(listener);
            if (i !== -1) listeners.splice(i, 1);
        };
    }, []);

    return prompt;
}