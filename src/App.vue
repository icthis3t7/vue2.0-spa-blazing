<template>
  <div id="app">
    <h1>App</h1>

    <nav>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/testc'">Testc</router-link>

    </nav>

    <router-view></router-view>

  </div>

</template>

<script>
  export default {
    name: 'app'

  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
