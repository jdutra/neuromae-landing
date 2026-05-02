interface MomentCardProps {
  avatar: string;
  title: string;
  body: string;
  accent: "rosa" | "sage" | "bege" | "terracotta";
  avatarHeight?: number;
}

const accentColors = {
  rosa: "rgba(216,167,161,0.32)",
  sage: "rgba(168,181,162,0.30)",
  bege: "rgba(201,183,166,0.32)",
  terracotta: "rgba(184,121,103,0.22)",
};

function MomentCard({ avatar, title, body, accent, avatarHeight = 128 }: MomentCardProps) {
  const haloColor = accentColors[accent];
  return (
    <article
      className="relative flex flex-col items-center rounded-[26px] border border-brown/10 text-center"
      style={{
        background: "rgba(255,248,241,0.62)",
        boxShadow: "0 12px 36px rgba(70,55,44,0.06)",
        padding: "24px 16px 22px",
        minHeight: "260px",
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: "180px", height: "150px", marginBottom: "6px" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${haloColor} 0%, rgba(255,248,241,0.4) 55%, transparent 80%)`,
            filter: "blur(14px)",
          }}
        />
        <img
          src={avatar}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="relative z-[1]"
          style={{
            height: `${avatarHeight}px`,
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 14px 20px rgba(95,75,62,0.20)) drop-shadow(0 5px 10px rgba(95,75,62,0.10))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            bottom: "-4px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "10px",
            background: "radial-gradient(ellipse at center, rgba(95,75,62,0.20) 0%, transparent 75%)",
            filter: "blur(5px)",
          }}
        />
      </div>

      <h3
        className="mt-2 text-[13px] uppercase text-brown"
        style={{ letterSpacing: "0.12em", fontWeight: 600 }}
      >
        {title}
      </h3>
      <p
        className="mt-1.5 text-[13.5px] text-muted"
        style={{ lineHeight: 1.5, maxWidth: "200px" }}
      >
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
      style={{ padding: "64px 0", background: "rgba(255,248,241,0.28)" }}
    >
      <div className="wrap">
        <div className="mx-auto mb-[36px] max-w-[760px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Para usar no dia a dia
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Uma presença única para diferentes momentos.
          </h2>
          <p className="mt-[13px] text-[16px] text-muted">
            A GABA acolhe, escuta, organiza e orienta — sem transformar sua rotina em mais uma tarefa.
          </p>
        </div>

        <div className="mx-auto grid max-w-[720px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <MomentCard
            avatar="/gaba-acolhe.png"
            title="Acolhe"
            body="Quando você precisa falar sem se sentir julgada."
            accent="rosa"
          />
          <MomentCard
            avatar="/gaba-escuta.png"
            title="Escuta"
            body="Quando a rotina pesa e precisa organizar o que sente."
            accent="bege"
            avatarHeight={120}
          />
          <MomentCard
            avatar="/gaba-organiza.png"
            title="Organiza"
            body="Quando há muita informação e pouca clareza."
            accent="sage"
          />
          <MomentCard
            avatar="/gaba-respira.png"
            title="Orienta"
            body="Quando você precisa pensar nos próximos passos."
            accent="terracotta"
          />
        </div>
      </div>
    </section>
  );
}
