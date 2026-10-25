
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Proxy API requests to the Kubernetes backend Service
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://backend:5000',
        changeOrigin: true,
      },
    },
  },
})
