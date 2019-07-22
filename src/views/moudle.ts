import Home from './Home.vue';
// import About from './views/About.vue';

export default [
     {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('./About.vue'),
      },
]