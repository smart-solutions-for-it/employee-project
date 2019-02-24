import App from './components/app.component.vue'
import Vuelidate from 'vuelidate'
import Vue from 'vue'
import {router} from "./routing.module";

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
