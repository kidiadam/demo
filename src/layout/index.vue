<template>
  <Layout class="layout">
    <Layout.Sider
      v-model:collapsed="collapsed"
      :width="220"
      :trigger="null"
      collapsible
      theme="light"
      class="layout-sider"
    >
      <Logo :collapsed="collapsed" />
      <AsideMenu :collapsed="collapsed" />
    </Layout.Sider>
    <Layout>
      <PageHeader v-model:collapsed="collapsed" theme="light" />
      <Layout.Content class="layout-content">
        <div class="view-content" :style="{ overflow }">
          <router-view v-slot="{ Component }">
            <template v-if="Component">
              <Suspense>
                <Transition
                  name="fade-slide"
                  mode="out-in"
                  appear
                  @before-leave="overflow = 'hidden'"
                  @after-leave="overflow = 'auto'"
                >
                <component :is="Component" :key="route.fullPath" />
                </Transition>
                <template #fallback> 資料讀取中... </template>
              </Suspense>
            </template>
          </router-view>
        </div>
      </Layout.Content>
    </Layout>
  </Layout>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { Layout } from 'ant-design-vue';
  import Logo from '@/components/common/logo.vue';
  import { useRoute, useRouter } from 'vue-router';
  import AsideMenu from '@/components/menu/menu.vue';
  import PageHeader from '@/components/header/index.vue';

  const collapsed = ref<boolean>(false);
  const overflow = ref<string>('auto');
  const route = useRoute();

</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  .ant-layout {
    overflow: hidden;
  }
  .layout-content {
    flex: none;
  }
  .view-content {
    height: calc(100vh - 110px - var(--app-footer-height));
    padding: 20px 14px 0;
    overflow: auto;
  }
}
</style>
