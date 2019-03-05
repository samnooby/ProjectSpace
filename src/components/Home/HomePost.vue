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
          <v-text-field
            class="text--text"
            v-model="comment"
            label="Type Comment Here"
          ></v-text-field>
          <v-btn @click="addComment">Add Comment</v-btn>
        </v-flex>
        <v-flex xs12 v-if="Comments && Comments.length != 0">
          <v-card>
            <v-card-text>
              <h1>{{ Comments[0] }}</h1>
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
      comment: ''
    };
  },
  computed: {},
  methods: {
    ...mapActions(['addComment']),
    hasImage() {
      this.addComment(this.comment);
    },
    addComment() {}
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
