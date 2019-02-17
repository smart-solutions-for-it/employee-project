import App from './components/app.component.vue'
import Vuelidate from 'vuelidate'
import Vue from 'vue'

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
