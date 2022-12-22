<script setup lang="ts">
import { getWeather } from "@/stores/getWeather";
import { ref } from "vue";
import type weatherModel from "../../models/weatherObject.model";
const request = ref({
  cityName: "",
});
let weather: weatherModel | undefined = undefined;
const goWeather = async () => {
  weather = await getWeather(request.value.cityName);
  request.value.cityName = "";
};

const imgUrlCreator = (): string => {
  if (weather) {
    return `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  }
  return "";
};
</script>

<template>
  <div class="container">
    <h2 class="my-4">What's the weather like in your city ?</h2>
    <div class="form-group mb-5">
      <label for="location" class="label mb-3"
        >Please, enter a city name :</label
      >
      <input
        id="location"
        type="text"
        class="form-control"
        v-model="request.cityName"
        @keypress.enter="goWeather"
      />
    </div>
    <div class="w-75 m-auto" v-if="weather">
      <h3 class="text-center mb-4">Location : {{ weather.name }}</h3>
      <div class="card text-center">
        <img :src="imgUrlCreator()" alt="weather icon" class="weather-icon" />
        <div class="wrapper">
          <p class="text-display">
            Temperature : {{ weather.main.temp.toFixed() }}°C
          </p>
          <p class="text-display">
            Weather : {{ weather.weather[0].description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./WeatherItem.css"></style>
