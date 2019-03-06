<template>
  <div>
    <v-card class="secondary text--text">
      <v-card-title class="display-1">
        <span v-if="hastitle == true">Make a new post</span>
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
                :maxlength="70"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 offset-sm1 sm5>
              <v-text-field
                v-model="postowner"
                label="Post Owner"
                dark
                :maxlength="50"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea
                v-model="posttext"
                label="Post Text*"
                dark
                :maxlength="500"
                :minlength="21"
              ></v-textarea>
            </v-flex>
            <v-flex xs2>
              <ImageUploader @input="addImage">
                <v-layout slot="activator" justify-center wrap row>
                  <v-btn class="info">Add Image</v-btn>
                  <p v-if="hasimage">Image Added</p>
                </v-layout>
              </ImageUploader>
            </v-flex>
            <v-flex xs2 offset-xs1>
              <v-btn v-if="hasimage" @click="removeImage" class="info"
                >Remove Image</v-btn
              >
            </v-flex>
            <v-flex offset-xs5 xs2>
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
      error: false,
      hasimage: false
    };
  },
  methods: {
    ...mapActions(['addPost']),
    addImage(img) {
      this.postpic = img;
      this.hasimage = true;
    },
    uploadPost() {
      var d = new Date();
      var post = new FormData();

      var makeDate =
        d.getFullYear() +
        '-' +
        d.getMonth() +
        '-' +
        d.getDate() +
        ' ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds();
      if (this.posttitle == '') {
        this.error = true;
      } else if (this.posttext == '') {
        this.error = true;
      } else {
        var owner = this.postowner;
        if (owner == '') {
          owner = 'Anonymous';
        }

        if (this.postpic != null) {
          post.append('image', this.postpic);
        }
        post.append('created_at', makeDate);
        post.append('owner', owner);
        post.append('text', this.posttext);
        post.append('title', this.posttitle);
        post.append('id', -1);

        this.addPost(post);

        this.postowner = '';
        this.posttext = '';
        this.posttitle = '';
        this.postpic = null;
        this.newpost = false;
        this.hasimage = false;

        this.closeMenu();
      }
    },
    closeMenu() {
      this.$emit('closemenu', true);
    },
    removeImage() {
      this.postpic = null;
      this.hasimage = false;
    }
  }
};
</script>

<style scoped></style>
