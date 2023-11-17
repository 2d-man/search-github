import type { IOwner } from '@/types/owner.ts'

export interface IRepo {
  name: string
  owner: IOwner
  description: string
  language: string
  stargazers_count: number
  id: number
}
