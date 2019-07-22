import Vue from 'vue';
import Router from 'vue-router';
import moudle from './views/moudle';
import login from './views/login/moudle';

Vue.use(Router);

export default new Router({
  routes: [
    ...moudle,
    ...login
  ],
});
