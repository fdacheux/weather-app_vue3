<script setup lang="ts">
import pageNotFoundWebp from "../../assets/404-not-found.webp";
import pageNotFoundPng from "../../assets/404-not-found.png";
</script>

<template>
  <div class="error-page-container">
    <div class="container">
      <h1 class="m-3">The page you asked for does not seem to exist ...</h1>
      <div class="rotating-element">
        <picture>
          <source :srcset="pageNotFoundWebp" type="image/webp" />
          <img :src="pageNotFoundPng" alt="404 page not found" />
        </picture>
      </div>
      <router-link to="/" class="mt-5">Bring me back home</router-link>
    </div>
  </div>
</template>

<style scoped src="./NotFoundView.css"></style>
