<template>
  <div class="background router-page">
    <h1 class="text--text display-3">Welcome to the SpaceForce</h1>
    <v-container class="my-2 text--text">
      <div v-for="post in homeposts" :key="post.id">
        <HomePost
          :Id="post.id"
          :PostDate="post.date"
          :Owner="post.owner"
          :FileImage="post.img"
          :Text="post.text"
          :Title="post.title"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import HomePost from '@/components/HomePost';
export default {
  components: {
    HomePost
  },
  props: {
    homeposts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
