<template>
  <div class="add">
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
      <span>Name</span><br />
      <input v-model="name" type="text" placeholder="Name" /><br />
      <span>Price</span><br />
      <input v-model="price" type="text" placeholder="Price" /><br />
      <input class="submit" type="submit" value="Submit" />
    </form>
    <div v-if="formSubmitted">
      <h3>Product Added</h3>
      <p>ID: {{ id }}</p>
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
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: function () {
      axios
        .post(url, { name: this.name, price: this.price })
        .then((result) => {
          this.error = null;
          this.id = result.data.insertedId;
          this.formSubmitted = true;
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>
