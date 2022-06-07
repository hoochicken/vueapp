<template>
  <div class="icon">
    <font-awesome-icon :icon="iconName" />
  </div>
</template>

<script>
export default {
  name: "MenuIcon",
  props: ['iconName']
}
</script>

<style scoped>
.icon { width:40px;}
</style>