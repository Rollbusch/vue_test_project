<script setup>
import Container from './ContainerContent.vue'
import Navigation from './NavigationRows.vue'

import UnityIcon from './icons/IconUnity.vue'
import GithubIcon from './icons/IconGithub.vue'
import LinkedinIcon from './icons/IconLinkedin.vue'
import WhatsappIcon from './icons/IconWhatsapp.vue'
</script>

<template>
  <Container>
    <h2>Essas são as formas que você consegue me achar!</h2>
  </Container>

  <br/>

  <Container>
    <div class="contato">
      <a target="_blank" href="https://wa.link/jdg8bw">
        <div class="icon">
          <WhatsappIcon />
        </div>
        <h3>
          WhatsApp
        </h3>
      </a>
    </div>
  </Container>

  <Container>
    <div class="contato">
      <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-rollbusch-304534193/">
        <div class="icon">
          <LinkedinIcon />
        </div>
        <h3>
          Linkedin
        </h3>
      </a>
    </div>
  </Container>

  <br/>

  <Container>
    <h2>Também dê uma olhada:</h2>
  </Container>
  <br />
  
  <Container>
    <div class="contato">
      <a target="_blank" href="https://github.com/Rollbusch/">
        <div class="icon">
          <GithubIcon />
        </div>
        <h3>
          Github
        </h3>
      </a>
    </div>
  </Container>

  <Container>
    <div class="contato">
      <a target="_blank" href="https://learn.unity.com/u/668e0b36edbc2a78d2ebf09e?tab=profile">
        <div class="icon">
          <UnityIcon />
        </div>
        <h3>
          Unity
        </h3>
      </a>
    </div>
  </Container>

  <div class="navigation">
    <Navigation currentPage="contato" />
  </div>
  
</template>

<style scoped>
strong {
  font-weight: 700;
}

.contato {
  display: flex;
  gap: 1.75rem;
  align-items: center;
  margin-bottom: 1.5rem;
  cursor: pointer;
}


.contato a {
  display: flex;
  gap: 1.75rem;
  align-items: center;
}

.contato h3 {
  color: var(--color-text);
}

.contato .icon {
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
}

img {
  display: flex;
  max-width: 100%;
  margin: 1rem 0;
  height: 250px;
  width: auto;
}

.icon svg {
  max-width: 30px;
  max-height: 30px;
}

.navigation {
  margin-top: 4rem;
}
</style>
