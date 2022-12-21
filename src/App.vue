<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderItem from "./components/Header/HeaderItem.vue";
import FooterItem from "./components/Footer/FooterItem.vue";
</script>

<template>
  <HeaderItem />
  <router-view></router-view>
  <FooterItem />
</template>
