
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import store from './stores';
import App from './App.vue'
import router from './router'
import "amfe-flexible";

import './styles/reset.css';
import './styles/common.css';
import './styles/show-ui.css';
import 'amfe-flexible';
import vant from 'vant';
const app = createApp(App)
import 'vant/lib/index.css';
app.use(createPinia())
app.use(store);
app.use(router)
app.use(vant);
app.mount('#app')
