<template>
  <Layout.Header class="layout-header" style="background-color: rgba(255, 255, 255, 0.85)">
    <div class="header-left">
      <slot name="left">
        <Space :size="20">
          <span class="menu-fold" @click="() => emit('update:collapsed', !collapsed)">
            <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
          </span>
          <Breadcrumb />
        </Space>
      </slot>
    </div>
    <div class="header-menu">
      <slot name="menu"> </slot>
    </div>
    <div class="header-right">
      <Space :size="20">
        <Dropdown placement="bottomRight">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="系統管理員">管理員</Avatar>
          <template #overlay>
            <Menu>
              <Menu.Item @click="$router.push({ name: 'account-settings' })">帳號管理</Menu.Item>
              <Menu.Divider />
              <Menu.Item>
                <div @click.prevent="doLogout">
                  <poweroff-outlined /> 登出
                </div>
              </Menu.Item>
            </Menu>
          </template>
        </Dropdown>
      </Space>
    </div>
  </Layout.Header>
</template>

<script lang="tsx" setup>
  import { PropType } from 'vue';
  import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PoweroffOutlined,
  } from '@ant-design/icons-vue';
  import {
    Layout,
    message,
    Modal,
    Dropdown,
    Menu,
    Space,
    Avatar,
    type MenuTheme,
  } from 'ant-design-vue';
  import Breadcrumb from '@/components/header/breadcrumb.vue';

  defineProps({
    collapsed: {
      type: Boolean,
    },
    theme: {
      type: String as PropType<MenuTheme>,
    },
  });
  const emit = defineEmits(['update:collapsed']);

  // const router = useRouter();
  // const route = useRoute();

  // 登出
  const doLogout = () => {
    Modal.confirm({
      title: '是否確定要登出?',
      centered: true,
      onOk: async () => {
        // await userStore.logout();
        localStorage.clear();
        message.success('已成功登出');
        // router.replace({
        //   query: {
        //     redirect: route.fullPath,
        //   },
        // });
      },
    });
  };
</script>

<style lang="scss" scoped>
  .layout-header {
    display: flex;
    position: sticky;
    z-index: 10;
    top: 0;
    align-items: center;
    justify-content: space-between;
    height: var(--app-header-height);
    padding: 0 20px;

    .header-right {
      min-width: 80px;
      cursor: pointer;
    }

    .header-menu {
      flex: 1;
      align-items: center;
      min-width: 0;
    }
  }
</style>
