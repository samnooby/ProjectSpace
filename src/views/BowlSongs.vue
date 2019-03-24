<template>
  <div class="background router-page">
    <v-container class="my-2 text--text">
      <v-layout>
        <v-flex xs12>
          <v-card flat class="background">
            <v-card-title>
              <v-layout align-center justify-center>
                <h1 style="font-size: 6vw;" class="text--text">Bowl Song Generator</h1>
              </v-layout>
            </v-card-title>
            <v-card-text>
              <v-layout>
                <BowlSongGenerator :songs="getSongs"></BowlSongGenerator>
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
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  props: {},
  data() {
    return {
      songs: []
    };
  },
  computed: {
    ...mapGetters(['getSongs']),
    BowlSongGenerator
  },
  methods: {
    ...mapActions(['setSongs'])
  },
  created() {
    this.setSongs();
  }
};
</script>

<style scoped></style>
