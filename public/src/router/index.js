import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import KoaTest from '@/components/Koa-test';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/koa-test',
      name: 'KoaTest',
      component: KoaTest
    }
  ]
})
