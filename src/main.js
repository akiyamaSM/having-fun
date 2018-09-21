import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'


// Set the Vue use the router
Vue.use(VueRouter)

import {routes} from './routes'


const router = new VueRouter({
	routes,
	mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
