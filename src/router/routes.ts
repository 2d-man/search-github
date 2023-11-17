import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/', redirect: { name: 'repos' },
  },
  {
    path: '/repos',
    name: 'repos',
    component: () => import('@/views/repos/ReposPage.vue'),
    meta: {
      title: 'Поиск репозитория',
    },
  },
]
