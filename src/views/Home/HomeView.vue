<script setup lang="ts">
import WeatherItem from "../../components/WeatherComp/WeatherItem.vue";
</script>

<template>
  <div class="home-container">
    <h1 class="display-5 my-5">Hey Sun ! - A sunny weather app</h1>
    <Suspense>
      <WeatherItem />
    </Suspense>
  </div>
</template>

<style scoped src="./HomeView.css"></style>
