<template>
  <div>
    <div class="row row-cols-1 row-cols-md-2">
      <Stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></Stock>
    </div>
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  data() {
    return {
      stockPurchased: Object,
    };
  },
  components: {
    Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style scoped>
.alert-bottom {
  position: fixed;
  bottom: 5px;
  width: 50%;
}
</style>