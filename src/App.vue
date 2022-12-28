<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderItem from "./components/Header/HeaderItem.vue";
import FooterItem from "./components/Footer/FooterItem.vue";
</script>

<template>
  <HeaderItem />
  <main>
    <router-view></router-view>
  </main>
  <FooterItem />
</template>
