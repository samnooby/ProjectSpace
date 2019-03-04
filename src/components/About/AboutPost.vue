<template>
  <div>
    <v-card class="secondary">
      <v-card-title>
        <v-layout align-center justify-center>
          <span class="text--text display-1">{{ owner }}</span>
        </v-layout>
      </v-card-title>
      <v-card-text>
        <v-layout>
          <v-flex v-if="!flipped" xs4>
            <v-img
              class="elevation-3 background"
              :aspect-ratio="16 / 9"
              v-bind:src="postimg.imageURL"
              style="border-radius: 5px;"
            ></v-img>
          </v-flex>
          <v-flex offset-xs1 xs7>
            <span class="text--text">{{ posttext }}</span>
          </v-flex>
          <v-flex v-if="flipped" xs4>
            <v-img
              class="elevation-3 background"
              :aspect-ratio="16 / 9"
              v-bind:src="postimg.imageURL"
              style="border-radius: 5px;"
            ></v-img>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    owner: {
      type: String,
      required: true
    },
    posttext: {
      type: String,
      require: true
    },
    postimg: {
      type: Object
    },
    flipped: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped></style>
