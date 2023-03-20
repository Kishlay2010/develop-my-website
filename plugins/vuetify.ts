import { createVuetify, ThemeDefinition } from "vuetify";

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const myAllBlackTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#000000',
    surface: '#000000',
    primary: '#000000',
    'primary-darken-1': '#000000',
    secondary: '#000000',
    'secondary-darken-1': '#000000',
    error: '#000000',
    info: '#000000',
    success: '#000000',
    warning: '#000000',
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
        myAllBlackTheme,
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
