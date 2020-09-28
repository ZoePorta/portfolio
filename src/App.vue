<template>
  <div :class="mode" id="app">
    <div id="background"></div>
    <vue-particles
      :color="particles"
      :particleOpacity="0.5"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      :linesColor="particles"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
      style="position: fixed; height: 100vh; width: 100%; z-index: -1; pointer-events: auto"
    >
    </vue-particles>
    <div id="nav">
      <span id="mode">
        <button @click="mode = 'light'">☀️</button>
        <button @click="mode = 'dark'">🌙</button>
      </span>
      <span id="routerlinks">
        <router-link to="/">Sobre mí</router-link>
        |
        <router-link to="/work">Proyectos</router-link>
        |
        <router-link to="/contact">Contacto</router-link>
      </span>
    </div>
    <vue-page-transition class="container" name="fade-in-down">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "dark",
      particles: "#F6C2FF",
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.light {
  --text-color: #000000;
  --main-bg-color: #e3f6f5;
  --block-bg-color: #ffffff;
  --shadow: 2px 2px 5px white;
  --link-color: #8100fa;
  --active-link-color: #3f007a;
}

.dark {
  --text-color: #c2ffff;

  --main-bg-color: #20181f;
  --block-bg-color: #272a4b;
  --shadow: 2px 2px 5px rgb(187, 250, 255);
  --link-color: #f2b1fd;
  --active-link-color: #ed85ff;
}

body {
  pointer-events: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  width: 100vw;
  max-width: 100%;
}

#background {
  height: 100vh;
  width: 100vw;
  background: var(--main-bg-color);
  z-index: -1;
  position: fixed;
}

#nav {
  padding: 30px;
}

#nav a {
  color: var(--link-color);
}

#nav a.router-link-exact-active {
  font-weight: bold;
  color: var(--active-link-color);
}

a,
button {
  color: var(--link-color);
  pointer-events: auto;
  background: none;
  border: none;
}

a:visited {
  color: var(--active-link-color);
}

/* BARRA SCROLL */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1b1fd88;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f2b1fdb9;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ed85ff;
}
</style>
