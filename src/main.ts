import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import myDirctive from '@/plugins/myDirctive'
import router from './router/index'

const app = createApp(App)
app.use(myDirctive)
app.use(router)

app.mount('#app')
