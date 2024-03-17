<template>
  <div class="menu-container">
    <Menu v-model:selected-keys="state.selectedKeys" :open-keys="state.openKeys" mode="inline" :theme="theme"
      :collapsed="props.collapsed" collapsible @click="clickMenuItem">
      <template v-for="item in menus" :key="item.name">
        <SubMenuItem :item="item" />
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch, type PropType } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Menu, type MenuTheme } from 'ant-design-vue';
import { useUserStore } from '@/store/user';
import SubMenuItem from '@/components/menu/subMenuItem.vue';
const userStore = useUserStore();

const props = defineProps({
  collapsed: {
    // 收合
    type: Boolean,
  },
  theme: {
    type: String as PropType<MenuTheme>,
  },
});
// 當前route
const currentRoute = useRoute();
const router = useRouter();
const state = reactive({
  openKeys: [] as string[],
  selectedKeys: [currentRoute.name] as string[],
});

const menus = computed(() => userStore.menus);

const getRouteByName = (name: string) => router.getRoutes().find((n) => {
  console.log(n)
  console.log(name)
  return n.name === name
});
// 根據activeMenu找指定的menu
const getTargetMenuByActiveMenuName = (activeMenu: string) => {
  return router.getRoutes().find((n) => [n.name, n.path].includes(activeMenu));
};

// 當前打開的子選單
const getOpenKeys = () => {
  const meta = currentRoute.meta;
  if (meta?.activeMenu) {
    const targetMenu = getTargetMenuByActiveMenuName(meta.activeMenu);
    return targetMenu?.meta?.namePath ?? [meta?.activeMenu];
  }

  return (
    meta?.hideInMenu
      ? state?.openKeys || []
      : currentRoute.meta?.namePath ?? currentRoute.matched.slice(1).map((n) => n.name)
  ) as string[];
};

// 監聽收合狀態
watch(
  () => props.collapsed,
  (newVal) => {
    state.openKeys = newVal ? [] : getOpenKeys();
    state.selectedKeys = [currentRoute.name] as string[];
  },
);

// 根據router切換menu的active
watch(
  () => currentRoute.fullPath,
  () => {
    state.openKeys = getOpenKeys();
    const meta = currentRoute.meta;
    if (meta?.activeMenu) {
      const targetMenu = getTargetMenuByActiveMenuName(meta.activeMenu);
      state.selectedKeys = [targetMenu?.name ?? meta?.activeMenu] as string[];
    } else {
      state.selectedKeys = [currentRoute.meta?.activeMenu ?? currentRoute.name] as string[];
    }
  },
  {
    immediate: true,
  },
);

// click選單
const clickMenuItem = ({ key }) => {
  if (key === currentRoute.name) return;
  router.push({ name: key });
};
</script>

<style lang="scss" scoped>
.menu-container {
  width: 100%;
  overflow: auto;
  height: calc(100vh - var(--app-header-height));

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &> :deep(.ant-menu) {
    justify-content: center;
    width: 100%;
  }
}
</style>
