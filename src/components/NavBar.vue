<template>
  <div>
    <div v-for="page in pages" :key="page.id">
      <router-link />
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
