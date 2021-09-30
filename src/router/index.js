import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/month",
    name: "Month",
    component: () => import("../views/Month.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/month/:id",
    name: "MonthSelected",
    component: () => import("../views/MonthSelected.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const usuario = localStorage.getItem("User");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = JSON.parse(usuario);
    user && user.txtRegister ? next() : next({ path: "/Login" });
  } else {
    next();
  }
});

export default router;
