<template>
  <div class="works">
    <h1>Algunas de las cosillas que he hecho...</h1>
    <p>Haz click en las imágenes para más información</p>
    <article v-for="work in works" :key="work.id" class="work">
      <h1>{{ work.title }}</h1>
      <flipper
        class="card"
        width="21rem"
        height="22.9rem"
        :flipped="work.flipped"
        @click="work.flipped = !work.flipped"
      >
        <div class="cardside front" slot="front">
          <img :src="getImage(work.image)" alt="" />
        </div>

        <div class="cardside back" slot="back" v-html="work.desc">
          {{ work.desc }}
        </div>
      </flipper>
      <nav>
        <a :href="work.github"
          ><font-awesome-icon :icon="['fab', 'github-alt']"
        /></a>
        <a :href="work.link" v-if="work.link"
          ><font-awesome-icon icon="eye"
        /></a>
        <span v-else><font-awesome-icon icon="eye-slash"/></span>
      </nav>
    </article>
  </div>
</template>

<script>
import Flipper from "vue-flipper";

export default {
  name: "Work",
  components: { Flipper },
  data() {
    return {
      works: [
        {
          title: "Crafty",
          image: "crafty_phone.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "https://github.com/ZoePorta/Proyecto",
          flipped: false,
        },
        {
          title: "Hack A Music",
          image: "music.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "https://github.com/ZoePorta/hackamusic",
          link: "https://zoe-hackamusic.netlify.app",
          flipped: false,
        },
        {
          title: "Rick & Morty",
          image: "rickmorty.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "https://github.com/ZoePorta/rick-morty-api",
          link: "https://searchchar-rickandmorty.netlify.app",
          flipped: false,
        },
        {
          title: "Juego",
          image: "vuester.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
          github: "https://github.com/ZoePorta/vuester-code",
          link: "https://zoe-vuesterslayer.netlify.app",
          flipped: false,
        },
      ],
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    },
    getImage(img) {
      return require("../assets/" + img);
    },
  },
};
</script>

<style src="vue-flipper/dist/vue-flipper.css"></style>
<style scoped>
.work {
  width: fit-content;
  display: inline-block;
}

.cardside {
  box-shadow: 2px 2px 5px rgba(142, 142, 226, 0.507);
  height: 100%;
  width: 100%;

  border-radius: 1rem;

  pointer-events: auto;
}

.back {
  background: lavender;
}

.cardside img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  border-radius: 1rem;
}
</style>
