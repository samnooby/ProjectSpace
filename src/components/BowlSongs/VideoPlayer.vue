<template>
  <div id="player">
    <youtube :video-id="getId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>
  </div>
</template>

<script>
export default {
  props: {
    videoLink: {
      type: String,
      required: true
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    getId() {
      var i = 1;
      return i;
    }
  },
  data() {
    return {
      videoId: null
    };
  }
};
</script>

<style scoped></style>
