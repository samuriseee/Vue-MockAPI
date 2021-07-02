<template>
  <div class="container">
    <div class="userInfo">
      <img :src="user.avatar" alt="" />
      <div class="text">
        <div>{{ user.name }}</div>
        <div style="font-size: 1.8rem; opacity: 0.8">
          {{ user.phoneNumber }}
        </div>
      </div>
    </div>
    <div class="button">
      <button @click="deleteUser(user.id)">
        <i class="fas fa-trash-alt"></i>Delete
      </button>
      <editCPN />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import editCPN from "../components/uncommon/Edit.vue";
export default {
  name: "userDetails",
  components: {
    editCPN,
  },
  data: function () {
    return {
      user: {},
      edit: false,
      editName: "",
      editPhone: "",
    };
  },
  async created() {
    const response = await axios.get(
      `https://60dbf9c3c2b6280017feb5d7.mockapi.io/v1/users/${this.$route.params.id}`
    );
    this.user = response.data;
    console.log(response);
  },
  methods: {
    deleteUser(id) {
      axios.delete(
        `https://60dbf9c3c2b6280017feb5d7.mockapi.io/v1/users/${id}`
      );
      this.$router.push(`/`);
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.userInfo img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 30px;
  border-radius: 50%;
}
.userInfo .text {
  font-size: 2.5rem;
}
.button {
  display: flex;
}
.button button {
  width: 150px;
  height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: none;
  outline: none;
  color: #fff;
  background: #fa7c65;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 7px;
}
.button button:hover {
  background: #e95338;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.button button i {
  font-size: 22px;
  padding: 5px;
}
</style>
