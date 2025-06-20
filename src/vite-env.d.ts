/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PUBLIC_TURNSTILE_KEY: string;
  readonly VITE_PUBLIC_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
