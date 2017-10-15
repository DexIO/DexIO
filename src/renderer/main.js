import Vue from 'vue';
import axios from 'axios';
import 'vue-instant/dist/vue-instant.css';
import VueInstant from 'vue-instant';
Vue.use(VueInstant);

import App from './App';
import router from './router';
import store from './store';
import navbar from './components/navbar/navbar.vue';
import navline from './components/navbar/navline.vue';
import bicho from './components/tipos/bicho.vue';
import siniestro from './components/tipos/siniestro.vue';
import dragon from './components/tipos/dragon.vue';
import electrico from './components/tipos/electrico.vue';
import hada from './components/tipos/hada.vue';
import lucha from './components/tipos/lucha.vue';
import fuego from './components/tipos/fuego.vue';
import volador from './components/tipos/volador.vue';
import fantasma from './components/tipos/fantasma.vue';
import planta from './components/tipos/planta.vue';
import tierra from './components/tipos/tierra.vue';
import hielo from './components/tipos/hielo.vue';
import normal from './components/tipos/normal.vue';
import veneno from './components/tipos/veneno.vue';
import psiquico from './components/tipos/psiquico.vue';
import roca from './components/tipos/roca.vue';
import acero from './components/tipos/acero.vue';
import agua from './components/tipos/agua.vue';
import searchbar from './components/searchbar.vue';
Vue.component('navbar', navbar);
Vue.component('navline', navline);
Vue.component('searchbar', searchbar);
Vue.component('bicho', bicho);
Vue.component('siniestro', siniestro);
Vue.component('dragon', dragon);
Vue.component('electrico', electrico);
Vue.component('hada', hada);
Vue.component('lucha', lucha);
Vue.component('fuego', fuego);
Vue.component('volador', volador);
Vue.component('fantasma', fantasma);
Vue.component('planta', planta);
Vue.component('tierra', tierra);
Vue.component('hielo', hielo);
Vue.component('normal', normal);
Vue.component('normal', normal);
Vue.component('veneno', veneno);
Vue.component('psiquico', psiquico);
Vue.component('roca', roca);
Vue.component('acero', acero);
Vue.component('agua', agua);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
