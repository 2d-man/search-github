<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: string | undefined
  label?: string
}
const prop = withDefaults(defineProps<Props>(), {
  label: 'Найти...',
})

const emit = defineEmits<{
  'update:modelValue': [ value: string | undefined ]
}>()

// VARIABLES
const text = ref<string | undefined>(prop.modelValue)

// WATCHERS
watch(text, () => {
  emit('update:modelValue', text.value)
})
</script>

<template>
  <input
    v-model="text"
    :placeholder="label"
    class="flex w-1/2 h-12 p-2 rounded bg-gray-200"
  >
</template>
