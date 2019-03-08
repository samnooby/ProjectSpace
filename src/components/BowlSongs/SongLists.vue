<template>
  <v-layout>
    <v-flex v-for="song in songslist" :key="song.id">
      <v-btn>hey</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    songslist: {
      type: Array,
      required: true
    }
  },
  methods: {
    songPicked(song) {
      this.$emit('songSelected', song);
    }
  }
};
</script>

<style scoped></style>
