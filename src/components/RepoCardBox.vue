<script setup lang="ts">
import RepoCard from '@/components/RepoCard.vue'
import type { IRepo } from '@/types/repo.ts'

export interface Props {
  modelValue: Array<IRepo> | undefined
}

defineProps<Props>()

defineEmits<{
  'update:modelValue': [ value: Array<IRepo> ]
}>()
</script>

<template>
  <div class="flex flex-col gap-2 max-w-full min-w-full">
    <RepoCard
      v-for="repo in modelValue"
      :key="repo.id"
      :name="repo.name" :owner="repo.owner" :description="repo.description"
      :language="repo.language" :stargazers-count="repo.stargazers_count"
    />
  </div>
</template>
