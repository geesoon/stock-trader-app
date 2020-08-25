<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/portfolio" tag="li" class="nav-link" activeClass="active">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" tag="li" class="nav-link" activeClass="active">Stocks</router-link>
        </li>
      </ul>

      <ul class="nav-bar nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li class="nav-item nav-link">
              <a class="dropdown-item" @click="saveData">Save Data</a>
            </li>
            <li class="nav-item nav-link">
              <a class="dropdown-item" @click="loadData">Load Data</a>
            </li>
          </div>
        </li>
      </ul>

      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };

      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>

<style>
div .nav-link {
  cursor: pointer;
}
/* 
li .router-link-active {
  background: lightblue;
} */
</style>