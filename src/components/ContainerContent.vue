<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  padding: 0 1rem;
}

@media (min-width: 1024px) {
  .container {
    width: 600px;
    padding: 0;
  }
}
</style>
