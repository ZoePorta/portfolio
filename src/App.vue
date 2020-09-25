<template>
  <div id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="position: fixed; height: 100vh; width: 100%; z-index: -10; pointer-events: auto"
    >
    </vue-particles>
    <div id="nav">
      <router-link to="/">Sobre mí</router-link> |
      <router-link to="/work">Proyectos</router-link> |
      <router-link to="/contact">Contacto</router-link>
    </div>
    <vue-page-transition class="container" name="fade-in-down">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  pointer-events: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  max-width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  pointer-events: auto;
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
