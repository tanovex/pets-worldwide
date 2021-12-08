<template>
    <v-app-bar class="navigation" density="compact">
      <v-app-bar-title>ww.Pets</v-app-bar-title>
  
     
      <v-spacer></v-spacer>
      <v-btn text>
      <router-link to="/">Home</router-link> 
      </v-btn>
      |
      <v-btn text>
      <router-link to="/about">About</router-link>
      </v-btn>
   <!-- 
      <v-btn text>Developer</v-btn>
      <v-btn class="mr-3" text>Help</v-btn>
      <v-divider inset vertical></v-divider> 
      -->
      <v-btn
        class="mr-4 ml-5"
        color="primary"
        plain
      >
        <v-icon left icon="mdi-login"></v-icon>
  
        <span>Login</span>
      </v-btn>
     
    </v-app-bar>
</template>


<script lang="ts">

export default {
  name: 'navigation-bar'
}
</script>