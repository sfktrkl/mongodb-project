<template>
  <div class="add">
    <form @submit.prevent="submitForm" v-if="!formSubmitted">
      <span>Username</span><br />
      <input v-model="username" type="text" placeholder="Username" /><br />
      <span>Password</span><br />
      <input v-model="password" type="password" placeholder="Password" /><br />
      <input class="submit" type="submit" value="Submit" />
    </form>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
const url = "http://localhost:3100/login";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    ...mapActions(["login"]),
    submitForm: function () {
      axios
        .post(url, {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.login();
          this.error = null;
          this.$router.push("/");
        })
        .catch((err) => {
          this.error = err;
        });
    },
  },
};
</script>
