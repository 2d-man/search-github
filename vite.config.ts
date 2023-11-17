import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

// @ts-expect-error - no types for this plugin
import eslintPlugin from 'vite-plugin-eslint'
import certPlugin from 'vite-plugin-mkcert'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vuePlugin(),
    eslintPlugin({
      include: ['src/**/*.{ts,tsx,js,jsx,vue}'],
    }),
    certPlugin(),
    svgLoader(),
  ],
  server: {
    https: true,
    proxy: {
      '/mockApi': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
