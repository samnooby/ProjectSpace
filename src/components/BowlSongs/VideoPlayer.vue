<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="mb-3">
        <PlayBar ref="playbar" v-on:playvideo="playVideo" :CurrentSong="videoLink"></PlayBar>
      </v-flex>
      <v-flex xs12>
        <youtube
          :fitParent="true"
          :videoId="getId()"
          ref="youtube"
          @playing="playing"
          @paused="paused"
        ></youtube>
      </v-flex>
      <v-flex xs12>
        <v-btn class="info mt-2 pa-2" style="border-radius: 3px;" @click="closePlayer">Close Player</v-btn>
      </v-flex>
    </v-layout>

    <v-dialog v-model="isError">
      <v-card class="background">
        <v-card-text class="text-xs-center">Error: {{ errorMessage }}</v-card-text>
        <v-card-actions>
          <v-layout justify-center align-center>
            <v-btn class="info" @click="closePlayer">Ok</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import PlayBar from '@/components/BowlSongs/PlayBar.vue';

export default {
  props: {
    videoLink: {
      type: Object,
      required: true
    }
  },
  methods: {
    closePlayer() {
      this.$emit('closePlayer');
    },
    async playVideo() {
      if (this.isPlaying == true) {
        await this.player.pauseVideo();
      } else {
        await this.player.playVideo();
      }
    },
    playing() {
      this.isPlaying = true;
      this.$refs.playbar.changeIcon();
    },
    paused() {
      this.isPlaying = false;
      this.$refs.playbar.changeIcon();
    },
    getId() {
      var id = this.$youtube.getIdFromUrl(this.videoLink.songLink);

      if (id) {
        return id;
      } else {
        this.errorMessage = 'Could not find video link';
        this.isError = true;
        return 0;
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  data() {
    return {
      videoId: null,
      isError: false,
      errorMessage: '',
      isPlaying: false
    };
  },
  components: {
    PlayBar
  },
  mounted() {}
};
</script>

<style scoped></style>
