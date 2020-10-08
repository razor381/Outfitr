<template>
  <div class="text-white relative">
    <div class="screen-area absolute flex flex-col">
      <!-- HEADER -->
      <div class="flex pt-6 pb-3 shadow-lg z-20">
        <div class="icon mx-4">
          <box-icon name='arrow-back' color="white"></box-icon>
        </div>
        <div class="flex flex-1 items-center px-1">
          <div class="icon m-1 relative">
            <div class="rounded-full overflow-hidden">
              <img src="@/assets/images/sona.jpg" class="user-pic"  alt="">
            </div>
            <div class="absolute w-4 h-4 rounded-full online-color border-2 border-white
              bottom-0 right-0">
            </div>
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xl font-bold leading-tight">Sona</span>
            <span class="text-xs text-gray-400">Active Now</span>
          </div>
        </div>
        <div class="icon mx-4">
          <box-icon name='menu' color="white"></box-icon>
        </div>
      </div>

      <!-- CHAT SECTION -->
      <div class="flex-1 z-10 p-2 overflow-hidden">
        <div class="scroll-section h-full overflow-scroll">
          <message-line
            v-for="messageGroup in messageGroups"
            :key="messageGroup.index"
            :isSelf="messageGroup.isSelf"
            :messages="messageGroup.messages"
            :time="messageGroup.time"
          />
        </div>
      </div>

      <!-- TEXT SECTION -->
      <div class="pb-6 pt-1 flex justify-center z-30 shadow-top">
        <div class="overflow-hidden w-11/12 h-12 pr-3 flex input-area shadow-lg rounded-full">
          <div class="w-2 overflow-hidden flex-1 h-full pl-5">
            <input
              autofocus
              type="text"
              placeholder="Type a message"
              class="h-full w-64 bg-transparent text-white"
              v-model="inputMessage"
              @keyup.enter="sendMessage"
            >
          </div>
          <div class="w-10 icon">
            <box-icon name='microphone' type='solid' class="w-10 h-10 input-icon" color="#AFAFAF">
            </box-icon>
          </div>
          <div class="w-10 icon" @click="sendMessage">
            <box-icon name='paper-plane' type="solid" class="w-10 h-10 input-icon" color='#47bb8e' >
            </box-icon>
          </div>
        </div>
      </div>
    </div>
    <img
      src="@/assets/images/device.png"
      alt="device png"
      class="h-screen"
    >
  </div>
</template>

<script>
import MessageLine from './MessageLine.vue';

const MESSAGE_SCHEMA = {
  index: 0,
  isSelf: false,
  messages: [],
  time: '',
};

export default {
  name: 'ChatDevice',
  components: {
    MessageLine,
  },
  computed: {
    getTime() {
      const date = new Date();
      const hours = date.getHours();
      return `${hours % 12}:${date.getMinutes()} ${hours >= 12 ? 'PM' : 'AM'}`;
    },
  },
  data: () => ({
    inputMessage: '',
    MESSAGE_SCHEMA,
    messageGroups: [],
  }),
  mounted() {
    this.getReply([
      'Hello',
      'I am Sona, your chat assistant',
      'How can I help you today?',
    ]);
  },
  methods: {
    sendMessage() {
      if (this.messageGroups[this.messageGroups.length - 1].isSelf) {
        this.messageGroups[this.messageGroups.length - 1].messages.push(this.inputMessage);
      } else {
        this.messageGroups.push({
          ...MESSAGE_SCHEMA,
          index: this.messageGroups.length,
          time: this.getTime,
          isSelf: true,
          messages: [this.inputMessage],
        });
      }
      this.scrollToLast();
      this.inputMessage = '';
    },
    getReply(messages) {
      if (!this.messageGroups.length || this.messageGroups[this.messageGroups.length - 1].isSelf) {
        this.messageGroups.push({
          ...MESSAGE_SCHEMA,
          index: this.messageGroups.length,
          time: this.getTime,
          messages: [...messages],
        });
      } else {
        this.messageGroups[this.messageGroups.length - 1].messages.push(...messages);
      }
      this.scrollToLast();
    },
    scrollToLast() {
      const scrollSection = document.querySelector('.scroll-section');
      scrollSection.scrollTop = scrollSection.scrollHeight;
    },
  },
};
</script>

<style scoped>
.screen-area {
  background: #25283f;
  top: 67px;
  left: 131px;
  width: 404px;
  height: 875px;
  border-radius: 40px;
  overflow: hidden;
}

.icon {
  @apply flex items-center justify-center;
}

.user-pic {
  width: 3.25rem;
  height: 3.25rem;
}

.input-area {
  background: #2e3854;
}

.input-icon {
  padding: 7px;
  cursor: pointer;
  transition: 0.1s all ease;
  border-radius: 100%;
}

.input-icon:hover {
  background: #3a486b;
}

.input-icon:active {
  padding: 9px;
}

.scroll-section {
  scrollbar-width: none;
}

.online-color {
  background: #67f254;
}

.shadow-top {
  box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1);
}

</style>
