<script setup lang="ts">
const search = ref("");
</script>

<template>
  <section class="flex items-center justify-between">
    <div></div>
    <!-- search -->
    <UInput
      v-model="search"
      placeholder="Search"
      variant="none"
      class="w-full max-w-sm bg-[#2020208F] rounded-xl py-1"
      :ui="{
        base: 'placeholder:text-[#B3B3B3]',
      }"
    >
      <template #leading>
        <Icon
          icon="heroicons-outline:magnifying-glass"
          class="size-5 text-[#B3B3B3]"
        />
      </template>
      <template #trailing>
        <Icon icon="solar:command-outline" class="size-5 text-[#B3B3B3]" />
        <p class="text-[#B3B3B3] text-sm font-semibold ms-1">F</p>
      </template>
    </UInput>

    <div class="flex items-center gap-2">
      <UButton variant="soft" class="bg-[#202020] text-white rounded-xl py-2">
        <Icon icon="heroicons-outline:download" class="size-5" />
      </UButton>
      <UButton variant="soft" class="bg-[#202020] text-white rounded-xl py-2">
        <Icon icon="ion:share-outline" class="size-5" />
        <span class="text-sm font-semibold">Share</span>
      </UButton>
    </div>
  </section>
</template>
