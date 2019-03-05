<template>
  <v-layout>
    <v-flex xs12>
      <v-card class="pa-2 secondary my-2" style="border-radius: 5px;">
        <v-layout row wrap class="mx-3">
          <v-flex
            xs12
            v-bind:class="{ 'hidden-sm-and-down': hasImage() }"
            class="my-3"
          >
            <div
              style="height: 100%; display:flex; align-items: center; justify-content:center;"
            >
              <span
                style="overflow-wrap: break-word;"
                class="white--text font-weight-medium text-uppercase display-1"
                >{{ Title }}</span
              >
            </div>
          </v-flex>
          <v-flex
            xs12
            md6
            class="background"
            style="border-radius:3px;"
            v-if="hasImage()"
          >
            <v-img :aspect-ratio="16 / 9" v-bind:src="FileImage">
              <div
                class="hidden-md-and-up"
                style="height: 100%; display:flex; align-items: center; justify-content:center;"
              >
                <span
                  style="overflow-wrap: break-word;"
                  class="white--text font-weight-medium text-uppercase display-2"
                  >{{ Title }}</span
                >
              </div>
            </v-img>
          </v-flex>

          <v-flex xs12 md6 v-if="hasImage()">
            <v-card-text>
              <div>
                <p
                  style="overflow-wrap: break-word;"
                  class="body--text text-xs-left"
                >
                  {{ Text }}
                </p>
              </div>
            </v-card-text>
          </v-flex>
          <v-flex xs12 v-if="!hasImage()">
            <v-card-text>
              <div>
                <p
                  style="overflow-wrap: break-word;"
                  class="body--text text-xs-left"
                >
                  {{ Text }}
                </p>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-flex
          xs12
          style="border-radius: 5px;"
          class="background elevation-5 mb-2"
        >
          <v-layout row wrap>
            <v-flex xs12 sm2>
              <v-text-field
                class="text--text"
                v-model="author"
                label="Author"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 offset-sm1 sm9>
              <v-text-field
                class="text--text"
                v-model="comment"
                label="Type Comment Here"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-btn class="info" round @click="uploadPost">Add Comment</v-btn>
        </v-flex>

        <v-flex xs12 v-if="Comments && Comments.length != 0">
          <v-card class="secondary">
            <v-card-text class="secondary">
              <v-layout row wrap class="secondary">
                <v-flex xs12 class="secondary">
                  <v-layout
                    style="border-radius: 10px;"
                    class="background mb-2 pb-0 pt-3"
                    v-for="comment in Comments"
                    :key="comment.id"
                  >
                    <v-flex xs9>
                      <p class="black--text">{{ comment.text }}</p>
                    </v-flex>
                    <v-flex xs3>
                      <p>Author: {{ comment.author }}</p>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-footer card class="text--text secondary mx-3 px-2">
          <span class="caption">{{ PostDate }}</span>
          <v-spacer></v-spacer>
          <span class="caption">Posted by {{ Owner }}</span>
        </v-footer>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    Title: {
      type: String,
      required: true
    },
    Id: {
      type: Number,
      required: true
    },
    PostDate: {
      type: String,
      required: true
    },
    Owner: {
      type: String,
      required: true
    },
    Text: {
      type: String,
      required: true
    },
    FileImage: {
      type: String,
      required: false
    },
    Comments: {
      type: Array
    }
  },
  data() {
    return {
      comment: '',
      author: ''
    };
  },
  computed: {},
  methods: {
    ...mapActions(['addComment']),
    hasImage() {
      return this.FileImage != null;
    },
    uploadPost() {
      var i = this.Id;
      var autor = this.author;
      if (autor == '') {
        autor = 'Anonymous';
      }
      var comment = { text: this.comment, id: i, author: autor };

      this.addComment(comment);
    }
  }
};
</script>

<style scoped>
.bordered {
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: black;
}
</style>
