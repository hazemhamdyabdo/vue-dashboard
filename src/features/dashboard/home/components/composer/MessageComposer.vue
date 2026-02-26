<script setup lang="ts">
import { DropdownMenuItem } from "@nuxt/ui";

const message = ref("");
const items: DropdownMenuItem[][] = [
  [
    {
      label: "Tools",
      type: "label",
    },
    {
      label: "DVS",
      icon: "hugeicons:analytics-01",
      color: "red",
      children: [
        {
          label: "DVS",
          type: "label",
        },
        {
          label: "Analyze file",
          icon: "hugeicons:analytics-01",
          color: "red",
        },
        {
          label: "Create a Group",
          icon: "hugeicons:analytics-01",
          color: "red",
        },
        {
          label: "Add to dashboard",
          icon: "hugeicons:analytics-01",
          color: "red",
        },
      ],
    },
    {
      label: "GIS",
      icon: "hugeicons:satellite-02",
      color: "yellow",
      children: [
        {
          label: "Analytics",
          icon: "hugeicons:analytics-01",
          color: "yellow",
        },
      ],
    },
    {
      label: "AIP",
      icon: "fluent:news-16-regular",
      color: "green",
      children: [
        {
          label: "Analytics",
          icon: "hugeicons:analytics-01",
          color: "green",
        },
      ],
    },
  ],
  [
    {
      label: "Upload Files",
      icon: "mdi-light:file",
      color: "green",
    },
    {
      label: "Upload Images",
      icon: "hugeicons:folder-file-storage",
      color: "green",
    },
  ],
];
</script>

<template>
  <div class="max-w-1/2 mx-auto mt-4">
    <UCard
      class="w-full bg-[#2020208F] py-1 border-4 border-[#0B5676] rounded-3xl mt-4"
      :ui="{ root: 'ring-0', body: 'sm:p-0 sm:pt-4' }"
    >
      <UTextarea
        v-model="message"
        variant="none"
        placeholder="Type prompt or / to use a system…"
        class="w-full"
        autoresize
        :rows="5"
        :ui="{
          base: 'placeholder:text-[#B3B3B3]',
        }"
      >
        <template #leading>
          <Icon icon="hugeicons:ai-magic" class="size-5 text-white" />
        </template>
      </UTextarea>
      <section class="p-4 flex items-center justify-between">
        <UDropdownMenu
          :items="items"
          :ui="{ content: 'bg-[#242424] rounded-lg ring-0 text-white w-60' }"
          :content="{
            align: 'center',
            side: 'bottom',
            sideOffset: 8,
          }"
        >
          <UButton variant="soft" class="bg-[#242424] rounded-full py-2.5">
            <Icon
              icon="openmoji:plus-sign"
              class="size-5 text-white font-bold"
            />
          </UButton>
        </UDropdownMenu>
        <div>
          <UButton
            variant="soft"
            class="bg-[#1383AB] rounded-lg py-2.5 cursor-pointer text-white"
          >
            <Icon icon="basil:send-solid" class="size-5 font-bold" />
          </UButton>
        </div>
      </section>
    </UCard>
  </div>
</template>
