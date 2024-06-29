import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      const id = to.hash.replace('#', '')
      const el = document.getElementById(id)
      const app = document.getElementById('app')
      if (app && el) {
        app.scrollTo({behavior: 'smooth', top: el.offsetTop})
      }
    }
  },
}
