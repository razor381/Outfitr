<template>
  <div class="h-screen flex justify-center bg-teal-200">
    <chat-device />
    <!-- <outfit-selector /> -->
  </div>
</template>

<script>
import ChatDevice from './Chat/ChatDevice.vue';
// import OutfitSelector from './OutfitSelector/OutfitSelector.vue';

export default {
  name: 'Home',
  components: {
    ChatDevice,
    // OutfitSelector,
  },
};
</script>

<style scoped>
</style>
