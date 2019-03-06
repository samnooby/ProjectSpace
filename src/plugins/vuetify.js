import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#202029',
    secondary: '#2b2a38',
    third: '#1d1c2a',
    background: '#84838c',
    text: '#9d9da0',
    accent: '#617287',
    error: '#b71c1c',
    info: '#8787a5',
    body: '#9faec6',
    headerbutton: '#ffffff',
    comment: '#44484f'
  }
});
