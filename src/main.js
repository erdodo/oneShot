import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://54.220.221.143/api/v1/'
let app = createApp(App)
app.config.globalProperties.imgUrl = 'https://54.220.221.143/uploads/';
app.use(store)
app.use(router)
app.mount('#app')