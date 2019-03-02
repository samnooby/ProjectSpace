<template>
  <v-layout class="secondary pa-3" style="border-radius: 6px;">
    <v-flex xs12 class="hidden-xs-only">
      <PlayBar></PlayBar>
    </v-flex>
  </v-layout>
</template>

<script>
import PlayBar from '@/components/BowlSongs/PlayBar.vue';

export default {
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  components: {
    PlayBar
  },
  data() {
    return {
      currentSong: this.songs[0]
    };
  }
};
</script>

<style scoped></style>
