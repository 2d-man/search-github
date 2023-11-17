<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: number
}
const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: number ]
}>()

// VARIABLES
const selectedPerPage = ref<number>(prop.modelValue)

// WATCHERS
watch(selectedPerPage, () => {
  emit('update:modelValue', selectedPerPage.value)
})
</script>

<template>
  <select v-model="selectedPerPage" class="rounded-2xl w-16">
    <option :value="5">
      5
    </option>
    <option :value="10">
      10
    </option>
    <option :value="20">
      20
    </option>
    <option :value="30">
      30
    </option>
  </select>
</template>
