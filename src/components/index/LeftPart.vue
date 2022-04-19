<template>
  <div class="basis-1/2">
    <div class="flex items-center mb-4">
      <NftIcon name="test_2" class="mr-4" />
      <h3 class="text-lg">NFT #4918</h3>
    </div>
    <div class="mb-10">
      <img src="img/nft/nft.png" />
    </div>
    <h2 class="text-xl bold font-bold mb-4">The Littles Private AMA Session</h2>
    <div class="text-base mb-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco
    </div>
    <h5 class="text-base font-bold mb-7">Speakers</h5>
    <div class="flex items-center">
      <NftIcon name="test" :size="41" class="mr-4" />
      <span class="text-base font-medium mr-11">Mark Douglas</span>
      <span class="text-base italic text-gray-100">Lead Tech</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NftIcon from "@/components/NftIcon.vue";
</script>
