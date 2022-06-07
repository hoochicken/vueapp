<template>
  <div v-if="error" class="error">
    <div>
      <span class="status" v-if="error.status">{{ error.status }}: </span>
      <span class="message" v-if="error.statusText">{{ error.statusText }}</span>
    </div>
    <md-button class="md-raised md-secondary" v-if="!show" @click="show = true;">Show Error Details</md-button>
    <md-button class="md-raised md-secondary" v-if="show" @click="show = false">Hide</md-button>
    <span class="error" v-if="show && error" v-html="error.data"></span>
  </div>
</template>

<script>
export default {
  name: "ErrorDisplay",
  props: {
    error: {}
  },
  data: function() {
    return {
      show: false
    };
  }
}
</script>

<style scoped>
  .status {font-weight: bold;}
</style>