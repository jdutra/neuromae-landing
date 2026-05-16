import { LegalLinks, CONTACT_EMAIL } from "./LegalLinks";
import { RiskDisclaimer } from "./RiskDisclaimer";

const CNPJ_PLACEHOLDER = "CNPJ — a divulgar após abertura da empresa";

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
        <div className="flex flex-col items-center gap-7 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Marca + tagline */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3.5">
              <img
                src="/neuromae-logo.svg"
                alt=""
                aria-hidden="true"
                width={52}
                height={52}
                className="h-auto w-[52px] flex-none"
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
                GABA
              </span>
            </div>
            <span
              className="text-[12px]"
              style={{
                color: "#9A8C7E",
                letterSpacing: "0.06em",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              da NeuroMãe — ciência, acolhimento e transformação
            </span>
          </div>

          {/* Links legais + sociais */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <LegalLinks variant="dark" />

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
                    title: "GABA — assistente virtual no WhatsApp da NeuroMãe",
                    text: "Conheça a GABA: assistente virtual baseada em IA pra mães atípicas, no WhatsApp.",
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

        {/* Aviso de IA + risco — bloco dedicado */}
        <div
          className="mt-8 pt-6"
          style={{ borderTop: "1px solid rgba(255,248,241,0.08)" }}
        >
          <div className="mx-auto flex flex-col gap-3 text-center" style={{ maxWidth: "680px" }}>
            <p
              className="text-[12.5px]"
              style={{
                lineHeight: 1.6,
                letterSpacing: "0.01em",
                color: "#C9B7A6",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              A GABA é uma inteligência artificial e não substitui profissionais de saúde
              ou serviços de emergência.
            </p>

            <RiskDisclaimer variant="footer" />
          </div>
        </div>

        {/* Linha final: contato, CNPJ placeholder, copyright */}
        <div className="mt-7 flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <a
              href="https://instagram.com/neuromaeia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NeuroMãe"
              className="flex items-center gap-2.5 transition hover:opacity-90"
            >
              <img
                src="/neuromae-icon.svg"
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                className="h-auto w-[28px] flex-none"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,.20))" }}
              />
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "#F3ECE3",
                  letterSpacing: "-0.005em",
                }}
              >
                NeuroMãe
              </span>
            </a>
            <span
              className="text-[11px]"
              style={{ color: "#9A8C7E", letterSpacing: "0.01em" }}
            >
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline decoration-current/30 underline-offset-2 hover:decoration-current"
                style={{ color: "#9A8C7E" }}
              >
                {CONTACT_EMAIL}
              </a>
            </span>
            <span
              className="text-[10.5px]"
              style={{
                color: "#7C6F62",
                letterSpacing: "0.05em",
                fontStyle: "italic",
              }}
            >
              {CNPJ_PLACEHOLDER}
            </span>
          </div>

          <span
            className="text-[11px]"
            style={{ letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A8C7E" }}
          >
            © {new Date().getFullYear()} NeuroMãe
          </span>
        </div>
      </div>
    </footer>
  );
}
