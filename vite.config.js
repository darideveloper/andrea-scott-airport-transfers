import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/andrea-scott-airport-transfers/',
  build: {
    emptyOutDir: false,
  },
})
