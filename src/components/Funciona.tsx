interface MomentCardProps {
  avatar: string;
  title: string;
  body: string;
}

function MomentCard({ avatar, title, body }: MomentCardProps) {
  return (
    <article
      className="flex flex-col items-center gap-2.5 rounded-[26px] border border-brown/10 text-center"
      style={{
        background: "rgba(255,248,241,0.52)",
        boxShadow: "0 12px 40px rgba(70,55,44,0.045)",
        padding: "18px 14px 20px",
      }}
    >
      <img
        src={avatar}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="flex-none"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      <h3
        className="text-[14px] uppercase text-brown"
        style={{ letterSpacing: "0.12em", margin: 0 }}
      >
        {title}
      </h3>
      <p className="text-[14px] text-muted" style={{ lineHeight: 1.48, margin: 0 }}>
        {body}
      </p>
    </article>
  );
}

export function Funciona() {
  return (
    <section
      id="funciona"
      className="border-b border-brown/8"
      style={{ padding: "58px 0", background: "rgba(255,248,241,0.28)" }}
    >
      <div className="wrap">
        <div className="mx-auto mb-[34px] max-w-[760px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Para usar no dia a dia
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Uma presença única para diferentes momentos.
          </h2>
          <p className="mt-[13px] text-[17px] text-muted">
            A GABAIA ajuda a acolher, escutar, organizar e orientar — sem transformar sua rotina em mais uma tarefa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 md:grid-cols-4">
          <MomentCard
            avatar="/gaba-acolhe.png"
            title="Acolhe"
            body="Quando você precisa falar sem se sentir julgada."
          />
          <MomentCard
            avatar="/gaba-escuta.png"
            title="Escuta"
            body="Quando a rotina pesa e você precisa organizar o que sente."
          />
          <MomentCard
            avatar="/gaba-organiza.png"
            title="Organiza"
            body="Quando há muitas informações e pouca clareza."
          />
          <MomentCard
            avatar="/gaba-respira.png"
            title="Orienta"
            body="Quando você precisa pensar nos próximos passos."
          />
        </div>
      </div>
    </section>
  );
}
