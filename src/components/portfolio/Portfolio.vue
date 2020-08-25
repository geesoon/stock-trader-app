<template>
  <div>
    <div class="row row-cols-1 row-cols-md-2">
      <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>