import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import rsc from 'react-server-dom-vite/plugin';
import {configureViteDevServer} from './server/api.server';

export default defineConfig({
  plugins: [
    rsc(),
    react(),
    {
      name: 'custom-api-plugin',
      configureServer: configureViteDevServer,
    },
  ],
  optimizeDeps: {
    include: ['react', 'react-error-boundary', 'marked', 'sanitize-html'],
  },
});
