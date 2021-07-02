<template>
  <div id="nav">
    <div class="logo" @click="$router.push('/')">DAta.</div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/regester">Regester</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  font-size: 18px;
}
#nav a {
  text-decoration: none;
  color: black;
  margin-left: 10px;
  transition: 0.2s;
}
#nav a:hover {
  color: #fa7c65;
}
#nav a.router-link-exact-active {
  color: #fa7c65;
}
#nav div {
  display: flex;
}
#nav ul {
  display: flex;
  list-style: none;
}
#nav ul li {
  margin: 0px 5px;
}
.logo {
  cursor: pointer;
  color: #000;
  font-weight: 600;
  font-size: 35px;
  font-family: "AlphaCentauri";
}
</style>
