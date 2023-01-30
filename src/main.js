import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faPenToSquare,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store/index";

library.add(faTrash);
library.add(faPenToSquare);
library.add(faCamera);

import Button from "./components/UI/Button.vue";
import Input from "./components/UI/Input.vue";
import Box from "./components/UI/Box.vue";

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("UIButton", Button);
Vue.component("UIInput", Input);
Vue.component("Box", Box);

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
});

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
  router: router,
});
