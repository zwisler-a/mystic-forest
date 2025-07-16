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
        updateSW(true);
    }
});


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
