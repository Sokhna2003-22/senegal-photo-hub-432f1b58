// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
// Importe la fonction de configuration fournie par Lovable.
// Elle prépare déjà Vite + TanStack Start avec les réglages de Lovable.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Importe le plugin Nitro pour Vite.
// Nitro transforme ton app TanStack Start en un serveur
// adapté à l'hébergeur choisi (Vercel, Cloudflare, Netlify, Node…).
import { nitro } from "nitro/vite";

// Exporte la configuration que Vite lira au démarrage (dev) et au build.
export default defineConfig({
  // Réglages propres à TanStack Start
  tanstackStart: {
    server: {
      // "0.0.0.0" : le serveur de développement écoute sur toutes les
      // adresses réseau, pas seulement localhost (utile pour tester
      // depuis ton téléphone ou dans l'aperçu Lovable).
      host: "0.0.0.0",
      // Port du serveur de développement : http://localhost:8080
      port: 8080,
    },
  },

  // Réglages Vite supplémentaires, ajoutés à ceux de Lovable
  vite: {
    plugins: [
      // C'est la ligne qui corrige le 404 :
      // preset "vercel" = Nitro produit le build au format que Vercel
      // sait exécuter (dossier .vercel/output avec les fonctions serveur).
      // Sans ça, Lovable compile pour Cloudflare Workers et Vercel
      // ne trouve aucune page à servir.
      nitro({ preset: "vercel" }),
    ],
  },
});
