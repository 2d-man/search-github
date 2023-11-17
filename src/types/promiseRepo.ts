import type { IRepo } from '@/types/repo.ts'

export interface IPromiseRepo {
  items: Array<IRepo>
  total_count: number
}
