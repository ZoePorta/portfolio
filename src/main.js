import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueHeadful from "vue-headful";
import VueTyperPlugin from "vue-typer";
import device from "vue-device-detector";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents, { disableClick: true });

Vue.use(device);
Vue.component("vue-headful", vueHeadful);
Vue.use(VueTyperPlugin);

/* Font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEye, faEnvelope, faGithub, faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);
/* /Font awesome icons */

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(App);
  },
}).$mount("#app");
