<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView v-slot="{ Component: View }">
        <MainLayout>
          <template v-if="View">
            <component :is="View" />
          </template>
        </MainLayout>
      </RouterView>
    </template>
    <template #fallback>
      Загрузка...
    </template>
  </Suspense>
</template>
