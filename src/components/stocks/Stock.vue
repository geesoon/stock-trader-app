<template>
  <div class="col mb-4">
    <div class="card">
      <div class="card-header">
        {{stock.name}}
        <small>(Price: {{stock.price}})</small>
      </div>
      <div class="card-body">
        <div>
          <div class="float-left">
            <input
              type="number"
              :class="{danger: insufficientFunds}"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity"
            />
          </div>
          <div class="float-right">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="quantity<=0 || Number.isInteger(quantity) ||
              insufficientFunds"
            >{{insufficientFunds ? "Insufficient funds" : "Buy"}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: Number,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>