<template>
  <div class="box">
    <img src="@/assets/images/analysis.svg" />
    <Descriptions title="用戶管理" bordered>
      <Descriptions.Item key="IP" label="IP">
        {{ loginIp }}
      </Descriptions.Item>
      <Descriptions.Item label="網路狀態">
        <Badge status="default" text="線上" />
      </Descriptions.Item>
    </Descriptions>
  </div>
</template>

<script lang="ts" setup>
  import { Descriptions, Badge } from 'ant-design-vue';

  defineOptions({
    name: 'DashboardWelcome',
  });


  const loginIp = "10.10.10.10";

</script>

<style lang="scss" scoped>
  .box {
    background: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 280px);
    padding: 12px;

    img {
      flex: 1;
      min-height: 0;
    }

    .ant-form {
      flex: 2;
    }
  }
</style>
