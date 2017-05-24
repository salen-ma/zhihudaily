import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/Layout'
import Main from '@/views/backend/Main'
import Detail from '@/views/backend/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
      	{
 			path: '/',
 			name:'Main',
      		component: Main      		
      	},
      	{
      		path: '/detail',
      		name:'Detail',
      		component:Detail
      	}
      ]
    }
  ]
})
