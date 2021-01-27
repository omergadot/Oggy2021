import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import en from "./translations/en.json"
import heb from "./translations/heb.json"
import port from "./translations/port.json"
import Fragment from 'vue-fragment';


Vue.use(VueI18n)
Vue.use(Fragment.Plugin);

import '@fortawesome/fontawesome-free/css/all.css'



const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en:en,
    heb:heb,
    port:port
  },
  // For not disturbing me with thease stuped warnings
  silentTranslationWarn: true,
})

new Vue({
  router,
  store,
  i18n,
  iconfont: 'fa',
  render: h => h(App)
}).$mount('#app')