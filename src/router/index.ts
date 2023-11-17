import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.ts'
import titleGuard from '@/router/title.guard.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(titleGuard)

export default router
