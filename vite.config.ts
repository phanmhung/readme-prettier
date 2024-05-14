import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: [
      { find: 'pages', replacement: '/src/pages' },
      { find: 'app', replacement: '/src/app' },
      { find: 'entities', replacement: '/src/entities' },
      { find: 'features', replacement: '/src/features' },
      { find: 'processes', replacement: '/src/processes' },
      { find: 'shared', replacement: '/src/shared' },
      { find: 'widgets', replacement: '/src/widgets' },
    ],
  }
});
