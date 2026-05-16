import type { ReactNode } from "react";

interface FitCardProps {
  variant: "yes" | "no";
  title: string;
  items: string[];
  icon: ReactNode;
}

function FitCard({ variant, title, items, icon }: FitCardProps) {
  const isYes = variant === "yes";
  const accent = isYes ? "#586348" : "#A86E60";
  const bgTint = isYes ? "rgba(102,114,84,0.06)" : "rgba(184,121,103,0.05)";
  const borderTint = isYes ? "rgba(102,114,84,0.18)" : "rgba(184,121,103,0.18)";

  return (
    <article
      className="rounded-[18px] border p-3.5 md:rounded-[26px] md:p-7"
      style={{
        background: bgTint,
        borderColor: borderTint,
        boxShadow: "0 8px 28px rgba(70,55,44,0.05)",
      }}
    >
      <div className="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
        <div
          aria-hidden="true"
          className="inline-flex flex-none items-center justify-center rounded-full"
          style={{
            width: "26px",
            height: "26px",
            background: isYes ? "rgba(102,114,84,0.15)" : "rgba(184,121,103,0.12)",
            color: accent,
          }}
        >
          <span style={{ display: "inline-flex", width: "13px", height: "13px" }}>{icon}</span>
        </div>
        <h3
          className="font-serif font-medium text-ink text-[15px] md:text-[20px]"
          style={{ letterSpacing: "-0.01em", lineHeight: 1.2 }}
        >
          {title}
        </h3>
      </div>

      <ul className="flex flex-col gap-2 md:gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[12.5px] md:gap-2.5 md:text-[14.5px]" style={{ color: "#5D5047", lineHeight: 1.5 }}>
            <span
              aria-hidden="true"
              className="mt-[6px] flex-none rounded-full"
              style={{
                width: "5px",
                height: "5px",
                background: accent,
              }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);

export function ParaQuem() {
  return (
    <section
      id="para-quem"
      className="border-b border-brown/8"
      style={{ padding: "64px 0" }}
    >
      <div className="wrap">
        <div className="mx-auto mb-[36px] max-w-[680px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Antes de começar
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(28px,3.2vw,42px)", lineHeight: 1.08, letterSpacing: "-0.026em" }}
          >
            Pra ser honesta — a GABA não é pra todo mundo.
          </h2>
          <p className="mt-[12px] text-[16px] text-muted" style={{ lineHeight: 1.55 }}>
            A GABA não promete maternidade perfeita, criança “bem-comportada” ou rotina impecável. Ela acompanha mães reais, em dias reais. Se isso é o que você procura, segue.
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] grid-cols-2 gap-2 md:gap-4">
          <FitCard
            variant="yes"
            icon={<CheckIcon />}
            title="É pra você se:"
            items={[
              "Quer entender como a neurodivergência funciona.",
              "Recebeu um diagnóstico e está perdida, sem saber por onde começar.",
              "Precisa de alguém pra desabafar — sem mais julgamentos.",
              "Mesmo sozinha, sabe que não vai desistir.",
            ]}
          />
          <FitCard
            variant="no"
            icon={<XIcon />}
            title="Não é pra você se:"
            items={[
              "Acha que neurodivergência é “algo a se consertar”.",
              "Vê a maternidade como uma disputa de “quem é a melhor mãe”.",
              "Espera que a GABA substitua o acompanhamento de profissionais necessários.",
              "Não está disposta a caminhar em parceria — com profissionais, escola e família.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
