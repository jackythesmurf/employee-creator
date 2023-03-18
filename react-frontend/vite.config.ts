import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
/// <reference types="vitest" />
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    watch:{
      usePolling:true
    },
    host: true,
    strictPort:true,
    port:5173,
  },
  test:{
    environment: "jsdom",
    setupFiles: "./tests/setup.js"
  }

})
