<script setup lang="ts">
import logo from "../../assets/logo.png";
</script>
<template>
  <header class="header-item">
    <img :src="logo" alt="heysun logo" class="logo" />
    <nav class="navbar">
      <ul class="navbar-nav">
        <li>
          <router-link to="/" class="nav-link me-5">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link me-4">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped src="./HeaderItem.css"></style>
