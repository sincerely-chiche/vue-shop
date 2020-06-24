import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import store from "./store";
import { fb } from "./firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");

fb.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    store.dispatch("fireSetUser", user);
  } else {
    // User is signed out.
    store.dispatch("fireSetUser", {});
  }
});
