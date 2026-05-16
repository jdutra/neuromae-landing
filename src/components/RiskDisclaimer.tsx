/**
 * Aviso discreto de risco — usado em FAQ, CTA do Pricing, Footer.
 *
 * Mantém a estética NeuroMãe (sem alarme vermelho) e indica claramente que
 * a GABA não é serviço de emergência. Reforça o redirecionamento humano
 * (SAMU 192, CVV 188) sem entrar em pânico visual.
 */

interface RiskDisclaimerProps {
  variant?: "inline" | "banner" | "footer";
  /** Mensagem custom — se não passar, usa a padrão do briefing */
  children?: React.ReactNode;
}

const DEFAULT_MESSAGE = (
  <>
    Em situações de emergência ou risco imediato, procure suporte profissional
    ou serviço de emergência — <strong>SAMU 192</strong> ou{" "}
    <a
      href="tel:188"
      className="underline decoration-current/40 underline-offset-2 hover:decoration-current"
    >
      CVV 188
    </a>
    .
  </>
);

export function RiskDisclaimer({ variant = "inline", children }: RiskDisclaimerProps) {
  const message = children ?? DEFAULT_MESSAGE;

  if (variant === "banner") {
    return (
      <div
        role="note"
        className="mx-auto flex max-w-[680px] items-start gap-3 rounded-[16px] border px-4 py-3 text-[13px]"
        style={{
          background: "rgba(216,167,161,0.10)",
          borderColor: "rgba(184,121,103,0.22)",
          color: "#5F4B3E",
          lineHeight: 1.55,
        }}
      >
        <span
          aria-hidden="true"
          className="mt-[2px] inline-flex flex-none items-center justify-center rounded-full"
          style={{
            width: "22px",
            height: "22px",
            background: "rgba(184,121,103,0.18)",
            color: "#A86E60",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </span>
        <span>{message}</span>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <p
        role="note"
        className="text-[12px]"
        style={{ lineHeight: 1.6, letterSpacing: "0.01em", color: "#9A8C7E" }}
      >
        {message}
      </p>
    );
  }

  // inline
  return (
    <p
      role="note"
      className="text-center text-[12.5px] text-soft"
      style={{ lineHeight: 1.55 }}
    >
      {message}
    </p>
  );
}
