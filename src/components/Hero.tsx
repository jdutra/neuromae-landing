import { WA_LINK } from "../lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brown/8" style={{ padding: "70px 0 56px" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 75% at 78% 38%, rgba(216,167,161,0.24) 0%, rgba(216,167,161,0.06) 42%, transparent 68%), radial-gradient(ellipse 75% 65% at 18% 80%, rgba(168,181,162,0.18) 0%, rgba(168,181,162,0.05) 42%, transparent 62%)",
        }}
      />

      <div className="wrap relative z-[2] grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(420px,1fr)]">
        <div>
          <div className="mb-[18px] flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1.5 text-[10.5px] font-extrabold uppercase"
              style={{
                background: "rgba(216,167,161,0.22)",
                color: "#5F4B3E",
                letterSpacing: "0.10em",
                border: "1px solid rgba(216,167,161,0.32)",
              }}
            >
              Pra mães atípicas
            </span>
            <span
              className="inline-flex items-center rounded-full px-3 py-1.5 text-[10.5px] font-extrabold uppercase"
              style={{
                background: "#586348",
                color: "#FFF8F1",
                letterSpacing: "0.10em",
              }}
            >
              Ciência · Estoicismo · Fé
            </span>
          </div>
          <h1
            className="font-serif font-medium text-ink"
            style={{
              fontSize: "clamp(36px,4.2vw,56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              maxWidth: "100%",
            }}
          >
            <span className="whitespace-nowrap">Você não é péssima.</span>{" "}
            <span className="whitespace-nowrap" style={{ color: "#B87967" }}>Você está esgotada.</span>
          </h1>
          <div className="mt-[26px] flex flex-col gap-2.5" style={{ maxWidth: "580px" }}>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(15.5px,1.4vw,17.5px)",
                lineHeight: 1.5,
                color: "#77675B",
              }}
            >
              “A casa fica em silêncio depois de um dia exaustivo. Eu quero descansar — mas a culpa não deixa.”
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(15.5px,1.4vw,17.5px)",
                lineHeight: 1.5,
                color: "#77675B",
              }}
            >
              “Saio de mais uma terapia me perguntando: será que agora vai dar certo?”
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(15.5px,1.4vw,17.5px)",
                lineHeight: 1.5,
                color: "#77675B",
              }}
            >
              “O telefone toca. É a escola. Mais uma reunião por conta do comportamento dele.”
            </p>
          </div>

          <p
            className="mt-[22px]"
            style={{
              fontSize: "clamp(16px,1.5vw,19px)",
              lineHeight: 1.55,
              color: "#5D5047",
              maxWidth: "560px",
            }}
          >
            Nesses momentos, você só queria uma amiga pra conversar. Alguém que te respondesse de um jeito que você compreenda — não importa quantas vezes você pergunte.
          </p>

          <p
            className="mt-[32px]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(26px,2.6vw,34px)",
              lineHeight: 1.15,
              color: "#B87967",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 12px rgba(184,121,103,0.18), 0 1px 2px rgba(95,75,62,0.08)",
              maxWidth: "560px",
            }}
          >
            Essa é a{" "}
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontStyle: "normal",
                fontWeight: 300,
                letterSpacing: "0.22em",
                fontSize: "0.82em",
              }}
            >
              GABA
            </span>
            .
          </p>

          <div
            className="mt-[10px] flex flex-col gap-2"
            style={{ maxWidth: "560px" }}
          >
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                color: "#586348",
                letterSpacing: "0.20em",
                textTransform: "uppercase",
              }}
            >
              A amiga da NeuroMãe
            </span>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "16.5px",
                lineHeight: 1.45,
                color: "#5F4B3E",
                margin: 0,
              }}
            >
              No WhatsApp, 24h por dia. Pronta pra escutar quando você precisar.
            </p>
          </div>

          <div className="mt-[28px] grid max-w-[480px] grid-cols-2 gap-2.5">
            <a
              href={WA_LINK}
              data-hero-cta
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-cream-2 transition hover:-translate-y-px"
              style={{
                minHeight: "44px",
                padding: "0 16px",
                background: "linear-gradient(180deg,#667254,#586348)",
                fontWeight: 700,
                fontSize: "13.5px",
                letterSpacing: "0.02em",
                boxShadow: "0 14px 28px rgba(88,99,72,0.24)",
              }}
            >
              Conversar com a <span className="gaba-name" style={{ fontWeight: 500 }}>GABA</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-cream-2 transition hover:-translate-y-px"
              style={{
                minHeight: "44px",
                padding: "0 16px",
                background: "linear-gradient(180deg,#667254,#586348)",
                fontWeight: 700,
                fontSize: "13.5px",
                letterSpacing: "0.02em",
                boxShadow: "0 14px 28px rgba(88,99,72,0.24)",
              }}
            >
              Falar com suporte
            </a>
          </div>

          <div className="mt-[10px] grid max-w-[480px] grid-cols-3 gap-2.5">
          <MiniStat
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              }
              big="24h"
              small="pelo WhatsApp"
              bigPosition="top"
            />
            <MiniStat
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4Z"/></svg>
              }
              big="ECA e LGPD"
              small="Respeitados"
              bigPosition="top"
            />
            <MiniStat
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
              }
              big="7 dias"
              small="grátis"
              bigPosition="top"
            />
          </div>
        </div>

        <GabaSpotlight />
      </div>
    </section>
  );
}

