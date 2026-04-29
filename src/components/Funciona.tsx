interface MomentCardProps {
  avatar: string;
  title: string;
  body: string;
}

function MomentCard({ avatar, title, body }: MomentCardProps) {
  return (
    <article
      className="relative flex flex-col justify-end overflow-hidden rounded-[30px] border border-brown/10"
      style={{
        background: "rgba(255,248,241,0.52)",
        boxShadow: "0 12px 40px rgba(70,55,44,0.045)",
        padding: "24px 20px 22px",
        minHeight: "230px",
      }}
    >
      <img
        src={avatar}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          right: "-12px",
          top: "4px",
          width: "150px",
          opacity: 0.155,
          filter: "sepia(.16) saturate(.60) contrast(.72)",
          mixBlendMode: "multiply",
        }}
      />
      <h3
        className="relative mb-[7px] text-[15px] uppercase text-brown"
        style={{ letterSpacing: "0.10em" }}
      >
        {title}
      </h3>
      <p className="relative text-[14px] text-muted" style={{ lineHeight: 1.48, maxWidth: "220px" }}>
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
            avatar="/avatar-acolhe.svg"
            title="Acolhe"
            body="Quando você precisa falar sem se sentir julgada."
          />
          <MomentCard
            avatar="/avatar-escuta.svg"
            title="Escuta"
            body="Quando a rotina pesa e você precisa organizar o que sente."
          />
          <MomentCard
            avatar="/avatar-organiza.svg"
            title="Organiza"
            body="Quando há muitas informações e pouca clareza."
          />
          <MomentCard
            avatar="/avatar-cafe.svg"
            title="Orienta"
            body="Quando você precisa pensar nos próximos passos."
          />
        </div>
      </div>
    </section>
  );
}
