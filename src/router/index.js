import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import SobreMim from '../components/SobreMim.vue'
import FerramentasLinguagens from '../components/FerramentasLinguagens.vue'
import InfoContato from '../components/InfoContato.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Página Inicial' }
    },
    {
      path: '/sobre-mim',
      name: 'sobre-mim',
      component: SobreMim,
      meta: { title: 'Sobre mim' }
    },
    {
      path: '/ferramentas-e-linguagens',
      name: 'ferramentas-e-linguagens',
      component: FerramentasLinguagens,
      meta: { title: 'Linguagens e Ferramentas' }
    },  
    {
      path: '/contato',
      name: 'contato',
      component: InfoContato,
      meta: { title: 'Contato' }
    }  
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router