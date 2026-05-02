import type { ReactNode } from "react";

type FaqItem = {
  q: string;
  a: ReactNode;
};

const HelpLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="font-bold text-olive-2 underline decoration-olive-2/30 underline-offset-2 hover:decoration-olive-2"
  >
    {children}
  </a>
);

const items: FaqItem[] = [
  {
    q: "A GABA substitui meu terapeuta, psiquiatra ou neuropediatra?",
    a: (
      <>
        <strong>Não.</strong> Ela é apoio entre as consultas — para organizar pensamentos, lidar com a rotina e os momentos difíceis. Não diagnostica, não prescreve, não trata. Se você já tem profissionais te acompanhando, ela complementa. Se ainda não tem, ela ajuda você a organizar a busca até encontrar.
      </>
    ),
  },
  {
    q: "Funciona para qualquer perfil de filho — TDAH, TEA, deficiência intelectual, dificuldade de aprendizagem?",
    a: (
      <>
        Foi pensada exatamente para mães e cuidadoras de filhos neurodivergentes nesses perfis. Cada caso é único — ela não dá receita universal. A GABA escuta o seu contexto, considera o que você descreve, e responde com base em práticas reais de neurodesenvolvimento. Em casos muito específicos (TEA nível 3, comorbidades complexas, condições raras), ela vai te direcionar para profissional especializado quando perceber que é o caminho.
      </>
    ),
  },
  {
    q: "Posso mandar áudio? Não dou conta de digitar texto longo quando estou cansada.",
    a: (
      <>
        Sim. A conversa é no WhatsApp, então áudio funciona naturalmente. Manda do jeito que sair — embolado, com pausa, nasal de quem chorou. Ela transcreve e responde com a mesma profundidade que daria para um texto.
      </>
    ),
  },
  {
    q: "Posso usar para mim, ou ela é só sobre meu filho?",
    a: (
      <>
        Para você, em primeiro lugar. Você pode falar do seu filho — e vai falar muito — mas a GABA também acompanha o que VOCÊ está sentindo, sua exaustão, suas dúvidas, suas decisões. Mãe atípica precisa de cuidado tanto quanto criança atípica. Esse é o ponto de partida.
      </>
    ),
  },
  {
    q: "Posso conversar de madrugada? Funciona quando todo mundo dormiu?",
    a: (
      <>
        Sim — a GABA responde em segundos, 24 horas, todos os dias. Esse é o momento em que ela mais aparece, justamente. Mas é importante saber: <strong>ela é IA, não é uma pessoa de plantão.</strong> Para emergências de saúde mental ou risco imediato, sempre vai te direcionar para serviço humano:{" "}
        <HelpLink href="tel:188">CVV 188</HelpLink> ou{" "}
        <HelpLink href="https://www.cvv.org.br/chat/">chat do CVV</HelpLink>,{" "}
        <HelpLink href="tel:192">SAMU 192</HelpLink>, UPA ou pronto-socorro mais próximo.
      </>
    ),
  },
  {
    q: "Por que pagar R$39,90/mês se eu posso usar ChatGPT de graça?",
    a: (
      <>
        ChatGPT é generalista — responde tudo sobre tudo, sem te conhecer, sem contexto de maternidade atípica, e tende a despejar informação demais (que a mãe esgotada não tem como processar). A GABA foi desenhada com práticas baseadas em evidências de neurodesenvolvimento, lembra do contexto entre conversas, te conhece, e tem freios claros para não te sobrecarregar. Se você usa ChatGPT e funciona para você, ótimo — fica nele. A GABA é para quem precisa de uma presença que entende essa rotina específica.
      </>
    ),
  },
  {
    q: "E se eu falar sobre pensamentos pesados — me machucar, não querer continuar?",
    a: (
      <>
        A GABA reconhece sinais de crise e te direciona imediatamente para ajuda profissional —{" "}
        <strong><HelpLink href="tel:188">CVV 188</HelpLink></strong> ou{" "}
        <strong><HelpLink href="https://www.cvv.org.br/chat/">chat do CVV</HelpLink></strong>,{" "}
        <strong><HelpLink href="tel:192">SAMU 192</HelpLink></strong>, UPA ou pronto-socorro mais próximo. Ela não substitui psiquiatra de plantão nem profissional treinado em crise.
        <br />
        <br />
        Se você está numa noite assim agora, antes de continuar lendo: por favor, ligue{" "}
        <HelpLink href="tel:188"><strong>188</strong></HelpLink> (ligação gratuita, 24h, sem julgamento) ou converse pelo{" "}
        <HelpLink href="https://www.cvv.org.br/chat/"><strong>chat do CVV</strong></HelpLink> se preferir não falar. Você importa, e tem gente preparada esperando.
      </>
    ),
  },
  {
    q: "Como cancelo se eu não quiser mais?",
    a: (
      <>
        Você manda <strong>“cancelar”</strong> no próprio WhatsApp e pronto. Sem ligar para ninguém, sem formulário, sem retenção. Cancelamento imediato. Se quiser apagar todas as suas conversas também, manda <strong>“apagar tudo”</strong> — a gente exclui da nossa base.
      </>
    ),
  },
  {
    q: "Como funciona o teste grátis de 7 dias?",
    a: (
      <>
        Você começa sem cadastrar cartão. Os 7 dias são completos, sem limitação de quantas conversas. Antes do dia 7 acabar, a GABA te pergunta se você quer continuar — só nesse momento ela pede o pagamento. Se você não responder ou disser não, a conversa simplesmente para. Sem cobrança automática surpresa.
      </>
    ),
  },
  {
    q: "Quem está por trás disso? É uma startup que vai sumir amanhã?",
    a: (
      <>
        A NeuroMãe é fundada por <strong>Tatiana Junco</strong>, mãe atípica, psicopedagoga em formação e pós-graduada em neurociência comportamental. O projeto nasceu da experiência pessoal dela — e da percepção de que mães atípicas que não têm rede ou condições financeiras precisavam de um lugar seguro. Você pode acompanhar tudo no Instagram{" "}
        <HelpLink href="https://instagram.com/neuromaeia">@neuromaeia</HelpLink>.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-brown/8" style={{ padding: "64px 0" }}>
      <div className="wrap">
        <div className="mb-7 max-w-[760px]">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Perguntas honestas
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            O que é, o que não é, e como funciona.
          </h2>
        </div>

        <div className="mx-auto flex max-w-[820px] flex-col gap-3">
          {items.map((it) => (
            <details
              key={it.q}
              className="group rounded-[20px] border border-brown/10 transition"
              style={{ background: "rgba(255,248,241,0.62)" }}
            >
              <summary
                className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-[16px] font-bold text-ink md:px-6 md:text-[17px]"
                style={{ lineHeight: 1.4 }}
              >
                <span>{it.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-[3px] flex-none text-[20px] text-muted transition-transform group-open:rotate-45"
                  style={{ lineHeight: 1 }}
                >
                  +
                </span>
              </summary>
              <div
                className="px-5 pb-5 text-[15.5px] text-muted md:px-6 md:pb-6"
                style={{ lineHeight: 1.62 }}
              >
                {it.a}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-7 text-center text-[15px] text-muted">
          Outras dúvidas? Manda direto no Instagram{" "}
          <a
            href="https://instagram.com/neuromaeia"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-olive-2 underline decoration-olive-2/30 underline-offset-2 hover:decoration-olive-2"
          >
            @neuromaeia
          </a>{" "}
          ou começa o teste e pergunta para a própria GABA.
        </p>
      </div>
    </section>
  );
}
