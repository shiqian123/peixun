import Home from './Home.vue';
// import About from './views/About.vue';

export default [
     {
        path: '/',
        name: 'home',
        component: () => import('./index.vue'),
      }
]
