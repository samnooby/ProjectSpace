<template>
  <v-app class="primary ma-0 pa-0">
    <Header :links="getLinks" class="mb-5" />
    <div class="pl-0 pr-0 mb-5" style="height: 93vh;">
      <v-container class="mt-2 pa-0 heightfill">
        <v-layout row wrap class="heightfill">
          <v-flex xs12 class="heightfill px-4">
            <v-content class="ma-0 pa-0 heightfill">
              <transition
                name="switch"
                v-on:before-enter="beforeenter"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false"
              >
                <router-view
                  :projects="getProjects"
                  :homeposts="getPosts"
                  :aboutposts="getAbout"
                  :songs="getSongs"
                  class="mt-3 pa-0 heightfill"
                  style=" overflow: auto; "
                  id="router"
                ></router-view>
              </transition>
            </v-content>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import Velocity from 'velocity-animate'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters([
      'getPosts',
      'getLinks',
      'getProjects',
      'getAbout',
      'getSongs'
    ])
  },
  methods: {
    ...mapActions(['setPosts', 'setSongs']),
    beforeenter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1 },
        { duration: 300, delay: 300, complete: done }
      )
    },
    leave(el, done) {
      Velocity(el, { opacity: 0 }, { duration: 300, complete: done })
    }
  },
  created() {
    this.setPosts()
    this.setSongs()
  }
}
</script>

<style>
.router-page {
  border-radius: 5px;
  border-style: solid;
  border-color: black;
  width: 100%;
  text-align: center;
}
.heightfill {
  height: 100%;
}
::-webkit-scrollbar {
  display: none;
}
</style>
