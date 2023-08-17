<template>
  <Navbar-Comp />
  <router-view />
  <Footer-Comp />
</template>

<script>
import NavbarComp from "./components/Navbar-Comp.vue";
import FooterComp from "./components/Footer-Comp.vue";

export default {
  components: { NavbarComp, FooterComp },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(135, 206, 235, 1);
  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
