<template>
  <div :class="btnClass">{{ letter }}</div>
</template>

<script>
export default {
  name: "LetterSimple",
  props: ['letter', 'active'],
  computed: {
    btnClass() {
      let btnClass = 'btn btn-sm mb-1 font-weight-bold '
      return btnClass += (this.active) ? 'btn-active' : 'btn-inactive'
    }
  }
}
</script>

<style scoped>
.btn-active {background-image: linear-gradient(0, green 10%, transparent 11%);}
.btn-inactive {background-image: linear-gradient(0, red 10%, #ccc 11%);}
</style>