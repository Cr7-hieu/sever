import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import store  from '../src/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// import './assets/main.css'
// import './assets/css/product.css'
// import 'bootstrap/dist/css/bootstrap.css'
import './assets/app.scss'
import 'bootstrap'
const app = createApp(App)

app.use(createPinia())
app.use(router)
library.add(fas)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.use(VueAwesomeSwiper)
app.mount('#app')

s
