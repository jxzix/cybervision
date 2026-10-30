import {mergeConfig, defineConfig} from 'vite';
import base from './vite.config';

// Config temporal de despliegue: agrega un sufijo a los nombres de archivo para que
// nunca coincidan con URLs que ya hayan quedado en caché con una respuesta errónea.
export default defineConfig((env) =>
  mergeConfig(typeof base === 'function' ? base(env) : base, {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash]-r6.js',
          chunkFileNames: 'assets/[name]-[hash]-r6.js',
          assetFileNames: 'assets/[name]-[hash]-r6[extname]',
        },
      },
    },
  }),
);
