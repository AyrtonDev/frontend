
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/login.vue';
import Profiles from '@/pages/profiles.vue';
import Menu from '@/pages/menu.vue';
import Movie from '@/pages/movie.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/perfis',
      component: Profiles,
    },
    {
      path: '/menu',
      component: Menu,
    },
    {
      path: '/filme/:id',
      component: Movie,
    }
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (!token && to.path !== '/') {
    next('/');
  } else if (token && to.path === '/') {
    next('/perfis');
  } else {
    next()
  }
});

export default router;