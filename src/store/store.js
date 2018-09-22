import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export const store = new Vuex.Store({
  state: {     
       test : 'Bla Bla'
  },
  getters: {
  	email(state){
  		return state.test
  	}
  },
  mutations: {
  	changeText(state, content){
  		state.test = content
  	}
  },
  actions: {

  }
});