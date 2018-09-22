import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {     
       is_logged: localStorage.getItem('single_app_is_logged') || null
  },
  getters: {
  	isLogged(state){
  		return state.is_logged != null
  	}
  },
  mutations: {
  	changeText(state, content){
  		state.test = content
  	}
  },
  actions: {
  	login(context, user){
		context.state.is_logged = true
		localStorage.setItem('single_app_is_logged', true)

  	},
  	logout(context){
  		context.state.is_logged = null
  		window.localStorage.removeItem('single_app_is_logged')
  	}
  }
});