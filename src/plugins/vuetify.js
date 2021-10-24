import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#6200EA",
        secondary: "#B39DDB",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {},
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
  icons: {
    iconfont: "mdi",
    values: {
      map: "mdi-map-maker",
      openWindow: "mdi-open-in-new",
      home: "mdi-home",
      chart: "mdi-chart-histogram",
      calendar: "mdi-calendar-month",
      account: "mdi-account",
      accountCircle: "mdi-account-circle",
      edit: "mdi-pencil",
      delete: "mdi-delete",
    },
  },
});
