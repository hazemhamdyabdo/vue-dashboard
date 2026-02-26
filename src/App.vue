<template>
  <Suspense>
    <UApp :theme="{ base: 'bg-red-500' }">
      <RouterView />
    </UApp>
  </Suspense>
</template>
