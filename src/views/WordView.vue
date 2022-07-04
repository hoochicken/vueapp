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
  </div>
  <div class="d-md-flex">
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
  name: 'Word',
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
    this.initiateWords(this.$refs.alphabetion.lettersAll);
    // this.initiateWordsLocal(this.$refs.alphabetion.lettersAll);
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
    async initiateWords(letters) {
      this.errored = false
      this.isLoading = true
      let endpoint = '/words';
      if (0 < letters.length) endpoint += '/' + letters
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
    async initiateWordsLocal(letters) {
      this.errored = false
      this.isLoading = true
      let wordlist = ['Ar', 'Ei', 'Hi', 'Ma', 'ab', 'am', 'an', 'au', 'aß', 'da', 'du', 'eh', 'er', 'es', 'im', 'in', 'ja', 'je', 'la', 'le', 'me', 'ob', 'oh', 'so', 'um', 'wo', 'zu', 'Öl', 'öd', 'Ren', 'Yen', 'Aal', 'Aas', 'Abi', 'Abt', 'Akt', 'Alb', 'Alm', 'Alp', 'Alu', 'Amt', 'Art', 'Ass', 'Ast', 'Aug', 'Axt', 'Bad', 'Bau', 'Beo', 'Bio', 'Boa', 'Bob', 'Bon', 'Box', 'Bub', 'Bug', 'Bus', 'Buß', 'Bär', 'Böe', 'Dia', 'Dom', 'Duo', 'Dur', 'Ego', 'Ehe', 'Eid', 'Eil', 'Eis', 'End', 'Erb', 'Erd', 'Erz', 'Fee', 'Fug', 'Fuß', 'Gag', 'Gas', 'Gel', 'Gnu', 'Hab', 'Hai', 'Heu', 'Hof', 'Hub', 'Huf', 'Hut', 'Hör', 'Ion', 'Job', 'Jod', 'Jux', 'Kai', 'Kap', 'Kit', 'Klo', 'Kot', 'Kuh', 'Kur', 'Kür', 'Lid', 'Lob', 'Lot', 'Lug', 'Löt', 'Mai', 'Mix', 'Mob', 'Mus', 'Mut', 'Neo', 'Not', 'Nut', 'Ode', 'Ohr', 'Oma', 'Opa', 'Ort', 'Ost', 'Pik', 'Pol', 'Rad', 'Rat', 'Reh', 'Ruf', 'Rum', 'Run', 'Ruß', 'Sau', 'See', 'Seh', 'Sex', 'Sir', 'Ski', 'Sud', 'Süd', 'Tag', 'Tal', 'Tau', 'Tee', 'Tod', 'Ton', 'Top', 'Tor', 'Typ', 'Tür', 'Uhr', 'Uhu', 'Ulk', 'Wal', 'Web', 'Weh', 'Wut', 'Zar', 'Zeh', 'Zoo', 'Zug', 'ach', 'ade', 'all', 'als', 'alt', 'arg', 'arm', 'auf', 'aus', 'bar', 'bat', 'bei', 'bin', 'bis', 'bog', 'bot', 'buk', 'bös', 'dar', 'das', 'dem', 'den', 'der', 'des', 'die', 'dir', 'ein', 'elf', 'eng', 'fix', 'für', 'gab', 'gar', 'gen', 'gut', 'gäb', 'hat', 'her', 'hin', 'hob', 'ich', 'ihm', 'ihn', 'ihr', 'irr', 'ist', 'jäh', 'kam', 'lag', 'las', 'lau', 'lax', 'log', 'los', 'mal', 'man', 'mir', 'mit', 'nah', 'neu', 'nie', 'nun', 'nur', 'oft', 'oho', 'per', 'peu', 'pur', 'ran', 'rau', 'reg', 'roh', 'rot', 'sah', 'saß', 'sei', 'sie', 'sog', 'süß', 'tat', 'tot', 'tun', 'und', 'uns', 'vom', 'von', 'vor', 'was', 'weg', 'wem', 'wen', 'wer', 'wie', 'wir', 'wog', 'zog', 'zum', 'zur', 'zäh', 'Äon', 'Ära', 'Öde', 'Öko', 'Öse', 'äße', '', 'Foto', 'Frau', 'Fraß', 'Fron', 'Fund', 'Funk', 'Furt', 'Furz', 'Fähr', 'Föhn', 'Füll', 'Gabe', 'Gala', 'Gang', 'Gans', 'Garn', 'Gast', 'Gaul', 'Geck', 'Geiz', 'Geiß', 'Geld', 'Gier', 'Gieß', 'Gift', 'Gips', 'Giro', 'Glas', 'Glut', 'Glüh', 'Gnom', 'Gold', 'Golf', 'Gong', 'Grab', 'Grad', 'Graf', 'Gral', 'Gras', 'Grat', 'Grog', 'Gros', 'Gruß', 'Guck', 'Gurt', 'Guru', 'Guss', 'Göre', 'Güte', 'Haar', 'Hack', 'Haft', 'Hahn', 'Hain', 'Hall', 'Halm', 'Hals', 'Halt', 'Hand', '', 'Essen', 'Faden', 'Foren', 'Hafen', 'Hasen', 'Hoden', 'Hosen', 'Häfen', 'Höhen', 'Laken', 'Magen', 'Mäzen', 'Namen', 'Nomen', 'Orden', 'Osten', 'Polen', 'Samen', 'Segen', 'Süden', 'Wesen', 'Zonen', 'Abart', 'Abbau', 'Abend', 'Abgas', 'Abhol', 'Abhör', 'Abort', 'Abruf', 'Absud', 'Abtei', 'Abweg', 'Abzug', 'Achse', 'Acker', 'Acryl', 'Adams', 'Adler', 'After', 'Agave', 'Agent', 'Ahorn', 'Aktie', 'Alarm', 'Album', 'Alibi', 'Allee', 'Alpha', 'Altar', 'Alter', 'Altöl', 'Ampel', 'Amsel', 'Anbau', 'Angel', 'Anker', 'Anmut', 'Anruf', 'Anzug', 'Apfel', 'April', 'Apsis', 'Arche', 'Areal', 'Arena', 'Arier', 'Armee', 'Armut', 'Aroma', 'Arsch', 'Asche', 'Asket', 'Aspik', 'Assel', 'Aster', 'Astro', 'Atlas', 'Atoll', 'Audio', 'Autor', 'Axiom', 'Bahre', 'Bambi', 'Bande', 'Banjo', 'Barde', 'Baron', 'Basar', 'Basis', 'Batik', 'Bauch', 'Bauer', 'Beere', 'Belag', 'Beleg', 'Berge', 'Beruf', 'Beton', 'Beuge', 'Beule', 'Beute', 'Bezug', 'Bibel', 'Biber', 'Biene', 'Biest', 'Binde', 'Binse', 'Birke', 'Birne', 'Bitte', 'Biwak', 'Blase', 'Blatt', 'Blech', 'Blick', 'Blink', 'Blitz', 'Block', 'Bluff', 'Blume', 'Bluse', 'Blöße', 'Blüte', 'Bohle', 'Bohne', 'Bombe', 'Bongo', 'Bonus', 'Bonze', 'Boots', 'Borke', 'Borte', 'Bowle', 'Boxer', 'Brand', 'Braue', 'Braut', 'Brech', 'Brenn', 'Brett', 'Brief', 'Brise', 'Brite', 'Bruch', 'Brumm', 'Brust', 'Brühe', 'Bulle', 'Busch', 'Butan', 'Butze', 'Bäche', 'Bäder', 'Bälde', 'Bände', 'Bänke', 'Bärte', 'Böcke', 'Börde', 'Börse', 'Bügel', 'Bühne', 'Büste', 'Büßer', 'Celli', 'Cello', 'Chaos', 'Chaot', 'Chlor', 'Choke', 'Chrom', 'Chöre', 'Civil', 'Clown', 'Cobra', 'Codex', 'Comic', 'Couch', 'Coupe', 'Creme', 'Curry', 'Dachs', 'Dampf', 'Dandy', 'Datei', 'Datex', 'Dativ', 'Datum', 'Dauer', 'Daune', 'Debüt', 'Deich', 'Dekan', 'Dekor', 'Delle', 'Delta', 'Demut', 'Depot', 'Devon', 'Diele', 'Dildo', 'Dinar', 'Diode', 'Dirne', 'Diwan', 'Docht', 'Dogge', 'Dogma', 'Dohle', 'Dolch', 'Donau', 'Dosis', 'Draht', 'Drama', 'Dreck', 'Drift', 'Drink', 'Droge', 'Druck', 'Drüse', 'Dudel', 'Duell', 'Duett', 'Dunst', 'Durst', 'Dusch', 'Dusel', 'Dämme', 'Dämon', 'Därme', 'Döner', 'Dübel', 'Düfte', 'Dünge', 'Dürre', 'Ebene', 'Edukt', 'Eiche', 'Eifer', 'Eimer', 'Daunen', 'Dielen', 'Dioden', 'Dogmen', 'Dornen', 'Dramen', 'Drogen', 'Drüsen', 'Einsen', 'Etagen', 'Etüden', 'Examen', 'Fahnen', 'Fakten', 'Feigen', 'Felsen', 'Ferien', 'Fetzen', '', 'Schrimp', 'Schrott', 'Schräge', 'Schuppe', 'Schurke', 'Schwade', 'Schwall', 'Schwank', 'Schwanz', 'Schwarm', 'Schwatz', 'Schwebe', 'Schweif', 'Schwein', 'Schweiß', 'Schwenk', 'Schwere', 'Schwert', 'Schwimm', 'Schwing', 'Schwips', 'Schwitz', 'Schwund', 'Schwung', 'Schwäne', 'Schwüre', 'Schädel', 'Schäfer', 'Schäfte', 'Schäkel', 'Schälle', 'Schänke', 'Schärfe', 'Schärpe', 'Schätze', 'Schöffe', 'Schüler', 'Schürze', 'Seebund', 'Seefunk', 'Seegang', 'Seegras', 'Seeheld', 'Seeigel', 'Seelöwe', 'Seemann', 'Seemöwe', 'Seenähe', 'Seerose', 'Seetang', 'Seetier', 'Seeufer', 'Seevolk', 'Seewind', 'Segment', 'Sehfeld', 'Sehnerv', 'Sehrohr', 'Seilzug', 'Sekante', 'Sektion', 'Sekunde', 'Seminar', 'Senator', 'Senkfuß', 'Sentenz', 'Separee', 'Septime', 'Sequenz', 'Service', 'Session', 'Seufzer', 'Sextett', 'Sandgrube', 'Sandstein', 'Sandsturm', 'Sandsäcke', 'Sanftheit', 'Sanitäter', 'Sarkasmus', 'Sarkophag', 'Satinhose', 'Satiriker', 'Sattlerei', 'Satzlehre', 'Sauerkohl', 'Sauerteig', 'Saugpumpe', 'Saumpferd', 'Dividenden', 'Dokumenten', 'Dreiteilen', 'Druckbögen', 'Edeltannen', 'Ehefrieden', 'Eichtonnen', 'Eierkuchen', 'Eigenleben', 'Eigennamen', 'Einbuchten', 'Eisenwaren', 'Eismädchen', 'Elektronen', 'Ellenbogen', 'Emigranten', 'Endstadien', 'Enterhaken', 'Epizentren', 'verstohlen', 'verstopfen', 'verstorben', 'verstreben', 'verstreuen', 'verstrickt', 'verstummen'];
      this.isLoading = false
      let lettersA = Array.from(letters)
      let regex = new RegExp('' + lettersA.join('|') + ')');
      let lettersInverse = this.alphabetRaw.replace(regex, '');
      let regex2 = new RegExp('' + lettersInverse.join('|') + ')');
      let filtered = wordlist.filter(function (value, index, arr) {
        return value.match(regex2);
      });
      this.wordlist = filtered;
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
    async setLetters(letters) {
      await this.initiateWords(letters.join(''))
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
