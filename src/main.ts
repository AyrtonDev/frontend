import { createApp } from 'vue'
import './shared/style/index.css'
import App from './App.vue'
import router from './shared/router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
