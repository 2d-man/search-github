<script setup lang="ts">
import { computed, ref } from 'vue'
import { smallScreen } from '@/data/checkScreenSize.ts'
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
const visible = ref<boolean>(false)
const lengthDescription: number = 80

// METHODS
function descriptionIsBig() {
  return prop.description.length > lengthDescription
}

function showMore() {
  visible.value = !visible.value
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

const shortDescription = computed(() => {
  if (prop.description.length > lengthDescription)
    return prop.description.slice(0, lengthDescription)
  else
    return prop.description
})
</script>

<template>
  <div
    class="flex rounded bg-gray-100"
    :class="smallScreen ? 'flex-col p-1' : 'flex-row p-5 py-1'"
  >
    <div
      class="flex flex-col"
      :class="smallScreen ? 'w-full flex-wrap' : 'w-1/3'"
    >
      <p>
        Название:
        <a :href="linkRepo" class="text-blue-400 font-bold hover:underline">
          {{ name }}
        </a>
      </p>
      <p>
        Автор:
        <a :href="linkOwner" class="text-blue-400 font-bold hover:underline">
          {{ owner.login }}
        </a>
      </p>
      <p>
        Популярность: {{ stargazersCount }}&#11088;
      </p>
    </div>
    <div
      class="flex flex-col "
      :class="smallScreen ? 'w-full' : 'pl-10 w-2/3'"
    >
      <p>
        Язык: {{ languageRepo }}
      </p>
      <p v-if="!descriptionIsBig()">
        Описание: {{ shortDescription }}
      </p>
      <div v-if="descriptionIsBig()">
        <p v-if="visible">
          Описание: {{ description }}
        </p>
        <p v-if="visible" class="text-blue-400 hover:underline" @click="showMore">
          Скрыть полное описание
        </p>
        <p v-if="!visible">
          Описание: {{ shortDescription }}
        </p>
        <p v-if="!visible" class="text-blue-400 hover:underline" @click="showMore">
          Показать больше
        </p>
      </div>
    </div>
  </div>
</template>
