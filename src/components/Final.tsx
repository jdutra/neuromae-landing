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
            Use a GABAIA quando a dúvida aparecer. Se fizer sentido para sua rotina, continue por R$39,90/mês.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 font-extrabold text-cream-2 transition hover:-translate-y-px"
            style={{
              minHeight: "56px",
              background: "linear-gradient(180deg,#667254,#586348)",
              letterSpacing: "-0.01em",
              boxShadow: "0 16px 34px rgba(88,99,72,0.21)",
            }}
          >
            Me conta o que tá pesando hoje <span aria-hidden="true">→</span>
          </a>
          <p className="mt-[18px] text-[13px] text-muted">
            Começa em 1 minuto · 7 dias grátis · sem cartão
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] font-bold text-muted">
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Sem cartão
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>
              Direto no WhatsApp
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>
              7 dias grátis
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/></svg>
              Sem julgamento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
