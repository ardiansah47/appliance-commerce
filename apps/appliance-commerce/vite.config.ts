import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/appliance-commerce',
  root: 'apps/appliance-commerce',
  plugins: [
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/appliance-commerce/client',
      },
      ssr: {
        outDir: '../../dist/apps/appliance-commerce/server',
      },
      tsconfigFileNames: ['tsconfig.app.json'],
    }),
    tsconfigPaths({ root: '../../' }),
  ],
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
