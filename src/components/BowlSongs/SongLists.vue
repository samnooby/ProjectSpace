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
        <v-flex xs12 md5 class="text--text">Author: {{ song.songLink }}</v-flex>
        <v-flex xs12 md7 class="text--text" v-if="reGetTitles()"
          >Song Title: {{ song.songtitle }}</v-flex
        >
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
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
    },
    getSongTitle(song) {
      return new Promise(async resolve => {
        var currentsong = song;
        var youtubeId = this.$youtube.getIdFromUrl(currentsong.songLink);
        var youtubeKey = '';
        var youtubeURL = 'https://www.googleapis.com/youtube/v3/videos';

        await axios
          .get(youtubeURL, {
            params: {
              id: youtubeId,
              key: youtubeKey,
              part: 'snippet'
            }
          })
          .then(response => {
            if (response != null) {
              resolve(response.data.items[0].snippet.title);
            } else {
              resolve('Couldnt load name');
            }
          });
      });
    },
    async reGetTitles() {
      for (var i = 0; i < this.songslist.length; i++) {
        this.songslist[i].songtitle = await this.getSongTitle(
          this.songslist[i]
        );
        if (this.songslist[i].songtitle == 'Couldnt load name') {
          return false;
        }
      }

      return true;
    }
  },
  async mounted() {
    for (var i = 0; i < this.songslist.length; i++) {
      this.songslist[i].songtitle = await this.getSongTitle(this.songslist[i]);
    }
  }
};
</script>

<style scoped></style>
