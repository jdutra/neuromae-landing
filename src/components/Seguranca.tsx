import type { ReactNode } from "react";

interface TrustCardProps {
  icon: ReactNode;
  title: string;
  body: string;
}

function TrustCard({ icon, title, body }: TrustCardProps) {
  return (
    <article
      className="rounded-[22px] border border-brown/10"
      style={{
        background: "rgba(255,248,241,0.68)",
        padding: "22px 20px",
        boxShadow: "0 8px 24px rgba(70,55,44,0.04)",
      }}
    >
      <div
        aria-hidden="true"
        className="mb-3 inline-flex items-center justify-center rounded-full bg-olive/12 text-olive-2"
        style={{ width: "38px", height: "38px" }}
      >
        {icon}
      </div>
      <h3 className="text-[14px] font-bold text-ink" style={{ letterSpacing: "-0.005em" }}>
        {title}
      </h3>
      <p className="mt-1 text-[13px] text-muted" style={{ lineHeight: 1.5 }}>
        {body}
      </p>
    </article>
  );
}

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);
const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export function Seguranca() {
  return (
    <section id="seguranca" className="border-b border-brown/8" style={{ padding: "64px 0" }}>
      <div className="wrap">
        <div className="mx-auto mb-[34px] max-w-[760px] text-center">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Confiança
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Privacidade pensada para mães e crianças.
          </h2>
          <p className="mt-[12px] text-[16px] text-muted">
            Princípios de proteção da LGPD e do ECA digital. Documentos, laudos e fotos são tratados com responsabilidade.
          </p>
        </div>

        <div className="mx-auto grid max-w-[820px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <TrustCard
            icon={<ShieldIcon />}
            title="LGPD"
            body="Seus dados protegidos pela lei brasileira de proteção de dados."
          />
          <TrustCard
            icon={<HeartIcon />}
            title="ECA digital"
            body="Princípios de proteção infantil em todas as conversas."
          />
          <TrustCard
            icon={<EyeOffIcon />}
            title="Imagens de menores"
            body="Não armazenamos no nosso banco de dados. Orientamos sempre excluir da conversa após o envio."
          />
          <TrustCard
            icon={<PhoneIcon />}
            title="Direto no WhatsApp"
            body="Sem app extra. Sua conversa segue no aplicativo que você já usa."
          />
        </div>

        <div className="mt-9 flex items-center justify-center">
          <div
            className="inline-flex items-center gap-3 rounded-full border border-olive/20 bg-olive/10 px-5 py-3 text-olive-2"
          >
            <span className="font-serif font-medium" style={{ fontSize: "22px", lineHeight: 1 }}>
              7 dias
            </span>
            <span className="text-[13px] font-bold">gratuitos para testar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
