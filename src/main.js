import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { setupStore } from '@/store';
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';
import { AButton } from '@/components/common/button/';

// const pinia = createPinia()
const app = createApp(App)
setupStore(app);
// app.use(pinia)
app.use(router).mount('#app')
app.component('AButton', AButton);

