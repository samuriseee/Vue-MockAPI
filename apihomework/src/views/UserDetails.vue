<template>
  <div class="container">
    <div class="userInfo">
      <img :src="person.avatar" alt="" />
      <div class="text">
        <div>{{ person.name }}</div>
        <div style="font-size: 1.8rem; opacity: 0.8">
          {{ person.phoneNumber }}
        </div>
      </div>
    </div>
    <div class="button">
      <button @click="deleteUser(person.id)">
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
      person: {},
      edit: false,
      editName: "",
      editPhone: "",
      url:"http://localhost:3000/people",
    };
  },
  async created() {
  await axios.get(`http://localhost:3000/people/${this.$route.params.id}`).then((response) => {
        console.log(response.data); 
        this.person = response.data; 
      }).catch(function(error) {
        console.log(error);
      });

  },
  methods: {
    deleteUser(id) {
      axios.delete(
        `http://localhost:3000/people/${id}`
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
  cursor:pointer;
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
