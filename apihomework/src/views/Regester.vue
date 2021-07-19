<template>
  <div>
    <form v-on:submit.prevent="addUser()" class="pluginBox">
      <h1>Add new user</h1>
      <div class="flex">
        <p>Username:</p>
        <input type="text" v-model="newUser.name" required />
        <p>City:</p>
        <input type="text" v-model="newUser.city" required />
      </div>
      <p>Email:</p>
      <input type="text" v-model="newUser.email" required />
      <div class="flex">
        <p>Company:</p>
        <input type="text" v-model="newUser.companyName" required />
        <p>Phone:</p>
        <input type="text" v-model="newUser.phone" required />
      </div>
      <input type="submit" value="Register" />
      <a @click="$router.push('/')" style="margin-top: 10px"> Already have? </a>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      person: {},
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
        phoneNumber: this.newUser.phone,
        city: this.newUser.city,
        companyName: this.newUser.companyName,
        avatar: "https://cdn.fakercloud.com/avatars/lebronjennan_128.jpg",
        email: this.newUser.email,
        phone: this.newUser.phone,
      });
      this.$router.push(`/`);
    },
  },
};
</script>

<style>
.pluginBox {
  width: 600px;
  background: transparent;
  border: 1px solid #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  margin-top: 100px;
  padding: 20px;
  box-shadow: 8px 8px 50px #000;
  border-radius: 7px;
  transition: 0.5s;
}
.pluginBox .flex {
  display: flex;
  justify-content: space-evenly;
}
.pluginBox p {
  position: relative;
  text-align: left;
}
.pluginBox input {
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
  width: 50%;
  margin: 0 auto;
  border: none;
  outline: none;
  height: 40px;
  background: #043254;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  transition: 0.4s;
  cursor: pointer;
}
.pluginBox input[type="submit"]:hover {
  background: #05416e;
  color: #fff;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.pluginBox a {
  cursor: pointer;
}
.pluginBox a:hover {
  color: #05416e;
}
</style>
