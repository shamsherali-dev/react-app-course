import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // REPLACE 'your-repo-name' with your exact GitHub repository name
  base: '/react-app-course/', 
})