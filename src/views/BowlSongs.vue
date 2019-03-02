<template>
  <div class="background router-page">
    <v-container class="my-2 text--text">
      <v-layout>
        <v-flex xs12>
          <v-card flat class="background">
            <v-card-title>
              <v-layout align-center justify-center>
                <h1 class="display-1 text--text">Bowl Song Generator</h1>
              </v-layout>
            </v-card-title>
            <v-card-text>
              <v-layout>
                <BowlSongGenerator :songs="songs"></BowlSongGenerator>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BowlSongGenerator from '@/components/BowlSongs/BowlSongGenerator.vue';

export default {
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  components: {
    BowlSongGenerator
  }
};
</script>

<style scoped></style>
