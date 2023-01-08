import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router  from './router/router'
import Vuesax from 'vuesax3'
import './vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
createApp(App).use(createPinia()).use(Vuesax).use(router).mount('#app')
