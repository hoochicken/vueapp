<template>
  <div>
    <h2>Alphabet</h2>
    <!--div class="alert alert-black">{{ lettersAll }}</div-->
    <div class="">
      <letter-simple v-for="letter in lettersAll" v-on:click="toggleLetter(letter)" :letter="letter" :active="lettersActive.includes(letter)"></letter-simple>
    </div>
    <div class="btn btn-white" v-on:click="addAllLetters()">Alle anwählen</div>
    <div class="btn btn-white" v-on:click="removeAllLetters()">Alle deaktivieren</div>
  </div>
</template>

<script>
import LetterSimple from "./LetterSimple";
export default {
  name: "AlphabetSelect",
  components: {LetterSimple},
  props: ['letters'],
  data: () => ( {
    lettersAll: [],
    lettersActive: [],
    isLoading: false
  }),
  mounted: function() {
    this.initiateLetter();
  },
  methods: {
    async initiateLetter() {
      this.isLoading = true
      this.axios
          .get('/letters')
          .then(response => {
            this.lettersAll = response.data.letters
            this.addAllLetters();
            this.setLetters();
            this.isLoading = false
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {this.isLoading = false})
    },
    addLetter(letter) {
      if (this.lettersActive.includes(letter)) return
      this.lettersActive.push(letter)
    },
    removeLetter(letter) {
      this.lettersActive = this.lettersActive.filter(function(e) {
        return letter !== e;
      })
    },
    toggleLetter(letter) {
      if (this.lettersActive.includes(letter)) this.removeLetter(letter)
      else this.addLetter(letter)
    },
    addAllLetters() {
      this.lettersActive = this.lettersAll
      this.setLetters()
    },
    removeAllLetters() {
      this.lettersActive = []
    }
  }
}
</script>

<style scoped>

</style>