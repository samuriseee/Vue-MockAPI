<template>
  <div class="home">
    <h1>Companies</h1>
    <div class="listed">
      <div v-for="user in users" :key="user.id" @click="toDetails(user.id)">
        <img :src="user.avatar" alt="#" />
        <div class="name">{{ user.name }}</div>
        <div class="text">
          <span><i class="fas fa-id-card"></i> {{ user.id }}</span>
          <span><i class="fas fa-phone"></i> {{ user.phoneNumber }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      users: 0,
    };
  },
  async created() {
    const response = await axios.get(
      `https://60dbf9c3c2b6280017feb5d7.mockapi.io/v1/users`
    );
    this.users = response.data;
    console.log(response.data);
  },
  methods: {
    toDetails(id) {
      this.$router.push(`/user/${id}`);
    },
  },
};
</script>
<style scoped>
.listed {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
}
.listed > div {
  width: 400px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border: none;
  padding: 10px;
  background: #fff;
  margin: 10px auto;
  cursor: pointer;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  appearance: none;
}
.listed > div:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}
.home .listed img {
  object-fit: cover;
  border-radius: 50%;
}
.text {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
}
.name {
  font-size: 1.5rem;
  padding: 10px;
}
</style>
