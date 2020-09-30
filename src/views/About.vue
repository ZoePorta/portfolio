<template>
  <div class="about">
    <img src="../assets/images/foto_Zoe.jpg" alt="Foto de Zoe Porta" />

    <div class="text">
      <h1>Zoe Porta</h1>
      <h2>Programadora</h2>
      <p>
        ¡Hola! Me llamo Zoe y hago páginas y aplicaciones web.
      </p>
      <p>
        Hay muchas cosas que aún no sé, pero me encanta aprender, ¡y se me da
        muy bien!
      </p>

      <p>
        Lo friki me viene por herencia familiar. Tengo varios hobbies y una
        receta propia de cupcakes para chuparse los dedos 😋
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
