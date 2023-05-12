<template>
  <div class="add">
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
      <span>Username</span><br />
      <input v-model="username" type="text" placeholder="Username" /><br />
      <span>Password</span><br />
      <input v-model="password" type="password" placeholder="Password" /><br />
      <input class="submit" type="submit" value="Submit" />
    </form>
    <div v-if="formSubmitted">
      <h3>Ready to login</h3>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3100/register";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
      formSubmitted: false,
    };
  },
  methods: {
    submitForm: function () {
      axios
        .post(url, {
          username: this.username,
          password: this.password,
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
};
</script>
