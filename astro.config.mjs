import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: "static",
  site: "https://briannorris.io",
  adapter: netlify(),
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'subtle-madeleine-75437a.netlify.app',
      },
    ],
  },
});
