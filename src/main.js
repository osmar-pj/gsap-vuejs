import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client'

Vue.config.productionTip = false
Vue.prototype.$socket = io('http://localhost:4000')

new Vue({
  render: h => h(App),
}).$mount('#app')
