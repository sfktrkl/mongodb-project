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
      <h3>Product Updated</h3>
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
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: function () {
      axios
        .patch(url + "/" + this.$route.params.id, {
          name: this.name,
          price: this.price,
        })
        .then(() => {
          this.error = null;
          this.formSubmitted = true;
        })
        .catch((err) => {
          this.error = err;
        });
    },
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
