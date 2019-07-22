import Home from './Home.vue';
// import About from './views/About.vue';

export default [
     {
        path: '/login',
        name: 'home',
        component: () => import('./index.vue'),
      }
]
