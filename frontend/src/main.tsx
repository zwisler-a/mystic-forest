import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {report} from "./shared/Analytics/analytics.ts";
import {registerSW} from "virtual:pwa-register";


const script = document.createElement('script');
script.src = '/sa/sa.js';
const id = {
    "localhost": "a2c13c60-7022-4c66-b62e-a75a22abae82",
    "mystic-forest-dev.zwisler.dev": "6df903ee-367b-4fe8-ac7b-7c08336bfa35",
    "mystic-forest.de": "baf80000-b097-4937-afcb-1b271f1a7c6f"

}[window.location.hostname]
script.setAttribute('website', id ?? '');
document.head.appendChild(script);


window.addEventListener('error', function (e) {
    report('error:' + (e.message || 'unknown'));
});


const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
        setTimeout(() => {
            setTimeout(() => {
                updateSW()
            }, 1000)
            document.querySelector("main")?.classList.add('fade-out');
            document.querySelector("header")?.classList.add('fade-out');
            const div = document.createElement('div');
            div.innerHTML = `Updating ...`
            div.style.position = 'fixed';
            div.style.top = '50%';
            div.style.left = '50%';
            div.style.fontSize = '2rem';
            div.style.transform = 'translate(-50%, -50%)';
            document.body.appendChild(div);
        }, 5000)
    }
});


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
