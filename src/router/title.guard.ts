import type { NavigationGuard } from 'vue-router'

const titleGuard: NavigationGuard = function (to) {
  const { title } = to.meta
  document.title = title ?? 'Без темы'
}

export default titleGuard
