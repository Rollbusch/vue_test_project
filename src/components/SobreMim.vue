<script setup>
import Container from './ContainerContent.vue'
import Navigation from './NavigationRows.vue'
</script>

<template>
  <Container>
    <img src="/minha-foto.jpg" alt="Minha foto" />
  </Container>

  <Container>
    <h2>Olá, sou <strong>João</strong>, tenho 24 anos e atuo como <strong>desenvolvedor fullstack</strong> há 4 anos.</h2>
  </Container>

  <Container>
    <h3>
      <br/>
      Formei-me em <strong>Ciência da Computação</strong> no final de 2022 e sou apaixonado por novos desafios e pela resolução de problemas, especialmente aqueles que exigem lógica apurada. Tenho um forte compromisso em encontrar soluções para os desafios que encontro.
      <br/>
      <br/>
      Minha trajetória na área de desenvolvimento começou em março de 2020, pouco depois de iniciar meus estudos em JavaScript. Meu primeiro emprego foi como estagiário "fullstack" em uma software house em Campinas/SP. Nessa posição, trabalhei no desenvolvimento de layouts com VueJs e SCSS, criei endpoints e middlewares utilizando NodeJs e Express, e implementei serviços para a criação de boletos e notas fiscais pela prefeitura de Valinhos/SP. Após 11 meses, fui desligado devido à pandemia.
      <br/>
      <br/>
      Após um período de 4 meses desempregado, consegui um novo estágio na empresa Lenscope, começando como estagiário web. Minha atuação inicial envolveu a manutenção e criação de funcionalidades para o eCommerce usando Prestashop e PHP. Após 7 meses, fui efetivado como Desenvolvedor Web e passei a trabalhar com frameworks JavaScript, como NextJs e ReactJs. Atualmente, continuo na Lenscope como o único desenvolvedor na área de Product, onde sou responsável por diversos projetos e ferramentas para os diferentes times da empresa. Além de gerenciar o eCommerce, também estou envolvido em projetos como automações de e-mail, integrações com n8n e desenvolvimento de aplicações com NextJs.
      <br/>
      <br/>
      Considero que estou em um nível <strong>pleno</strong> em minha carreira e estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir de forma significativa para meus projetos e para a empresa.
    </h3>

  </Container>

  <div class="navigation">
    <Navigation currentPage="sobre-mim" />
  </div>
  
</template>

<style scoped>
strong {
  font-weight: 700;
}

img {
  display: flex;
  max-width: 100%;
  margin: 1rem 0;
  height: 250px;
  width: auto;
}

.navigation {
  margin-top: 4rem;
}
</style>
