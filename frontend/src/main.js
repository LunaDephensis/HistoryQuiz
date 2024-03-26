import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {clientId: "785933032147-qnthgqpg1hat7e4hior5hhuoilo2gj4i.apps.googleusercontent.com"})
//todo: env clientId

app.mount('#app')
