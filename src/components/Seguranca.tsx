export function Seguranca() {
  const tags = [
    "Sem imagens infantis armazenadas",
    "LGPD",
    "ECA digital",
    "Direto no WhatsApp",
  ];

  return (
    <section id="seguranca" className="border-b border-brown/8" style={{ padding: "58px 0" }}>
      <div
        className="wrap grid items-center gap-6 rounded-[34px] border border-brown/10 p-[30px] md:grid-cols-[1fr_auto]"
        style={{
          background: "rgba(255,248,241,0.62)",
          boxShadow: "0 22px 60px rgba(70,55,44,0.10)",
        }}
      >
        <div>
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
          <p className="mt-[12px] text-muted" style={{ maxWidth: "700px" }}>
            A GABAIA foi desenhada com cuidado: segue princípios da LGPD e do ECA digital. Não armazenamos imagens de crianças. Documentos, laudos, receitas e materiais pedagógicos são tratados com responsabilidade.
          </p>
          <div className="mt-4 flex flex-wrap gap-[9px]">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-olive/20 bg-olive/10 px-3 py-2 text-[13px] font-extrabold text-olive-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="text-left md:min-w-[205px] md:text-right">
          <b
            className="block font-serif font-medium text-brown"
            style={{ fontSize: "41px", lineHeight: 1 }}
          >
            7 dias
          </b>
          <small className="font-bold text-muted">gratuitos para testar</small>
        </div>
      </div>
    </section>
  );
}
