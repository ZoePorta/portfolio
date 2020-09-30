<template>
  <div class="works">
    <vue-headful
      title="Proyectos"
      description="Descripción y enlaces a algunos de mis proyectos."
    />
    <vue-typer
      :repeat="0"
      :pre-type-delay="120"
      :type-delay="80"
      caret-animation="solid"
      text="Algunas cosillas..."
    ></vue-typer>
    <article v-for="work in works" :key="work.id" class="work">
      <h1>{{ work.title }}</h1>
      <h2>{{ work.tech }}</h2>

      <flipper
        class="card"
        width="21rem"
        height="22.9rem"
        :flipped="work.flipped"
        @mouseover="work.flipped = true"
        @mouseleave="work.flipped = false"
      >
        <div class="cardside front" slot="front">
          <img :src="getImage(work.image)" :alt="work.title" />
        </div>

        <div class="cardside back" slot="back" v-html="work.desc">
          <span>{{ work.desc }}</span>
        </div>
      </flipper>
      <nav>
        <a :href="work.github" title="Ver repositorio en GitHub"
          ><font-awesome-icon :icon="['fab', 'github']"
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
  margin: 1rem;
}

.cardside {
  box-shadow: var(--shadow);
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  pointer-events: auto;
  padding: 1rem;
  text-align: justify;
}

.back {
  background: var(--block-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cardside img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  border-radius: 1rem;
}

nav {
  margin: 0.7rem;
}

nav a,
nav span {
  margin: 0 0.5rem;
}
</style>
