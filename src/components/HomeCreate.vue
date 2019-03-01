<template>
  <div>
    <v-card class="secondary text--text">
      <v-card-title class="display-1">
        <span v-if="hastitle == true">Make a new post {{ hastitle }}</span>
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
              <v-btn @click="closeMenu" class="info">Close</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ImageUploader from '@/components/ImageUploader';
import { mapActions } from 'vuex';

export default {
  props: {
    hastitle: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ImageUploader
  },
  data() {
    return {
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

        this.closeMenu();
      }
    },
    closeMenu() {
      this.$emit('closemenu', true);
    }
  }
};
</script>

<style scoped></style>
