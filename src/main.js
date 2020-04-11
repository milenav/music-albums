import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import moment from 'moment';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.filter('fromNow', value => moment(value).fromNow());

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
