<script setup lang="ts">
import { ref } from "vue";
const request = ref({
  cityName: "",
});
const goWeather = () => {
  console.log("This is fine");
};
</script>

<template>
  <div class="container">
    <h2 class="my-4">A Weather app using vue3</h2>
    <div class="form-group mb-5">
      <label for="location">Please, enter a city name</label>
      <input
        id="location"
        type="text"
        class="form-control"
        v-model="request.cityName"
        @keypress="goWeather"
      />
    </div>
    <div class="w-75 m-auto">
      <h3 class="text-center">Location : dynamic name</h3>
      <div class="card text-center p-5">
        <p class="text-display">Temperature : 20°</p>
        <p class="text-display">Weather : Cloudy</p>
      </div>
    </div>
  </div>
</template>
