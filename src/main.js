import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueHeadful from "vue-headful";
import VueTyperPlugin from "vue-typer";

Vue.component("vue-headful", vueHeadful);
Vue.use(VueTyperPlugin);

/* Font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEye, faEyeSlash, faGithub);

Vue.component("font-awesome-icon", FontAwesomeIcon);
/* /Font awesome icons */

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(App);
  },
}).$mount("#app");
