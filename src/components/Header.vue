<template>
  <v-toolbar dark>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <span>SpaceForce</span>
    </v-toolbar-title>
    <v-toolbar-title>
      <SpaceForceLogo></SpaceForceLogo>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <v-btn slot="activator" dark class="hidden-md-and-up">Nav</v-btn>
      <NavBar></NavBar>
    </v-menu>
  </v-toolbar>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'header',
  components: {
    NavBar
  }
}
</script>

<style scoped></style>
