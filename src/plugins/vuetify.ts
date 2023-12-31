/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#4436FD",
          secondary: "#6E6B7B",
        },
      },
      dark: {
        colors: {
          primary: "#000000",
          secondary: "#6E6B7B",
        },
      },
    },
  },
});
