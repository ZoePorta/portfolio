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

export default {
  name: "Work",
  components: { Flipper },
  data() {
    return {
      works: [
        {
          title: "Crafty",
          tech: "Node.js | Vue.js | MySQL",
          image: "crafty_phone.jpg",
          desc: `<h3>Marketplace de productos artesanales</h3>
<p>Registro y login.</p>
<p>
  Los usuarios anónimos pueden buscar por palabras clave y/o distintos
  parámetros simultánamente.
</p>
<p>
  Los usuarios registrados pueden agregar a su lista de deseos,
  comprar y valorar (puntuación y comentario) los productos.
</p>
<p>Los usuarios vendedores pueden agregar productos al catálogo (no implementado en front).</p>
<br>
<ul style="list-style: inside; text-align: left;">
  <li><strong>Backend:</strong> Node.js (API Rest)</li>
  <li><strong>Frontend:</strong> Vue.js</li>
  <li><strong>Base de datos:</strong> MySQL</li>
</ul>`,
          github: "https://github.com/ZoePorta/Proyecto",
          flipped: false,
        },
        {
          title: "Hack A Music",
          tech: "Vue.js | API",
          image: "music.jpg",
          desc: `<h3>Ranking musical</h3>
<p>Ranking de géneros, artistas y temas musicales.</p>
<p>Utiliza la
  <a href="https://www.last.fm/api" target="_blank" rel="noopener noreferrer"
    >API de Last.fm</a
  >
  para obtener los datos.</p>
<p>Al pasar el ratón, por encima muestra los oyentes.</p>
<p>
  Al hacer click, muestra una descripción y el enlace a la página correspondiente
  en Last.fm.
</p>
<p>
  <strong>Nota:</strong> Las imágenes están correctamente configuradas, es
  Last.fm quien las sustituyó por el icono de la estrella.
</p>
`,
          github: "https://github.com/ZoePorta/hackamusic",
          link: "https://zoe-hackamusic.netlify.app",
          flipped: false,
        },
        {
          title: "Rick & Morty",
          image: "rickmorty.jpg",
          tech: "Vue.js | API",

          desc: `<h3>Buscador de personajes</h3>
<p>
  Coge los datos de la
  <a
    href="https://rickandmortyapi.com/"
    target="_blank"
    rel="noopener noreferrer"
    >API de Rick y Morty</a
  >.
</p>
<p>Permite buscar por ID o fitrar por varios parámetros.</p>`,
          github: "https://github.com/ZoePorta/rick-morty-api",
          link: "https://searchchar-rickandmorty.netlify.app",
          flipped: false,
        },
        {
          title: "Juego",
          tech: "Vue.js",

          image: "vuester.jpg",
          desc: `<h3>Minijuego hecho en Vue</h3>
<p>En proceso.</p>
<p>Con comunicación entre componentes.</p>
<p><strong>Pendiente:</strong> Añadir sprites y editar estilos.</p>
`,
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
