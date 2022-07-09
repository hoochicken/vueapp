<template>
  <div class="words">
    <h1>Fingeralphabet</h1>
    <div class="">
      <ql-word :word="word" />
    </div>
    <input type="text" ref="guess" class="form-control" id="guess" name="guess" @keydown.enter="checkGuess()" v-model="guess" />
    <div class="d-flex">
      <MDBBtn class="btn btn-primary" @click="checkGuess()">Antwort prüfen</MDBBtn>
      <MDBBtn v-if="!isLoading" class="btn btn-secondary" @click="tryAgain()">Nächstes Wort bitte!</MDBBtn>
      <MDBBtn class="btn btn-secondary ms-auto" @click="restart()">Ganz neu anfangen</MDBBtn>
    </div>

    <div class="please-guess">
      <div v-if="pleaseGuess" class="p-2 mt-4 bg-info text-white">Du hast noch nix zum Vergleichen eingetragen.<br />Bitte rate wenigstens 1 Mal :-)</div>
      <div v-if="pleaseGuessNew" class="p-2 mt-4 bg-info text-white">Jetzt trag mal was anderes ein ... ;-)</div>
      <div v-if="!pleaseGuess && right && result" class="p-2 mt-4 bg-success text-white">Ja, richtig! Das war "{{ wordJustChecked }}"</div>
      <div v-if="!pleaseGuess && !right && result" class="p-2 mt-4 bg-danger text-white">Nich ganz ...</div>
    </div>
    <div v-if="isLoading" class="loading alert alert-warning">
      Ich lade gerade deine Ratewörter, bitte warten ... <!--loading-spinner></loading-spinner-->
    </div>

    <div v-if="showDebug" class="debug-container mt-4">
      <div v-if="!showDebug" @click="showDebug = true" class="btn btn-secondary">Show debug</div>
      <div v-if="showDebug" @click="showDebug = false" class="btn btn-secondary">Hide debug</div>
      <div v-if="showDebug" class="p-2 mt-4 bg-light">word: {{ word }} // guess: {{ guess }} // letters: {{ letters }}
        <br /> {{ debug }}
        <br /> <div style="display:block; height:50px;overflow:hidden;" v-if="showDebug">wordlist: {{ wordlist }}</div>
      </div>
    </div>
  </div>
  <div class="mt-3">
    <h2>Schwierigkeitsstufe</h2>
    <MDBBtn class="btn btn-secondary" @click="getNewWords">Neue Wörter holen</MDBBtn>
  </div>
  <div class="d-md-flex">
    <div class="p-2 flex-fill">
      arraysCompared : {{ arraysCompared }}<br />
      letters : {{ letters }}<br />
      lettersActuallyUsed : {{ lettersActuallyUsed }}
      <alphabet-select ref="alphabetion" :letters="lettersActuallyUsed" @letterChanged="setLetters"></alphabet-select>
      <div class="alert alert-info mt-3" v-if="letters !== lettersActuallyUsed">Du hast gerade neue Buchstaben angewählt. <br />Bitte klicke auf <strong>Neue Wörter holen</strong>, damit die Änderungen wirksam werden.</div>
    </div>
  <!--/div>
  <div class="d-md-flex"-->
    <div class="p-2 flex-fill">
      <word-length :length="wordLength" @setWordLength="setWordLength"></word-length>
    </div>
  </div>
  <div class="d-md-flex">
    <div class="statistics p-2 flex-fill">
      <h2>Deine aktuelle Statistik</h2>
      <guess-statistics ref="statistics"></guess-statistics>
    </div>
    <div v-if="0 < personalWordList.length" class="p-2 flex-fill">
      <h2>Deine richtig geratenen Wörter</h2>
      <word-list ref="wordlist" :words="personalWordList"></word-list>
    </div>
  </div>
</template>

<script>

import { MDBBtn } from "mdb-vue-ui-kit"
import GuessStatistics from "../components/layout/GuessStatistics"
import WordList from "../components/layout/WordList"
import QlWord from "../components/general/QlWord"
import AlphabetSelect from "../components/general/AlphabetSelect"
import WordLength from "../components/general/WordLength"


