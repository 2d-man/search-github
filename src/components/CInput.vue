<script setup lang="ts">
import { ref, watch } from 'vue'
import SvgSearch from '@/assets/SvgSearch.vue'

export interface Props {
  modelValue: string | undefined
  label?: string
}
const prop = withDefaults(defineProps<Props>(), {
  label: 'Найти...',
})

const emit = defineEmits<{
  'update:modelValue': [ value: string | undefined ]
  'click': []
}>()

// VARIABLES
const text = ref<string | undefined>(prop.modelValue)

// WATCHERS
watch(text, () => {
  emit('update:modelValue', text.value)
})
</script>

<template>
  <div class="flex justify-between w-1/2 h-12 rounded-2xl bg-gray-200 relative">
    <input
      v-model="text"
      :placeholder="label"
      class="bg-gray-200 w-full p-2 rounded-2xl"
    >
    <SvgSearch
      class="w-8 h-8 absolute right-2 top-2 cursor-pointer"
      @mousedown="emit('click')"
      @keydown.enter="emit('click')"
    />
  </div>
</template>
