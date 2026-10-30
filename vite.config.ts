import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
  },

  // Pass nitro config directly to Lovable's defineConfig so it uses
  // the built-in nitro plugin with the correct preset and externals.
  nitro: {
    preset: "vercel",
    externals: {
      inline: ["tslib"],
    },
  },
});
