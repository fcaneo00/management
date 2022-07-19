import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueJsonToCsv from 'vue-json-to-csv'
import store from './store'

Vue.config.productionTip = false
Vue.component('vue-json-to-csv', VueJsonToCsv)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')