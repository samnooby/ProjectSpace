<template>
  <div>
    <h1>{{ songslist }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    songslist: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped></style>
