<template>
  <div class="box">
    <img src="@/assets/images/analysis.svg" />
    <Descriptions title="系統提示" bordered>
      <Descriptions.Item v-for="item in dashboardInfo" :key="item.label" :label="item.label">
        <Badge v-if="item.badge" status="default" :text=" item.value" />
        <span v-else>{{ item.value }}</span>
      </Descriptions.Item>
    </Descriptions>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

  import { Descriptions, Badge } from 'ant-design-vue';

  defineOptions({
    name: 'DashboardWelcome',
  });

  const dashboardInfo = reactive([
    { label: "IP", value: "10.10.10.10" },
    { label: "平台", value: "桌面電腦" },
    { label: "系統版本", value: "12.3.3" },
    { label: "作業系統", value: "windows" },
    { label: "剩餘可用時間", value: "未知" },
    { label: "瀏覽器", value: "chrome" },
    { label: "上次登入", value: "2024/01/01 03:00:00" },
    { label: "網路狀態", value: "線上", badge: true },
  ])
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
