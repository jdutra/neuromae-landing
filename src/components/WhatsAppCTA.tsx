import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { useConsentGate } from "../hooks/useConsentGate";
import type { ConsentChannel } from "../lib/consent";

/**
 * Botão CTA que intercepta o clique e dispara o consent gate.
 *
 * Em vez de `<a href={WA_LINK}>`, use `<WhatsAppCTA channel="hero">…</WhatsAppCTA>`.
 * O redirecionamento pro WhatsApp só acontece depois do aceite LGPD.
 */

interface WhatsAppCTAProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  channel: ConsentChannel;
  children: ReactNode;
  variant?: "primary" | "ghost" | "sticky";
  style?: CSSProperties;
}

export function WhatsAppCTA({
  channel,
  children,
  variant = "primary",
  style,
  className = "",
  ...rest
}: WhatsAppCTAProps) {
  const { requestWhatsApp } = useConsentGate();

  const baseStyle: CSSProperties = (() => {
    if (variant === "ghost") {
      return {
        background: "transparent",
        color: "inherit",
        border: "none",
        padding: 0,
        cursor: "pointer",
        font: "inherit",
      };
    }
    if (variant === "sticky") {
      return {
        background: "linear-gradient(180deg,#667254,#586348)",
        boxShadow: "0 16px 34px rgba(65,56,46,0.24)",
      };
    }
    return {
      background: "linear-gradient(180deg,#667254,#586348)",
      boxShadow: "0 14px 28px rgba(88,99,72,0.24)",
    };
  })();

  return (
    <button
      type="button"
      data-channel={channel}
      onClick={() => requestWhatsApp(channel)}
      className={className}
      style={{ ...baseStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
