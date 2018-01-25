// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Main from './components/Main.vue'
import {init} from './assets/js/adaptive'
init();
import Hot from './components/Hot.vue'
import Coming from './components/Coming.vue'
import Top from './components/Top.vue'
import Details from './components/Details.vue'

import './assets/css/index.css'
import 'swiper/dist/css/swiper.css'
import Cover from './components/Cover.vue'
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false

/* eslint-disable no-new */
const router=new VueRouter({
  routes:[
    {path:'/main',component:Main,
    children:[
      {path:'hot',component:Hot},
      {path:'coming',component:Coming},
      {path:'top',component:Top},
      {path:'',redirect:'hot'},
    ]},
    {path:'/details/:item',component:Details,name:'details'},
    {path:'/',component:Cover},
  ]
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
