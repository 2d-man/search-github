<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  modelValue: number | undefined
  countPages: number
}

const prop = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [ value: number ]
  'update:countPages': [value: number]
}>()

// VARIABLES
const pageLast = ref<number>(prop.countPages)
const selectedPage = ref<number>(1)
const pageSegment = ref<Array<number>>([...Array(6).keys()].map(i => i + 2))

// METHODS
function selectPage(pageNumber: number) {
  selectedPage.value = pageNumber
  fillPageSegment()
}

function checkSelectedPage(pageNumber: number) {
  if (selectedPage.value === pageNumber)
    return true
}

function fillPageSegment() {
  if (selectedPage.value + 2 < pageLast.value) {
    if (selectedPage.value >= 5)
      pageSegment.value = [...Array(6).keys()].map(i => i + selectedPage.value - 3)
  }
  if (selectedPage.value === pageLast.value - 2)
    pageSegment.value = [...Array(6).keys()].map(i => i + selectedPage.value - 4)
  if (selectedPage.value <= 5)
    pageSegment.value = [...Array(6).keys()].map(i => i + 2)
}

// WATCHERS
watch(selectedPage, () => {
  emit('update:modelValue', selectedPage.value)
})
</script>

<template>
  <div class="flex flex-row gap-3 text-white">
    <button
      class="hover:underline"
      :class="checkSelectedPage(1) ? 'text-blue-600 underline' : 'text-white'"
      @click="selectPage(1)"
    >
      1
    </button>
    <p v-if="selectedPage > 5">
      ...
    </p>
    <button
      v-for="pageNumber in pageSegment"
      :key="pageNumber" class="hover:underline"
      :class="checkSelectedPage(pageNumber) ? 'text-blue-600 underline' : 'text-white'"
      @click="selectPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <p v-if="(pageLast > 6) && !(selectedPage + 3 >= pageLast)">
      ...
    </p>
    <button
      v-if="!(countPages <= 5)"
      class="hover:underline"
      :class="checkSelectedPage(pageLast) ? 'text-blue-600 underline' : 'text-white'"
      @click="selectPage(pageLast)"
    >
      {{ countPages }}
    </button>
  </div>
</template>
