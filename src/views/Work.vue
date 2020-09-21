<template>
  <div class="work">
    <flipper
      class="test"
      v-for="work in works"
      :key="work.id"
      width="21rem"
      height="22.5rem"
      :flipped="flipped"
      @click="onClick"
    >
      <div class="card front" slot="front">
        <h1>{{ work.title }}</h1>
        <img src="../assets/crafty_phone.jpg" alt="" />
      </div>

      <div class="card back" slot="back" v-html="work.desc">
        {{ work.desc }}
      </div>
    </flipper>
  </div>
</template>

<script>
import Flipper from "vue-flipper";

export default {
  name: "Work",
  components: { Flipper },
  data() {
    return {
      flipped: false,
      works: [
        {
          title: "Crafty",
          image: "../assets/crafty_phone.jpg",
          desc: `Marketplace de productos artesanales. <br><br> Cuenta con buscador para filtrar por palabras clave y/o distintos parámetros simultánamente. 
          El back está hecho con Node.js y el front con Vue.js.`,
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
.test {
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 0 5px blue;
  background: blue;
}
.card {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
}

.back {
  background: hotpink;
}

.card img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
}
</style>
