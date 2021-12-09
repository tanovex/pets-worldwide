<template>
  <v-app>
    <v-app-bar density="compact">
      <v-app-bar-title>ww.Pets</v-app-bar-title>     
      <v-spacer></v-spacer>
      <Navigation /> 
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Navigation from "./views/shared/Navigation.vue";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
