import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";
import "primevue/resources/primevue.min.css"; //theme
import "primevue/resources/themes/lara-dark-indigo/theme.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import Tooltip from "primevue/tooltip";

import router from "./router";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.directive("tooltip", Tooltip);
app.mount("#app");
