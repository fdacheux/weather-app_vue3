<script setup lang="ts">
import cityNotFoundWebp from "../../assets/city_not_found_illustration.webp";
import cityNotFoundPng from "../../assets/city_not_found_illustration.png";
</script>
<template>
  <div class="error-container">
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
</template>

<style scoped src="./ErrorItem.css"></style>
