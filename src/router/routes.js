import Home from '../views/Home.vue'
import Main from '$c/main/main.vue'
export default [
  {
    path: '/',
    name: 'home',
    meta: {
      icon: 'ios-contact',
      title: '首页'
    },
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      icon: 'ios-contact',
      title: '文本比对'
    },
    component: Main,
    children: [
      {
        path: '/fileCompare',
        name: 'fileCompare',
        component: () => import('@/views/Home/layerModal/textContrast.vue'),
        meta: {
          icon: 'ios-navigate',
          title: '文本比对'
        }
      },
      {
        path: '/jsonTool',
        name: 'jsonTool',
        component: () => import('@/views/jsonVerify/jsonVerify.vue'),
        meta: {
          icon: 'ios-navigate',
          title: 'json工具'
        }
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('$c/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('$c/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('$c/error-page/404.vue')
  }
]
