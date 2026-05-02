export function Fundadora() {
  return (
    <section
      id="fundadora"
      className="border-b border-brown/8"
      style={{ padding: "72px 0", background: "rgba(255,248,241,0.34)" }}
    >
      <div className="wrap grid items-start gap-12 md:grid-cols-[minmax(0,1.18fr)_minmax(260px,.78fr)]">
        <div>
          <span
            className="mb-[14px] inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-2 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Quem está por trás
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.06, letterSpacing: "-0.026em" }}
          >
            Por que a NeuroMãe existe.
          </h2>

          <div className="mt-7 space-y-[18px] text-[17px] text-muted" style={{ lineHeight: 1.62, maxWidth: "640px" }}>
            <p className="text-[19px] text-brown" style={{ lineHeight: 1.5 }}>
              <strong>Eu sou Tatiana. Mãe atípica, como você.</strong>
            </p>
            <p>
              Meu segundo filho nasceu bem. Aos 45 dias teve uma meningite hospitalar e ficou 21 dias internado. Sobreviveu — com sequelas. TDAH, disfunção sensório-motora, leve deficiência intelectual.
            </p>
            <p>
              Na pandemia, atravessei uma depressão grave. Foi nesse fundo que, aos 38 anos, descobri que eu também sou TDAH. Comecei a estudar psicopedagogia, neurociência comportamental e educação parental porque os profissionais que eu encontrava não conseguiam me responder.
            </p>
            <p>
              <strong className="text-brown">Mas eu tive sorte.</strong> Rede de apoio, condições financeiras, acesso a informação. A maioria das mães atípicas não tem nada disso.
            </p>
            <p>
              A NeuroMãe nasceu pra essas mães. Pra ser o lugar seguro que eu não tive — sem enxurrada de informação, sem comparação, sem mais um curso que você sabe que não vai fazer. Só a resposta certa, na hora certa, sem julgamento.
            </p>
          </div>
        </div>

        <aside
          className="flex flex-col items-center gap-3 rounded-[28px] border border-brown/10 p-6 text-center md:sticky md:top-[100px]"
          style={{ background: "rgba(255,248,241,0.62)", boxShadow: "0 12px 38px rgba(70,55,44,0.06)" }}
        >
          <img
            src="/tatiana.jpg"
            alt="Tatiana Junco, fundadora da NeuroMãe"
            loading="lazy"
            decoding="async"
            width={160}
            height={193}
            className="rounded-[20px] border border-brown/10"
            style={{ width: "160px", height: "auto", objectFit: "cover" }}
          />
          <div className="mt-1 flex flex-col gap-1">
            <span className="font-serif font-medium text-brown" style={{ fontSize: "20px", letterSpacing: "-0.01em" }}>
              Tatiana Junco
            </span>
            <span className="text-[13px] text-muted" style={{ lineHeight: 1.45, maxWidth: "220px" }}>
              psicopedagoga em formação · pós-graduada em neurociência comportamental
            </span>
          </div>
          <a
            href="https://instagram.com/neuromaeia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 rounded-full border border-olive/20 bg-olive/10 px-3 py-1.5 text-[13px] font-extrabold text-olive-2"
          >
            @neuromaeia <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
