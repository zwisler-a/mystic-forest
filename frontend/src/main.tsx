import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {report} from "./shared/Analytics/analytics.ts";
import {registerSW} from "virtual:pwa-register";


if (import.meta.env.DEV) {
    const script = document.createElement('script');
    script.src = '/sa/sa.js';
    script.setAttribute('website', 'e66d5d3c-185a-4fac-9059-a7217da7389a');
    document.head.appendChild(script);
}

if (import.meta.env.PROD) {
    const script = document.createElement('script');
    script.src = '/sa/sa.js';
    script.setAttribute('website', '780a2046-0368-4aac-95fa-3283c3c43917');
    document.head.appendChild(script);
}

window.addEventListener('error', function (e) {
    report('error:' + (e.message || 'unknown'));
});


const updateSW = registerSW({
    onNeedRefresh() {
        updateSW(true);
    }
});


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
