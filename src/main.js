import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://54.220.221.143/api/v1/'
createApp(App).use(store).use(router).mount('#app')
