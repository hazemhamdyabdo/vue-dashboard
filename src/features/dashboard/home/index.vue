<script setup lang="ts">
import { HeroSection, AgentChats } from "./components";
definePage({
  path: "/",
});
</script>

<template>
  <main class="grid grid-cols-12 gap-4 w-full">
    <AgentChats class="col-span-2" />
    <HeroSection class="col-span-10" />
  </main>
</template>
