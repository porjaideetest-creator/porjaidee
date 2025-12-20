import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Default base is '/' for Vercel
// For GitHub Pages, use: npm run build:gh-pages (which uses --base=/porjaidee/)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
