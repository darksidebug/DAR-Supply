// import { createApp } from "vue";



// createApp(App).mount("#app");

require('./bootstrap');

import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import routes from './routes';
import App from "./pages/login";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

Vue.createApp(App).use(router).mount('#app');



// const app = new Vue({
//     el: '#app',
//     router: routes
// });
