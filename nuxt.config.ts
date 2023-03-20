import vuetify from "vite-plugin-vuetify";
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

const hmrPort = 24678;
const hmrHost = `${process.env.CODESPACE_NAME}-${hmrPort}.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    server: {
      hmr: {
        host: "0.0.0.0",
        protocol: "wss",
        clientPort: 443,
        port: hmrPort,
      },
    },
    plugins: [
      {
        name: "client-host",
        transform(code, id) {
          if (
            id.endsWith("dist/client/client.mjs") ||
            id.endsWith("dist/client/env.mjs")
          ) {
            return code.replace("__HMR_HOSTNAME__", JSON.stringify(hmrHost));
          }

          return code;
        },
      },
    ],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins?.push(
        vuetify({ autoImport: true, styles: 'sass' })
      )
    }
  }
});
