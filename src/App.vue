<template>
  <div class="container mx-auto h-screen py-16">
    <MainHeaderVue />
    <router-view class="mt-24" />
  </div>
</template>

<script lang="ts" setup>
import MainHeaderVue from "./components/layout/MainHeader.vue";
</script>
