import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import{ init } from 'emailjs-com';
init("user_lBxCIiHNixbO5O2u1Dt7g");

const root = createApp(App)
registerGlobalComponents(root)
root
.use(router)
.use(AOS.init())
.mount('#app')
