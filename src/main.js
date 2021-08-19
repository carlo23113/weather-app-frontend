import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import EnterNameDialog from './components/home/EnterNameDialog'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.component('name-dialog', EnterNameDialog)

Vue.use(VueAxios, axios)
Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
