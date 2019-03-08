<template>
  <v-layout wrap row class="primary pt-3" align-center>
    <v-flex xs3 class="pa-0 ma-0">
      <v-btn @click="playVideo" fab dark large class="text--text">
        <v-icon size="80" dar>{{ icon }}</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs7>
      <v-container grid-list-xl class>
        <v-layout row wrap>
          <v-flex xs12 style="background-color: #c2c2cb; border-radius: 5px;" class="pa-0">
            <span class="black--text">{{ CurrentSong.songLink }}</span>
          </v-flex>
          <v-flex xs12 class="mt-3 mb-0 pa-0">
            <v-progress-linear v-model="progress" color="info"></v-progress-linear>
          </v-flex>
          <v-flex xs2 offset-xs4 class>
            <v-btn icon>
              <v-icon size="30" class="text--text">fast_rewind</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs2>
            <v-btn icon>
              <v-icon size="30" class="text--text">fast_forward</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    CurrentSong: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      progress: 25,
      icon: 'play_circle_filled'
    };
  },
  methods: {
    playVideo() {
      this.$emit('playvideo');
    },
    changeIcon() {
      if (this.icon == 'pause_circle_filled') {
        this.icon = 'play_circle_filled';
      } else {
        this.icon = 'pause_circle_filled';
      }
    }
  }
};
</script>

<style scoped></style>
