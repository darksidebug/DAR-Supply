require('./bootstrap');

import { createApp } from "vue";
import router from "./router";
import Login from "./components/pages/Login.vue";

createApp({
    components:{
        Login
    }
})
.use(router)
.mount("#app")
