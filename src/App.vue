<template>
  <nav>
    <router-link to="/">Products</router-link> |
    <router-link v-if="isLoggedIn" to="/product/add">Add Product</router-link>
    <template v-if="isLoggedIn"> | </template>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <template v-if="!isLoggedIn"> | </template>
    <a v-if="isLoggedIn" @click.stop.prevent="logout" href="/">Logout</a>
    <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
  </nav>
  <router-view />
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
