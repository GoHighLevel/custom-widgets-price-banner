import { createMemoryHistory, createRouter } from 'vue-router'

import Prices from '../views/Prices.vue'
import Settings from '../views/Settings.vue'
import Themes from '../views/Themes.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'themes',
      component: Themes
    },
    {
      path: '/themes',
      name: 'themes',
      component: Themes
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    }
  ]
})

export default router
