import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Movies.vue'),
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('./views/Movies.vue'),
    },
    {
      path: '/movies/:id',
      name: 'movieDetails',
      component: () => import('./views/MovieDetails.vue'),
    },
  ],
});
