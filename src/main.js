import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
// import './assets/css/product.css'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.scss'
import 'bootstrap'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


