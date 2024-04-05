import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {clientId: googleClientId})
//todo: env clientId

app.mount('#app')
