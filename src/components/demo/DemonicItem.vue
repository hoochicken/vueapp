<template>
  <div>
    <h2>Demonic</h2>
    <p>asdasdasdsa sad asd ad a</p>
    {{ demoCracy }}
    <div class="mb-4">1</div>
    <div class="mb-4">2</div>
    <div class="mb-4">3</div>
    <button @click="this.test2()">Say test</button>
  </div>
</template>

<script>
export default {
  name: "DemonicItem",
  data() {
    return {
      demoCracy: {},
      resop: {}
    }
  },
  async mounted() {
    let params =  { };
    // const response = await this.axios.post('/demo', params);
    // const response = await this.axios.post('/password', params);
    const response = await this.axios.post('/', params);
    this.demoCracy = response.data;
    this.resop = response;
    this.demoCracy = response;
  },
  methods: {
    test() {
      alert('adasd');
    },
    async test2() {
      // alert('adasd');
      let params = {};
      const response = await vue.axios.post('/', params);
      // const response = await axios.post('/', params);
      this.demoCracy = response.data;
      this.demoCracy = this;
    }
  }
}
</script>

<style scoped>

</style>