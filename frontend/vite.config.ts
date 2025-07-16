import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig(() => ({
    server: {
        port: 3000,
        https: true,
        host: "0.0.0.0",
        proxy: {
            '/sa': {
                target: 'https://analytics.zwisler.dev/',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/sa/, ''),
            }
        }
    },
    plugins: [
        react(),
        basicSsl(),
        VitePWA({
            // add this to cache all the imports
            workbox: {
                globPatterns: ["**/*"],
                globIgnores: ['**/screenshot/**', '**/unused/**']
            },
            // add this to cache all the
            // static assets in the public folder
            includeAssets: [
                "*.webp",
                "*.jpg",
                "posts/**",
                "sitemap/**"
            ],
            registerType: 'autoUpdate',
            manifest: {
                name: 'Mystic Forest',
                short_name: 'Mystic Forest',
                start_url: '/',
                id: 'de.anki.mystic-forest',
                display: 'standalone',
                background_color: '#2F4F3E',
                theme_color: '#6C8A69',
                icons: [
                    {
                        "purpose": "maskable",
                        "sizes": "512x512",
                        "src": "/icons/maskable_icon.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "48x48",
                        "src": "/icons/maskable_icon_x48.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "72x72",
                        "src": "/icons/maskable_icon_x72.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "96x96",
                        "src": "/icons/maskable_icon_x96.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "128x128",
                        "src": "/icons/maskable_icon_x128.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "192x192",
                        "src": "/icons/maskable_icon_x192.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "384x384",
                        "src": "/icons/maskable_icon_x384.png",
                        "type": "image/png"
                    },
                    {
                        "purpose": "maskable",
                        "sizes": "512x512",
                        "src": "/icons/maskable_icon_x512.png",
                        "type": "image/png"
                    }
                ],
                screenshots: [
                    {
                        "src": "/screenshot/navigation.png",
                        "type": "image/png",
                        "sizes": "1290x2796",
                    },
                    {
                        "src": "/screenshot/news.png",
                        "type": "image/png",
                        "sizes": "1290x2796",
                    },
                    {
                        "src": "/screenshot/siteplan.png",
                        "type": "image/png",
                        "sizes": "1290x2796",
                    },
                    {
                        "src": "/screenshot/navigation_wide.png",
                        "type": "image/png",
                        "sizes": "2736x1824",
                        form_factor: "wide"
                    }
                ]
            },
        })
    ],
}))
