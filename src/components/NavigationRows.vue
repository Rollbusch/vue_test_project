<script setup>
import WelcomeItem from './WelcomeItem.vue'
import HouseIcon from './icons/IconHouse.vue'
import Container from './ContainerContent.vue'
import ToolingIcon from './icons/IconTooling.vue'
import ProfileIcon from './icons/IconProfile.vue'
defineProps({
  currentPage: {
    type: String,
    required: true
  }
})
</script>

<template>
  
  <Container v-if="currentPage != 'home'">
    <WelcomeItem url="/">
      <template #icon>
        <HouseIcon />
      </template>
      <template #heading>Home</template>
      
      Voltar para a página inicial
    </WelcomeItem>
  </Container>
  
  <Container v-if="currentPage != 'sobre-mim'">
    <WelcomeItem url="/sobre-mim">
      <template #icon>
        <ProfileIcon />
      </template>
      <template #heading>Sobre mim</template>
      
      Informações sobre minha trajetória de vida e minhas experiências profissionais.
    </WelcomeItem>
  </Container>

  <Container v-if="currentPage != 'ferramentas-e-linguagens'">
    <WelcomeItem url="/ferramentas-e-linguagens">
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Ferramentas e linguagens</template>

      Saiba quais ferramentas eu costumo utilizar no meu dia-a-dia.
    </WelcomeItem>
  </Container>

  <Container v-if="currentPage != 'contato'">
    <WelcomeItem url="/contato">
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Contato</template>

      Que tal me mandar um fax ?
    </WelcomeItem>
  </Container>
  
</template>

<style scoped>
strong {
  font-weight: 700;
}
</style>
