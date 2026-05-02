import { WA_LINK } from "../lib/links";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-20 border-b border-brown/10 backdrop-blur-md"
      style={{ background: "rgba(243,236,227,0.86)" }}
    >
      <div className="wrap flex items-center justify-between gap-5" style={{ height: "76px" }}>
        <a href="#top" aria-label="GABAIA by NeuroMãe" className="flex min-w-0 items-center gap-3">
          <img
            src="/gaba-cafe.png"
            alt=""
            aria-hidden="true"
            width={42}
            height={29}
            className="h-auto w-[42px] flex-none -translate-y-px opacity-90"
            style={{ filter: "sepia(.10) saturate(.86) contrast(.88) drop-shadow(0 6px 14px rgba(70,55,44,.08))" }}
          />
          <span className="flex flex-col justify-center gap-0.5 leading-none">
            <span className="font-serif font-medium text-brown" style={{ fontSize: "31px", lineHeight: ".92", letterSpacing: ".035em" }}>
              GABAIA
            </span>
            <span
              className="hidden text-muted whitespace-nowrap md:block"
              style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: ".13em", marginLeft: "2px" }}
            >
              by NeuroMãe
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-[13px] font-semibold text-muted md:flex">
          <a href="#produto"   className="opacity-80 transition hover:text-brown hover:opacity-100">O que é</a>
          <a href="#funciona"  className="opacity-80 transition hover:text-brown hover:opacity-100">Como funciona</a>
          <a href="#fundadora" className="opacity-80 transition hover:text-brown hover:opacity-100">Quem somos</a>
          <a href="#pricing"   className="opacity-80 transition hover:text-brown hover:opacity-100">Plano</a>
          <a href="#faq"       className="opacity-80 transition hover:text-brown hover:opacity-100">Dúvidas</a>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center justify-center rounded-full border border-olive/20 bg-olive/10 px-4 py-2.5 text-[13px] font-extrabold text-olive-2 md:inline-flex"
        >
          7 dias grátis
        </a>
      </div>
    </nav>
  );
}
