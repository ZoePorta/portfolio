<template>
  <div :class="mode" id="app">
    <div id="background"></div>
    <vue-particles
      :color="particles"
      :particleOpacity="1"
      shapeType="star"
      :linesColor="particles"
      :lineOpacity="0.85"
      :linesDistance="100"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
      style="position: fixed; height: 100vh; width: 100%; z-index: -1; pointer-events: auto"
    >
    </vue-particles>
    <div id="nav">
      <span id="mode">
        <button :class="{ big: mode === 'light' }" @click="mode = 'light'">
          ☀️
        </button>
        <button :class="{ big: mode === 'dark' }" @click="mode = 'dark'">
          🌙
        </button>
      </span>
      <span id="routerlinks">
        <router-link to="/">Sobre mí</router-link>
        ⋆
        <router-link to="/work">Proyectos</router-link>
        ⋆
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
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Josefin+Sans&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 12px;
}

/* Dark/Light mode color variables */
.light {
  --text-color: #272a4b;
  --main-bg-color: #f8fafa;
  --block-bg-color: #d7fcff;
  --shadow: 2px 2px 5px #f6c2ffa8;
  --link-color: #8100fa;
  --active-link-color: #3f007a;
}

.dark {
  --text-color: #cbffff;

  --main-bg-color: #20181f;
  --block-bg-color: #272a4b;
  --shadow: 2px 2px 5px #bbfaff;
  --link-color: #f2b1fd;
  --active-link-color: #ed85ff;
}
/* /Dark/Light mode color variables */

body {
  pointer-events: none; /* Pointer events disabled so particles component works correctly */
}

#app {
  font-family: "Josefin Sans", sans-serif;
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

.container {
  padding: 0 2rem;
  margin: 0 auto;
}

h1,
h2,
.vue-typer {
  font-family: "Permanent Marker", cursive;
  font-weight: 100;
  margin: 0.5rem;
  display: block;
}

.vue-typer .custom.char {
  color: var(--text-color);
  font-size: 2rem;
}

.vue-typer .custom.caret {
  background-color: var(--link-color);
}

h2 {
  font-size: 1rem;
}

p {
  padding: 0.5rem;
}

.small {
  font-size: 0.7rem;
}

/* Menu and links */
#nav {
  padding: 30px;
}

#mode {
  position: relative;
  right: 2rem;
}

#nav a {
  color: var(--link-color);
}

#nav a.router-link-exact-active {
  font-weight: bold;
  color: var(--active-link-color);
  font-size: 1.2rem;
}

a,
button {
  color: var(--link-color);
  pointer-events: auto;
  background: none;
  border: none;
  cursor: pointer;
}

a:visited {
  color: var(--active-link-color);
}

button:focus {
  outline: none;
}

button:hover,
#nav a:hover,
.big {
  font-size: 1.2rem;
}
/* /Menu */

/* SCROLL */
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
/* /SCROLL */

@media (min-width: 700px) {
  html {
    font-size: 16px;
  }
}
</style>
