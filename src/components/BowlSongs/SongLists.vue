<template>
  <v-layout row wrap>
    <v-flex
      xs12
      v-for="song in songslist"
      :key="song.id"
      @click="songPicked(song)"
      style="pointer: cursor;"
    >
      <v-layout row wrap class="py-2 my-1 primary" style="border-radius: 5px;">
        <v-flex xs12 md5 class="text--text" style="font-size: 1vw;">Author: {{ song.songLink }}</v-flex>
        <v-flex xs12 md7 class="text--text" style="font-size: 1vw;">Song Title: {{ song.title }}</v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    songslist: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      songNames: []
    };
  },
  methods: {
    ...mapActions(['addSongDetails']),

    songPicked(song) {
      this.$emit('songSelected', song);
    }
  }
};
</script>

<style scoped></style>
