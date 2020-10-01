<template>
  <div class="contact">
    <vue-headful title="Contacto" description="Página de contacto." />
    <vue-typer
      :repeat="0"
      :pre-type-delay="120"
      :type-delay="70"
      caret-animation="solid"
      text="¿Quieres contactar conmigo?"
    ></vue-typer>
    <figure>
      <img src="../assets/images/inbox.svg" alt="Inbox illustration" />
      <figcaption class="small">
        <a href="https://stories.freepik.com/communication"
          >Illustration by Freepik Stories</a
        >
      </figcaption>
    </figure>
    <ul>
      <li>
        <a href="mailto:zoeportagarcia@gmail.com">
          <font-awesome-icon class="icon" icon="envelope" />
          <h2>zoeportagarcia@gmail.com</h2>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/zoeporta/">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
          <h2>Zoe Porta</h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>

<style scoped>
img {
  height: 20rem;
}

ul {
  margin: 2rem auto;
  list-style: none;
  max-width: 40rem;
  display: flex;
  opacity: 0;
  animation-name: fadein;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

li {
  width: 5rem;
  display: inline-block;
  margin: 0 auto;
  flex-grow: 1;
}
.icon {
  font-size: 5rem;
}

ul a {
  color: var(--text-color);
  text-decoration: none;
}

li h2,
.icon {
  transition: font-size 0.2s;
}

li:hover h2 {
  font-size: 1.5rem;
}

li:hover .icon {
  font-size: 7rem;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
