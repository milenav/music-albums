import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';

Vue.config.productionTip = false

Vue.filter('fromNow', value => moment(value).fromNow());

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
