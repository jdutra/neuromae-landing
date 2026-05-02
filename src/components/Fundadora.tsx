export function Fundadora() {
  return (
    <section
      id="fundadora"
      className="border-b border-brown/8"
      style={{ padding: "84px 0", background: "rgba(255,248,241,0.34)" }}
    >
      <div className="wrap">
        {/* Cabeçalho centralizado */}
        <div className="mx-auto flex flex-col items-center gap-3 text-center" style={{ maxWidth: "640px" }}>
          <span
            className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-1.5 text-[11px] font-black uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Quem está por trás
          </span>
          <h2
            className="font-serif font-medium text-ink"
            style={{
              fontSize: "clamp(28px, 3.2vw, 42px)",
              lineHeight: 1.05,
              letterSpacing: "-0.026em",
              margin: 0,
            }}
          >
            Por que a NeuroMãe existe.
          </h2>
        </div>

        {/* Linha divisória editorial */}
        <div
          aria-hidden="true"
          className="mx-auto my-10 h-px md:my-12"
          style={{
            maxWidth: "100px",
            background: "linear-gradient(90deg, transparent, rgba(184,121,103,0.50), transparent)",
          }}
        />

        {/* Texto biográfico — coluna única editorial */}
        <div
          className="mx-auto flex flex-col gap-5 text-[17px] text-muted"
          style={{ maxWidth: "640px", lineHeight: 1.7 }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(20px, 2vw, 24px)",
              lineHeight: 1.4,
              color: "#5F4B3E",
              margin: 0,
            }}
          >
            Eu sou Tatiana. Mãe atípica, como você.
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

        {/* Bloco de destaque: retrato + citação lado a lado */}
        <div
          className="mx-auto mt-12 flex flex-col items-center gap-8 md:mt-14 md:grid md:items-center md:gap-10"
          style={{
            maxWidth: "920px",
            gridTemplateColumns: "minmax(200px, 240px) minmax(0, 1fr)",
          }}
        >
          {/* Retrato + identificação */}
          <aside className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(216,167,161,0.30) 0%, rgba(216,167,161,0.10) 50%, transparent 75%)",
                  filter: "blur(28px)",
                  transform: "scale(1.25)",
                }}
              />
              <img
                src="/tatiana.jpg"
                alt="Tatiana Junco, fundadora da NeuroMãe"
                loading="lazy"
                decoding="async"
                width={180}
                height={180}
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid rgba(255,248,241,0.85)",
                  boxShadow: "0 18px 44px rgba(70,55,44,0.14)",
                }}
              />
            </div>
            <div className="mt-1 flex flex-col items-center gap-1 md:items-start">
              <span
                className="font-serif font-medium text-brown"
                style={{ fontSize: "19px", letterSpacing: "-0.01em", lineHeight: 1.2 }}
              >
                Tatiana Junco
              </span>
              <span
                className="text-[12.5px] text-muted"
                style={{ lineHeight: 1.45, maxWidth: "240px" }}
              >
                psicopedagoga em formação · pós-graduada em neurociência comportamental
              </span>
              <a
                href="https://instagram.com/neuromaeia"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 rounded-full border border-olive/20 bg-olive/10 px-3 py-1 text-[12px] font-extrabold text-olive-2"
              >
                @neuromaeia <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>

          {/* Citação — mantida intacta */}
          <blockquote
            className="relative rounded-r-[14px] border-l-[3px] py-1 pl-6 pr-4 md:py-2 md:pl-8"
            style={{
              borderColor: "#B87967",
              background: "linear-gradient(90deg, rgba(216,167,161,0.08) 0%, rgba(216,167,161,0) 70%)",
              margin: 0,
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute select-none"
              style={{
                left: "18px",
                top: "-12px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "62px",
                lineHeight: 1,
                color: "rgba(184,121,103,0.32)",
                fontWeight: 600,
              }}
            >
              “
            </span>

            <div
              className="relative flex flex-col gap-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#5F4B3E",
              }}
            >
              <p>
                Eu só consegui me reerguer quando integrei três coisas:{" "}
                <strong style={{ fontStyle: "normal" }}>ciência</strong> — práticas reais e comprovadas em neurodesenvolvimento, sem fórmula mágica, sem achismo ou crendice, sem terapia que não se sustenta na evidência;{" "}
                <strong style={{ fontStyle: "normal" }}>estoicismo</strong> — a sabedoria antiga de aceitar que sofrer faz parte da vida, mas como você atravessa é o que te forma; e{" "}
                <strong style={{ fontStyle: "normal" }}>fé</strong> — independente da crença, é esse lado transcendente, que existe algo maior que tudo, que sustenta quando nada mais sustenta.
              </p>

              <p style={{ fontStyle: "normal", fontWeight: 500 }}>
                Isso significa que não sofro mais? Que tudo ficou perfeito?
              </p>

              <p>
                Longe disso. Significa que quando o sofrimento vem, eu não me perco mais nele. Caio, sofro (choro, grito, me questiono), mas a cada dia esse período de “lamentação” se encurta, porque já sei como retomar o caminho.”
              </p>
            </div>
          </blockquote>
        </div>

        {/* Bloco de fechamento — diagrama sináptico dos pilares */}
        <div className="mx-auto mt-14 flex flex-col items-center text-center" style={{ maxWidth: "780px" }}>
          <div
            aria-hidden="true"
            className="mb-7 h-px"
            style={{ width: "60px", background: "rgba(184,121,103,0.40)" }}
          />
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 500,
              fontSize: "clamp(26px, 2.8vw, 34px)",
              lineHeight: 1.2,
              color: "#B87967",
              letterSpacing: "-0.02em",
              margin: "0 0 8px",
            }}
          >
            Esses são os pilares da{" "}
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 400,
                letterSpacing: "0.10em",
                fontSize: "0.88em",
              }}
            >
              GABA
            </span>
            !
          </p>

          {/* Diagrama: símbolo GABAIA com 6 bolinhas labeladas */}
          <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
            <svg
              viewBox="0 60 700 360"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Símbolo da GABAIA com os 6 pilares conectados"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              {/* Linhas de conexão de cada bolinha labelada até o texto */}
              <g stroke="rgba(184,121,103,0.40)" strokeWidth="0.7" fill="none">
                <line x1="405" y1="128" x2="405" y2="100" />
                <line x1="430" y1="192" x2="468" y2="192" />
                <line x1="423" y1="258" x2="468" y2="278" />
                <line x1="368" y1="286" x2="368" y2="320" />
                <line x1="288" y1="270" x2="245" y2="290" />
                <line x1="264" y1="218" x2="225" y2="218" />
              </g>

              {/* Símbolo (do lockup vertical) */}
              <g transform="translate(250, 100)">
                {/* 8 satélites — labeladas em sage médio, decorativas em sage claro */}
                <circle cx="50" cy="40" r="2.2" fill="#A8B5A2" opacity="0.7" />
                <circle cx="155" cy="28" r="3" fill="#8B9476" />
                <circle cx="180" cy="92" r="3" fill="#8B9476" />
                <circle cx="173" cy="158" r="3" fill="#8B9476" />
                <circle cx="118" cy="186" r="3" fill="#8B9476" />
                <circle cx="38" cy="170" r="3" fill="#8B9476" />
                <circle cx="14" cy="118" r="3" fill="#8B9476" />
                <circle cx="22" cy="62" r="2" fill="#A8B5A2" opacity="0.7" />

                {/* Anel decorativo */}
                <circle cx="100" cy="100" r="86" fill="none" stroke="#C9B7A6" strokeWidth="0.6" opacity="0.5" />

                {/* Pétalas + linhas + dots especiais + miolo */}
                <g transform="translate(100,100)">
                  <path d="M -45.7,-65.6 A 80,80 0 0 1 45.7,-65.6 L 13.7,-19.7 A 24,24 0 0 0 -13.7,-19.7 Z" fill="#D5C4B4" />
                  <g transform="rotate(72)"><path d="M -45.7,-65.6 A 80,80 0 0 1 45.7,-65.6 L 13.7,-19.7 A 24,24 0 0 0 -13.7,-19.7 Z" fill="#E0B5B0" /></g>
                  <g transform="rotate(144)"><path d="M -45.7,-65.6 A 80,80 0 0 1 45.7,-65.6 L 13.7,-19.7 A 24,24 0 0 0 -13.7,-19.7 Z" fill="#B5C0AE" /></g>
                  <g transform="rotate(216)"><path d="M -45.7,-65.6 A 80,80 0 0 1 45.7,-65.6 L 13.7,-19.7 A 24,24 0 0 0 -13.7,-19.7 Z" fill="#E0B5B0" /></g>
                  <g transform="rotate(288)"><path d="M -45.7,-65.6 A 80,80 0 0 1 45.7,-65.6 L 13.7,-19.7 A 24,24 0 0 0 -13.7,-19.7 Z" fill="#B5C0AE" /></g>
                  <line x1="0" y1="-19" x2="0" y2="-80" stroke="#EFE7DD" strokeWidth="1.2" transform="rotate(36)" />
                  <line x1="0" y1="-19" x2="0" y2="-80" stroke="#EFE7DD" strokeWidth="1.2" transform="rotate(108)" />
                  <line x1="0" y1="-19" x2="0" y2="-80" stroke="#EFE7DD" strokeWidth="1.2" transform="rotate(180)" />
                  <line x1="0" y1="-19" x2="0" y2="-80" stroke="#EFE7DD" strokeWidth="1.2" transform="rotate(252)" />
                  <line x1="0" y1="-19" x2="0" y2="-80" stroke="#EFE7DD" strokeWidth="1.2" transform="rotate(324)" />
                  <g transform="rotate(108)"><circle cx="0" cy="-80" r="4" fill="#EFE7DD" /><circle cx="0" cy="-80" r="2.2" fill="#8B7565" /></g>
                  <g transform="rotate(252)"><circle cx="0" cy="-80" r="4" fill="#EFE7DD" /><circle cx="0" cy="-80" r="2.2" fill="#8B7565" /></g>
                  <circle cx="0" cy="0" r="22" fill="#EFE7DD" />
                  <circle cx="0" cy="0" r="6" fill="#8B7565" />
                </g>
              </g>

              {/* Labels — Playfair maiúsculo igual à wordmark GABAIA */}
              <g
                fontFamily="'Playfair Display', Georgia, serif"
                fontSize="14"
                fontWeight="400"
                fill="#6B5547"
                letterSpacing="2"
              >
                <text x="405" y="92" textAnchor="middle">REAL</text>
                <text x="475" y="196" textAnchor="start">MILENAR</text>
                <text x="475" y="276" textAnchor="start">ACOMPANHANDO</text>
                <text x="475" y="293" textAnchor="start">O FUTURO</text>
                <text x="368" y="338" textAnchor="middle">SENDO ÚTIL</text>
                <text x="240" y="296" textAnchor="end">NEM PERMISSIVO</text>
                <text x="220" y="222" textAnchor="end">NEM RÍGIDO</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
