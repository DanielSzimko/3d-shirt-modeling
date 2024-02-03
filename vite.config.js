import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    // other build options...
  },
  // Set jsx option to "preserve" or "react-jsx"
  jsx: 'preserve', // or 'react-jsx'
})
