<template>
  <v-layout>
    <v-flex xs12>
      <v-card class="pa-2 secondary my-2" style="border-radius: 5px;">
        <v-layout row wrap class="mx-3">
          <v-flex xs12 v-bind:class="{ 'hidden-sm-and-down': hasImage() }" class="my-3">
            <v-layout
              white--text
              font-weight-medium
              text-uppercase
              style="height: 100%; display:block; word-wrap: break-word;"
            >
              <p style="display: block; word-wrap: break-word; font-size: 4vw;">{{ Title }}</p>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6 class="background" style="border-radius:3px;" v-if="hasImage()">
            <v-img :aspect-ratio="16 / 9" v-bind:src="FileImage" style="margin: auto;">
              <v-layout justify-center align-center fill-height>
                <div style="width: 100%;  word-break: break-word; font-size: 4vw;">
                  <p
                    style="font-size: 4vw;"
                    class="white--text font-weight-medium text-uppercase hidden-md-and-up"
                  >{{ Title }}</p>
                </div>
              </v-layout>
            </v-img>
          </v-flex>

          <v-flex xs12 md6 v-if="hasImage()">
            <v-card-text>
              <div>
                <p
                  style="font-size: 2vw; word-wrap: break-word;"
                  class="body--text text-xs-left"
                >{{ Text }}</p>
              </div>
            </v-card-text>
          </v-flex>
          <v-flex xs12 v-if="!hasImage()">
            <v-card-text>
              <div>
                <p style="word-wrap: break-word; " class="body--text text-xs-left">{{ Text }}</p>
              </div>
            </v-card-text>
          </v-flex>
        </v-layout>

        <CommentsSection class="mt-3" :PostId="Id" :Comments="Comments"/>

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
import CommentsSection from '@/components/Home/CommentsSection.vue';

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
    return {};
  },
  computed: {},
  methods: {
    hasImage() {
      return this.FileImage != null;
    }
  },
  components: { CommentsSection }
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
