<template>
  <div>
    <h2>Password</h2>
    <error-display v-if="null !== error && Object.keys(error).length > 0" :error="error"></error-display>
    <ul v-if="passwords.length > 0" class="passwords">
      <li v-for="password in passwords" :key="password">{{ password }}</li>
    </ul>
  </div>
</template>

<script>
import ErrorDisplay from "@/components/general/ErrorDisplay";
export default {
  name: "PasswordItem",
  components: {ErrorDisplay},
  data() {
    return {
      passwords: {},
      error: {}
    }
  },
  async mounted() {
    var params =  { };
    this.error = {};
    this.axios.post('/passwords', params)
        .then(
            (response) => {
              this.passwords = response.data.passwords;
            },
            (error) => {
              if (error instanceof Error) {
                this.error = error.response;
              }
            }
        );
    this.passwords = [];
  }
}
</script>

<style scoped>

</style>