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

import {store} from './store/store'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticated)) {
    if (!store.getters.isLogged) {
      next({path: '/login'})
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isLogged) {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

import Element from  'element-ui'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
