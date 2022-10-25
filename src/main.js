import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import FormView from "@/components/FormView.vue";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.component("PrimeButton", Button);
app.component("FormView", FormView);

app.mount("#app");
