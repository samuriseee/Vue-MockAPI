<template>
  <div>
    <button @click="edit = true" class="button">
      <i class="fas fa-edit"></i>Edit
    </button>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="edit" @click="edit = false"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="edit">
        <h1>Update Username</h1>
        <input type="text" v-model="editName" value="{user.name}" />
        <button @click="updateName">Apply</button>
        <h1>Update phoneNumber</h1>
        <input type="text" v-model="editPhone" />
        <button @click="updatePhone">Apply</button>
        <button @click="edit = false">Close Edit</button>
      </div>
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
    };
  },
  methods: {
    async updateName() {
      let response = await axios
        .put(
          `https://60dbf9c3c2b6280017feb5d7.mockapi.io/v1/users/${this.$route.params.id}`,
          {
            name: this.editName,
          }
        )
        .then(function (response) {
          location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(response.data);
    },
    async updatePhone() {
      let response = await axios
        .put(
          `https://60dbf9c3c2b6280017feb5d7.mockapi.io/v1/users/${this.$route.params.id}`,
          {
            phoneNumber: this.editPhone,
          }
        )
        .then(function (response) {
          location.reload();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(response.data);
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
  width: 85px;
  height: 25px;
  border: none;
  outline: none;
  color: #fff;
  background: #fa7c65;
  padding: 5px;
  cursor: pointer;
  border-radius: 7px;
}
.modal button:hover {
  background: #e95338;
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
  background: #fa7c65;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 7px;
}
.button:hover {
  background: #e95338;
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
