<template>
  <div id="app">
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/user/20">User</router-link></li>
      <div v-if="!isLogged()">
        <li><router-link to="/login">Login(only visitors)</router-link></li>
        <li><router-link to="/register">Register(only visitors)</router-link></li>
      </div>
      <div v-else>
        <li><router-link to="/secret">A very secret page</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
      </div>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    methods: {
      isLogged(){
        return this.$store.getters.isLogged;
      }
    }
  }
</script>

<style>

</style>
