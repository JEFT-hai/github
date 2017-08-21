// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'

import Start from './view/start';
import Index from './view/index';
import Github from './view/indexChildren/github';
import Demo from './view/indexChildren/demo';
import Note from './view/indexChildren/note';
import Myself from './view/indexChildren/self';

import './common/css/style.css';
import './common/css/reset.css';

Vue.use(vueRouter);

let router = new vueRouter({
	mode: 'history',
	routes:[
	    {path: '/',component: Start},
	    {path: '/index',component: Index,redirect:'/index/github',
	    children:[
	        {path: 'github',component: Github},
	        {path: 'note',component: Note},
	        {path: 'self',component: Myself}
	    ]}
	    
	]
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
