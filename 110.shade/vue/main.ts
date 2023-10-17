import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import './styles/main.css'

const app = createApp(App)

var win:any = window
app.provide('TIME', win.TIME)
app.provide('SPACE', win.SPACE)
app.provide('SYMBOL', win.SYMBOL)
app.provide('SHADE', win.SHADE)
app.provide('MQTT', win.MQTT)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)
app.mount('#app')
