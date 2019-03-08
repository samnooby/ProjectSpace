<template>
  <v-layout class="secondary pa-3" style="border-radius: 6px;">
    <v-flex xs12 class="hidden-xs-only">
      <VideoPlayer v-if="songSelected" :videoLink="getCurrentSong()" v-on:closePlayer="closePlayer"></VideoPlayer>
      <SongLists v-on:songSelected="playSong" :songslist="songs"></SongLists>
    </v-flex>
  </v-layout>
</template>

<script>
import SongLists from '@/components/BowlSongs/SongLists.vue';
import VideoPlayer from '@/components/BowlSongs/VideoPlayer.vue';

export default {
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  components: {
    SongLists,
    VideoPlayer
  },
  data() {
    return {
      currentSong: {},
      songSelected: false
    };
  },
  methods: {
    getCurrentSong() {
      return this.currentSong;
    },
    playSong(song) {
      this.currentSong = song;
      this.songSelected = true;
    },
    closePlayer() {
      this.currentSong = {};
      this.songSelected = false;
    }
  }
};
</script>

<style scoped></style>
