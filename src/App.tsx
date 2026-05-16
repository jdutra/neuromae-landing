import { useEffect, useState } from "react";
import Holding from "./Holding";
import Landing from "./Landing";

/**
 * Router minimalista — sem dependência externa.
 *
 * Decisão de arquitetura (acordada com a Tatiana):
 *   /        → Holding page pública (pré-lançamento, indexável)
 *   /beta    → Landing oficial completa, restrita a testers e marcada como
 *              noindex,nofollow pra não aparecer em busca antes do lançamento.
 *
 * O Vercel (preset Vite) já faz fallback de qualquer rota pro index.html,
 * mas adicionamos vercel.json explícito pra garantir que /beta funcione
 * em deeplink direto. O switch é só no client.
 */

function getRoute(pathname: string): "holding" | "landing" {
  // /beta, /beta/, /beta/qualquer-coisa → landing
  if (pathname === "/beta" || pathname.startsWith("/beta/")) return "landing";
  return "holding";
}

/**
 * Injeta/atualiza um meta tag por name. Idempotente: chama ensureMeta
 * em qualquer mudança de rota e o head fica consistente.
 */
function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function App() {
  const [route, setRoute] = useState<"holding" | "landing">(() =>
    typeof window !== "undefined" ? getRoute(window.location.pathname) : "holding"
  );

  // Reage a back/forward do navegador (popstate). Não usamos pushState próprio
  // porque os links nesta fase são âncoras tradicionais (#) e externos (WhatsApp).
  useEffect(() => {
    const onPop = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Aplica meta tags por rota.
  // - /beta: noindex,nofollow (a landing oficial NÃO deve aparecer no Google
  //   antes do lançamento; ela existe para testers que recebem o link direto)
  // - /:    index,follow (a holding é a única página pública indexável)
  useEffect(() => {
    if (route === "landing") {
      setMeta("robots", "noindex,nofollow");
      // Em /beta mantemos o title original da landing (definido no index.html)
      // para não confundir testers que conhecem o produto.
    } else {
      setMeta("robots", "index,follow");
    }
  }, [route]);

  return route === "landing" ? <Landing /> : <Holding />;
}
