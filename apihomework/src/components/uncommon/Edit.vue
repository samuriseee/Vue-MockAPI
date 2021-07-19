<template>
  <div>
    <button @click="edit = true" class="button">
      <i class="fas fa-edit"></i>Edit
    </button>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="edit" @click="edit = false"></div>
    </transition>
    <transition name="slide" appear>
      <form
        class="modal"
        v-if="edit"
        v-on:submit.prevent="
          $router.push({
            path: '/',
          })
        "
      >
        <div class="flex">
          <h1>Username</h1>
          <input type="text" v-model="editName" required />
          <h1>Phone Number</h1>
          <input type="text" v-model="editPhone" required />
        </div>

        <h1>Email</h1>
        <input type="text" v-model="editEmail" required />
        <div class="flex">
          <h1>Company Name</h1>
          <input type="text" v-model="editCompany" required />
          <h1>City</h1>
          <input type="text" v-model="editCity" required />
        </div>
        <div>
          <button @click="update">Apply</button>
          <button @click="edit = false">Close</button>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      edit: false,
      editName: "",
      editPhone: "",
      editEmail: "",
      editCompany: "",
      editCity: "",
    };
  },
  methods: {
    async update() {
      const response = await axios
        .put(`http://localhost:3000/people/${this.$route.params.id}`, {
          name: this.editName,
          avatar: "https://cdn.fakercloud.com/avatars/finchjke_128.jpg",
          phone: this.editPhone,
          email: this.editEmail,
          companyName: this.editCompany,
          city: this.editCity,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(response);
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
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 16px;
  padding: 25px;
}
.modal h1 {
  text-align: left;
}
.modal input {
  width: 70%;
  margin-bottom: 20px;
  font-size: 16px;
}
.modal input[type="text"] {
  border: none;
  border-bottom: 1px solid #000;
  background: transparent;
  outline: none;
  height: 40px;
  color: #000;
  font-size: 16px;
}
.modal button {
  width: 100px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #043254;
  padding: 5px;
  cursor: pointer;
  border-radius: 7px;
  margin: 20px;
  font-size: 18px;
  text-transform: uppercase;
}
.modal button:hover {
  background: #05416e;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.button {
  width: 150px;
  height: 60px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border: none;
  outline: none;
  color: #fff;
  background: #5db9b6;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 7px;
  cursor: pointer;
}
.button:hover {
  background: #397c95;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.button i {
  font-size: 22px;
  padding: 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
