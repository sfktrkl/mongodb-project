<template>
  <div class="home">
    <div v-for="product in products" :key="product._id">
      <p>{{ product.name }} - {{ product.price }}</p>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3100/products";

export default {
  data() {
    return {
      error: null,
      products: [],
    };
  },
  mounted() {
    axios
      .get(url)
      .then((result) => {
        this.products = result.data;
      })
      .catch((err) => {
        this.error = err;
      });
  },
};
</script>
