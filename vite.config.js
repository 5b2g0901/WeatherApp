import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/WeatherApp/", // 🌟 就是這行！它能解決 GitHub Pages 畫面空白的問題
  plugins: [react()],
})