<template>
  <div class="about">
    <vue-headful
      title="Sobre mí"
      description="Un poco de información sobre quién es Zoe Porta."
    />
    <img src="../assets/images/foto_Zoe.jpg" alt="Foto de Zoe Porta" />

    <div class="text">
      <vue-typer
        :repeat="0"
        :pre-type-delay="120"
        :type-delay="120"
        caret-animation="solid"
        text="Zoe Porta"
      ></vue-typer>

      <h2>Programadora</h2>
      <p>
        ¡Hola! Me llamo Zoe y hago páginas y aplicaciones web.
      </p>
      <p>
        Aún me quedan cosas por saber, pero me encanta aprender, ¡y se me da muy
        bien!
      </p>

      <p>
        Lo friki me viene por herencia familiar. Tengo varios hobbies y una
        receta propia de cupcakes para chuparse los dedos 😋
      </p>
      <p>
        ¿Quieres información sobre mi formación y vida laboral? Visita mi
        currículum haciendo click
        <a
          href="https://www.canva.com/design/DAECiUZECz0/gXVtIb5gP9C3WsmRjnDrKg/view?utm_content=DAECiUZECz0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
          rel="noopener noreferrer"
          >aquí</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
.about {
  margin: 0 auto;

  display: flex;
  flex-direction: column;
}

img {
  max-width: 80%;
  width: 25rem;
  border-radius: 50%;
  box-shadow: var(--shadow);
  margin: auto;
}

.text {
  height: 100%;
  margin: auto;
  padding: 3rem;
}

@media (orientation: landscape) {
  .about {
    flex-direction: row;
  }
}

@media (min-width: 1200px) {
  .about {
    max-width: 1000px;
  }
}
</style>
