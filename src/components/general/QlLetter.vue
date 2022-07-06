<template>
  <div class="bg-image position-relative">
    <img class="image" :src="src" @mouseover="showTitle = true" @mouseout="showTitle = false" />
    <div v-if="showTitle && '' !== title" class="title position-fixed">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "QlLetter",
  props: [
    'src',
    'title'
  ],
  data: () => ({
    showTitle: false
  })
}
</script>

<style scoped>
  .title { margin-top:-30px; }
  img.image { width:100%; }
  div { width:10%; }
</style>
