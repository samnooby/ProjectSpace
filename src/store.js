import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { AppData } from './Data.js';

Vue.use(Vuex, axios);
const API = 'https://api-dot-forward-map-233401.appspot.com/api/';

const aboutModule = {
  state: {
    aboutData: AppData.AboutPage
  },
  mutations: {},
  getters: {
    getAbout(state) {
      return state.aboutData;
    }
  }
};

const homeModule = {
  state: {
    homeposts: [],
    homestatus: AppData.LOADING
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.homeposts = posts;
    },
    ADD_POST(state, post) {
      state.homeposts.push(post);
    },
    REMOVE_POST(state, id) {
      var i;
      for (i = 0; i < state.homeposts.length; i++) {
        if (state.homeposts[i].id == id) {
          state.homeposts.splice(i, 1);
          i = state.homeposts.length;
        }
      }
    },
    UPDATE_POST(state, id, post) {
      var i;
      for (i = 0; i < state.homeposts.length; i++) {
        if (state.homeposts[i].id == id) {
          state.homeposts[i] = post;
          i = state.homeposts.length;
        }
      }
    },
    GET_POST_ID(state, post) {
      var currentId = Math.max.apply(
        Math,
        state.homeposts.map(function(o) {
          return o.id;
        })
      );
      post.id = currentId + 1;
    },
    SET_HOME_STATUS(state, status) {
      state.homestatus = status;
    },
    ADD_COMMENT(state, comment, id) {
      var post;
      for (post in state.homeposts) {
        if (post.id == id) {
          post.Comments.append(comment);
        }
      }
    }
  },
  actions: {
    addPost({ commit }, post) {
      commit('GET_POST_ID', post);
      commit('SET_HOME_STATUS', AppData.LOADING);

      axios
        .post(API + 'articles/create', post, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          commit('ADD_POST', response.data.article);
          commit('SET_HOME_STATUS', AppData.SUCCESS);
        })
        .catch(() => {
          commit('SET_HOME_STATUS', AppData.ERROR);
        });
    },
    setPosts({ commit }) {
      commit('SET_HOME_STATUS', AppData.LOADING);
      axios
        .get(API + 'articles')
        .then(response => {
          commit('SET_POSTS', response.data.articles);
          commit('SET_HOME_STATUS', AppData.SUCCESS);
        })
        .catch(() => {
          commit('SET_HOME_STATUS', AppData.ERROR);
        });
    },
    addComment({ commit }, comment, id) {
      commit('SET_HOME_STATUS', AppData.LOADING);

      axios
        .post(API + 'articles/' + id + '/comment', comment, {})
        .then(response => {
          var comments = response.data.comments;
          commit('ADD_COMMENT', comments[comments.length - 1]);
          commit('SET_HOME_STATUS', AppData.SUCCESS);
        })
        .catch(() => {
          commit('SET_HOME_STATUS', AppData.ERROR);
        });
    }
  },
  getters: {
    getPosts(state) {
      return state.homeposts;
    }
  }
};

const projectsModule = {
  state: {
    projects: AppData.Projects
  },
  mutations: {
    ADD_PROJECT(state, project) {
      state.projects.push(project);
    },
    REMOVE_PROJECT(state, id) {
      var i;
      for (i = 0; i < state.projects.length; i++) {
        if (state.projects[i].id == id) {
          state.projects.splice(i, 1);
          i = state.projects.length;
        }
      }
    },
    UPDATE_PROJECT(state, id, project) {
      var i;
      for (i = 0; i < state.projects.length; i++) {
        if (state.projects[i].id == id) {
          state.projects[i] = project;
          i = state.projects.length;
        }
      }
    }
  },
  actions: {
    addProject(context, project) {
      context.commit('ADD_PROJECT', project);
    }
  },
  getters: {
    getProjects(state) {
      return state.projects;
    }
  }
};

const bowlSongModule = {
  state: {
    songs: [],
    bowlsongstatus: false
  },
  mutations: {
    SET_SONGS(state, songs) {
      state.songs = songs;
    },
    SET_BOWL_STATUS(state, status) {
      state.bowlsongstatus = status;
    }
  },
  actions: {
    setSongs(context) {
      context.commit('SET_BOWL_STATUS', AppData.LOADING);

      axios
        .get(API + 'bowlsongs')
        .then(response => {
          context.commit('SET_SONGS', response.data.bowlSongs);
          context.commit('SET_BOWL_STATUS', AppData.SUCCESS);
        })
        .then(() => {
          context.commit('SET_BOWL_STATUS', AppData.ERROR);
        });
    }
  },
  getters: {
    getSongs(state) {
      return state.songs;
    }
  }
};

export default new Vuex.Store({
  modules: {
    home: homeModule,
    projects: projectsModule,
    about: aboutModule,
    bowlsongs: bowlSongModule
  },
  state: {
    links: AppData.Links
  },
  mutations: {},
  actions: {},
  getters: {
    getLinks: state => {
      return state.links;
    }
  }
});
