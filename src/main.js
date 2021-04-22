import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import routes from './routes';


Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes});
new Vue({
    render: h => h(App),
    router,
}).$mount('#app');