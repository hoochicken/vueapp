<template>
  <div>
    <table class="table table-striped">
      <tbody>
        <tr v-for="item in words">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </table>
    <!--{{ oldValue }} {{ newValue }} -->
  </div>
</template>

<script>
export default {
  name: "WordList",
  data: () => {
    return {
      oldValue:'',
      newValue:'',
    }
  },
  props: ['words'],
  watch: {
    words: function(oldValue, newValue) {
      this.oldValue = oldValue;
      this.newValue = newValue;
    }
  },
  methods: {
    addWord(word){
      this.words.unshift(word);
      this.removeDuplicates();
    },
    removeWord(word){
      this.words.push(word);
      this.removeDuplicates();
    },
    removeDuplicates () {
      this.words = [ ...new Set(this.words) ]
    }
  }
}
</script>

<style scoped>

</style>