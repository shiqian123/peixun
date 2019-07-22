import Vue from 'vue';
import Router from 'vue-router';
import moudle from './views/moudle';
import login from './views/login/moudle';
import layout from './views/layout/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    ...login,
    {
      path:'/home',
      name: 'layout',
      component: layout,
      children:[
        ...moudle,
      ]
    }
  ],
});
