<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.yellow {
  background-color: yellow !important;
}
.green {
  background-color: green !important;
}
.red {
  background-color: red !important;
}
[_role] {
  z-index: 100;
  border: 5px solid;
  border-image: linear-gradient(to right, #8f41e9, #578aef) 1;
}

[_role]::before {
  content: attr(_role);
  color: blue;
}
</style>
