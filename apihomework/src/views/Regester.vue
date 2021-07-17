<template>
  <div>
    <form v-on:submit.prevent="addUser()" class="pluginBox">
      <h1>SIGN IN</h1>
      <p>Username:</p>
      <input type="text" v-model="newUser.name" placeholder="aaaaa" required />
      <p>Where do you work?:</p>
      <input type="text" v-model="newUser.city" required />
      <p>Which company?:</p>
      <input type="text" v-model="newUser.companyName" required />
      <input type="submit" value="Resgeter" />
      <a @click="$router.push('/')"> Already have? </a>
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
        city: "",
        companyName: "",
      },
    };
  },
  methods: {
    addUser() {
      axios.post("http://localhost:3000/people", {
        name: this.newUser.name,
        phoneNumber: this.newUser.phoneNumber,
        city: this.newUser.city,
        companyName: this.newUser.companyName,
      });
      this.$router.push(`/`);
    },
  },
};
</script>

<style>
.pluginBox {
  width: 320px;
  background: transparent;
  border: 1px solid #fff;
  color: #000;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 8px 8px 50px #000;
  border-radius: 7px;
  transition: 0.5s;
}
.pluginBox p {
  text-align: left;
}
.pluginBox input {
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
}
.pluginBox input[type="text"] {
  border: none;
  border-bottom: 1px solid #000;
  background: transparent;
  outline: none;
  height: 40px;
  color: #000;
  font-size: 16px;
}
.pluginBox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: #fa7c65;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;
}
.pluginBox input[type="submit"]:hover {
  background: #e95338;
  color: #fff;
}
.pluginBox a {
  cursor: pointer;
}
.pluginBox a:hover {
  color: #fa7c65;
}
</style>
