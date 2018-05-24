import Vue from 'vue'
import App from './App.vue'
import 'chart.js'
import 'hchs-vue-charts'
import { store } from  './store/store'

Vue.use(VueCharts);

new Vue({
  el: '#app', store,
  render: h => h(App)
})
