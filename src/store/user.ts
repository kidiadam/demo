import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import { store } from '@/store';
import { generateRoutesMenu } from '@/router';


export const useUserStore = defineStore(
  'user',
  () => {
    // const menus = generateRoutesMenu()

    const token = ref<string>();
    const menus = reactive([
      {
        path: "/",
        component: "",
        name: "Home",
        meta: {
          title: "首頁",
          icon: "ant-design:home-outlined",
          extOpenMode: 1,
          type: 0,
          show: 1,
          activeMenu: null,
          status: 1,
          keepAlive: 0
        },
        redirect: "/welcome",
        children: [
          {
            path: "/welcome",
            name: "Welcome",
            component: "dashboard",
            meta: {
              title: "導覽",
              icon: "ant-design:dashboard-outlined",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
        ]
      },
      {
        path: "/system",
        component: "",
        name: "系統管理",
        meta: {
          title: "系統管理",
          icon: "ant-design:setting-outlined",
          extOpenMode: 1,
          type: 0,
          show: 1,
          activeMenu: null,
          status: 1,
          keepAlive: 0
        },
        redirect: "/system/user",
        children: [
          {
            path: "/system/user",
            name: "User",
            component: "system/user/index",
            meta: {
              title: "用戶管理",
              icon: "ant-design:user-outlined",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
          {
            path: "/system/role",
            name: "角色管理",
            component: "system/role/index",
            meta: {
              title: "角色管理",
              icon: "ep:user",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
          {
            path: "/system/menu",
            name: "選單管理",
            component: "system/menu/index",
            meta: {
              title: "選單管理",
              icon: "ep:menu",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
          {
            path: "/system/dept",
            name: "部門管理",
            component: "system/dept/index",
            meta: {
              title: "部門管理",
              icon: "ant-design:deployment-unit-outlined",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
          {
            path: "/system/monitor",
            component: "",
            name: "monitor",
            meta: {
              title: "系統監控",
              icon: "ep:monitor",
              extOpenMode: 1,
              type: 0,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            },
            redirect: "/system/monitor/online",
            children: [
              {
                path: "/system/monitor/online",
                name: "Online",
                component: "system/monitor/online/index",
                meta: {
                  title: "線上用戶",
                  icon: "",
                  extOpenMode: 1,
                  type: 1,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0
                }
              },
              {
                path: "/sys/monitor/login-log",
                name: "登入紀錄",
                component: "system/monitor/log/login/index",
                meta: {
                  title: "登入紀錄",
                  icon: "",
                  extOpenMode: 1,
                  type: 1,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0
                }
              },
              {
                path: "/health",
                name: "系統安全",
                component: "",
                meta: {
                  title: "系統安全",
                  icon: "",
                  extOpenMode: 1,
                  type: 1,
                  show: 0,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0
                }
              },
              {
                path: "/system/monitor/serve",
                name: "伺服器狀況",
                component: "system/monitor/serve/index",
                meta: {
                  title: "伺服器狀況",
                  icon: "",
                  extOpenMode: 1,
                  type: 1,
                  show: 1,
                  activeMenu: null,
                  status: 1,
                  keepAlive: 0
                }
              }
            ]
          },
          {
            path: "/param-config",
            name: "系統設置",
            component: "system/param-config/index",
            meta: {
              title: "系統設置",
              icon: "ep:edit",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          }
        ]
      },
      {
        path: "/tool",
        component: "",
        name: "系统工具",
        meta: {
          title: "系统工具",
          icon: "ant-design:tool-outlined",
          extOpenMode: 1,
          type: 0,
          show: 1,
          activeMenu: null,
          status: 1,
          keepAlive: 0
        },
        redirect: "/tool/email",
        children: [
          {
            path: "/tool/email",
            name: "發送郵件",
            component: "tool/email/index",
            meta: {
              title: "發送郵件",
              icon: "ant-design:send-outlined",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
          {
            path: "/tool/storage",
            name: "儲存空間",
            component: "tool/storage/index",
            meta: {
              title: "儲存空間",
              icon: "ant-design:appstore-outlined",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          }
        ]
      },
      {
        path: "netdisk",
        component: null,
        name: "雲端硬碟",
        meta: {
          title: "雲端硬碟",
          icon: "ant-design:cloud-server-outlined",
          extOpenMode: 1,
          type: 0,
          show: 1,
          activeMenu: null,
          status: 1,
          keepAlive: 0
        },
        redirect: "manage",
        children: [
          {
            path: "manage",
            name: "文件管理",
            component: "netdisk/manage",
            meta: {
              title: "文件管理",
              icon: "",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          },
          {
            path: "overview",
            name: "硬碟總覽",
            component: "netdisk/overview",
            meta: {
              title: "硬碟總覽",
              icon: "",
              extOpenMode: 1,
              type: 1,
              show: 1,
              activeMenu: null,
              status: 1,
              keepAlive: 0
            }
          }
        ]
      },
    ]);
    const setToken = (_token: string) => {
      token.value = _token;
    };
    // 登入
    const login = async () => {
      // dosomethig
      const data = { token: "myToken" }
      setToken(data.token);
    };

    // 登出
    const logout = async () => {
      // dosomethig
    };

    return {
      token,
      menus,
      login,
      logout,
    };
  },
  {
    persist: {
      paths: ['token'],
    },
  },
);

export function useUserStoreWithOut() {
  return useUserStore(store);
}
