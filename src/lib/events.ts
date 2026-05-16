/**
 * Camada fina de eventos / analytics da landing.
 *
 * Hoje só faz console.debug e dispara um CustomEvent no `window`
 * (consumível por qualquer pixel/analytics futuro: GA, Meta, PostHog, etc).
 *
 * Quando algum provedor for plugado, basta interceptar o `window.addEventListener('gaba:event', ...)`
 * — toda a landing já dispara os eventos certos.
 */

export type EventName =
  | "cta_clicked"           // qualquer clique em um CTA primário (antes do consent gate)
  | "consent_modal_opened"  // modal LGPD apareceu
  | "consent_modal_closed"  // fechou sem aceitar
  | "consent_accepted_terms"
  | "consent_accepted_privacy"
  | "consent_accepted_lgpd"
  | "consent_completed"     // os 3 checkboxes aceitos + clique no CTA do modal
  | "whatsapp_opened"       // redirecionou pro WhatsApp
  | "trial_started"         // (futuro — quando o backend confirmar)
  | "trial_cancelled"       // (futuro)
  | "data_deletion_requested"; // (futuro)

export interface EventPayload {
  channel?: string;
  [key: string]: unknown;
}

export function track(event: EventName, payload: EventPayload = {}): void {
  const detail = {
    event,
    ts: new Date().toISOString(),
    ...payload,
  };

  // eslint-disable-next-line no-console
  if (typeof console !== "undefined") {
    console.debug("[gaba:event]", detail);
  }

  if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") {
    try {
      window.dispatchEvent(new CustomEvent("gaba:event", { detail }));
    } catch {
      // ignore — alguns runtimes sem CustomEvent
    }
  }
}
