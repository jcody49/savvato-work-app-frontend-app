import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
const localhost = 'http://localhost:3003'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/steps': {
        target: localhost,
        changeOrigin: true
      },
      '/public/signup': {
        target: localhost,
        changeOrigin: true
      },
      '/public/login': {
        target: localhost,
        changeOrigin: true
      }
    }
  },
})
