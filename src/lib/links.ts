// Link único do WhatsApp — preserva número atual e usa copy da GABA.
// O redirecionamento real só acontece DEPOIS do aceite LGPD (ver useConsentGate).
export const WA_LINK =
  "https://wa.me/5543988264917?text=" +
  encodeURIComponent("Oi, quero experimentar a GABA");
