<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { smallScreen } from '@/data/checkScreenSize.ts'
import SvgBlocksIcon from '@/assets/SvgBlocksIcon.vue'
import SvgNotFound from '@/assets/SvgNotFound.vue'
import PerPageBox from '@/components/PerPageBox.vue'
import PagesBox from '@/components/PagesBox.vue'
import RepoCardBox from '@/views/repos/components/RepoCardBox.vue'
import CInput from '@/components/CInput.vue'
import { getRepos } from '@/api/repos'
import type { IRepo } from '@/types/repo.ts'

// VARIABLES
const route = useRoute()
const repos = ref<Array<IRepo>>()
const nameRepo = ref<string>('')
const countPages = ref<number>(1)
const perPage = ref<number>(5)
const currentPage = ref<number>(1)
const isPending = ref<boolean>(false)
const isNotFound = ref<boolean>(false)
let timeout: ReturnType<typeof setTimeout>

// METHODS
function updateFoundRepos(delay: number) {
  if (timeout)
    clearTimeout(timeout)
  timeout = setTimeout(async () => {
    isPending.value = true
    try {
      const { items, total_count } = await getRepos((nameRepo.value).trim(), currentPage.value, perPage.value)
      repos.value = items
      countPages.value = Math.round(total_count / perPage.value)
      isPending.value = false
      isNotFound.value = (repos.value.length > 0) ? isNotFound.value = false : isNotFound.value = true
    }
    catch (e) {
      console.warn(e)
      isNotFound.value = true
    }
  }, delay)
}

// COMPUTED
const showSvgBlocksIcon = computed(() => {
  return (!repos.value && !isPending.value) || (!nameRepo.value && !isNotFound.value)
})

const showSvgNotFound = computed(() => {
  return isNotFound.value && !isPending.value
})

const showRepoCardBox = computed(() => {
  return repos.value && nameRepo.value && !isPending.value && !isNotFound.value
})

// WATCHERS
watch(nameRepo, () => {
  if (nameRepo.value.trim().length > 0 && nameRepo.value)
    updateFoundRepos(1000)
  else
    isNotFound.value = false
})
watch(currentPage, () => {
  updateFoundRepos(0)
})
watch(perPage, () => {
  updateFoundRepos(0)
})
</script>

<template>
  <div class="flex flex-col grow h-full gap-10">
    <div
      class="flex justify-around"
      :class="smallScreen ? 'flex-col' : 'flex-row'"
    >
      <p
        class="flex justify-center font-bold text-blue-400 pb-4"
        :class="smallScreen ? 'text-2xl text-center' : 'text-3xl'"
      >
        {{ route.meta?.title || 'Приложение' }}
      </p>
      <CInput v-model="nameRepo" @click="updateFoundRepos(0)" @keydown.enter="updateFoundRepos(0)" />
    </div>
    <div v-if="showSvgBlocksIcon" class="flex flex-col grow justify-center items-center">
      <SvgBlocksIcon />
    </div>
    <div v-if="isPending" class="flex flex-col grow justify-center items-center">
      <img src="@/assets/BlocksAnimation.gif" alt="Loading">
    </div>
    <p v-if="showSvgNotFound" class="flex flex-col grow justify-center items-center">
      <SvgNotFound />
    </p>

    <div v-if="showRepoCardBox" class="flex flex-col justify-between grow gap-10">
      <div class="">
        <RepoCardBox v-model="repos" />
      </div>
      <div
        class="flex"
        :class="smallScreen ? 'flex-col-reverse items-center gap-6' : 'flex-row justify-between'"
      >
        <PagesBox v-model="currentPage" :count-pages="countPages" />
        <PerPageBox v-model="perPage" />
      </div>
    </div>
  </div>
</template>
