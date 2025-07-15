import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {report} from "./shared/Analytics/analytics.ts";


if (import.meta.env.DEV) {
    const script = document.createElement('script');
    script.src = 'https://analytics.zwisler.dev/sa.js';
    script.setAttribute('website', 'ae83f87f-cc87-48c0-bb27-a1b1a62b358b');
    document.head.appendChild(script);
}

if (import.meta.env.PROD) {
    const script = document.createElement('script');
    script.src = 'https://analytics.zwisler.dev/sa.js';
    script.setAttribute('website', '3288043a-70b6-4b40-b10c-2ce538de89d4');
    document.head.appendChild(script);
}

window.addEventListener('error', function (e) {
    report('error:' + (e.message || 'unknown'));
});


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
