import { WA_LINK } from "../lib/links";

export function Footer() {
  return (
    <footer
      className="border-t border-brown/10"
      style={{ background: "rgba(255,248,241,0.46)", padding: "36px 0 96px" }}
    >
      <div className="wrap flex flex-col gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col gap-1">
          <span
            className="font-serif font-medium text-brown"
            style={{ fontSize: "22px", letterSpacing: ".035em", lineHeight: 1 }}
          >
            GABAIA
          </span>
          <span
            className="text-muted"
            style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: ".13em" }}
          >
            by NeuroMãe
          </span>
        </div>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-muted"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 transition hover:text-brown hover:opacity-100"
          >
            Contato
          </a>
          <span className="opacity-50">Privacidade · em breve</span>
          <span className="opacity-50">LGPD · em breve</span>
        </nav>
      </div>

      <p
        className="wrap mt-7 text-center text-[12px] text-soft"
        style={{ maxWidth: "640px", lineHeight: 1.55 }}
      >
        A GABAIA é uma inteligência artificial. Ela apoia você no dia a dia, mas não substitui acompanhamento médico, psicológico ou terapêutico. Em situações de risco, procure um profissional de saúde ou ligue para o CVV (188).
      </p>
    </footer>
  );
}
