import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/porjaidee/', // Change this to your GitHub repo name, or '/' if deploying to username.github.io
})
