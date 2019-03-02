<template>
  <v-layout wrap row class="primary" align-center>
    <v-flex xs2 offset-xs1 class="mb-5">
      <v-btn icon class="pa-2">
        <v-icon size="65" class="text--text">play_circle_filled</v-icon>
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
            <span class="black--text">Song Title</span>
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
export default {};
</script>

<style scoped></style>
