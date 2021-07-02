<template>
  <div>
    <img :src="user.avatar" alt="" />
    <h1>{{ user.name }}</h1>
    <h1>{{ user.phoneNumber }}</h1>
    <button @click="deleteUser(user.id)">Delete</button>
    <editCPN />
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

<style scoped></style>
