<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('FETCH_USERS');
  }
}
</script>

<style>
  #app {
    width: 800px;
    margin: 0 auto;
  }

  body {
    font-family: Arial;
    margin: 0;
    padding: 0;
  }
</style>
