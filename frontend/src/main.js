
import { createApp } from 'vue'
import { createPinia } from "pinia";
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import router from "./router";

// SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

//config axios
import './axios.config'

import './assets/main.css'
import "flowbite/dist/flowbite.css";
// import "@fortawesome/fontawesome-free/css/all.css";

const pinia = createPinia();
const app = createApp(App);

app.use(VueSweetalert2);
app.use(pinia);
app.use(router);
app.use(MotionPlugin);
app.mount('#app')
