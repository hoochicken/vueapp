<template>
  <div class="words">
    <h1>Fingeralphabet</h1>
    <div class="">
      <qlword :word="word" />
    </div>
    <input type="text" ref="guess" class="form-control" id="guess" name="guess" @keydown.enter="checkGuess()" v-model="guess" />
    <div class="d-flex">
      <MDBBtn class="btn btn-primary" @click="checkGuess()">Antwort prüfen</MDBBtn>
      <MDBBtn v-if="!isLoading" class="btn btn-secondary" @click="tryAgain()">Nächstes Wort bitte!</MDBBtn>
      <MDBBtn class="btn btn-secondary ms-auto" @click="restart()">Ganz neu anfangen</MDBBtn>
      <MDBBtn class="btn btn-secondary" @click="setLetters">SET LETTERS</MDBBtn>
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
      <br /> wordlist: {{ wordlist }}
      </div>
    </div>
  </div>
  <div class="d-md-flex">
    <div class="p-2 flex-fill">
      <alphabet ref="alphabetion" @setLetters="setLetters"></alphabet>
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
      <statistics ref="statistics"></statistics>
    </div>
    <div v-if="0 < personalWordList.length" class="p-2 flex-fill">
      <h2>Deine richtig geratenen Wörter</h2>
      <wordlist ref="wordlist" :words="personalWordList"></wordlist>
    </div>
  </div>
</template>

<script>

import { MDBBtn } from "mdb-vue-ui-kit"
import Statistics from "../components/layout/Statistics"
import Wordlist from "../components/layout/Wordlist"
import Qlword from "../components/general/Qlword"
import Alphabet from "../components/general/Alphabet";
import WordLength from "../components/general/WordLength";


export default {
  name: 'WordGuess',
  components: {WordLength, Alphabet, Wordlist, Statistics, MDBBtn, Qlword },
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
    wordlist: ['Hallo'],
    wordLength: 0,
    showDebug: false,
    errored: false,
    isLoading: true
  }),
  mounted: function() {
    this.switchWord();
    this.displaySigns();
    this.initiateWords(this.$refs.alphabetion.lettersAll, this.wordLength);
    this.alphabet = Array.from(this.alphabetRaw);
  },
  methods: {
    checkGuess() {
      this.pleaseGuess = ('' === this.guess);
      if (this.pleaseGuess) return;
      if (this.guessJustChecked === this.guess) { this.pleaseGuessNew = true; }
      if (this.wordJustChecked === this.word && this.guessJustChecked === this.guess) { return; }
      this.right = this.compareIgnoreCase(this.word, this.guess);
      this.wordJustChecked = this.word;
      this.guessJustChecked = this.guess;
      if (this.right) {
        this.addRight();
        this.addToPersonalWordList(this.word);
        this.tryAgain();
      } else {
        this.addWrong();
      }
      this.result = true;
      this.pleaseGuessNew = false;
    },
    async initiateWords(letters, wordLength = 10) {
      console.log('==================')
      console.log('letters: ' + letters)
      console.log('wordLength: ' + wordLength)
      this.errored = false
      this.isLoading = true
      let endpoint = '/words';
      if (0 < letters.length && 0 < wordLength) endpoint += '/' + letters + '/' + wordLength
      else if (0 < wordLength) endpoint += '/' + wordLength
      else if (0 < letters.length) endpoint += '/' + letters
      this.isLoading = false
      await this.axios
          .get(endpoint)
          .then(response => {
            this.wordlist = response.data.words
            this.isLoading = false
          })
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.isLoading = false)
    },
    compareIgnoreCase(a, b) {
      return a.toLowerCase() === b.toLowerCase();
    },
    addToPersonalWordList(word) {
      // this.$refs.wordlist.addWord(word);
      this.personalWordList.unshift(word);
    },
    resetPersonalWordList() {
      this.personalWordList = [];
    },
    setLetters() {
      this.initiateWords(this.$refs.alphabetion.lettersActive.join(''), this.wordLength)
    },
    tryAgain() {
      this.switchWord();
      this.$refs.guess.focus();
      this.displaySigns();
      this.guess = '';
      this.result = false;
    },
    restart() {
      this.resetPersonalWordList();
      this.$refs.statistics.resetChart();
      this.tryAgain();
    },
    displaySigns() {
      this.letters = this.word.toLowerCase().split('');
    },
    switchWord() {
      this.word = this.wordlist[this.getRandomInt(this.wordlist.length)];
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    addRight() {
      this.$refs.statistics.addRight();
    },
    addWrong() {
      this.$refs.statistics.addWrong();
    },
    setWordLength(wordLength) {
      this.wordLength = wordLength;
      this.initiateWords(this.letters, this.wordLength)
    }
  }
}
</script>

<style>
.statistics {max-width: 50%;}
@media(max-width:800px) {
  .statistics {max-width: 100%;}
}
</style>
