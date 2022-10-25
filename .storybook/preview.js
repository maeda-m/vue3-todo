import { app } from '@storybook/vue3';
import Button from 'primevue/button';
import FormView from "../src/components/FormView.vue";

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

app.component('PrimeButton', Button);
app.component("FormView", FormView);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
