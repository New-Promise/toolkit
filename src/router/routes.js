import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fileCompare',
    name: 'fileCompare',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Home/layerModal/textContrast.vue'),
    meta: {
      icon: 'ios-navigate',
      title: '文本比对'
    }
  }
]
