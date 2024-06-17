import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      const el = document.getElementById(to.hash.replace('#', ''))
      const app = document.getElementById('app')
      if (app && el) {
        app.scrollTo({behavior: 'smooth', top: el.offsetTop})
      }
    }
  },
}
