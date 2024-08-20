<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div :class="{ accordion: true, opened: accordionOpened}">
    <div class="accordionHeader" v-on:click="toggleAccordion()">
      {{ titulo }}
      {{ testando }}
    </div>
    <div class="accordionContent" ref="accordionContent">
      {{ descricao }}
      <div v-if="url" class="repository">
        <a :href="url" target="_blank">
          <button>Ver repositório</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionOpened: false,
      contentHeight: 0
    }
  },
  mounted() {
    this.getElementHeight()
    this.adjustHeight(0)
  },
  methods: {
    toggleAccordion () {
      this.accordionOpened = !this.accordionOpened
      this.accordionOpened ? this.adjustHeight(this.contentHeight) : this.adjustHeight(0)
    },
    getElementHeight() {
      const element = this.$refs.accordionContent;
      if (element) {
        this.contentHeight = element.clientHeight;
      }
    },
    adjustHeight(height) {
      const element = this.$refs.accordionContent;
      if (element) {
        element.style.height = `${height}px`;
      }
    }
  }
}
</script>


<style scoped>
.accordion {
  margin-bottom: .5rem;
}

.accordionHeader {
  padding: 8px 1rem;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  position: relative;
  cursor: pointer;
}

.accordionHeader::after, .accordionHeader::before {
  content: '';
  background-color: var(--color-text);
  width: 24px;
  height: 4px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 4px;
  transition: .5s ease-in-out;
}

.accordionHeader::after {
  transform: rotate(0);
}

.accordionHeader::before {
  transform: rotate(-90deg);
}

.accordion.opened .accordionHeader::after, .accordion.opened .accordionHeader::before {
  transform: rotate(0);
}

.accordionContent {
  padding: 0 1rem;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  transition: .5s ease-in-out;
}

.repository {
  margin-top: 1rem;
}

.repository button {
  background-color: #42b883;
  padding: 8px 1rem;
  border: none;
  border-radius: 0.5rem;
  color: var(--color-background);
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
}

</style>