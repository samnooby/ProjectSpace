<template>
  <div class="header">
    <v-toolbar dense flat app class="secondary">
      <v-toolbar-title class="mx-4">
        <router-link router :to="{ name: 'home' }">
          <span class="font-weight-light grey--text">Space</span>
          <span class="font-weight-medium white--text">Force</span>
        </router-link>
      </v-toolbar-title>

      <v-layout justify-space-around="true" class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="link in links"
          :key="link.id"
          router
          :to="{ name: link.name }"
          class="text--text secondary"
          >{{ link.name }}</v-btn
        >
      </v-layout>

      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-side-icon
        class="grey--text hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
      right
      app
      temporary
      v-model="drawer"
      class="primary hidden-md-and-up"
    >
      <NavBar :links="links"></NavBar>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  props: {
    links: Array
  },
  components: {
    NavBar
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style scoped></style>
