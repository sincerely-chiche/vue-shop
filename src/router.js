import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";
import { db, fb } from "./firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      meta: { requireAuth: true },
      component: () => import("./views/Admin.vue"),
      children: [
        {
          path: "overview",
          name: "overview",
          component: () => import("./views/admin/Overview.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () => import("./views/admin/Products.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("./views/admin/Orders.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (store.getters.getUser.uid == undefined && to.path.includes("/admin")) {
    next("/");
  } else if (
    store.getters.getUser.uid != undefined &&
    !to.path.includes("/admin")
  ) {
    next("/admin/overview");
  }
  next();
});

export default router;
