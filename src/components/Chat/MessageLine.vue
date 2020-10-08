<template>
  <div class="my-3">
    <div v-if="isSelf" class="flex">
      <div class="text-xs tracking-tight flex items-end mx-2 text-gray-600 pb-5">
        <span class="w-12">{{ time }}</span>
      </div>
      <div class="w-full">
        <div
          :key="index"
          v-for="(message, index) in messages"
          class="flex justify-end"
        >
          <div class="self-message-bubble py-3 px-5 mb-1 tracking-tight inline-block">
            {{message}}
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex" transition="expand">
      <div class="rounded-full overflow-hidden mr-1 user-pic">
        <img src="@/assets/images/sona.jpg">
      </div>
      <div class="w-full">
        <div
          :key="index"
          v-for="(message, index) in messages"
          class="flex justify-start"
        >
          <div class="message-bubble py-3 px-5 mb-1 tracking-tight inline-block">
            {{message}}
          </div>
        </div>
      </div>
      <div class="text-xs tracking-tight flex items-end mx-2 text-gray-600 pb-5">
        <span class="w-12">{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageLine',
  props: {
    isSelf: {
      type: Boolean,
      required: true,
    },
    messages: {
      type: Array,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return '@/assets/images/sona.jpg';
    },
  },
  data: () => ({

  }),
  methods: {},
};
</script>

<style scoped>
.message-bubble {
  background: #333c57;
  border-radius: 3px 22px 22px;
}
.self-message-bubble {
  background: #28946b;
  border-radius: 22px 3px 22px 22px;
}
.user-pic {
  max-width: 2rem;
  max-height: 2rem;
}
</style>
