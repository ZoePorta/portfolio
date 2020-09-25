import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/* Font awesome icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEye, faEyeSlash, faGithubAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
/* /Font awesome icons */

Vue.config.productionTip = false;

new Vue({
  router,

  render: function(h) {
    return h(App);
  },
}).$mount("#app");
