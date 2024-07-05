import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import axios from "axios"



// https://vitejs.dev/config/
export default defineConfig({
  // base: '/',
  base: '/vueapp/',
  server: {
    host: true,
    port: 8000
  },
  plugins: [
      vue(),
      /*, Components({dts: true,})*/
  ],
  devServer: {
    // proxy: `${import.meta.env.VITE_API_HOST}`,
    proxy: `http://symapi.localhost/`,
    // proxy: `http://localhost:8000`,
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
