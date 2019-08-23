export default [
  {
    path: '/',
    name: 'index',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '车险分期'
    },
    component: () => import('@/views/index.vue')
  },
  {
    path: '/error404',
    name: 'error404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/error/error404.vue')
  }
]
