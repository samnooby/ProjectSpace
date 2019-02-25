<template>
  <div class="navbar">
    <SpaceForceLogo id="navbar-logo"></SpaceForceLogo>
    <div v-for="page in pages" :key="page.id" class="navbar-button">
      <router-link :to="{ name: page.name }">{{ page.name }}</router-link>
    </div>
  </div>
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
