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
            <v-img :aspect-ratio="16 / 9" v-bind:src="FileImage">
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
