import { WhatsAppCTA } from "./WhatsAppCTA";
import { RiskDisclaimer } from "./RiskDisclaimer";

export function Pricing() {
  const includes = [
    "Conversa ilimitada no WhatsApp",
    "Texto, áudio e foto de documentos",
    "Disponível 24h, todos os dias",
    "Memória de contexto entre conversas",
    "Cancelamento por mensagem · 1 minuto",
  ];

  return (
    <section id="pricing" className="border-b border-brown/8" style={{ padding: "64px 0" }}>
      <div className="wrap">
        <div className="mx-auto mb-[28px] max-w-[760px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Plano
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Os primeiros sete dias são por minha conta.
          </h2>
          <div className="mt-7" style={{ maxWidth: "560px", marginInline: "auto" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li
                className="flex items-center justify-between gap-4 border-b"
                style={{
                  borderColor: "rgba(95,75,62,0.10)",
                  paddingBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    color: "#5F4B3E",
                    fontSize: "14.5px",
                    lineHeight: 1.4,
                  }}
                >
                  Uma consulta de neurodesenvolvimento
                </span>
                <span
                  className="flex-none text-muted"
                  style={{ fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap" }}
                >
                  a partir de R$250
                </span>
              </li>

              <li
                className="flex items-center justify-between gap-4 border-b"
                style={{
                  borderColor: "rgba(95,75,62,0.10)",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    color: "#5F4B3E",
                    fontSize: "14.5px",
                    lineHeight: 1.4,
                  }}
                >
                  Um curso de parentalidade neuro
                </span>
                <span
                  className="flex-none text-muted"
                  style={{ fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap" }}
                >
                  a partir de R$800
                </span>
              </li>

              <li
                className="flex items-center justify-between gap-4"
                style={{ paddingTop: "14px" }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    color: "#5F4B3E",
                    fontSize: "14.5px",
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  A{" "}
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontStyle: "normal",
                      fontWeight: 300,
                      letterSpacing: "0.22em",
                      fontSize: "0.92em",
                      color: "#5F4B3E",
                    }}
                  >
                    GABA
                  </span>{" "}
                  — todos os dias, 24h
                </span>
                <span
                  className="flex-none"
                  style={{
                    color: "#A86E60",
                    fontSize: "14px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                  }}
                >
                  R$39,90 / mês
                </span>
              </li>
            </ul>

            <p
              className="mt-7 text-center"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "14px",
                lineHeight: 1.55,
                color: "#77675B",
                maxWidth: "480px",
                marginInline: "auto",
              }}
            >
              A GABA não substitui acompanhamento profissional. Ela funciona como apoio organizacional e informacional no dia a dia.
            </p>
          </div>
        </div>

        <div
          className="mx-auto rounded-[34px] border border-brown/10 p-7 text-center md:p-9"
          style={{
            maxWidth: "560px",
            background: "rgba(255,248,241,0.72)",
            boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
          }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-olive/20 bg-olive/10 px-3 py-1.5 text-[12px] font-extrabold uppercase text-olive-2"
            style={{ letterSpacing: "0.10em" }}
          >
            Beta gratuito · 7 dias
          </span>

          <div className="mt-5 flex items-baseline justify-center gap-1 font-serif text-brown">
            <span style={{ fontSize: "24px" }}>R$</span>
            <span style={{ fontSize: "72px", lineHeight: 1, letterSpacing: "-0.04em" }}>39</span>
            <span style={{ fontSize: "32px", lineHeight: 1 }}>,90</span>
            <span className="ml-1 text-[15px] text-muted">/mês</span>
          </div>
          <p className="mt-1 text-[13px] text-muted">Cobrado mensalmente. Sem fidelidade.</p>

          <ul className="mx-auto mt-7 flex max-w-[420px] flex-col gap-2.5 text-left text-[15px] text-muted">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[5px] inline-block flex-none rounded-full bg-olive/15 text-olive-2"
                  style={{ width: "16px", height: "16px", lineHeight: "16px", textAlign: "center", fontSize: "10px", fontWeight: 800 }}
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <WhatsAppCTA
            channel="pricing_cta"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 font-extrabold text-cream-2 transition hover:-translate-y-px"
            style={{
              minHeight: "54px",
              letterSpacing: "-0.01em",
              boxShadow: "0 16px 34px rgba(88,99,72,0.21)",
            }}
          >
            Experimentar gratuitamente <span aria-hidden="true">→</span>
          </WhatsAppCTA>

          <p className="mt-4 text-[13px] text-muted" style={{ maxWidth: "420px", marginInline: "auto" }}>
            Sem cartão · você só paga depois dos 7 dias se decidir continuar.
          </p>

          <div className="mt-5" style={{ maxWidth: "420px", marginInline: "auto" }}>
            <RiskDisclaimer />
          </div>

          <div
            className="mx-auto mt-7 flex flex-col items-center gap-4 rounded-[24px] border p-6 md:flex-row md:gap-6 md:text-left"
            style={{
              maxWidth: "480px",
              background: "rgba(216,167,161,0.10)",
              borderColor: "rgba(184,121,103,0.20)",
            }}
          >
            <div
              aria-hidden="true"
              className="relative flex flex-none items-center justify-center rounded-full"
              style={{
                width: "92px",
                height: "92px",
                background: "rgba(216,167,161,0.20)",
                border: "2px dashed rgba(184,121,103,0.32)",
                color: "#A86E60",
              }}
            >
              <div className="flex flex-col items-center leading-none">
                <span
                  className="font-serif font-medium"
                  style={{ fontSize: "32px", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  7
                </span>
                <span className="mt-0.5 text-[10px] font-extrabold uppercase" style={{ letterSpacing: "0.18em" }}>
                  dias
                </span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[14px] font-bold text-brown" style={{ lineHeight: 1.4 }}>
                Cancele em 1 minuto, por mensagem.
              </p>
              <p className="mt-1.5 text-[13px] text-muted" style={{ lineHeight: 1.5 }}>
                Sem retenção, sem burocracia, sem ligação. Você manda <strong>“cancelar”</strong> no WhatsApp e pronto.
              </p>
            </div>
          </div>

          <p className="mt-4 text-[12px] text-soft">
            Plano anual com benefícios extras chegando em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