export default {
  name: 'WordGuess',
  components: {WordLength, AlphabetSelect, WordList, GuessStatistics, MDBBtn, QlWord },
  data: () => ({
    word: '',
    guess: '',
    wordJustChecked: '',
    guessJustChecked: '',
    pleaseGuess: false,
    pleaseGuessNew: false,
    personalWordList: [],
    alphabetRaw: 'abcdefghijklmnopqrstuvwxyzäöü',
    alphabet: [],
    result: false,
    right: true,
    letters: {},
    lettersActuallyUsed: {},
    wordlist: ['Hallo'],
    wordLength: 10,
    showDebug: false,
    debug: {},
    errored: false,
    isLoading: true
  }),
  mounted: async function() {
    this.switchWord()
    this.displaySigns()
    this.alphabet = Array.from(this.alphabetRaw)
    this.initiateWords(this.alphabet, this.wordLength)
    // await this.initiateWords(await this.$refs.alphabetion.getLettersAll(), this.wordLength)
  },
  computed: {
    arraysCompared() {
      return this.compareArray(this.letters, this.lettersActuallyUsed)
    }
  },
  methods: {
    checkGuess() {
      this.pleaseGuess = ('' === this.guess)
      if (this.pleaseGuess) return
      if (this.guessJustChecked === this.guess) { this.pleaseGuessNew = true; }
      if (this.wordJustChecked === this.word && this.guessJustChecked === this.guess) { return; }
      this.right = this.compareIgnoreCase(this.word, this.guess)
      this.wordJustChecked = this.word
      this.guessJustChecked = this.guess
      if (this.right) {
        this.addRight()
        this.addToPersonalWordList(this.word)
        this.tryAgain()
      } else {
        this.addWrong()
      }
      this.result = true
      this.pleaseGuessNew = false
    },
    /**
     *
     * @array letters
     * @int wordLength
     * @returns {Promise<void>}
     */
    async initiateWords(letters, wordLength = 10) {
      this.errored = false
      this.isLoading = true
      let endpoint = '/words'
      if (0 < letters.length && 0 < wordLength) endpoint += '/' + letters + '/' + wordLength
      // else if (0 < wordLength) endpoint += '/' + wordLength
      else if (0 < letters.length) endpoint += '/' + letters
      await this.axios
          .get(endpoint)
          .then(response => {
            this.wordlist = response.data.words
            this.debug.wordlist = this.wordlist
            this.lettersActuallyUsed = letters
            this.isLoading = false
          })
          .catch(error => {
            console.log(error)
            this.errored = true
            this.debug.error = 'true'
          })
          .finally(() => this.isLoading = false)
    },
    /**
     *
     * @string a
     * @string b
     * @returns {boolean}
     */
    compareIgnoreCase(a, b) {
      return a.toLowerCase() === b.toLowerCase();
    },
    addToPersonalWordList(word) {
      this.personalWordList.unshift(word);
    },
    resetPersonalWordList() {
      this.personalWordList = []
    },
    setLetters(letters) {
      this.letters = letters
    },
    getNewWords() {
      this.initiateWords(this.letters, this.wordLength)
    },
    setWordLength(wordLength) {
      this.wordLength = wordLength
      this.getNewWords()
    },
    tryAgain() {
      this.switchWord()
      this.$refs.guess.focus()
      this.displaySigns()
      this.guess = ''
      this.result = false
    },
    restart() {
      this.resetPersonalWordList()
      this.$refs.statistics.resetChart()
      this.tryAgain()
    },
    displaySigns() {
      this.letters = this.word.toLowerCase().split('')
    },
    switchWord() {
      this.word = this.wordlist[this.getRandomInt(this.wordlist.length)]
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max)
    },
    addRight() {
      this.$refs.statistics.addRight()
    },
    addWrong() {
      this.$refs.statistics.addWrong()
    },
    compareArray(arr1, arr2) {
      console.log(arr1)
      console.log(arr2)
      for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) return false
      }
      return true
    }
  }
}
</script>

<style>
.statistics {max-width: 50%;}
@media(max-width:800px) {
  .statistics {max-width: 100%;width: 100%;}
}
</style>
