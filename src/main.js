import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://oneshot.com.tr/api/v1/'
let app = createApp(App)
app.config.globalProperties.imgUrl = 'https://oneshot.com.tr/uploads/';
app.use(store)
app.use(router)
app.mount('#app')