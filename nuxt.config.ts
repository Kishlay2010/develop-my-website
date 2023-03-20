import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    plugins: [vuetify({ autoImport: true })],
  },
});
