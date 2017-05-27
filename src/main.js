// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: '/static/loading.gif'
})

Vue.config.productionTip = false

// MintUI.Indicator.open()

import './assets/css/app.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
