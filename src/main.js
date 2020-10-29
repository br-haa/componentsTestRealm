import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import HaaFormComponents from "haa-form/src/main.js";
import HaaMap from "haa-map/src/main.js";
import RandomBackgrounds from "random-backgrounds/src/main.js";
import HaaBody from "haa-body/src/main.js";
import "random-backgrounds/dist/backgrounds.css";
import "haa-form/dist/haa-form.css";
import "haa-map/dist/haa-map.css";
[HaaFormComponents, HaaMap, RandomBackgrounds, HaaBody].forEach(x =>
  Vue.use(x)
);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