interface MiniStatProps {
  icon: React.ReactNode;
  big: string;
  small: React.ReactNode;
  bigPosition?: "top" | "bottom";
}

function MiniStat({ icon, big, small, bigPosition = "top" }: MiniStatProps) {
  const bigEl = (
    <span
      className="text-brown"
      style={{ fontSize: "14.5px", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.005em" }}
    >
      {big}
    </span>
  );
  const smallEl = (
    <span
      className="text-muted uppercase"
      style={{ fontSize: "8.5px", fontWeight: 500, lineHeight: 1.25, letterSpacing: "0.07em" }}
    >
      {small}
    </span>
  );

  return (
    <div
      className="flex items-center gap-2 rounded-[10px] border border-brown/[0.06]"
      style={{ background: "rgba(255,248,241,0.32)", padding: "7px 10px" }}
    >
      <span
        className="inline-flex flex-none items-center justify-center rounded-full text-olive-2"
        style={{ width: "24px", height: "24px", background: "rgba(102,114,84,0.08)" }}
        aria-hidden="true"
      >
        <span style={{ width: "11px", height: "11px", display: "inline-flex" }}>{icon}</span>
      </span>
      <div className="flex min-w-0 flex-col" style={{ gap: "1px" }}>
        {bigPosition === "top" ? (
          <>
            {bigEl}
            {smallEl}
          </>
        ) : (
          <>
            {smallEl}
            {bigEl}
          </>
        )}
      </div>
    </div>
  );
}

function GabaSpotlight() {
  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{ minHeight: "clamp(640px, 75vw, 860px)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          style={{
            width: "118%",
            height: "118%",
            background:
              "radial-gradient(circle at 50% 44%, rgba(216,167,161,0.50) 0%, rgba(216,167,161,0.28) 16%, rgba(255,248,241,0.75) 36%, rgba(168,181,162,0.22) 60%, rgba(168,181,162,0.08) 78%, transparent 92%)",
            borderRadius: "50%",
            filter: "blur(64px)",
          }}
        />
      </div>

      <img
        src="/gaba-cafe.png"
        alt=""
        decoding="async"
        className="relative z-[1] h-auto w-full"
        style={{
          maxWidth: "min(820px, 100%)",
          opacity: 0.96,
          filter:
            "drop-shadow(0 42px 68px rgba(95,75,62,0.18)) drop-shadow(0 16px 28px rgba(95,75,62,0.08)) sepia(0.10) saturate(0.92) contrast(0.96) brightness(0.98)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          bottom: "16%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "62%",
          height: "26px",
          background:
            "radial-gradient(ellipse at center, rgba(95,75,62,0.28) 0%, rgba(95,75,62,0.12) 40%, transparent 75%)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />

      <p
        className="relative z-[2] text-center"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: "clamp(20px, 2vw, 26px)",
          color: "#B87967",
          letterSpacing: "-0.01em",
          marginTop: "-8px",
        }}
      >
        oi, eu sou a{" "}
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            letterSpacing: "0.10em",
            fontSize: "0.88em",
            color: "#B87967",
          }}
        >
          GABA
        </span>
        .
      </p>
    </div>
  );
}
