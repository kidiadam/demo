import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/layout/index.vue'),
    redirect: "/welcome",
    meta: { title: '首頁' },
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/dashboard.vue'),
        meta: { title: '導覽' },
      },
      {
        path: 'system',
        name: 'System',
        component: "",
        redirect: "/system/user",
        meta: { title: '系統管理' },
        children: [
          {
            path: 'user',
            name: 'User',
            component: () => import('@/views/system/user.vue'),
            meta: { title: '用戶管理' },
          },
          {
            path: "monitor",
            component: "",
            name: "Monitor",
            meta: { title: "系統監控" },
            redirect: "/system/monitor/online",
            children: [
              {
                path: "online",
                name: "Online",
                component: () => import('@/views/system/monitor/online.vue'),
                meta: { title: "線上用戶" }
              },
            ]
          },
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: { title: '登入' },
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title
  // const requireAuth = !!to.meta?.requireAuth
  // const userStore = useUserStore()
  // const hasToken = userStore.token !== ''
  // const token = hasToken? userStore.token : localStorage.myToken
  // if (!hasToken && token) userStore.setToken(token)
  // if (requireAuth && !token) {
  //   next({ name: 'Login' })
  // } else {
    next()
  // }
})

export default router

// 組出麵包屑用的
export const generateRoutesMenu = (parentNamePath = [], children = []) => {
  const routeArray = children.length? children : routes
  routeArray.forEach((item) => {
    if (item.meta && item.name !== "Welcome" && typeof item.name === 'string') {
      item.meta.namePath = parentNamePath.concat(item.name);
      if (item.meta?.hideInMenu) {
        item.meta.activeMenu ||= parentNamePath.at(-1);
      }
      if (item.children?.length) {
        generateRoutesMenu(item.meta.namePath, item.children);
      }
    }
  });
  return routes;
};