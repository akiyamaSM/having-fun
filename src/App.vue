<template>
  <div id="app">
      <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/user/20">User</router-link></el-menu-item>
          <el-menu-item index="3" v-if="!isLogged()"><router-link to="/login">Login(only visitors)</router-link></el-menu-item>
          <el-menu-item index="4" v-if="!isLogged()"><router-link to="/register">Register(only visitors)</router-link></el-menu-item>
          <el-menu-item index="5" v-if="isLogged()"><router-link to="/secret">A very secret page</router-link></el-menu-item>
          <el-menu-item index="6" v-if="isLogged()"><router-link to="/logout">Logout</router-link></el-menu-item>
      </el-menu>
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
