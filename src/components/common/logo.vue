<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">Seagate</h2>
  </div>
</template>

<script setup>
  defineProps({
    collapsed: {
      type: Boolean,
    },
  });
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    align-items: center;
    height: 64px;
    padding-left: 12px;
    line-height: 64px;

    img {
      height: 32px;
      margin-right: 8px;
    }
    .title {
      margin-bottom: 0;
      font-size: 20px;
      color: var(--app-primary-color);
    }
  }
</style>
