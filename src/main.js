import { createApp } from 'vue'
import App from './App.vue'
import AppNavbar from './components/AppNavbar.vue';
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.component('AppNavbar', AppNavbar)
app.use(router).use(createPinia()).mount('#app')
