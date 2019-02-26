<template>
  <div class="header">
    <v-toolbar flat app class="secondary">
      <v-spacer class="hidden-sm-and-up"></v-spacer>
      <v-toolbar-title>
        <router-link router :to="{ name: 'home' }">
          <span class="font-weight-light grey--text">Space</span>
          <span class="font-weight-medium white--text">Force</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        class="grey--text hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawer" class="primary">
      <NavBar></NavBar>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
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
