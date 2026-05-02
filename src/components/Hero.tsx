import { WA_LINK } from "../lib/links";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brown/8" style={{ padding: "70px 0 54px" }}>
      <img
        src="/gaba-cafe.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
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
            Pra mães atípicas
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
            Você não é péssima.{" "}
            <span style={{ color: "#B87967" }}>Você está esgotada.</span>
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
            A GABA é uma assistente no WhatsApp pra quando você termina o dia, todos dormem, e ainda assim sente que precisava ter feito mais.
          </p>
          <p className="mt-[14px] text-[16px] text-muted" style={{ maxWidth: "640px" }}>
            Aqui ninguém vai te dizer “tente isso”. A gente só te escuta — sem julgar, sem te oferecer mais 10 coisas pra fazer amanhã.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-4">
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
              Começar agora · grátis <span aria-hidden="true">→</span>
            </a>
            <a
              href="#produto"
              className="font-bold text-muted"
              style={{ borderBottom: "1px solid rgba(119,103,91,0.35)", paddingBottom: "4px" }}
            >
              Entender em 30 segundos ↓
            </a>
          </div>
          <p className="mt-[13px] text-[14px] text-muted">
            7 dias grátis. Depois R$39,90/mês. Cancele quando quiser.
          </p>
        </div>

        <PhoneCard />
      </div>
    </section>
  );
}

function PhoneCard() {
  const momBubble: React.CSSProperties = {
    padding: "13px 16px",
    background: "#EEE1D7",
    borderBottomLeftRadius: "7px",
    lineHeight: 1.48,
  };
  const gabaBubble: React.CSSProperties = {
    padding: "13px 16px",
    background: "#E7EBDD",
    borderBottomRightRadius: "7px",
    lineHeight: 1.48,
  };

  return (
    <div
      aria-label="Exemplo de conversa com a GABAIA"
      className="rounded-[34px] border border-brown/12 backdrop-blur"
      style={{
        background: "rgba(255,248,241,0.72)",
        boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
        padding: "22px",
      }}
    >
      <div className="mb-[16px] flex items-center justify-between text-[12px] font-bold uppercase text-muted" style={{ letterSpacing: "0.05em" }}>
        <span>Conversa com GABAIA</span>
        <span className="inline-flex items-center gap-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-olive before:content-['']">
          online
        </span>
      </div>

      <div className="my-2 mr-8 rounded-[19px] text-[14px] text-[#4D4037]" style={momBubble}>
        Que noite difícil. Meu filho morre de medo de trovão e tá uma tempestade. Em pânico, não dorme. Estou exausta, ainda preciso trabalhar.
      </div>
      <div className="my-2 ml-6 rounded-[19px] text-[14px] text-[#3E4935]" style={gabaBubble}>
        Que noite pesada. Cuidando dele em pânico, exausta, ainda com trabalho — é muito pra uma pessoa só aguentar.
      </div>
      <div className="my-2 ml-6 rounded-[19px] text-[14px] text-[#3E4935]" style={gabaBubble}>
        Respira. Vamos juntas nisso agora:
        <ol className="mt-2 ml-4 list-decimal space-y-1 text-[13.5px]">
          <li>Cria um esconderijo seguro — armário, cobertor grosso. Espaço fechado ativa proteção no cérebro.</li>
          <li>Mascara o trovão com ventilador ou som de chuva suave.</li>
          <li>Fala bem pouco e baixo: “estou aqui, você está seguro”.</li>
        </ol>
      </div>
      <div className="my-2 ml-6 rounded-[19px] text-[14px] text-[#3E4935]" style={gabaBubble}>
        E você — assim que ele dormir, para tudo. Descansa 20 minutos antes de abrir o trabalho. Você precisa disso também. 💙
      </div>

      <div
        className="mt-[14px] flex items-center justify-between rounded-full border border-brown/8 text-[13px] text-soft"
        style={{ background: "rgba(255,255,255,0.56)", padding: "11px 14px" }}
      >
        <span>Escreva ou mande áudio…</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
