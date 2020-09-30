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
    <h1></h1>
    <ul>
      <li>
        Email (recomendado):
        <a href="mailto:zoeportagarcia@gmail.com">zoeportagarcia@gmail.com</a>
      </li>
      <li>
        LinkedIn: <a href="https://www.linkedin.com/in/zoeporta/">Zoe Porta</a>
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
