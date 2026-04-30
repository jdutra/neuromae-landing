import { WA_LINK } from "../lib/links";

const FEATURES = [
  "Conversa ilimitada no WhatsApp",
  "Texto, áudio e foto de documentos",
  "Disponível 24h, todos os dias",
  "Memória de contexto entre conversas",
  "Cancelamento por mensagem · 1 minuto",
];

interface ValueCellProps {
  label: string;
  price: string;
}

function ValueCell({ label, price }: ValueCellProps) {
  return (
    <div
      className="rounded-[14px] border border-brown/10"
      style={{
        background: "rgba(255,248,241,0.5)",
        padding: "14px 12px",
      }}
    >
      <span className="block text-muted" style={{ fontSize: "13px", lineHeight: 1.4, marginBottom: "4px" }}>
        {label}
      </span>
      <span className="block font-semibold text-brown" style={{ fontSize: "14px" }}>
        {price}
      </span>
    </div>
  );
}

function CheckMark() {
  return (
    <span
      aria-hidden="true"
      className="absolute"
      style={{
        left: "2px",
        top: "13px",
        width: "14px",
        height: "8px",
        borderLeft: "2.5px solid #586348",
        borderBottom: "2.5px solid #586348",
        transform: "rotate(-45deg)",
      }}
    />
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-brown/8" style={{ padding: "58px 0" }}>
      <div className="wrap">
        <div className="mx-auto mb-[34px] max-w-[760px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Plano
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(32px,4vw,50px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Comece por 7 dias. Continue só se fizer sentido.
          </h2>
          <p className="mt-[13px] text-[17px] text-muted">
            Sem cobrança automática surpresa. Você decide se vale a pena depois de testar.
          </p>
        </div>

        <div
          className="relative mx-auto rounded-[32px]"
          style={{
            maxWidth: "480px",
            background: "#FFF8F1",
            border: "2px solid #667254",
            padding: "38px 34px 30px",
            boxShadow: "0 24px 60px rgba(88,99,72,0.18)",
          }}
        >
          <span
            className="absolute font-bold text-cream-2"
            style={{
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "linear-gradient(180deg,#667254,#586348)",
              padding: "7px 16px",
              borderRadius: "999px",
              boxShadow: "0 6px 16px rgba(88,99,72,0.24)",
            }}
          >
            Plano único · 7 dias grátis
          </span>

          <div className="flex items-baseline justify-center gap-1" style={{ margin: "14px 0 4px" }}>
            <span className="font-serif font-medium text-olive-2" style={{ fontSize: "24px" }}>
              R$
            </span>
            <span
              className="font-serif font-medium text-olive-2"
              style={{ fontSize: "80px", lineHeight: 0.95, letterSpacing: "-0.025em" }}
            >
              39<small style={{ fontSize: "38px", fontWeight: 500 }}>,90</small>
            </span>
            <span className="font-semibold text-muted" style={{ fontSize: "17px", marginLeft: "6px" }}>
              /mês
            </span>
          </div>

          <p className="text-center text-muted" style={{ fontSize: "13px", marginBottom: "26px" }}>
            Cobrado mensalmente. Sem fidelidade.
          </p>

          <ul className="mb-[26px] p-0" style={{ listStyle: "none" }}>
            {FEATURES.map((f) => (
              <li
                key={f}
                className="relative text-ink"
                style={{ padding: "9px 0 9px 30px", fontSize: "15px", lineHeight: 1.5 }}
              >
                <CheckMark />
                {f}
              </li>
            ))}
          </ul>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2.5 rounded-full font-bold text-cream-2 transition hover:-translate-y-px"
            style={{
              minHeight: "62px",
              fontSize: "17px",
              letterSpacing: "0.005em",
              background: "linear-gradient(180deg,#667254,#586348)",
              boxShadow: "0 16px 34px rgba(88,99,72,0.24)",
            }}
          >
            Começar agora · grátis{" "}
            <span aria-hidden="true" className="inline-block transition group-hover:translate-x-[3px]">→</span>
          </a>

          <p className="mt-[14px] text-center text-muted" style={{ fontSize: "13px", lineHeight: 1.55 }}>
            Sem cartão de crédito para começar. Você só paga depois dos 7 dias se decidir continuar.
          </p>

          <p
            className="mt-[22px] pt-[18px] text-center italic text-soft"
            style={{
              borderTop: "1px solid rgba(95,75,62,0.12)",
              fontSize: "12px",
              lineHeight: 1.5,
            }}
          >
            Plano anual com benefícios extras chegando em breve.
          </p>
        </div>

        <div className="mx-auto mt-9 text-center" style={{ maxWidth: "760px" }}>
          <p
            className="font-bold text-muted"
            style={{
              fontSize: "13px",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Por que R$ 39,90 faz sentido
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <ValueCell label="Terapia particular" price="R$ 200–400/sessão" />
            <ValueCell label="Curso parental online" price="R$ 800–1.500" />
            <ValueCell label="Especialista em neurodivergência" price="Difícil de achar" />
          </div>
        </div>
      </div>
    </section>
  );
}
