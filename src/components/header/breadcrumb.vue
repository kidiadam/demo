<template>
  <a-breadcrumb>
    <template v-for="(routeItem, rotueIndex) in menus" :key="routeItem?.name">
      <a-breadcrumb-item>
        <span>{{ routeItem?.meta?.title }}</span>
        <template v-if="routeItem?.children?.length" #overlay>
          <a-menu :selected-keys="getSelectKeys(rotueIndex)">
            <template v-for="childItem in routeItem?.children" :key="childItem.name">
              <a-menu-item
                v-if="!childItem.meta?.hideInMenu && !childItem.meta?.hideInBreadcrumb"
                :key="childItem.name"
                @click="clickMenuItem(childItem)"
              >
                <span>{{ childItem.meta?.title }}</span>
              </a-menu-item>
            </template>
          </a-menu>
        </template>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router';
  import { useUserStore } from '@/store/user';

  defineOptions({
    name: 'LayoutBreadcrumb',
  });

  const router = useRouter();
  const route = useRoute();
  const userStore = useUserStore();

  const getRouteByName = (name: string) => router.getRoutes().find((n) => n.name === name);
  // click選單
  const clickMenuItem = (menuItem: RouteRecordRaw) => {
    if (route.name === menuItem.name) return
    router.push({ name: menuItem.name });
  };

  // 依照route自定義的meta內容組出麵包屑
  const menus = computed(() => {
    if (route.meta?.namePath) {
      let children = userStore.menus;
      const paths = route.meta?.namePath?.map((item) => {
        const a = children.find((n) => n.name === item);
        children = a?.children || [];
        return a;
      });
      return [
        {
          name: 'Welcome',
          meta: {
            title: '首頁',
          },
          children: userStore.menus,
        },
        ...paths,
      ];
    }
    return route.matched;
  });

  const getSelectKeys = (rotueIndex: number) => {
    return [menus.value[rotueIndex + 1]?.name] as string[];
  };
</script>
<style lang="scss" scoped></style>
