/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DEV: boolean;
  readonly VITE_PROD: boolean;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SENTRY_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
