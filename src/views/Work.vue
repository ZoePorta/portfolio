<template>
  <div class="works">
    <h1>Algunas de las cosillas que he hecho...</h1>
    <p>Haz click en las imágenes para más información</p>
    <article v-for="work in works" :key="work.id" class="work">
      <h1>{{ work.title }}</h1>
      <h2>{{ work.tech }}</h2>
      <flipper
        class="card"
        width="21rem"
        height="22.9rem"
        :flipped="work.flipped"
        @click="work.flipped = !work.flipped"
      >
        <div class="cardside front" slot="front">
          <img :src="getImage(work.image)" :alt="work.title" />
        </div>

        <div class="cardside back" slot="back" v-html="work.desc">
          {{ work.desc }}
        </div>
      </flipper>
      <nav>
        <a :href="work.github" title="Ver repositorio en GitHub"
          ><font-awesome-icon :icon="['fab', 'github-alt']"
        /></a>
        <a :href="work.link" v-if="work.link" title="Visitar proyecto"
          ><font-awesome-icon icon="eye"
        /></a>
        <span v-else><font-awesome-icon icon="eye-slash"/></span>
      </nav>
    </article>
  </div>
</template>

<script>
import Flipper from "vue-flipper";
import worksjson from "@/assets/works.json";

export default {
  name: "Work",
  components: { Flipper },
  data() {
    return {
      works: worksjson,
    };
  },
  methods: {
    onClick() {
      this.flipped = !this.flipped;
    },
    getImage(img) {
      return require("../assets/images/" + img);
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
  box-shadow: var(--shadow);
  height: 100%;
  width: 100%;

  border-radius: 1rem;

  pointer-events: auto;
}

.back {
  background: var(--block-bg-color);
}

.cardside img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  border-radius: 1rem;
}
</style>
