<script setup lang="ts">
defineProps<{
  cityName?: string;
}>();
</script>
<template>
  <div class="container">
    <p class="loading-msg">Looking for {{ cityName }} ...</p>
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style scoped src="./LoaderItem.css"></style>
