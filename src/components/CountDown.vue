<template>
  <vue-countdown
    :time="2 * 24 * 60 * 60 * 1000"
    v-slot="{ days, hours, minutes, seconds }"
    class="flex justify-between pl-4"
  >
    <div class="text-center flex flex-col gap-3">
      <div class="text-2xl text-gray-800">{{ days }}</div>
      <span class="text-2xs text-gray-800 font-normal ml-1">Days</span>
    </div>
    <div class="text-center flex flex-col gap-3">
      <div class="text-2xl text-gray-800">{{ hours }}</div>
      <span class="text-2xs text-gray-800 font-normal ml-1">Hours</span>
    </div>
    <div class="text-center flex flex-col gap-3">
      <div class="text-2xl text-gray-800">{{ minutes }}</div>
      <span class="text-2xs text-gray-800 font-normal ml-1">Minutes</span>
    </div>
    <div class="text-center flex flex-col gap-3">
      <div class="text-2xl text-gray-800">{{ seconds }}</div>
      <span class="text-2xs text-gray-800 font-normal ml-1">Seconds</span>
    </div>
  </vue-countdown>
</template>

<script lang="ts" setup>
import VueCountdown from "@chenfengyuan/vue-countdown";
</script>
