<template>
  <div class="d-flex justify-content-center">
    <ql-letter v-for="letter in letters" :src="'alphabet/' + letter + '.png'" :title="letter.toUpperCase()"/>
  </div>
</template>

<script>
import QlLetter from "./QlLetter";
export default {
  name: "QlWord",
  components: {QlLetter},
  // props: {'word': {type:String, default:'Hallo'}},
  props: ['word'],
  data: () => {
    return {
      letters: [],
      lettersch: [],
      letterReady: []
    };
  },
  mounted() {
    this.displaySigns()
  },
  watch: {
    word() {
      this.displaySigns()
    }
  },
  methods:{
    displaySigns() {
      this.letters = this.splitWordIntoLetters(this.word)
    },
    splitWordIntoLetters(word)
    {
      word = word.replace('ß', 'ss')
      let sch = 'sch';
      let lettersch = word.toLowerCase().split(sch)
      let letters = []
      for (let i in lettersch) {
        for (let i2 in lettersch[i].split('')) {
          letters.push(lettersch[i][i2])
        }
        letters.push(sch)
      }
      // strip last element (sch) from array
      letters.length = letters.length - 1
      return letters
    }
  }
}
</script>

<style scoped>

</style>