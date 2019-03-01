<template>
  <div class="background router-page">
    <h1 class="text--text display-3">Welcome to the SpaceForce</h1>
    <v-container class="my-2 text--text">
      <v-layout>
        <v-flex xs12 class="secondary">
          <v-card class="secondary">
            <v-expansion-panel v-model="newpost" class="hidden-sm-and-down">
              <v-expansion-panel-content class="third text--text">
                <template v-slot:header>
                  <h1>Create Post</h1>
                </template>
                <v-card>
                  <HomeCreate hastitle="false" @closemenu="close" />
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-flex>
      </v-layout>
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

    <v-layout row justify-center>
      <v-dialog v-model="newpost" style="border-radius:3px;">
        <HomeCreate @closemenu="close" />
      </v-dialog>
    </v-layout>

    <div
      class="hidden-md-and-up"
      style="opacity: 0.65; position:absolute; right:4%; bottom: 3%; cursor: pointer;"
    >
      <v-tooltip top>
        <template #activator="data">
          <v-btn icon large @click="newpost = true">
            <v-icon size="60" class="text--text" v-on="data.on"
              >add_circle</v-icon
            >
          </v-btn>
        </template>
        <span>Make New Post</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import HomePost from '@/components/HomePost';
import HomeCreate from '@/components/HomeCreate';

export default {
  components: {
    HomePost,
    HomeCreate
  },
  props: {
    homeposts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      newpost: false
    };
  },
  methods: {
    close() {
      this.newpost = false;
    }
  }
};
</script>
