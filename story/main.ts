import { createApp } from 'vue'
import App from './App.vue'
import VuIcon from '@vu-design/components/Icon'
import '@vu-design/theme-chalk/src/index.scss'

// 进行root节点的挂载
const app = createApp(App)
app.use(VuIcon)
app.mount('#app')
