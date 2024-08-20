<script setup>
import Navigation from './NavigationRows.vue'
import Accordion from './AccordionContent.vue'
import Container from './ContainerContent.vue'
import ferramentas from '../ferramentas.js'
import linguagens from '../linguagens.js'
import projetos from '../projetos.js'
</script>

<template>

  
  <Container>
    <h1>Tecnologias e Projetos de Destaque</h1>
    <h3>De uma olhada nas principais linguagens e ferramentas que costumo utilizar, e também os projetos dos quais mais me orgulho.</h3>
  </Container>

  <Container>
    <h1>Linguagens e Frameworks:</h1>
    <div v-for="linguagem in linguagens" v-bind:key="linguagem.nome">
      <Accordion :titulo="linguagem.nome" :descricao="linguagem.descricao " />
    </div>
  </Container>

  <Container>
    <h1>Ferramentas:</h1>
    <div v-for="ferramenta in ferramentas" v-bind:key="ferramenta.nome">
      <Accordion :titulo="ferramenta.nome" :descricao="ferramenta.descricao " />
    </div>
  </Container>

  <Container>
    <h1>Projetos:</h1>
    <div v-for="projeto in projetos" v-bind:key="projeto.nome">
      <Accordion :titulo="projeto.nome" :descricao="projeto.descricao" :url="projeto.url" />
    </div>
  </Container>

  <div class="navigation">
    <Navigation currentPage="ferramentas-e-linguagens" />
  </div>
</template>


<style scoped>
h1 {
  font-weight: 600;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  margin-top: 40px;
  border-bottom: 1px solid;
  padding-bottom: 4px;
}

.navigation {
  margin-top: 4rem;
}
</style>