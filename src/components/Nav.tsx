import { WhatsAppCTA } from "./WhatsAppCTA";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-brown/10 backdrop-blur-md"
      style={{ background: "rgba(243,236,227,0.86)" }}
    >
      <div className="wrap flex items-center justify-between gap-5" style={{ height: "76px" }}>
        <a href="#top" aria-label="GABA da NeuroMãe" className="flex min-w-0 items-center gap-3">
          <img
            src="/neuromae-logo.svg"
            alt=""
            aria-hidden="true"
            width={56}
            height={56}
            className="h-auto w-[56px] flex-none"
            style={{ filter: "drop-shadow(0 4px 10px rgba(70,55,44,.10))" }}
          />
          <span className="flex flex-col justify-center gap-1 leading-none">
            <span
              className="text-brown"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "26px",
                lineHeight: 1,
                letterSpacing: "0.22em",
              }}
            >
              GABA
            </span>
            <span
              className="hidden text-muted whitespace-nowrap md:block"
              style={{ fontSize: "10px", letterSpacing: "0.01em", marginLeft: "2px" }}
            >
              da{" "}
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  color: "#77675B",
                  letterSpacing: "-0.005em",
                }}
              >
                NeuroMãe
              </span>
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-[13px] font-semibold text-muted md:flex">
          <a href="#produto"   className="opacity-80 transition hover:text-brown hover:opacity-100">O que é</a>
          <a href="#funciona"  className="opacity-80 transition hover:text-brown hover:opacity-100">Como funciona</a>
          <a href="#fundadora" className="opacity-80 transition hover:text-brown hover:opacity-100">Quem somos</a>
          <a href="#pricing"   className="opacity-80 transition hover:text-brown hover:opacity-100">Plano</a>
          <a href="#faq"       className="opacity-80 transition hover:text-brown hover:opacity-100">Dúvidas</a>
        </div>

        <WhatsAppCTA
          channel="nav_cta"
          variant="ghost"
          className="hidden items-center justify-center rounded-full border border-olive/20 bg-olive/10 px-4 py-2.5 text-[13px] font-bold text-olive-2 md:inline-flex"
        >
          Experimentar gratuitamente
        </WhatsAppCTA>
      </div>
    </nav>
  );
}
