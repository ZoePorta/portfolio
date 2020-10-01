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
    <article
      :style="pposition"
      v-for="work in works"
      :key="work.id"
      class="work"
    >
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
        <a
          :href="work.github"
          title="Ver repositorio en GitHub"
          target="_blank"
          rel="noopener noreferrer"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
        <a
          :href="work.link"
          v-if="work.link"
          title="Visitar proyecto"
          target="_blank"
          rel="noopener noreferrer"
          ><font-awesome-icon icon="eye"
        /></a>
        <span v-else><font-awesome-icon icon="eye-slash"/></span>
      </nav>
    </article>
    <p>
      <vue-typer
        class="port"
        :repeat="0"
        :pre-type-delay="2000"
        :type-delay="80"
        caret-animation="solid"
        text="Y, por supuesto, este mismo portfolio..."
      ></vue-typer>
      <a
        class="port"
        href="https://github.com/ZoePorta/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        title="Ver repositorio en GitHub"
        ><font-awesome-icon :icon="['fab', 'github']"
      /></a>
    </p>
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

      /* parallax parameters */
      pposition: {
        right: 0,
        bottom: 0,
      },
      pdist: 0.5,
    };
  },
  methods: {
    getImage(img) {
      return require("../assets/images/" + img);
    },
    parallax(event) {
      let w = window.innerWidth;
      let h = window.innerHeight;
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      this.pposition = {
        right: this.pdist * 2 * (mouseX / w) - this.pdist + "rem",
        bottom: this.pdist * 2 * (mouseY / h) - this.pdist + "rem",
      };
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.parallax);
  },
};
</script>

<style src="vue-flipper/dist/vue-flipper.css"></style>
<style scoped>
.work {
  width: fit-content;
  display: inline-block;
  margin: 1rem;
  position: relative;
}

.card {
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

.port {
  display: inline-block;
}

nav {
  margin: 0.7rem;
}

nav a,
nav span {
  margin: 0 0.5rem;
}
</style>
