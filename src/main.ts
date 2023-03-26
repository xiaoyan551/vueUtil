import { createApp, DirectiveBinding } from 'vue'
import './style.css'
import App from './App.vue'
import myDirctive from "@/plugins/myDirctive"

const app = createApp(App)
app.use(myDirctive)



app.mount('#app')