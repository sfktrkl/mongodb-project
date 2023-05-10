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

    <p>
      <template v-if="page > 0">
        <a @click.stop.prevent="previous()" href="/">Previous</a>
      </template>
      <template v-if="page > 0 && page < pageCount - 1"> | </template>
      <template v-if="page < pageCount - 1">
        <a @click.stop.prevent="next()" href="/">Next</a>
      </template>
    </p>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3100/products";

export default {
  data() {
    return {
      page: 0,
      error: null,
      products: [],
      pageCount: 1,
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
        .get(url, { params: { page: this.page } })
        .then((result) => {
          this.products = result.data.products;
          this.pageCount = result.data.pageCount;
        })
        .catch((err) => {
          this.error = err;
        });
    },
    previous: function () {
      this.page -= 1;
      this.fetchData();
    },
    next: function () {
      this.page += 1;
      this.fetchData();
    },
  },
  mounted() {
    this.page = this.$route.query.page ?? 0;
    this.fetchData();
  },
};
</script>
