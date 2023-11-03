import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import mkcert from 'vite-plugin-mkcert'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({
      // configuration
    }),
    mkcert(),
  ],
  server: {
    https: true,
  },
})
