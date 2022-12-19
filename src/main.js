import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
    .use(router)
    .use(Vuex)
    .use(vuetify)
    .mount('#app')