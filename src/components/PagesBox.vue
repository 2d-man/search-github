<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: number | undefined
  countPages?: number
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: number ]
}>()

// VARIABLES
const pageCount = ref<number>(checkNumberOfVisiblePages(prop.countPages))
const pageLast = ref<number>(prop.countPages)
const selectedPage = ref<number>(1)

// METHODS
function checkNumberOfVisiblePages(count: number): number {
  return count > 5 ? 5 : count
}

function selectPage(pageNumber: number) {
  selectedPage.value = pageNumber
}

function checkSelectedPage(pageNumber: number) {
  if (selectedPage.value === pageNumber)
    return true
}

// function fillPageSegment

// WATCHERS
watch(selectedPage, () => {
  emit('update:modelValue', selectedPage.value)
})
</script>

<template>
  <div class="flex flex-row gap-3 text-white">
    <button
      v-for="pageNumber of pageCount"
      :key="pageNumber" class="hover:underline"
      :class="checkSelectedPage(pageNumber) ? 'text-blue-600 underline' : 'text-white'"
      @click="selectPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <p v-if="pageLast > 6">
      ...
    </p>
    <button
      v-if="!(pageLast <= 5)"
      class="hover:underline"
      :class="checkSelectedPage(pageLast) ? 'text-blue-600 underline' : 'text-white'"
      @click="selectPage(pageLast)"
    >
      {{ pageLast }}
    </button>
  </div>
</template>
