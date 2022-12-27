<script setup lang="ts">
import { getWeather } from "@/stores/getWeather";
import { ref, type Ref } from "vue";
import type weatherModel from "../../models/weatherObject.model";
import SearchForm from "../SearchForm/SearchFormItem.vue";
import LoaderComponent from "../Loader/LoaderItem.vue";
import ErrorComponent from "../ErrorComp/ErrorItem.vue";
import SearchResult from "../WeatherCard/WeatherCardItem.vue";

const request = ref({ cityName: "" });
const weather: Ref<weatherModel | undefined> = ref(undefined);
const searchError: Ref<boolean | undefined> = ref(undefined);
const loading: Ref<boolean | undefined> = ref(undefined);

const goWeather = async (newSearch: string) => {
  request.value.cityName = newSearch;
  weather.value = undefined;
  loading.value = true;
  try {
    searchError.value = false;
    weather.value = request.value.cityName
      ? await getWeather(request.value.cityName?.trim())
      : undefined;
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
    return `https://openweathermap.org/img/wn/${weather.value.weather[0].icon}@2x.png`;
  }
  return "";
};
</script>

<template>
  <div class="container">
    <h2 class="my-4">What's the weather like in your city ?</h2>

    <SearchForm @onSearchChange="goWeather" />

    <div class="loader-container" v-if="loading">
      <LoaderComponent :cityName="request.cityName" />
    </div>
    <div class="error-container" v-if="searchError">
      <ErrorComponent />
    </div>
    <div class="weather-container" v-if="weather">
      <SearchResult
        :name="weather.name"
        :url="imgUrlCreator()"
        :temperature="weather.main.temp.toFixed()"
        :description="weather.weather[0].description"
      />
    </div>
  </div>
</template>

<style scoped src="./WeatherItem.css"></style>
