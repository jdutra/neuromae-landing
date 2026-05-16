interface InfoCardProps {
  num: string;
  title: string;
  body: string;
}

function InfoCard({ num, title, body }: InfoCardProps) {
  return (
    <div
      className="rounded-[28px] border border-brown/10 p-6"
      style={{
        background: "rgba(255,248,241,0.62)",
        boxShadow: "0 12px 38px rgba(70,55,44,0.055)",
        minHeight: "176px",
      }}
    >
      <div
        className="font-serif text-terracotta"
        style={{ fontSize: "36px", lineHeight: 1, marginBottom: "18px", opacity: 0.72 }}
      >
        {num}
      </div>
      <h3 className="mb-2 text-[17px] text-ink" style={{ letterSpacing: "-0.01em" }}>{title}</h3>
      <p className="text-[15px] text-muted">{body}</p>
    </div>
  );
}

export function Produto() {
  return (
    <section id="produto" className="border-b border-brown/8" style={{ padding: "58px 0" }}>
      <div className="wrap">
        <div className="mx-auto mb-[34px] max-w-[760px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            O produto
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Não é um curso. É uma conversa guiada.
          </h2>
          <p className="mt-[13px] text-[17px] text-muted">
            Você fala com a GABA quando precisar de clareza: no fim do dia, depois de uma situação difícil, antes de uma reunião na escola ou quando a cabeça está cheia demais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoCard
            num="01"
            title="Você pergunta ou desabafa"
            body="Pode escrever, organizar uma dúvida ou trazer uma situação real do dia."
          />
          <InfoCard
            num="02"
            title="A GABA organiza"
            body="Ela ajuda a separar emoção, contexto e próximos passos possíveis."
          />
          <InfoCard
            num="03"
            title="Você decide com mais clareza"
            body="Sem excesso de informação, sem julgamento e com orientação prática."
          />
        </div>
      </div>
    </section>
  );
}
