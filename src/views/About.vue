<template>
  <div>
    <div class="background router-page">
      <h1 class="text--text display-3">About The Space Force</h1>
      <v-container class="my-2 text--text">
        <div v-for="post in aboutposts" :key="post.id" class="pa-3 background">
          <AboutPost
            v-bind:owner="post.owner"
            v-bind:posttext="post.posttext"
            v-bind:postimg="post.img"
            v-bind:flipped="post.id % 2 != 0"
          ></AboutPost>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import AboutPost from '@/components/About/AboutPost';

export default {
  components: {
    AboutPost
  },
  props: {
    aboutposts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
