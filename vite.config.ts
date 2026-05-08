import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/practice-12-web-accessibility/',
  plugins: [react()],
})
