import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: "static",
  site: "https://briannorris.io",
  adapter: netlify(),
  vite: {
    optimizeDeps: {
      // Keep grammar `import(\`./grammars/${lang}.js\`)` as real ESM so
      // MicroLighter can load languages on demand.
      exclude: ["microlighter"],
    },
    build: {
      dynamicImportVarsOptions: {
        // Emit on-demand grammar chunks instead of a raw template import
        // that 404s from `/_astro/grammars/` after the client bundle.
        exclude: [/node_modules\/(?!microlighter)/],
      },
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'subtle-madeleine-75437a.netlify.app',
      },
    ],
  },
});
