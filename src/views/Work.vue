<template>
  <div class="works">
    <article v-for="work in works" :key="work.id" class="work">
      <h1>{{ work.title }}</h1>
      <flipper
        class="card"
        width="21rem"
        height="22.5rem"
        :flipped="work.flipped"
        @click="work.flipped = !work.flipped"
      >
        <div class="cardside front" slot="front">
          <img src="../assets/crafty_phone.jpg" alt="" />
        </div>

        <div class="cardside back" slot="back" v-html="work.desc">
          {{ work.desc }}
        </div>
      </flipper>
      <nav>
        <a :href="work.github"
          ><font-awesome-icon :icon="['fab', 'github-alt']"
        /></a>
        <a :href="work.link"><font-awesome-icon icon="eye"/></a>
      </nav>
    </article>
  </div>
</template>

<script>
import Flipper from "vue-flipper";
import card from "@/components/Card.vue";

export default {
  name: "Work",
  components: { Flipper },
  data() {
    return {
      works: [
        {
          title: "Crafty",
          image: "../assets/crafty_phone.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "http://github.com",
          link: "google.com",
          flipped: false,
        },
        {
          title: "Crafty",
          image: "../assets/crafty_phone.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "http://github.com",
          link: "google.com",
          flipped: false,
        },
        {
          title: "Crafty",
          image: "../assets/crafty_phone.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "http://github.com",
          link: "google.com",
          flipped: false,
        },
        {
          title: "Crafty",
          image: "../assets/crafty_phone.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "http://github.com",
          link: "google.com",
          flipped: false,
        },
      ],
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    },
  },
};
</script>

<style src="vue-flipper/dist/vue-flipper.css"></style>
<style scoped>
.work {
  width: fit-content;
}
.card {
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 5px blue;
  background: blue;
}
.cardside {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
}

.back {
  background: hotpink;
}

.cardside img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
}
</style>
