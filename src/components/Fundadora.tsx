export function Fundadora() {
  return (
    <section
      id="fundadora"
      className="border-b border-brown/8"
      style={{ padding: "58px 0", background: "rgba(255,248,241,0.32)" }}
    >
      <div className="wrap mx-auto" style={{ maxWidth: "720px" }}>
        <div className="mb-2">
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Quem está por trás
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(28px,3.2vw,40px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Por que a NeuroMãe existe.
          </h2>
        </div>

        <div className="mt-1.5 text-ink" style={{ fontSize: "16px", lineHeight: 1.7 }}>
          <p className="mb-[18px] font-medium text-brown" style={{ fontSize: "18px" }}>
            Eu sou Tatiana. Mãe atípica, como você.
          </p>
          <p className="mb-[18px]">
            Meu segundo filho nasceu bem. Aos 45 dias teve uma meningite hospitalar e ficou 21 dias internado. Sobreviveu — com sequelas. TDAH, disfunção sensório-motora, leve deficiência intelectual.
          </p>
          <p className="mb-[18px]">
            Na pandemia, atravessei uma depressão grave. Foi nesse fundo que, aos 38 anos, descobri que eu também sou TDAH. Comecei a estudar psicopedagogia, neurociência comportamental e educação parental porque os profissionais que eu encontrava não conseguiam me responder.
          </p>
          <p className="mb-[18px]">
            <strong className="font-semibold text-brown">Mas eu tive sorte.</strong> Rede de apoio, condições financeiras, acesso a informação. A maioria das mães atípicas não tem nada disso.
          </p>
          <p className="mb-[18px]">
            A NeuroMãe nasceu pra essas mães. Pra ser o lugar seguro que eu não tive — sem enxurrada de informação, sem comparação, sem mais um curso que você sabe que não vai fazer. Só a resposta certa, na hora certa, sem julgamento.
          </p>
        </div>

        <div
          className="mt-[30px] grid grid-cols-[auto_1fr] items-center gap-[22px] pt-6"
          style={{ borderTop: "1px solid rgba(95,75,62,0.14)" }}
        >
          <img
            src="/tatiana.jpg"
            alt="Tatiana Junco, fundadora da NeuroMãe"
            loading="lazy"
            decoding="async"
            className="rounded-full border-2 border-brown/10"
            style={{
              width: "110px",
              height: "110px",
              objectFit: "cover",
              boxShadow: "0 10px 28px rgba(70,55,44,0.12)",
              background: "rgba(255,248,241,0.5)",
            }}
          />
          <div className="flex min-w-0 flex-col gap-[5px]">
            <span
              className="font-serif font-medium text-brown"
              style={{ fontSize: "26px", lineHeight: 1 }}
            >
              Tatiana Junco
            </span>
            <span
              className="text-muted"
              style={{ fontSize: "13px", letterSpacing: "0.02em", lineHeight: 1.5 }}
            >
              psicopedagoga em formação · pós-graduada em neurociência comportamental
            </span>
            <a
              href="https://instagram.com/neuromaeia"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 self-start font-bold text-olive-2 transition hover:text-olive"
              style={{
                fontSize: "14px",
                borderBottom: "1px solid rgba(102,114,84,0.3)",
                paddingBottom: "2px",
              }}
            >
              @neuromaeia <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
