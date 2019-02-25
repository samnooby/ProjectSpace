<template>
  <div id="app">
    <Header></Header>
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style></style>
