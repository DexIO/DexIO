import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: require('@/components/inicio.vue'),
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: require('@/components/pokedex.vue'),
    },
    {
      path: '/editor',
      name: 'editor',
      component: require('@/components/editor.vue'),
    },
    {
      path: '/calculadora',
      name: 'calculadora',
      component: require('@/components/calculadora.vue'),
    },
    {
      path: '/equipos',
      name: 'equipos',
      component: require('@/components/equipos.vue'),
    },
    {
      path: '/cajas',
      name: 'cajas',
      component: require('@/components/cajas.vue'),
    },
    {
      path: '/mas',
      name: 'mas',
      component: require('@/components/mas.vue'),
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: require('@/components/perfil.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
