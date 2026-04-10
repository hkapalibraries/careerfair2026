import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. 引入插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. 加入插件
  ],
  base: '/careerfair2026/' // 請填入您未來在 GitHub 上要建立的專案名稱
})