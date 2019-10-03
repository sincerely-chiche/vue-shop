import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("./views/Admin.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === "/admin") {
    store.commit("changeIsAdmin", true);
  }

  next();
});

export default router;
