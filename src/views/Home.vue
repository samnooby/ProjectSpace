<template>
  <div class="background router-page">
    <h1 class="text--text display-3">Welcome to the SpaceForce</h1>
    <v-container class="my-2 text--text">
      <v-layout>
        <v-flex xs12 class="secondary">
          <v-card class="secondary">
            <v-expansion-panel class="hidden-sm-and-down">
              <v-expansion-panel-content
                v-model="newposttop"
                class="third text--text"
              >
                <template v-slot:header>
                  <h1>Create Post</h1>
                </template>
                <v-card>
                  <HomeCreate :hastitle="false" @closemenu="close" />
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card>
        </v-flex>
      </v-layout>
      <div v-for="post in flip" :key="post.id">
        <HomePost
          :Id="post.id"
          :PostDate="post.created_at"
          :Owner="post.owner"
          :FileImage="post.imageLink"
          :Text="post.text"
          :Title="post.title"
          :Comments="post.comments"
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
        <span>Make News Post</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import HomePost from '@/components/Home/HomePost'
import HomeCreate from '@/components/Home/HomeCreate'

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
      newpost: false,
      newposttop: false
    }
  },
  methods: {
    close() {
      this.newpost = false
      this.newposttop = false
    }
  },
  computed: {
    flip() {
      return this.homeposts.slice().reverse()
    }
  }
}
</script>
