<template>
  <img class="h-3 w-3" :src="`img/icons/${name}.png`" width="12" height="12" />
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
