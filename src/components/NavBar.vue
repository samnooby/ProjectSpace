<template>
  <v-list app>
    <v-list-tile
      dense
      v-for="page in pages"
      :key="page.id"
      class="navbar-button"
    >
      <v-list-tile-title>
        <router-link :to="{ name: page.name }">{{ page.name }}</router-link>
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          name: 'home',
          id: 1
        },
        {
          name: 'about',
          id: 2
        },
        {
          name: 'booking',
          id: 3
        },
        {
          name: 'bowlsongs',
          id: 4
        },
        {
          name: 'currentprojects',
          id: 5
        }
      ]
    }
  }
}
</script>

<style scoped></style>
