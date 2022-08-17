<template>
  <router-link to="about">turn to home</router-link>
  <router-link to="/about/test">turn to test</router-link>
  <div id="aboutBlock" v-role="'aboutBtn'"></div>
  <router-view></router-view>
</template>
<style>
#aboutBlock {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
