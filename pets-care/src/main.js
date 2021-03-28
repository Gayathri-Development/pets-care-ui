import Vue from 'vue'
import './plugins/vuetify'
import router from './router.js';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
