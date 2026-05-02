interface ColumnProps {
  variant: "antes" | "depois";
  kicker: string;
  title: string;
  items: string[];
}

function Column({ variant, kicker, title, items }: ColumnProps) {
  const isDepois = variant === "depois";
  const kickerBg = isDepois ? "rgba(102,114,84,0.12)" : "rgba(216,167,161,0.28)";
  const kickerColor = isDepois ? "#586348" : "#8B5949";
  const cardBg = isDepois
    ? "linear-gradient(180deg, rgba(168,181,162,0.10) 0%, rgba(255,248,241,0.50) 100%)"
    : "linear-gradient(180deg, rgba(216,167,161,0.16) 0%, rgba(216,167,161,0.08) 100%)";
  const borderColor = isDepois ? "rgba(102,114,84,0.20)" : "rgba(216,167,161,0.32)";
  const bulletColor = isDepois ? "#586348" : "#A86E60";
  const itemColor = isDepois ? "#40352E" : "#5D5047";

  return (
    <article
      className="rounded-[28px] border p-7"
      style={{ background: cardBg, borderColor, boxShadow: "0 8px 28px rgba(70,55,44,0.05)" }}
    >
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-black uppercase"
        style={{ background: kickerBg, color: kickerColor, letterSpacing: "0.12em" }}
      >
        {kicker}
      </span>
      <h3
        className="mt-3 font-serif font-medium text-ink"
        style={{ fontSize: "22px", lineHeight: 1.2, letterSpacing: "-0.015em" }}
      >
        {title}
      </h3>

      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14.5px]" style={{ color: itemColor, lineHeight: 1.55 }}>
            <span
              aria-hidden="true"
              className="mt-[8px] flex-none rounded-full"
              style={{ width: "6px", height: "6px", background: bulletColor }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Transformacao() {
  return (
    <section
      id="transformacao"
      className="border-b border-brown/8"
      style={{ padding: "64px 0" }}
    >
      <div className="wrap">
        <div className="mx-auto mb-[36px] max-w-[680px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            O que muda
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(28px,3.2vw,42px)", lineHeight: 1.08, letterSpacing: "-0.026em" }}
          >
            Não é virar outra mãe. É não se perder mais no meio do caminho.
          </h2>
          <p className="mt-[12px] text-[16px] text-muted" style={{ lineHeight: 1.55 }}>
            A GABA não promete maternidade leve. Promete que quando o difícil vier — e ele vem — você não carregue tudo sozinha.
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] gap-4 md:grid-cols-2">
          <Column
            variant="antes"
            kicker="Hoje, talvez, você sente"
            title="A maternidade pesando assim:"
            items={[
              "Por mais que se esforce, as coisas não melhoram.",
              "Quanto mais conhecimento tem, maior fica a culpa.",
              "São tantos nomes, diagnósticos e rótulos, que não consegue acompanhar.",
              "A cada crise, a impotência aumenta e paralisa.",
              "Se sente isolada, ignorante e sem esperança.",
              "Compara sua vida com as mães das redes sociais, porque não tem mais amigos reais — e o sofrimento só aumenta.",
            ]}
          />
          <Column
            variant="depois"
            kicker="Com a GABA pode ser"
            title="Atravessar com chão firme:"
            items={[
              "Termina o dia conseguindo nomear o que aconteceu, sem se afogar nele.",
              "Tem alguém pra escutar a culpa sem te entregar mais uma lista de tarefas.",
              "Conta com prática real e baseada em evidência, sem promessa milagrosa.",
              "Sabe pra onde ir quando a noite vira — e o que ouve te devolve clareza, não cobrança.",
              "Volta pra você no meio do caos. Cai, levanta, segue. Cada vez mais rápido.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
