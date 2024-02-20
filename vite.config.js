import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
    // config options
    server: {
        port: 3000,
        proxy: {
            '/youtubei': {
                target: 'https://www.youtube.com',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/youtubei/, '/youtubei')
            }
        }
    }
})
