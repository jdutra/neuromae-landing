import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Plugin custom: serve páginas HTML estáticas de `public/<slug>/index.html`
 * quando o usuário acessa `http://localhost:5173/<slug>/`.
 *
 * Por padrão o Vite dev server faz SPA fallback (qualquer rota desconhecida
 * é reescrita pra /index.html da landing). Isso quebra os links pras páginas
 * legais (/termos-de-uso/, /politica-de-privacidade/) durante o dev.
 *
 * Em produção (Vercel) isso funciona nativamente — esse middleware é só pro dev.
 */
function staticHtmlFallback() {
  return {
    name: "static-html-fallback",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, _res, next) => {
        if (!req.url || req.method !== "GET") return next();
        const cleanUrl = req.url.split("?")[0].split("#")[0];

        if (cleanUrl.endsWith("/") && cleanUrl !== "/") {
          const indexPath = resolve(process.cwd(), "public" + cleanUrl + "index.html");
          if (existsSync(indexPath)) {
            req.url = cleanUrl + "index.html";
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), staticHtmlFallback()],
  define: {
    // Remotion needs this
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
