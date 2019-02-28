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

    <v-layout row justify-center>
      <v-dialog v-model="newpost" style="border-radius:3px;">
        <v-card class="secondary text--text">
          <v-card-title class="display-1">
            <span class>Make a new post</span>
          </v-card-title>
          <v-card-text>
            <v-container grid>
              <v-layout row wrap>
                <v-flex xs12 sm5>
                  <v-text-field
                    v-model="posttitle"
                    label="Post Title*"
                    required
                    dark
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 offset-sm1 sm5>
                  <v-text-field
                    v-model="postowner"
                    label="Post Owner"
                    dark
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    v-model="posttext"
                    label="Post Text*"
                    dark
                  ></v-textarea>
                </v-flex>
                <v-flex xs2>
                  <ImageUploader @input="addImage">
                    <div slot="activator">
                      <v-btn class="info">Add Image</v-btn>
                    </div>
                  </ImageUploader>
                </v-flex>
                <v-flex xs2>
                  <p caption v-if="postpic" class="mt-3">Image Added</p>
                </v-flex>
                <v-flex offset-xs6 xs2>
                  <v-btn @click="uploadPost" class="info">Submit</v-btn>
                  <v-btn @click="newpost = false" class="info">Close</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>

    <div
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
import ImageUploader from '@/components/ImageUploader';
import { mapActions } from 'vuex';

export default {
  components: {
    HomePost,
    ImageUploader
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
      postpic: null,
      posttitle: '',
      posttext: '',
      postowner: '',
      error: false
    };
  },
  methods: {
    ...mapActions(['addPost']),
    addImage(img) {
      this.postpic = img;
    },
    uploadPost() {
      if (this.posttitle == '') {
        this.error = true;
      } else if (this.posttext == '') {
        this.error = true;
      } else {
        var owner = this.postowner;
        if (owner == '') {
          owner = 'Anonymous';
        }
        var post = {
          id: -1,
          date: new Date(),
          owner: this.postowner,
          text: this.posttext,
          title: this.posttitle,
          img: this.postpic
        };
        this.addPost(post);

        this.postowner = '';
        this.posttext = '';
        this.posttitle = '';
        this.postpic = null;
        this.newpost = false;
      }
    }
  }
};
</script>
