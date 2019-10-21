import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
  ],
});

let entryUrl: string | undefined ;

let _store = store;
router.beforeEach((to, from, next) => {
  if (!_store.getters.isAuthenticated && to.path !== '/login') {
    entryUrl = to.path;
    next('/login');
  } else {
    next();
  }
});

export default router;
