import type { ReactNode } from "react";

type FaqItem = {
  q: string;
  a: ReactNode;
};

const helpLinkStyle: React.CSSProperties = {
  color: "#B87967",
  fontWeight: 600,
  borderBottom: "1px solid rgba(184,121,103,0.4)",
  paddingBottom: "1px",
};

const HelpLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    style={helpLinkStyle}
  >
    {children}
  </a>
);

const Strong = ({ children }: { children: ReactNode }) => (
  <strong style={{ color: "#5F4B3E", fontWeight: 600 }}>{children}</strong>
);

const items: FaqItem[] = [
  {
    q: "A GABA substitui meu terapeuta, psiquiatra ou neuropediatra?",
    a: (
      <>
        <Strong>Não.</Strong> Ela é apoio entre as consultas — para organizar pensamentos, lidar com a rotina e os momentos difíceis. Não diagnostica, não prescreve, não trata. Se você já tem profissionais te acompanhando, ela complementa. Se ainda não tem, ela ajuda você a organizar a busca até encontrar.
      </>
    ),
  },
  {
    q: "Funciona para qualquer perfil de filho — TDAH, TEA, deficiência intelectual, dificuldade de aprendizagem?",
    a: "Foi pensada exatamente para mães e cuidadoras de filhos neurodivergentes nesses perfis. Cada caso é único — ela não dá receita universal. A GABA escuta o seu contexto, considera o que você descreve, e responde com base em práticas reais de neurodesenvolvimento. Em casos muito específicos (TEA nível 3, comorbidades complexas, condições raras), ela vai te direcionar para profissional especializado quando perceber que é o caminho.",
  },
  {
    q: "Posso mandar áudio? Não dou conta de digitar texto longo quando estou cansada.",
    a: "Sim. A conversa é no WhatsApp, então áudio funciona naturalmente. Manda do jeito que sair — embolado, com pausa, nasal de quem chorou. Ela transcreve e responde com a mesma profundidade que daria para um texto.",
  },
  {
    q: "Posso usar para mim, ou ela é só sobre meu filho?",
    a: "Para você, em primeiro lugar. Você pode falar do seu filho — e vai falar muito — mas a GABA também acompanha o que VOCÊ está sentindo, sua exaustão, suas dúvidas, suas decisões. Mãe atípica precisa de cuidado tanto quanto criança atípica. Esse é o ponto de partida.",
  },
  {
    q: "Posso conversar de madrugada? Funciona quando todo mundo dormiu?",
    a: (
      <>
        Sim — a GABA responde em segundos, 24 horas, todos os dias. Esse é o momento em que ela mais aparece, justamente. Mas é importante saber:{" "}
        <Strong>ela é IA, não é uma pessoa de plantão.</Strong> Para emergências de saúde mental ou risco imediato, sempre vai te direcionar para serviço humano:{" "}
        <HelpLink href="tel:188">CVV 188</HelpLink> ou{" "}
        <HelpLink href="https://www.cvv.org.br/chat/">chat do CVV</HelpLink>,{" "}
        <HelpLink href="tel:192">SAMU 192</HelpLink>, UPA ou pronto-socorro mais próximo.
      </>
    ),
  },
  {
    q: "Por que pagar R$39,90/mês se eu posso usar ChatGPT de graça?",
    a: "ChatGPT é generalista — responde tudo sobre tudo, sem te conhecer, sem contexto de maternidade atípica, e tende a despejar informação demais (que a mãe esgotada não tem como processar). A GABA foi desenhada com práticas baseadas em evidências de neurodesenvolvimento, lembra do contexto entre conversas, te conhece, e tem freios claros para não te sobrecarregar. Se você usa ChatGPT e funciona para você, ótimo — fica nele. A GABA é para quem precisa de uma presença que entende essa rotina específica.",
  },
  {
    q: "E se eu falar sobre pensamentos pesados — me machucar, não querer continuar?",
    a: (
      <>
        A GABA reconhece sinais de crise e te direciona imediatamente para ajuda profissional —{" "}
        <Strong>
          <HelpLink href="tel:188">CVV 188</HelpLink>
        </Strong>{" "}
        ou{" "}
        <Strong>
          <HelpLink href="https://www.cvv.org.br/chat/">chat do CVV</HelpLink>
        </Strong>
        ,{" "}
        <Strong>
          <HelpLink href="tel:192">SAMU 192</HelpLink>
        </Strong>
        , UPA ou pronto-socorro mais próximo. Ela não substitui psiquiatra de plantão nem profissional treinado em crise. Se você está numa noite assim agora, antes de continuar lendo: por favor, ligue{" "}
        <HelpLink href="tel:188">
          <strong>188</strong>
        </HelpLink>{" "}
        (ligação gratuita, 24h, sem julgamento) ou converse pelo{" "}
        <HelpLink href="https://www.cvv.org.br/chat/">
          <strong>chat do CVV</strong>
        </HelpLink>{" "}
        se preferir não falar. Você importa, e tem gente preparada esperando.
      </>
    ),
  },
  {
    q: "Como cancelo se eu não quiser mais?",
    a: (
      <>
        Você manda <Strong>"cancelar"</Strong> no próprio WhatsApp e pronto. Sem ligar para ninguém, sem formulário, sem retenção. Cancelamento imediato. Se quiser apagar todas as suas conversas também, manda "apagar tudo" — a gente exclui da nossa base.
      </>
    ),
  },
  {
    q: "Como funciona o teste grátis de 7 dias?",
    a: "Você começa sem cadastrar cartão. Os 7 dias são completos, sem limitação de quantas conversas. Antes do dia 7 acabar, a GABA te pergunta se você quer continuar — só nesse momento ela pede o pagamento. Se você não responder ou disser não, a conversa simplesmente para. Sem cobrança automática surpresa.",
  },
  {
    q: "Quem está por trás disso? É uma startup que vai sumir amanhã?",
    a: (
      <>
        A NeuroMãe é fundada por <Strong>Tatiana Junco</Strong>, mãe atípica, psicopedagoga em formação e pós-graduada em neurociência comportamental. O projeto nasceu da experiência pessoal dela — e da percepção de que mães atípicas que não têm rede ou condições financeiras precisavam de um lugar seguro. Você pode acompanhar tudo no Instagram{" "}
        <a
          href="https://instagram.com/neuromaeia"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#586348", fontWeight: 600 }}
        >
          @neuromaeia
        </a>
        .
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-brown/8" style={{ padding: "58px 0" }}>
      <div className="wrap mx-auto" style={{ maxWidth: "760px" }}>
        <div className="mb-2">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Perguntas honestas
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(28px,3.2vw,40px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            O que é, o que não é, e como funciona.
          </h2>
        </div>

        <div className="mt-3.5">
          {items.map((item, i) => (
            <details
              key={i}
              className="faq-item"
              style={{ borderBottom: "1px solid rgba(95,75,62,0.12)" }}
            >
              <summary
                className="faq-summary flex cursor-pointer items-start justify-between gap-[14px] font-medium text-ink"
                style={{ padding: "18px 8px 18px 0", fontSize: "16px", lineHeight: 1.4 }}
              >
                <span>{item.q}</span>
              </summary>
              <div
                className="text-muted"
                style={{ padding: "0 32px 22px 0", fontSize: "15px", lineHeight: 1.65 }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div
          className="mt-7 rounded-[18px] text-center text-muted"
          style={{
            background: "rgba(102,114,84,0.08)",
            padding: "18px 22px",
            fontSize: "14px",
            lineHeight: 1.55,
          }}
        >
          Outras dúvidas? Manda direto no Instagram{" "}
          <a
            href="https://instagram.com/neuromaeia"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#586348", fontWeight: 600 }}
          >
            @neuromaeia
          </a>{" "}
          ou começa o teste e pergunta para a própria GABA.
        </div>
      </div>
    </section>
  );
}
