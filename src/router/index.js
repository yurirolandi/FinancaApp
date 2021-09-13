import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/month",
    name: "Month",
    component: () => import("../views/Month.vue"),
  },
  {
    path: "/month/:id",
    name: "MonthSelected",
    component: () => import("../views/MonthSelected.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
