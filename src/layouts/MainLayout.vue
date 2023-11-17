<script setup lang="ts">
import { smallScreen } from '@/data/checkScreenSize.ts'
</script>

<template>
  <div
    class="flex flex-col min-w-screen min-h-screen"
    :class="smallScreen ? 'p-2' : 'px-10 py-5'"
  >
    <div
      class="flex flex-col min-w-full min-h-full grow shadow-2xl rounded-2xl bg-gray-800 "
      :class="smallScreen ? 'p-2' : 'p-10'"
    >
      <div class="flex flex-col min-h-full grow">
        <slot />
      </div>
    </div>
  </div>
</template>
