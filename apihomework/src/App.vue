<template>
  <div id="app">
    <defaultLayout />
  </div>
</template>
<script>
import defaultLayout from "../layout/default.vue";
export default {
  components: {
    defaultLayout,
  },
};
</script>
<style>
body {
  background: #f3f5f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
