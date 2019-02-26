<template>
  <v-card class="primary pa-2" width="100%">
    <div class="text-xs-center pa-2">
      <span class="font-weight-light grey--text">Space</span>
      <span class="font-weight-medium white--text">Force</span>
    </div>

    <v-divider></v-divider>

    <v-list class="secondary">
      <v-list-tile
        v-for="link in links"
        :key="link.name"
        router
        :to="{ name: link.name }"
        class="ma-2"
      >
        <v-list-tile-action>
          <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="white--text">
            {{ link.text }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: 'home', name: 'home', text: 'Home' },
        { icon: 'person', name: 'about', text: 'About' },
        { icon: 'book', name: 'booking', text: 'Book Chillout' },
        { icon: 'music_note', name: 'bowlsongs', text: 'Bowl Songs' },
        { icon: 'work', name: 'currentprojects', text: 'Current Projects' }
      ]
    };
  }
};
</script>

<style scoped></style>
