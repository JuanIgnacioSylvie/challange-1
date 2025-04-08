import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Importa el archivo de Tailwind CSS
import '@/assets/main.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
