<template>
  <v-layout class="secondary pa-3" style="border-radius: 6px;">
    <v-flex xs12 class="hidden-xs-only" v-if="getCurrentSong()">
      <PlayBar :CurrentSong="getCurrentSong()"></PlayBar>
      <SongLists :songslist="songs"></SongLists>
      <VideoPlayer :videoLink="songs[0]2"></VideoPlayer>
    </v-flex>
  </v-layout>
</template>

<script>
import PlayBar from '@/components/BowlSongs/PlayBar.vue';
import SongLists from '@/components/BowlSongs/SongLists.vue';

export default {
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  components: {
    PlayBar,
    SongLists
  },
  data() {
    return {
      currentSong: []
    };
  },
  methods: {
    getCurrentSong() {
      return this.songs[0];
    }
  }
};
</script>

<style scoped></style>
