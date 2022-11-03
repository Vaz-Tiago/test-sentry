import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteSentry from "vite-plugin-sentry";

import type { ViteSentryPluginOptions } from "vite-plugin-sentry";

// @ts-ignore
const authToken = import.meta.VITE_SENTRY_DSN;

const sentryConfig: ViteSentryPluginOptions = {
  url: "https://sentry.io/",
  authToken,
  org: "iq-d2",
  project: "javascript-react",
  release: "1.0",
  deploy: {
    env: "production",
  },
  setCommits: {
    auto: true,
  },
  sourceMaps: {
    include: ["./dist/assets"],
    ignore: ["node_modules"],
    urlPrefix: "~/assets",
  },
};

export default defineConfig({
  plugins: [viteSentry(sentryConfig), react()],
  build: {
    sourcemap: true,
  },
});
