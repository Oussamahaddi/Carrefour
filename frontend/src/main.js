import { createApp } from 'vue'
import { createPinia } from "pinia";
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import router from "./router";
// import "./axios";

import './assets/main.css'
import "flowbite/dist/flowbite.css";
// import "@fortawesome/fontawesome-free/css/all.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(MotionPlugin);
app.mount('#app')
