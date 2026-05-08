import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base works both on localhost and GitHub Pages subpaths
  base: './',
  plugins: [react()],
})
