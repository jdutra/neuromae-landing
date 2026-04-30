import { WA_LINK } from "../lib/links";

export function Final() {
  return (
    <section className="text-center" style={{ padding: "58px 0 112px" }}>
      <div className="wrap">
        <div
          className="mx-auto rounded-[36px] border border-brown/10"
          style={{
            maxWidth: "820px",
            background: "linear-gradient(180deg,rgba(255,248,241,0.70),rgba(255,248,241,0.46))",
            padding: "42px 26px",
            boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
          }}
        >
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Comece sem pressão
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Teste no seu dia real.
          </h2>
          <p className="mx-auto mt-[14px] mb-[26px] text-[17px] text-muted" style={{ maxWidth: "660px" }}>
            Manda uma mensagem para a GABA quando a noite pesar. Se fizer sentido para sua rotina, continua por R$39,90/mês.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full px-[34px] font-bold text-cream-2 transition hover:-translate-y-px"
            style={{
              minHeight: "62px",
              fontSize: "17px",
              letterSpacing: "0.005em",
              background: "linear-gradient(180deg,#667254,#586348)",
              boxShadow: "0 16px 34px rgba(88,99,72,0.24)",
            }}
          >
            Começar agora · grátis{" "}
            <span aria-hidden="true" className="inline-block transition group-hover:translate-x-[3px]">→</span>
          </a>
          <div className="mt-[18px] text-[13px] text-muted">
            GABAIA por NeuroMãe • presença prática e acolhedora no WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
}
