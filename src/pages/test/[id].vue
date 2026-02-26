<script setup lang="ts">

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>
    <h1>Hello {{ id }}</h1>
  </div>
</template>
