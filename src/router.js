import Vue from 'vue';
import Router from 'vue-router';

import { AppData } from './Data.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: getRoutes()
});

function getRoutes() {
  console.log(AppData.Links);
  return AppData.Links;
}
