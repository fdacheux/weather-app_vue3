<script setup lang="ts">
import WeatherItem from "../../components/WeatherComp/WeatherItem.vue";
</script>

<template>
  <main>
    <h1 class="display-5 my-5">Hey Sun ! - A sunny weather app</h1>
    <Suspense>
      <WeatherItem />
    </Suspense>
  </main>
</template>
