import * as VueRouter from 'vue-router';
import SignIn from "./pages/login"

const routes = [
    {
        path: '/',
        component: { SignIn },
    },
]

export default routes;