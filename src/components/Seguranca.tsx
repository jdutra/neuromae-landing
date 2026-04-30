interface TrustItemProps {
  title: string;
  desc: string;
}

function CheckCircle() {
  return (
    <span
      className="inline-flex flex-none items-center justify-center rounded-full"
      style={{
        width: "24px",
        height: "24px",
        background: "rgba(102,114,84,0.14)",
        marginTop: "1px",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: "9px",
          height: "5px",
          borderLeft: "2px solid #586348",
          borderBottom: "2px solid #586348",
          transform: "rotate(-45deg)",
          marginTop: "-3px",
        }}
      />
    </span>
  );
}

function TrustItem({ title, desc }: TrustItemProps) {
  return (
    <li
      className="grid items-start gap-[14px]"
      style={{ gridTemplateColumns: "24px 1fr", fontSize: "15px", lineHeight: 1.5 }}
    >
      <CheckCircle />
      <div>
        <strong className="block font-semibold text-brown" style={{ marginBottom: "2px" }}>
          {title}
        </strong>
        <span className="text-muted" style={{ fontSize: "14px" }}>
          {desc}
        </span>
      </div>
    </li>
  );
}

export function Seguranca() {
  return (
    <section id="seguranca" className="border-b border-brown/8" style={{ padding: "58px 0" }}>
      <div className="wrap">
        <div
          className="mx-auto rounded-[34px] border border-brown/10"
          style={{
            maxWidth: "760px",
            background: "rgba(255,248,241,0.62)",
            padding: "36px 34px",
            boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
          }}
        >
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Confiança
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{
              fontSize: "clamp(28px,3.2vw,40px)",
              lineHeight: 1.06,
              letterSpacing: "-0.026em",
              marginTop: "6px",
            }}
          >
            Privacidade pensada para mães e crianças.
          </h2>
          <p className="mt-[14px] text-muted" style={{ fontSize: "16px", lineHeight: 1.65 }}>
            A GABAIA foi desenhada com cuidado, dentro dos princípios da LGPD e do ECA digital — porque cuidar de mãe e filho começa por respeitar o que cada uma compartilha aqui.
          </p>

          <ul className="mt-6 flex flex-col gap-[14px] p-0" style={{ listStyle: "none" }}>
            <TrustItem
              title="Sem imagens de crianças armazenadas"
              desc="Você nunca precisa enviar foto. Se enviar uma por engano, ela não fica no nosso sistema."
            />
            <TrustItem
              title="LGPD e ECA digital"
              desc="Tratamos seus dados e os do seu filho dentro das duas leis — sem usar para treinar IA, sem vender, sem expor."
            />
            <TrustItem
              title="Documentos, laudos e receitas com cuidado"
              desc="Você pode mandar conteúdo sensível. A gente trata como confidencial e exclui quando você pedir."
            />
            <TrustItem
              title="Tudo no WhatsApp, sem app extra"
              desc="Sem cadastro complicado, sem permissões invasivas. A conversa fica no aplicativo que você já usa."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
