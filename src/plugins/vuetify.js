import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#202029',
    secondary: '#2b2a38',
    accent: '#617287',
    error: '#b71c1c',
    info: '#8787a5'
  }
});
