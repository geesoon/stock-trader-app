<template>
  <div>
    <h1>Trade or View Your Portfolio</h1>
    <h6>You may Save & Load your Data</h6>
    <h6>Click on 'End Day' to begin a New Day!</h6>
    <hr />
    <p>Your Funds: {{funds | currency}}</p>
    <small>This is a static web built by Gee Soon using VueJS</small>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
</style>