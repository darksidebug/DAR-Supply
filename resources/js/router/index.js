import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/pages/Login.vue";
import Voucher from "../components/pages/Voucher.vue";
import AddVoucher from "../components/pages/AddVoucher.vue";
import Rpci from "../components/pages/RPCI.vue";
import StockCard from "../components/pages/StockCard.vue"

const routes = [
    {
        path: "/",
        name: "user.login",
        component: Login
    },
    {
        path: "/supply/voucher",
        name: "supply.voucher",
        component: Voucher
    },
    {
        path: "/supply/add-voucher",
        name: "supply.add-voucher",
        component: AddVoucher
    },
    {
        path: "/supply/rpci",
        name: "supply.rpci",
        component: Rpci
    },
    {
        path: "/supply/stock-card",
        name: "supply.stock-card",
        component: StockCard
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});