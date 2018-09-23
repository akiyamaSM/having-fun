import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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

  		axios.get('http://www.mocky.io/v2/5ba77af83200006800e2e962')
  			.then(function(response){
  				context.state.is_logged = true
				localStorage.setItem('single_app_is_logged', response.data.token)
  			}).catch((error) => console.error(error))

  	},
  	logout(context){
  		context.state.is_logged = null
  		window.localStorage.removeItem('single_app_is_logged')
  	}
  }
});