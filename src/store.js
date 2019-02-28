import Vue from 'vue';
import Vuex from 'vuex';
import { AppData } from './Data.js';

Vue.use(Vuex);

const homeModule = {
  state: {
    homeposts: AppData.HomePosts
  },
  mutations: {
    ADD_POST(state, post) {
      var currentId = Math.max.apply(
        Math,
        state.homeposts.map(function(o) {
          return o.id;
        })
      );
      console.log(currentId);
      post.id = currentId + 1;
      state.homeposts.push(post);
      console.log(state.homeposts);
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
    }
  },
  actions: {
    addPost(context, post) {
      context.commit('ADD_POST', post);
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

export default new Vuex.Store({
  modules: {
    home: homeModule,
    projects: projectsModule
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
