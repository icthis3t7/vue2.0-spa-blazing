import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Testc from '@/components/Testc';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/testc',
    name: 'testc',
    component: Testc

  }

];

export default new Router({
  routes: routes,
  mode: 'history'

});
