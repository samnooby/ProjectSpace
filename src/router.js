import Vue from 'vue';
import Router from 'vue-router';

import { AppData } from './Data.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: getRoutes()
});

function getRoutes() {
  return AppData.Links;
}
