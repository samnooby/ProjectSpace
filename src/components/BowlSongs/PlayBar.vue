<template>
  <v-layout wrap row class="primary" align-center>
    <v-flex xs2 offset-xs1 class="mt-3">
      <v-btn fab dark large class="text--text">
        <v-icon size="64" dar>play_circle_filled</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs7>
      <v-container grid-list-xl class>
        <v-layout row wrap>
          <v-flex
            xs12
            style="background-color: #c2c2cb; border-radius: 5px;"
            class="pa-0"
          >
            <span class="black--text"
              >Song Title {{ CurrentSong.songLink }}</span
            >
          </v-flex>
          <v-flex xs12 class>
            <span class="text--text">Progress Bar</span>
          </v-flex>
          <v-flex xs12 class>
            <span class="text--text">FastForward and Rewind</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    CurrentSong: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
