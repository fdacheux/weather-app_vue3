<script setup lang="ts">
defineProps({
  name: String,
  url: String,
  temperature: String,
  description: String,
});
</script>
<template>
  <div class="weather-container">
    <h3 class="text-center mb-4">Location : {{ name }}</h3>
    <div class="card text-center">
      <img :src="url" alt="weather icon" class="weather-icon" />
      <div class="wrapper">
        <p class="text-display">Temperature : {{ temperature }}°C</p>
        <p class="text-display">Weather : {{ description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped src="./WeatherCardItem.css"></style>
