import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // This lets other devices on your network access the dev server
    port: 5173        // Optional: customize the port
  }
})
