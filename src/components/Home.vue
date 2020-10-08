<template>
  <div class="h-screen flex bg-teal-200">
    <chat-device />
    <outfit-selector />
  </div>
</template>

<script>
import ChatDevice from './Chat/ChatDevice.vue';
import OutfitSelector from './OutfitSelector.vue';

export default {
  name: 'Home',
  components: {
    ChatDevice,
    OutfitSelector,
  },
};
</script>

<style scoped>
</style>
