<script setup lang="ts">
import { useRoute } from 'vue-router'

// VARIABLES
const route = useRoute()
</script>

<template>
  <div class="flex flex-col min-w-screen min-h-screen p-10">
    <div class="flex flex-col min-w-full min-h-full grow p-10 shadow-2xl rounded-2xl bg-gray-800 ">
      <div class="flex flex-col min-h-full">
        <slot />
      </div>
    </div>
  </div>
</template>
