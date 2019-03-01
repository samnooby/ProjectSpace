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
            <v-img :aspect-ratio="16 / 9" v-bind:src="FileImage.imageURL">
              <div
                class="hidden-md-and-up"
                style="height: 100%; display:flex; align-items: center; justify-content:center;"
              >
                <span
                  class="white--text font-weight-medium text-uppercase display-2"
                  >{{ Title }}</span
                >
              </div>
            </v-img>
          </v-flex>

          <v-flex xs12 md6>
            <v-card-text class="body--text text-xs-left">{{
              Text
            }}</v-card-text>
          </v-flex>
        </v-layout>

        <v-footer card class="text--text secondary mx-3 px-2">
          <span class="caption">
            {{ PostDate.getDate() }}/{{ PostDate.getMonth() }}/{{
              PostDate.getFullYear()
            }}
          </span>
          <v-spacer></v-spacer>
          <span class="caption">Posted by {{ Owner }}</span>
        </v-footer>

        <v-card class="third" v-if="Comments">
          <v-layout row wrap>
            <v-flex xs12>
              <h1 class="text--text">Comments</h1>
            </v-flex>
            <v-flex xs10 offset-xs1>
              <p>{{ Comments[0].text }}</p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
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
      type: Date,
      default: new Date().getDate()
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
      type: Object
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
