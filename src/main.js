import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Axios from 'axios';

Axios.defaults.baseURL = 'http://backgcc.homefixspace.ga/api/';
Axios.defaults.headers.common.Accept = 'application/json';

Vue.$http = Axios;

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
