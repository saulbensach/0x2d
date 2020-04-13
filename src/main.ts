import Vue from 'vue'
import App from './App.vue'
import {
  BootstrapVue,
  IconsPlugin,
  ListGroupPlugin,
  SidebarPlugin,
  LayoutPlugin
} from 'bootstrap-vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(SidebarPlugin)
Vue.use(ListGroupPlugin)
Vue.use(LayoutPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
