<template>
  <v-app>
    <Header />
    <v-container class="my-5 mx-0">
      <v-layout row wrap justify-start>
        <v-flex md4 lg3 xl2>
          <navigation-drawer permenant class="hidden-sm-and-down">
            <NavBar />
          </navigation-drawer>
        </v-flex>
        <v-flex xs12 md8 lg9 xl10 class="pa-4">
          <v-content>
            <router-view></router-view>
          </v-content>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: {
    Header,
    NavBar
  }
};
</script>
