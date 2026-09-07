import { createApp } from 'vue'
import App from './App.vue'
import reveal from './directives/reveal.js'
import './assets/styles/fonts.css'
import './assets/styles/tokens.css'
import './assets/styles/base.css'

createApp(App).directive('reveal', reveal).mount('#app')
