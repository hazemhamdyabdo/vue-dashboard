<script setup lang="ts">
import { computed } from "vue";
import type { NavigationMenuItem } from "@nuxt/ui";
import AppIcon from "@components/AppIcon.vue";
import { IconName } from "@assets/icons";

const links = [
  {
    label: "Agent",
    icon: "tokenCircle",
    to: "/",
    custom: true,
  },
  {
    label: "Spaces",
    icon: "hugeicons:folder-file-storage",
    to: "/spaces",
    custom: false,
  },
  {
    label: "Tools",
    icon: "tabler:puzzle",
    to: "/tools",
    custom: false,
  },
  {
    label: "Settings",
    icon: "hugeicons:settings-03",
    to: "/settings",
    custom: false,
  },
] satisfies NavigationMenuItem[];

const groups = computed(() => [
  {
    id: "links",
    label: "Go to",
    items: links.flat(),
  },
]);

const isActive = (to: string) => {
  return useRoute().path === to;
};
</script>

<template>
  <UDashboardGroup unit="rem" class="p-2 bg-[#111]">
    <UDashboardSidebar
      id="default"
      class="bg-[#191919] w-fit flex flex-col items-center justify-center border-e-0 rounded-lg p-0 min-h-[calc(100vh-18rem)]"
      :ui="{ footer: 'lg:border-t lg:border-[#2A2A2A]', body: ' px-0' }"
    >
      <template #header>
        <img
          src="/wakeb-logo.png"
          alt="Logo"
          class="w-10 h-12 border-b border-[#2A2A2A] pb-2"
        />
      </template>

      <template #default>
        <nav>
          <UList>
            <UListItem
              v-for="link in links"
              :key="link.label"
              :to="link.to"
              class="flex flex-col items-center gap-2 text-[#B3B3B3] bg-[#191919] p-2 rounded-md mb-2 hover:bg-[#2A2A2A] hover:text-[#FFFFFF] cursor-pointer"
              :class="{
                'bg-neutral-700/60 text-white': isActive(link.to),
              }"
            >
              <AppIcon
                v-if="link.custom"
                :icon="link.icon as IconName"
                :size="24"
              />
              <Icon v-else :icon="link.icon" class="size-5" />
              <span class="text-xs">{{ link.label }}</span>
            </UListItem>
          </UList>
        </nav>
      </template>

      <template #footer="{ collapsed }">
        <UAvatar
          alt="M G"
          size="md"
          class="bg-[#0F6B90] text-white mx-auto mb-3"
          :ui="{ fallback: 'text-white text-xs' }"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />

    <RouterView />

    <NotificationsSlideover />
  </UDashboardGroup>
</template>
