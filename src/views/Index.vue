<template>
  <v-app>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <Header></Header>
        </v-flex>
        <v-flex xs0 md2>
          <v-card class="hidden-sm-and-down my-3">
            <NavBar></NavBar>
          </v-card>
        </v-flex>
        <v-flex xs12 md10 class="my-5 pl-3">
          <router-view />
        </v-flex>
        <v-flex x12>
          <Footer></Footer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'index',
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>
.reds {
  background-color: red;
}
</style>
