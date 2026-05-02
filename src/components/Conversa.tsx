export function Conversa() {
  return (
    <section
      id="conversa"
      className="border-b border-brown/8"
      style={{ padding: "64px 0", background: "rgba(255,248,241,0.30)" }}
    >
      <div className="wrap">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            A voz da GABA
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(28px,3.2vw,40px)", lineHeight: 1.08, letterSpacing: "-0.026em" }}
          >
            É assim que ela responde — quando ninguém mais responde.
          </h2>
          <p className="mt-[12px] text-[16.5px] text-muted">
            Uma noite de tempestade, uma mãe exausta. A GABA não dá receita: ela escuta, organiza e devolve clareza — sem mais nada pra você fazer amanhã.
          </p>
        </div>

        <div className="mx-auto" style={{ maxWidth: "640px" }}>
          <PhoneCard />
        </div>
      </div>
    </section>
  );
}

function PhoneCard() {
  const momBubble: React.CSSProperties = {
    padding: "14px 18px",
    background: "#EEE1D7",
    borderBottomLeftRadius: "7px",
    lineHeight: 1.5,
  };
  const gabaBubble: React.CSSProperties = {
    padding: "14px 18px",
    background: "#E7EBDD",
    borderBottomRightRadius: "7px",
    lineHeight: 1.5,
  };

  return (
    <div
      aria-label="Exemplo de conversa com a GABAIA"
      className="rounded-[32px] border border-brown/12 backdrop-blur"
      style={{
        background: "rgba(255,248,241,0.78)",
        boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
        padding: "26px",
      }}
    >
      <div className="mb-[18px] flex items-center justify-between text-[12px] font-bold uppercase text-muted" style={{ letterSpacing: "0.05em" }}>
        <span>Conversa com GABAIA · 23h47</span>
        <span className="inline-flex items-center gap-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-olive before:content-['']">
          online
        </span>
      </div>

      <div className="my-2.5 mr-10 rounded-[20px] text-[15px] text-[#4D4037]" style={momBubble}>
        Que noite difícil. Meu filho morre de medo de trovão e tá uma tempestade. Em pânico, não dorme. Estou exausta, ainda preciso trabalhar.
      </div>
      <div className="my-2.5 ml-8 rounded-[20px] text-[15px] text-[#3E4935]" style={gabaBubble}>
        Que noite pesada. Cuidando dele em pânico, exausta, ainda com trabalho — é muito pra uma pessoa só aguentar.
      </div>
      <div className="my-2.5 ml-8 rounded-[20px] text-[15px] text-[#3E4935]" style={gabaBubble}>
        Respira. Vamos juntas nisso agora:
        <ol className="mt-2 ml-4 list-decimal space-y-1.5 text-[14px]">
          <li>Cria um esconderijo seguro — armário, cobertor grosso. Espaço fechado ativa proteção no cérebro.</li>
          <li>Mascara o trovão com ventilador ou som de chuva suave.</li>
          <li>Fala bem pouco e baixo: “estou aqui, você está seguro”.</li>
        </ol>
      </div>
      <div className="my-2.5 ml-8 rounded-[20px] text-[15px] text-[#3E4935]" style={gabaBubble}>
        E você — assim que ele dormir, para tudo. Descansa 20 minutos antes de abrir o trabalho. Você precisa disso também. 💙
      </div>

      <div
        className="mt-[18px] flex items-center justify-between rounded-full border border-brown/8 text-[13.5px] text-soft"
        style={{ background: "rgba(255,255,255,0.56)", padding: "12px 16px" }}
      >
        <span>Escreva ou mande áudio…</span>
        <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
