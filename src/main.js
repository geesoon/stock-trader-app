import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./route.js";
import store from "./store/store";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuejs-stock-trader-97a83.firebaseio.com/";

Vue.filter("currency", (value) => {
  return "$" + value.toLocaleString();
});

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
