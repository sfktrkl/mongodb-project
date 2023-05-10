<template>
  <div class="home">
    <div v-for="product in products" :key="product._id">
      {{ product.name }} - {{ product.price }} |
      <router-link :to="'/product/' + product._id">Details</router-link> |
      <router-link :to="'/product/edit/' + product._id">Update</router-link> |
      <a @click.stop.prevent="deleteProduct(product._id)" href="/">Delete</a>
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
  methods: {
    deleteProduct: function (id) {
      axios
        .delete(url + "/" + id)
        .then(() => {
          this.fetchData();
        })
        .catch((err) => {
          this.error = err;
        });
    },
    fetchData: function () {
      axios
        .get(url)
        .then((result) => {
          this.products = result.data;
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
