<template>
  <img :src="`img/icons/${name}.png`" :width="size" />
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 42,
  },
});
</script>
