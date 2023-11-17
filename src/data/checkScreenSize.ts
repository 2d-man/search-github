import { computed } from 'vue'

// COMPUTED
export const smallScreen = computed(() => {
  console.warn(window.innerWidth)
  return window.innerWidth < 600
})
