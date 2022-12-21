<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderItem from "./components/Header/HeaderItem.vue";
</script>

<template>
  <HeaderItem />
  <router-view></router-view>
</template>
