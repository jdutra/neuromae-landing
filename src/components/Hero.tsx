import { WA_LINK } from "../lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brown/8" style={{ padding: "70px 0 54px" }}>
      <img
        src="/avatar-cafe.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          right: "-60px",
          top: "18px",
          width: "min(470px,44vw)",
          opacity: 0.145,
          filter: "sepia(.12) saturate(.72) contrast(.82)",
          mixBlendMode: "multiply",
        }}
      />
      <div className="wrap relative z-[2] grid items-center gap-14 md:grid-cols-[minmax(0,1.02fr)_minmax(330px,.78fr)]">
        <div>
          <span
            className="mb-[18px] inline-flex items-center gap-2 rounded-full border border-brown/10 px-3 py-2 text-[12px] font-extrabold uppercase text-muted"
            style={{ background: "rgba(255,248,241,0.64)", letterSpacing: "0.10em" }}
          >
            Assistente no WhatsApp
          </span>
          <h1
            className="font-serif font-medium text-ink"
            style={{
              fontSize: "clamp(43px,5.7vw,76px)",
              lineHeight: 0.98,
              letterSpacing: "-0.038em",
              maxWidth: "780px",
            }}
          >
            Ajuda prática quando a dúvida aparece.
          </h1>
          <p
            className="mt-[22px]"
            style={{
              fontSize: "clamp(18px,1.8vw,22px)",
              lineHeight: 1.55,
              color: "#5D5047",
              maxWidth: "680px",
            }}
          >
            A GABAIA é uma assistente no WhatsApp para mães atípicas que precisam organizar dúvidas, desabafos e decisões do dia a dia.
          </p>
          <p className="mt-[14px] text-[16px] text-muted" style={{ maxWidth: "640px" }}>
            Sem app. Sem curso. Uma conversa simples, acolhedora e direta no celular.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-4">
            <a
              href={WA_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 font-extrabold text-cream-2 transition hover:-translate-y-px"
              style={{
                minHeight: "56px",
                background: "linear-gradient(180deg,#667254,#586348)",
                letterSpacing: "-0.01em",
                boxShadow: "0 16px 34px rgba(88,99,72,0.21)",
              }}
            >
              Começar 7 dias grátis
            </a>
            <a
              href="#produto"
              className="font-bold text-muted"
              style={{ borderBottom: "1px solid rgba(119,103,91,0.35)", paddingBottom: "4px" }}
            >
              Entender em 30 segundos
            </a>
          </div>
          <p className="mt-[13px] text-[14px] text-muted">
            Depois dos 7 dias: R$39,90/mês. Cancele quando quiser.
          </p>
        </div>

        <PhoneCard />
      </div>
    </section>
  );
}

function PhoneCard() {
  return (
    <div
      aria-label="Exemplo de conversa com a GABAIA"
      className="rounded-[34px] border border-brown/12 backdrop-blur"
      style={{
        background: "rgba(255,248,241,0.72)",
        boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
        padding: "25px",
      }}
    >
      <div className="mb-[18px] flex items-center justify-between text-[12px] font-bold uppercase text-muted" style={{ letterSpacing: "0.05em" }}>
        <span>Conversa com GABAIA</span>
        <span className="inline-flex items-center gap-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-olive before:content-['']">
          online
        </span>
      </div>

      <div
        className="my-3 mr-10 rounded-[19px] text-[15px] text-[#4D4037]"
        style={{ padding: "14px 16px", background: "#EEE1D7", borderBottomLeftRadius: "7px", lineHeight: 1.48 }}
      >
        “Ele teve uma crise depois da escola. Eu não sei o que fazer agora.”
      </div>
      <div
        className="my-3 ml-8 rounded-[19px] text-[15px] text-[#3E4935]"
        style={{ padding: "14px 16px", background: "#E7EBDD", borderBottomRightRadius: "7px", lineHeight: 1.48 }}
      >
        Respira. Vamos por partes. Primeiro, me conta: ele está seguro agora?
      </div>
      <div
        className="my-3 ml-8 rounded-[19px] text-[15px] text-[#3E4935]"
        style={{ padding: "14px 16px", background: "#E7EBDD", borderBottomRightRadius: "7px", lineHeight: 1.48 }}
      >
        Depois eu te ajudo a organizar os próximos passos, sem julgamento e sem pressa.
      </div>

      <div
        className="mt-[18px] flex items-center justify-between rounded-full border border-brown/8 text-[14px] text-soft"
        style={{ background: "rgba(255,255,255,0.56)", padding: "13px 16px" }}
      >
        <span>Escreva ou mande áudio…</span>
        <span>↗</span>
      </div>
    </div>
  );
}
