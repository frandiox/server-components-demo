import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import rsc from 'react-server-dom-vite/plugin';

export default defineConfig({
  plugins: [rsc(), react()],
  optimizeDeps: {
    include: ['react', 'react-error-boundary', 'marked', 'sanitize-html'],
  },
});
