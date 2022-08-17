<template>
  <div id="testBlock" v-role="'testBtn'"></div>
  <button @click="refresh" id="refresh">refresh{{ data }}</button>
</template>
<style>
#testBlock {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
<script setup>
import { update } from "microrole";
import { ref } from "vue";
let data = ref(1);
function refresh() {
  update();
  data.value++;

}
</script>
