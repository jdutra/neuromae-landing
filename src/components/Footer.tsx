import { WA_LINK } from "../lib/links";

export function Footer() {
  return (
    <footer
      style={{
        background: "#40352E",
        padding: "44px 0 110px",
        borderTop: "1px solid rgba(255,248,241,0.06)",
      }}
    >
      <div className="wrap">
        <div className="flex flex-col items-center gap-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex items-center gap-3.5">
            <img
              src="/gabaia-symbol-detailed.svg"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="h-auto w-[40px] flex-none"
              style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,.20))" }}
            />
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "24px",
                lineHeight: 1,
                letterSpacing: "0.22em",
                color: "#F3ECE3",
              }}
            >
              GABAIA
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <nav
              aria-label="Links do rodapé"
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-semibold"
              style={{ color: "#C9B7A6" }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 transition hover:opacity-100"
                style={{ color: "#C9B7A6" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF8F1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C9B7A6")}
              >
                Contato
              </a>
              <span style={{ color: "#9A8C7E", opacity: 0.7 }}>Privacidade · em breve</span>
              <span style={{ color: "#9A8C7E", opacity: 0.7 }}>LGPD · em breve</span>
            </nav>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com/neuromaeia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="@neuromaeia no Instagram"
                title="@neuromaeia no Instagram"
                className="inline-flex items-center justify-center opacity-90 transition hover:opacity-100"
                style={{ color: "#C9B7A6" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF8F1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C9B7A6")}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <button
                type="button"
                aria-label="Compartilhar esta página"
                title="Compartilhar esta página"
                onClick={() => {
                  const shareData = {
                    title: "GABAIA — A amiga da NeuroMãe",
                    text: "Conheça a GABAIA: a assistente neuropsicoeducativa pra mães atípicas, no WhatsApp.",
                    url: typeof window !== "undefined" ? window.location.href : "",
                  };
                  if (typeof navigator !== "undefined" && navigator.share) {
                    navigator.share(shareData).catch(() => {});
                  } else if (typeof navigator !== "undefined" && navigator.clipboard) {
                    navigator.clipboard.writeText(shareData.url);
                  }
                }}
                className="inline-flex items-center justify-center opacity-90 transition hover:opacity-100"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "#C9B7A6" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF8F1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C9B7A6")}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center"
          style={{ maxWidth: "680px", marginInline: "auto", borderTop: "1px solid rgba(255,248,241,0.08)" }}
        >
          <p
            className="text-[12px]"
            style={{ lineHeight: 1.6, letterSpacing: "0.01em", color: "#9A8C7E" }}
          >
            A GABAIA é uma inteligência artificial. Ela apoia você no dia a dia, mas não substitui acompanhamento médico, psicológico ou terapêutico. Em situações de risco, procure um profissional de saúde ou ligue para o CVV (188).
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
          <a
            href="https://instagram.com/neuromaeia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NeuroMãe"
            className="flex items-center gap-2.5 transition hover:opacity-90"
          >
            <img
              src="/neuromae-symbol.svg"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className="h-auto w-[32px] flex-none"
              style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,.20))" }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#F3ECE3",
                letterSpacing: "-0.005em",
              }}
            >
              NeuroMãe
            </span>
          </a>
          <span
            style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8C7E" }}
          >
            © {new Date().getFullYear()} · ciência, acolhimento e transformação
          </span>
        </div>
      </div>
    </footer>
  );
}
