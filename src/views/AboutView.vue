<template>
  <div class="about">
    <h1>Über uns</h1>
    <p>Das Chicken ist {{ alter }} Jahre alt und programmiert gerne.</p>
    <p>Mareike Riegel<br /><a href="mailto:mareike.riegel@ql.de">Schreib' mir</a></p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: () => ({
    // my birthday dates :-)
    // even chickens grow old
    birthDay: 27,
    birthMonth: 7,
    birthYear: 1979
  }),
  computed: {
    alter: function() {
      let currentYear = new Date().getFullYear();
      let age = currentYear - this.birthYear;
      // check whether birthday was already
      return new Date().getMonth() >= this.birthMonth && new Date().getDay() >= this.birthDay ? age : age-1;
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    /*display: flex;*/
    align-items: center;
  }
}
</style>
