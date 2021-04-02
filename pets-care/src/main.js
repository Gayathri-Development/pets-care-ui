import Vue from 'vue'
import './plugins/vuetify'
//import css files for b-table
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { TablePlugin } from 'bootstrap-vue'
Vue.use(TablePlugin)
// ends the b-table css import.

// Vue alerts
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);
// Vue alerts ends

import router from './router.js';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

//https://medium.com/swlh/vuejs-datatables-the-easy-options-a204600ea53d
// npm install vue bootstrap-vue bootstrap
