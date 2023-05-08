<template>
  <div class="add">
    <div>
      <h3>Product</h3>
      <p>ID: {{ id }}</p>
      <p>Name: {{ name }}</p>
      <p>Price: {{ price }}</p>
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
      id: "",
      name: "",
      price: "",
      error: null,
    };
  },
  mounted() {
    axios
      .get(url + "/" + this.$route.params.id)
      .then((result) => {
        this.error = null;
        this.id = result.data._id;
        this.name = result.data.name;
        this.price = result.data.price;
      })
      .catch((err) => {
        this.error = err;
      });
  },
};
</script>
