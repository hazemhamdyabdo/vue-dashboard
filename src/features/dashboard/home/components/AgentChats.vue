<script setup lang="ts">
const recentChats = [
  {
    id: 1,
    title: "New Chat",
    active: true,
  },
  {
    id: 2,
    title: "DVS – Daily Log Automation Chat",
    active: false,
  },
  {
    id: 3,
    title: "Chat with John Doe",
    active: false,
  },
  {
    id: 4,
    title: "Agent AI – Task Automation Chat",
    active: false,
  },
  {
    id: 5,
    title: "Agent AI – Data Analysis Chat",
    active: false,
  },
];
</script>

<template>
  <UCard
    class="h-full ms-2 bg-[#191919] rounded-xl"
    :ui="{ root: 'ring-0', body: 'sm:p-4 sm:pt-4' }"
  >
    <template #default>
      <section class="ring-0 p-0">
        <!-- header -->
        <div
          class="flex items-center justify-between border-b border-[#2A2A2A] pb-5"
        >
          <div class="flex items-center gap-2">
            <Icon icon="mingcute:ai-fill" class="size-5 text-[#EEE]" />
            <h3 class="text-[#EEE] text-base font-semibold">AI Agent</h3>
          </div>
          <Icon icon="hugeicons:pencil-edit-02" class="size-5 text-[#B3B3B3]" />
        </div>

        <!-- recent chats -->

        <div class="flex items-center gap-2 mt-4 mb-3">
          <Icon icon="hugeicons:clock-04" class="size-4 text-[#B3B3B3]" />
          <p class="text-[#B3B3B3] text-sm font-semibold">Recents</p>
        </div>

        <UList>
          <UListItem
            v-for="chat in recentChats"
            :key="chat.id"
            class="flex items-center gap-2 hover:bg-neutral-700/60 hover:text-white rounded-md p-2 cursor-pointer mb-2 text-[#B3B3B3]"
            :class="{
              'bg-neutral-700/60 text-white': chat.active,
            }"
          >
            <p class="text-xs font-medium">{{ chat.title }}</p>
          </UListItem>
        </UList>
      </section>
    </template>
  </UCard>
</template>
