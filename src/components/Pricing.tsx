import { WA_LINK } from "../lib/links";

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
            Comece por 7 dias. Continue só se fizer sentido.
          </h2>
          <p className="mt-[12px] text-[17px] text-muted">
            Sem cobrança automática surpresa. Você decide se vale a pena depois de testar.
          </p>
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
            Plano único · 7 dias grátis
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

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-7 font-extrabold text-cream-2 transition hover:-translate-y-px"
            style={{
              minHeight: "54px",
              background: "linear-gradient(180deg,#667254,#586348)",
              letterSpacing: "-0.01em",
              boxShadow: "0 16px 34px rgba(88,99,72,0.21)",
            }}
          >
            Começar agora · grátis <span aria-hidden="true">→</span>
          </a>

          <p className="mt-4 text-[13px] text-muted" style={{ maxWidth: "420px", marginInline: "auto" }}>
            Sem cartão de crédito para começar. Você só paga depois dos 7 dias se decidir continuar.
          </p>
          <p className="mt-2 text-[12px] text-soft">
            Plano anual com benefícios extras chegando em breve.
          </p>
        </div>
      </div>
    </section>
  );
}
