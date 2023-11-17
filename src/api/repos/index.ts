import axios from 'axios'
import type { IPromiseRepo } from '@/types/promiseRepo.ts'

export async function getRepos(name: string | undefined, pageNumber: number, perPages: number): Promise<IPromiseRepo> {
  const { data } = await axios.get<IPromiseRepo>(
      `https://api.github.com/search/repositories?q={${name}&sort=stars&order=desc&page=${pageNumber}&per_page=${perPages}`)
  const { items, total_count } = data
  return { items, total_count }
}
