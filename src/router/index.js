import Vue from "vue";
import VueRouter from "vue-router";
import VuePageTransition from "vue-page-transition";

import VueParticles from "vue-particles";
Vue.use(VueParticles);

Vue.use(VuePageTransition);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: function() {
      return import("../views/About.vue");
    },
  },
  {
    path: "/work",
    name: "Work",
    component: function() {
      return import("../views/Work.vue");
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: function() {
      return import("../views/Contact.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
