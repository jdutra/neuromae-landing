import { useEffect, useRef, useState } from "react";
import { useConsentGate } from "../hooks/useConsentGate";

/**
 * Modal premium de consentimento LGPD.
 *
 * - Aparece antes de qualquer redirecionamento ao WhatsApp.
 * - 3 checkboxes obrigatórios, não pré-marcados.
 * - CTA bloqueado até os 3 aceites.
 * - Visual NeuroMãe: cream + bege + terracotta, Playfair + Inter.
 * - Animação suave de fade-in/scale via CSS (respeita prefers-reduced-motion).
 * - Fechável com ESC e backdrop click.
 */

const FADE_IN_MS = 220;

export function ConsentModal() {
  const { isOpen, closeModal, acceptAndContinue } = useConsentGate();
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [lgpd, setLgpd] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFocusRef = useRef<HTMLButtonElement | null>(null);

  // Reset estado a cada abertura
  useEffect(() => {
    if (isOpen) {
      setTerms(false);
      setPrivacy(false);
      setLgpd(false);
      setSubmitting(false);
      // foco no botão "fechar" pra leitor de tela ancorar
      const id = window.setTimeout(() => firstFocusRef.current?.focus(), 80);
      return () => window.clearTimeout(id);
    }
  }, [isOpen]);

  // ESC fecha
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const allAccepted = terms && privacy && lgpd;

  const handleSubmit = async () => {
    if (!allAccepted || submitting) return;
    setSubmitting(true);
    try {
      await acceptAndContinue({
        acceptedTerms: terms,
        acceptedPrivacy: privacy,
        acceptedLgpd: lgpd,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-modal-title"
      aria-describedby="consent-modal-desc"
      className="fixed inset-0 z-50 flex items-end justify-center px-3 py-4 sm:items-center sm:px-6 sm:py-8"
      style={{
        background: "rgba(64, 53, 46, 0.46)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: `gabaFadeIn ${FADE_IN_MS}ms ease-out forwards`,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      {/* keyframes inline — sem precisar editar index.css */}
      <style>{`
        @keyframes gabaFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes gabaScaleIn {
          from { opacity: 0; transform: translateY(12px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .gaba-consent-card { animation: none !important; }
        }
      `}</style>

      <div
        ref={dialogRef}
        className="gaba-consent-card relative w-full overflow-hidden rounded-[24px] border border-brown/10 sm:max-w-[520px]"
        style={{
          background: "#FFF8F1",
          boxShadow: "0 32px 80px rgba(70,55,44,0.28), 0 8px 24px rgba(70,55,44,0.10)",
          animation: `gabaScaleIn ${FADE_IN_MS}ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
        }}
      >
        {/* Cabeçalho com glow editorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[120px]"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(216,167,161,0.28) 0%, rgba(216,167,161,0.08) 50%, transparent 80%)",
          }}
        />

        <div className="relative px-6 pt-7 pb-6 sm:px-8 sm:pt-8 sm:pb-7">
          {/* Botão fechar */}
          <button
            ref={firstFocusRef}
            type="button"
            onClick={closeModal}
            aria-label="Fechar"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-brown/8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Kicker */}
          <span
            className="inline-flex items-center gap-2 rounded-full bg-olive/10 px-3 py-1.5 text-[10.5px] font-extrabold uppercase text-olive-2"
            style={{ letterSpacing: "0.12em" }}
          >
            Antes de começar
          </span>

          {/* Título */}
          <h2
            id="consent-modal-title"
            className="mt-3 font-serif font-medium text-ink"
            style={{ fontSize: "clamp(22px, 2.6vw, 28px)", lineHeight: 1.18, letterSpacing: "-0.02em" }}
          >
            Como a <span className="gaba-name" style={{ fontWeight: 400, letterSpacing: "0.16em" }}>GABA</span> funciona, em uma respirada.
          </h2>

          {/* Descrição editorial */}
          <p
            id="consent-modal-desc"
            className="mt-3 text-[14.5px] text-muted"
            style={{ lineHeight: 1.6 }}
          >
            A GABA é uma assistente virtual baseada em inteligência artificial, criada para
            acolher, organizar informações e apoiar mães na rotina diária.
          </p>

          {/* Limites — caixa terracotta suave */}
          <div
            className="mt-4 rounded-[16px] border px-4 py-3 text-[13.5px]"
            style={{
              background: "rgba(216,167,161,0.10)",
              borderColor: "rgba(184,121,103,0.22)",
              color: "#5F4B3E",
              lineHeight: 1.55,
            }}
          >
            <p className="font-bold" style={{ color: "#8B5949", letterSpacing: "-0.005em" }}>
              Importante saber:
            </p>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[7px] flex-none rounded-full"
                  style={{ width: "5px", height: "5px", background: "#A86E60" }}
                />
                <span>
                  A GABA <strong>não substitui</strong> médicos, psicólogos, terapeutas,
                  diagnósticos ou atendimento emergencial.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[7px] flex-none rounded-full"
                  style={{ width: "5px", height: "5px", background: "#A86E60" }}
                />
                <span>Uso destinado a <strong>maiores de 18 anos</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Checkboxes */}
          <div className="mt-5 flex flex-col gap-3">
            <CheckboxRow
              id="consent-terms"
              checked={terms}
              onChange={setTerms}
              label={
                <>
                  Li e concordo com os{" "}
                  <a
                    href="/termos-de-uso/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-olive-2 underline decoration-olive-2/30 underline-offset-2 hover:decoration-olive-2"
                  >
                    Termos de Uso
                  </a>
                  .
                </>
              }
            />
            <CheckboxRow
              id="consent-privacy"
              checked={privacy}
              onChange={setPrivacy}
              label={
                <>
                  Li a{" "}
                  <a
                    href="/politica-de-privacidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-olive-2 underline decoration-olive-2/30 underline-offset-2 hover:decoration-olive-2"
                  >
                    Política de Privacidade
                  </a>
                  .
                </>
              }
            />
            <CheckboxRow
              id="consent-lgpd"
              checked={lgpd}
              onChange={setLgpd}
              label={<>Autorizo o tratamento dos meus dados conforme a LGPD.</>}
            />
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              disabled={!allAccepted || submitting}
              onClick={handleSubmit}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-extrabold text-cream-2 transition"
              style={{
                background: allAccepted
                  ? "linear-gradient(180deg,#667254,#586348)"
                  : "rgba(95,75,62,0.18)",
                color: allAccepted ? "#FFF8F1" : "#8F8176",
                cursor: allAccepted ? "pointer" : "not-allowed",
                letterSpacing: "-0.005em",
                fontSize: "15px",
                boxShadow: allAccepted ? "0 14px 30px rgba(88,99,72,0.22)" : "none",
              }}
            >
              {submitting ? "Abrindo conversa…" : "Conversar com a GABA"}{" "}
              {!submitting && allAccepted && <span aria-hidden="true">→</span>}
            </button>

            <p className="text-center text-[12px] text-soft" style={{ lineHeight: 1.5 }}>
              Em situações de emergência ou risco imediato, procure suporte profissional ou
              serviço de emergência (<strong>SAMU 192</strong>, <strong>CVV 188</strong>).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CheckboxRowProps {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  label: React.ReactNode;
}

function CheckboxRow({ id, checked, onChange, label }: CheckboxRowProps) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-start gap-3 rounded-[14px] border px-3.5 py-3 text-[13.5px] transition"
      style={{
        background: checked ? "rgba(102,114,84,0.06)" : "rgba(255,248,241,0.55)",
        borderColor: checked ? "rgba(102,114,84,0.32)" : "rgba(95,75,62,0.12)",
        color: "#5D5047",
        lineHeight: 1.5,
      }}
    >
      <span
        className="relative mt-[2px] inline-flex h-5 w-5 flex-none items-center justify-center rounded-[6px] border transition"
        style={{
          background: checked ? "#586348" : "#FFF8F1",
          borderColor: checked ? "#586348" : "rgba(95,75,62,0.32)",
        }}
        aria-hidden="true"
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFF8F1" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
