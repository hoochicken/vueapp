import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  //base: '/vueapp/',
  server: {    // <-- this object is added
    port: 8090
  },
  plugins: [vue() /*, Components({dts: true,})*/ ,],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
