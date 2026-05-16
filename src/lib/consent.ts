/**
 * Sistema de consentimento LGPD da GABA.
 *
 * Persiste aceites do usuário no localStorage e expõe um stub `logConsent`
 * para envio futuro a um endpoint de backend (ainda não existente).
 *
 * Estrutura projetada para:
 *  - versionamento de Termos / Política de Privacidade
 *  - separação granular de cada aceite (Termos, Privacidade, LGPD)
 *  - rastreio mínimo (timestamp, user agent, locale) — sem dados pessoais
 *  - registro de revogação ("apagar tudo") quando o backend existir
 *
 * Quando o backend estiver pronto, basta apontar `CONSENT_ENDPOINT`
 * no .env (VITE_CONSENT_ENDPOINT) e os aceites serão postados via fetch.
 */

export const CONSENT_VERSION = "1.0.0" as const;
export const TERMS_VERSION = "1.0" as const;
export const PRIVACY_VERSION = "1.0" as const;

export const STORAGE_KEY = "neuromae.gaba.consent.v1" as const;

export type ConsentChannel = "whatsapp_cta" | "footer_cta" | "pricing_cta" | "mobile_sticky" | "nav_cta" | "other";

export interface ConsentRecord {
  /** Aceite explícito dos Termos de Uso */
  acceptedTerms: boolean;
  /** Aceite explícito da Política de Privacidade */
  acceptedPrivacy: boolean;
  /** Autorização explícita do tratamento de dados (LGPD) */
  acceptedLgpd: boolean;
  /** Versão dos Termos vigente no momento do aceite */
  termsVersion: string;
  /** Versão da Política de Privacidade vigente no momento do aceite */
  privacyVersion: string;
  /** Versão do schema do próprio registro de consent (este arquivo) */
  consentVersion: string;
  /** Timestamp ISO 8601 do aceite */
  acceptedAt: string;
  /** User agent do navegador no momento do aceite (auditoria) */
  userAgent: string;
  /** Locale do navegador no momento do aceite */
  locale: string;
  /** Origem do clique que disparou o aceite (qual CTA) */
  channel: ConsentChannel;
}

/** Lê o último aceite salvo no navegador. Retorna `null` se nunca aceitou. */
export function getStoredConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    // Se a versão dos Termos ou Privacidade mudou, força novo aceite
    if (
      parsed.termsVersion !== TERMS_VERSION ||
      parsed.privacyVersion !== PRIVACY_VERSION
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/** Indica se o usuário já aceitou todos os 3 itens obrigatórios. */
export function hasValidConsent(): boolean {
  const record = getStoredConsent();
  if (!record) return false;
  return record.acceptedTerms && record.acceptedPrivacy && record.acceptedLgpd;
}

/**
 * Registra o aceite localmente e dispara o envio para o backend (stub).
 *
 * O backend ainda não existe — quando estiver pronto, configure
 * `VITE_CONSENT_ENDPOINT` no .env e o fetch será habilitado automaticamente.
 */
export async function logConsent(input: {
  acceptedTerms: boolean;
  acceptedPrivacy: boolean;
  acceptedLgpd: boolean;
  channel: ConsentChannel;
}): Promise<ConsentRecord> {
  const record: ConsentRecord = {
    acceptedTerms: input.acceptedTerms,
    acceptedPrivacy: input.acceptedPrivacy,
    acceptedLgpd: input.acceptedLgpd,
    termsVersion: TERMS_VERSION,
    privacyVersion: PRIVACY_VERSION,
    consentVersion: CONSENT_VERSION,
    acceptedAt: new Date().toISOString(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    locale: typeof navigator !== "undefined" ? navigator.language : "pt-BR",
    channel: input.channel,
  };

  // 1) Persistência local — fonte de verdade até o backend existir
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    }
  } catch {
    // localStorage pode estar bloqueado (modo anônimo, cookies off) — segue o jogo
  }

  // 2) Envio para o endpoint do backend (stub — só dispara se a env estiver configurada)
  const endpoint = (import.meta.env.VITE_CONSENT_ENDPOINT as string | undefined) ?? "";
  if (endpoint) {
    try {
      // fire-and-forget — não bloqueia a UX
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
        keepalive: true,
      });
    } catch {
      // Falha de rede não invalida o aceite local — backend fica responsável por reconciliação
    }
  }

  return record;
}

/**
 * Remove o aceite local — usado quando o usuário pede "apagar tudo"
 * (deletion request da LGPD). O backend ainda fará o resto do trabalho
 * quando existir.
 */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
