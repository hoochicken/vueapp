<template>
  <div>
    <h2>Word Length</h2>
    <div class="d-flex">
      <div v-for="(item, key) in lengthAvailable" v-bind:key="key">
        <span :class="item === length ? 'float-left btn btn-sm btn-secondary' : 'float-left btn btn-sm'" v-on:click="this.$emit('setWordLength', item)">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WordLength",
  props: {length},
  data: () => {
    return {
      lengthAvailable: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<style scoped>

</style>