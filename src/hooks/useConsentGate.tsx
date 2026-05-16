import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  hasValidConsent,
  logConsent,
  type ConsentChannel,
} from "../lib/consent";
import { track } from "../lib/events";
import { WA_LINK } from "../lib/links";

/**
 * Context que controla o "gate" de consent LGPD.
 *
 * Como funciona:
 *  1. Qualquer CTA da landing chama `requestWhatsApp(channel)` em vez de fazer
 *     `<a href={WA_LINK}>` direto.
 *  2. Se o usuário já tem aceite válido (versão atual de Termos+Privacidade+LGPD),
 *     o redirecionamento pro WhatsApp acontece imediatamente.
 *  3. Se não tem, o ConsentModal abre. Quando o usuário aceita os 3 checkboxes,
 *     o aceite é gravado e só então abrimos o WhatsApp.
 *
 * Princípios:
 *  - Sem aceite válido, nenhum redirecionamento para WhatsApp acontece.
 *  - O modal é controlado, não imperativo — o ConsentModal renderiza sempre
 *    dentro do Provider e reage a `isOpen`.
 */

interface ConsentGateContextValue {
  isOpen: boolean;
  channel: ConsentChannel;
  /** Disparado por qualquer CTA pra abrir/fechar o consent gate */
  requestWhatsApp: (channel: ConsentChannel) => void;
  /** Fecha o modal sem aceite (cancela o flow) */
  closeModal: () => void;
  /** Confirma o aceite e segue pra abertura do WhatsApp */
  acceptAndContinue: (input: {
    acceptedTerms: boolean;
    acceptedPrivacy: boolean;
    acceptedLgpd: boolean;
  }) => Promise<void>;
}

const ConsentGateContext = createContext<ConsentGateContextValue | null>(null);

export function ConsentGateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [channel, setChannel] = useState<ConsentChannel>("other");
  const pendingChannelRef = useRef<ConsentChannel>("other");

  // Bloqueia scroll do body quando o modal está aberto
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  const openWhatsApp = useCallback((via: ConsentChannel) => {
    track("whatsapp_opened", { channel: via });
    if (typeof window !== "undefined") {
      window.open(WA_LINK, "_blank", "noopener,noreferrer");
    }
  }, []);

  const requestWhatsApp = useCallback(
    (via: ConsentChannel) => {
      track("cta_clicked", { channel: via });
      pendingChannelRef.current = via;
      setChannel(via);

      if (hasValidConsent()) {
        openWhatsApp(via);
        return;
      }
      track("consent_modal_opened", { channel: via });
      setIsOpen(true);
    },
    [openWhatsApp]
  );

  const closeModal = useCallback(() => {
    track("consent_modal_closed", { channel });
    setIsOpen(false);
  }, [channel]);

  const acceptAndContinue = useCallback(
    async (input: {
      acceptedTerms: boolean;
      acceptedPrivacy: boolean;
      acceptedLgpd: boolean;
    }) => {
      if (!input.acceptedTerms || !input.acceptedPrivacy || !input.acceptedLgpd) {
        return;
      }
      if (input.acceptedTerms) track("consent_accepted_terms", { channel });
      if (input.acceptedPrivacy) track("consent_accepted_privacy", { channel });
      if (input.acceptedLgpd) track("consent_accepted_lgpd", { channel });

      await logConsent({
        acceptedTerms: input.acceptedTerms,
        acceptedPrivacy: input.acceptedPrivacy,
        acceptedLgpd: input.acceptedLgpd,
        channel,
      });
      track("consent_completed", { channel });
      setIsOpen(false);
      openWhatsApp(channel);
    },
    [channel, openWhatsApp]
  );

  const value = useMemo<ConsentGateContextValue>(
    () => ({ isOpen, channel, requestWhatsApp, closeModal, acceptAndContinue }),
    [isOpen, channel, requestWhatsApp, closeModal, acceptAndContinue]
  );

  return (
    <ConsentGateContext.Provider value={value}>
      {children}
    </ConsentGateContext.Provider>
  );
}

export function useConsentGate(): ConsentGateContextValue {
  const ctx = useContext(ConsentGateContext);
  if (!ctx) {
    throw new Error("useConsentGate precisa ser usado dentro de <ConsentGateProvider>");
  }
  return ctx;
}
