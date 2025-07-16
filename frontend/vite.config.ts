import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(() => ({
    server: {
        port: 3000,
        proxy: {
            '/sa': {
                target: 'http://localhost:3030/',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/sa/, ''),
            }
        }
    },
    plugins: [
        react(),
        basicSsl(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['bg.webp'],
            manifest: {
                name: 'Mystic Forest',
                short_name: 'Mystic Forest',
                start_url: '/',
                id: 'de.anki.mystic-forest',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icon.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ],
                screenshots: [

                    {
                        "src": "11__iPad_Pro_M4_landscape.png",
                        "type": "image/png",
                        "sizes": "2420x1668",
                    },
                    {
                        "src": "iPhone_16_Pro_portrait.png",
                        "type": "image/png",
                        "sizes": "1206x2622",
                        form_factor: "wide"
                    }
                ]
            },
        })
    ],
}))
