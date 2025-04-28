import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PDC/', // <-- REPLACE with your actual GitHub repo name!

})

// vite.config.js
