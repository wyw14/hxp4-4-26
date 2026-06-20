import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 5126,
    strictPort: true,
    open: true
  }
});