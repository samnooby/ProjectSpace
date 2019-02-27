<template>
  <v-app class="primary">
    <Header :links="links" class="mb-5" />
    <v-container class="mx-0 mt-2">
      <v-layout row wrap>
        <v-flex xs12 class="px-4">
          <v-content class="ma-0 pa-0">
            <router-view class="mt-3 pa-0"></router-view>
          </v-content>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  data() {
    return {
      links: [
        { icon: 'home', name: 'home', text: 'Home' },
        { icon: 'person', name: 'about', text: 'About' },
        { icon: 'book', name: 'booking', text: 'Book Chillout' },
        { icon: 'music_note', name: 'bowlsongs', text: 'Bowl Songs' },
        { icon: 'work', name: 'currentprojects', text: 'Current Projects' }
      ]
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.router-page {
  border-radius: 5px;
  border-style: solid;
  border-color: black;
  width: 100%;
  text-align: center;
}
</style>
