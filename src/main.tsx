import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";
import "./index.css";

import "virtual:vite-plugin-sentry/sentry-config";
const dist = import.meta.env.VITE_PLUGIN_SENTRY_CONFIG.dist;
const release = import.meta.env.VITE_PLUGIN_SENTRY_CONFIG.release;

const isProd = import.meta.env.VITE_PROD;
const dsn = import.meta.env.VITE_SENTRY_DSN;

if (isProd) {
  Sentry.init({
    dsn,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    dist,
    release,
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
