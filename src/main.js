import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import HaaFormComponents from "haa-form/src/main.js";
import HaaMap from "haa-map/src/main.js";

import "haa-form/dist/haa-form.css";
import "haa-map/dist/haa-map.css";
Vue.use(HaaFormComponents);
Vue.use(HaaMap);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
