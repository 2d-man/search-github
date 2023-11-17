<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IOwner } from '@/types/owner.ts'

export interface Props {
  name: string
  owner: IOwner
  description: string
  language: string | undefined
  stargazersCount: number
}

// VARIABLES
const prop = defineProps<Props>()
const shortDescription = ref<string>(prop.description)

// METHODS
function descriptionIsBig() {
  if (prop.description.length > 500) {
    shortDescription.value = prop.description.slice(0, 500)
    return true
  }
  else { return false }
}

function showMore() {
  shortDescription.value = prop.description
  console.warn(shortDescription.value)
}

// COMPUTED
const linkRepo = computed(() => {
  return `https://github.com/${prop.owner.login}/${prop.name}`
})

const linkOwner = computed(() => {
  return `https://github.com/${prop.owner.login}`
})

const languageRepo = computed(() => {
  return prop.language ? prop.language : 'Не определён'
})
</script>

<template>
  <div class="flex justify-between p-5 py-1 rounded bg-gray-100">
    <div class="flex flex-col w-1/3">
      <p>
        Название:
        <a :href="linkRepo" class="text-blue-600 font-bold hover:underline">
          {{ name }}
        </a>
      </p>
      <p>
        Автор:
        <a :href="linkOwner" class="text-blue-600 font-bold hover:underline">
          {{ owner.login }}
        </a>
      </p>
      <p>
        Популярность: {{ stargazersCount }}&#11088;
      </p>
    </div>
    <div class="flex flex-col w-2/3 pl-10">
      <p>
        Язык: {{ languageRepo }}
      </p>
      <p>
        Описание: {{ shortDescription }}
      </p>
      <p v-if="descriptionIsBig()" class="text-blue-600 hover:underline" @click="showMore">
        Показать больше
      </p>
    </div>
  </div>
</template>
