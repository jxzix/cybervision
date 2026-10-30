import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

// Inserta en index.html el HTML de la portada (prerender/home.html) para que se vea antes de que cargue el JS.
const inyectarPrerender = () => ({
  name: 'inyectar-prerender',
  transformIndexHtml(html: string) {
    const file = path.resolve(__dirname, 'prerender/home.html');
    const contenido = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    return html.replace('<!--PRERENDER-->', contenido);
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), inyectarPrerender()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) return 'react-vendor';
            if (id.includes('motion')) return 'motion';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor';
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
