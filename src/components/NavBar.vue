<template>
  <v-card flat class="third pa-2" width="100%">
    <div class="text-xs-center pa-2">
      <span class="font-weight-light grey--text">Space</span>
      <span class="font-weight-medium white--text">Force</span>
    </div>

    <v-divider></v-divider>

    <v-list class="secondary">
      <v-list-tile
        v-for="link in getLinks"
        :key="link.name"
        router
        :to="{ name: link.name }"
        class="ma-2"
      >
        <v-list-tile-content>
          <v-list-tile-title class="text--text">{{
            link.propername
          }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    links: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    getLinks() {
      var currentLinks = [];
      var link;
      for (link in this.links) {
        if (this.links[link].name != 'error') {
          currentLinks.push(this.links[link]);
        }
      }
      return currentLinks;
    }
  }
};
</script>

<style scoped></style>
