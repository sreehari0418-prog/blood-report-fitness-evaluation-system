import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        base: mode === 'production' ? '/blood-report-fitness-evaluation-system/' : '/',
        plugins: [
            react(),
            VitePWA({
                registerType: 'autoUpdate',
                includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
                manifest: {
                    name: 'Blood Report & Fitness',
                    short_name: 'BloodFit',
                    description: 'Analyze blood reports and track fitness',
                    theme_color: '#ffffff',
                    icons: [
                        {
                            src: 'pwa-192x192.png',
                            sizes: '192x192',
                            type: 'image/png'
                        },
                        {
                            src: 'pwa-512x512.png',
                            sizes: '512x512',
                            type: 'image/png'
                        }
                    ]
                },
                workbox: {
                    maximumFileSizeToCacheInBytes: 30 * 1024 * 1024, // 30MB
                    globPatterns: ['**/*.{js,css,html,ico,png,svg,wasm}']
                }
            })
        ],
    };
})
