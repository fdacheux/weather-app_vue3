<script setup lang="ts">
import { ref } from "vue";

const validInput = /^(?=.*?[A-Za-zÀ-ÖØ-öø-ÿ -])[A-Za-zÀ-ÖØ-öø-ÿ -]+$/;
const request = ref({
  cityName: "",
});
const emit = defineEmits(["onSearchChange"]);
</script>
<template>
  <div class="form-group mb-5" :cityName="request">
    <label for="location" class="label mb-3">Please, enter a city name :</label>
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
          emit('onSearchChange', request.cityName)
      "
    />
    <p
      v-if="!validInput.test(request.cityName) && request.cityName.length > 0"
      class="warning-txt"
    >
      Please enter a valid city name (no numbers or sepcial characters allowed)
    </p>
  </div>
</template>
<style scoped src="./SearchFormItem.css"></style>
