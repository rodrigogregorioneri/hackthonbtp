<template>
  <div>
    <cabecalho/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Cabecalho from "./components/Cabecalho.vue";
export default { components: { NavBar, Cabecalho } };
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

tml, body {
  font-family: 'Montserrat', sans-serif;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
