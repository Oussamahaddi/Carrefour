//config axios
import "./axios.config";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";

import Toast from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// SweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "./assets/main.css";
import "flowbite/dist/flowbite.css";

const pinia = createPinia();
const app = createApp(App);

app.use(Toast);
app.use(VueSweetalert2);
app.use(pinia);
app.use(router);
app.use(MotionPlugin);
app.mount("#app");
