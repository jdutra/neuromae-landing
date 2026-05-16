/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL do endpoint de backend pra postar registros de consent LGPD. Opcional. */
  readonly VITE_CONSENT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
