<script setup lang="ts">
import { getWeather } from "@/stores/getWeather";
import { ref, type Ref } from "vue";
import type weatherModel from "../../models/weatherObject.model";
import LoaderItem from "../Loader/LoaderItem.vue";
import cityNotFoundPng from "../../assets/city_not_found_illustration.png";
import cityNotFoundWebp from "../../assets/city_not_found_illustration.webp";

const request = ref({
  cityName: "",
});
const validInput = /^(?=.*?[A-Za-zÀ-ÖØ-öø-ÿ ])[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
const weather: Ref<weatherModel | undefined> = ref(undefined);
const searchError: Ref<boolean | undefined> = ref(undefined);
const loading: Ref<boolean | undefined> = ref(undefined);
const goWeather = async () => {
  loading.value = true;
  try {
    searchError.value = false;
    weather.value = await getWeather(request.value.cityName.trim());
    loading.value = false;
    console.log(weather);
    request.value.cityName = "";
  } catch {
    loading.value = false;
    searchError.value = true;
    weather.value = undefined;
  }
};

const imgUrlCreator = (): string => {
  if (weather.value) {
    return `http://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`;
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
        :class="
          !validInput.test(request.cityName) &&
          request.cityName.length > 0 &&
          'warning'
        "
        v-model="request.cityName"
        @keypress.enter="
          request.cityName.length > 0 &&
            validInput.test(request.cityName) &&
            goWeather()
        "
      />
      <p
        v-if="!validInput.test(request.cityName) && request.cityName.length > 0"
        class="warning-txt"
      >
        Please enter a valid city name (no numbers or sepcial characters
        allowed)
      </p>
    </div>

    <div class="loader-container" v-if="loading">
      <LoaderItem :cityName="request.cityName" />
    </div>
    <div class="error-container" v-if="searchError">
      <div class="card error text-center">
        <picture>
          <source :srcset="cityNotFoundWebp" />
          <img
            :src="cityNotFoundPng"
            alt="not found icon"
            class="notFound-icon"
          />
        </picture>
        <h3 class="text-center">Location not found</h3>
      </div>
    </div>
    <div class="weather-container" v-if="weather">
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
