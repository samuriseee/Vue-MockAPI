<template>
  <div>
    <h1>SIGN IN</h1>
    <form v-on:submit.prevent="addUser()">
      <p>Username</p>
      <input
        type="text"
        v-model="newUser.name"
        placeholder="Username"
        required
      />
      <p>Phone Number</p>
      <input
        type="text"
        v-model="newUser.phoneNumber"
        placeholder="Phone number"
        required
      />
      <!-- <p>Avatar profile</p>
      <input type="text" v-model="newUser.avatar" /> -->
      <button type="submit">Resgeter</button>
      <a href="#">Lost your password?</a><br />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      newUser: {
        name: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    addUser() {
      axios.post("https://60dbf9c3c2b6280017feb5d7.mockapi.io/v1/users", {
        name: this.newUser.name,
        phoneNumber: this.newUser.phoneNumber,
      });
      this.$router.push(`/`);
    },
  },
};
</script>

<style></style>
