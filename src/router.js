import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () =>
        import(/* webpackChunkName: "booking" */ './views/Booking.vue')
    },
    {
      path: '/bowlsongs',
      name: 'bowlsongs',
      component: () =>
        import(/* webpackChunkName: "bowlsongs" */ './views/BowlSongs.vue')
    },
    {
      path: '/currentprojects',
      name: 'currentprojects',
      component: () =>
        import(/* webpackChunkName: "currentprojects" */ './views/CurrentProjects.vue')
    }
  ]
});
