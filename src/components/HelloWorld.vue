<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const test = () => {
  console.log("reached here")
}
</script>

<template>
  <select @change="test">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>

<style scoped>
</style>
