<template>
  <v-layout row wrap class="secondary pa-3" style="border-radius: 6px;">
    <v-flex xs12>
      <VideoPlayer
        class="hidden-xs-only"
        v-if="songSelected"
        :videoLink="getCurrentSong()"
        v-on:closePlayer="closePlayer"
      ></VideoPlayer>
    </v-flex>
    <v-flex xs3 offset-xs2>
      <v-btn class="info rand" syle="font-size: 4vw;">Random Song</v-btn>
    </v-flex>
    <v-flex xs3 offset-xs2>
      <v-btn class="info rand" syle="font-size: 4vw;">Random Curated Song</v-btn>
    </v-flex>
    <v-flex xs4 offset-xs4>
      <v-btn class="px-5 rand info" syle="font-size: 4vw;" @click="addSong = !addSong">Add Song</v-btn>
    </v-flex>
    <v-flex xs12>
      <SongLists v-if="songs.length != 0" v-on:songSelected="playSong" :songslist="songs"></SongLists>
    </v-flex>

    <v-dialog v-model="addSong">
      <v-card class="background">
        <v-layout row wrap justify-center align-center>
          <v-flex offset-xs2 xs5>
            <v-card-title style="font-size: 4vw;">Add a new post</v-card-title>
          </v-flex>
          <v-flex xs2 offset-xs10>
            <v-btn @click="addSong = !addSong" class="info">Close</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
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
      songSelected: false,
      addSong: false
    };
  },
  methods: {
    getCurrentSong() {
      return this.currentSong;
    },
    playSong(song) {
      this.songSelected = false;
      this.currentSong = song;
      this.songSelected = true;
    },
    closePlayer() {
      this.currentSong = {};
      this.songSelected = false;
    },
    toggleAddSong() {
      this.addSong = !this.addSong;
    }
  }
};
</script>
<style scoped>
.rand {
  width: 100%;
  font-size: 0.9vw;
}
</style>
