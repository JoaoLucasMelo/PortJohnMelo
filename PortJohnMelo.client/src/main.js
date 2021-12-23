import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const root = createApp(App)
registerGlobalComponents(root)
root
.use(router)
.use(AOS.init())
.mount('#app')
