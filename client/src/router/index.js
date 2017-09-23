import Vue from 'vue';
import Router from 'vue-router';
import Data from '@/components/Data';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/data',
      name: 'Data',
      component: Data,
    },
  ],
});
