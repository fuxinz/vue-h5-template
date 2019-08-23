import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    next()
    return
  }
  next('/error404')
})
router.afterEach((to, from, next) => {
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
  window.scrollTo(0, Math.max(scrollHeight - 1, 0))
  document.title = to.meta.title
})
export default router
