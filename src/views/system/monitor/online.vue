<template>
  <div>
    <div class="title">線上用戶</div>
    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

defineOptions({
  name: 'SystemMonitorOnline',
});

const dataSource = reactive([
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
])


const columns = reactive([
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
])


</script>
