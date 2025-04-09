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
      <address>
        <a
          href="https://www.linkedin.com/in/zoeporta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://github.com/ZoePorta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
      </address>
      <p>
        ¡Hola! Me llamo Zoe y llevo cuatro años formando a futuros
        programadores.
      </p>
      <p>
        Después de esta experiencia, puedo afirmar con seguridad que enseñar es
        una de las mejores formas de aprender. Siempre quedará camino por
        recorrer pero por suerte es algo que me encanta ¡y se me da genial!
      </p>

      <p>
        Lo friki me viene por herencia familiar. Tengo varios hobbies y una
        receta propia de cupcakes para chuparse los dedos 😋
      </p>
      <p>
        ¿Quieres información sobre mi formación y vida laboral? 
        <a
          href="https://www.canva.com/design/DAGkDxuNX_s/5SHiQyOSEcANAxwsAetnBg/view?utm_content=DAGkDxuNX_s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc67f3b660f"
          target="_blank"
          rel="noopener noreferrer"
          >Visita mi
        currículum</a
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
  margin: 1rem auto;

  display: flex;
  flex-direction: column;

  min-height: 65vh;
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
address {
  display: flex;
  gap: 1rem;
  justify-content: center;
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
