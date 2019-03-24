import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
  AppData
} from './Data.js';

Vue.use(Vuex, axios);
const API = 'https://api-dot-forward-map-233401.appspot.com/api/';
const YoutubeApi = 'https://www.googleapis.com/youtube/v3/videos';
const YoutubeKey = 'AIzaSyDbSnAlAaREna4hUhb3hYAQFM4GAZOJdhE';

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
        state.homeposts.map(function (o) {
          return o.id;
        })
      );
      post.id = currentId + 1;
    },
    SET_HOME_STATUS(state, status) {
      state.homestatus = status;
    },
    GET_HOME_STATUS(state) {
      return state.homestatus;
    },
    ADD_COMMENT(state, article) {
      var post;
      for (post in state.homeposts) {
        if (state.homeposts[post].id == article.id) {
          state.homeposts[post].comments.push(
            article.comments[article.comments.length - 1]
          );
        }
      }
    }
  },
  actions: {
    addPost({
      commit
    }, post) {
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
    async setPosts({
      commit
    }) {
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
    addComment({
      commit
    }, comment) {
      commit('SET_HOME_STATUS', AppData.LOADING);
      var d = new FormData();
      d.append('text', comment.text);
      if (comment.author) {
        d.append('author', comment.author);
      }
      axios
        .post(API + 'articles/' + comment.id + '/comment', comment)
        .then(response => {
          var article = response.data.article;
          commit('ADD_COMMENT', article);
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
    },
    getHomeStatus(state) {
      return state.homestatus;
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
    },
    async ADD_SONG(state, song) {
      state.songs.push(song);
    }
  },
  actions: {
    async setSongs({
      commit
    }) {
      commit('SET_BOWL_STATUS', AppData.LOADING);
      var songsList;

      axios
        .get(API + 'bowlsongs')
        .then(async (response) => {
          songsList = response.data.bowlSongs;
          var listLength = songsList.length;

          for (var i = 0; i < listLength; i++) {
            var currentSong = songsList[i];
            var youtubeId = getId(currentSong.songLink);
            var songTitle;

            await axios
              .get(YoutubeApi, {
                params: {
                  id: youtubeId,
                  key: YoutubeKey,
                  part: 'snippet'
                }
              })
              .then((response) => {

                if (response != null) {
                  songTitle = response.data.items[0].snippet.title;
                  currentSong.title = songTitle;

                  commit('ADD_SONG', currentSong);
                  commit('SET_BOWL_STATUS', AppData.SUCCESS);
                } else {
                  commit('SET_BOWL_STATUS', AppData.ERROR);
                }
              })
              .catch(err => {
                console.log(err.response);
              });

          }
        })
        .catch(() => {
          commit('SET_BOWL_STATUS', AppData.ERROR);
        });
    },
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
  mutations: {
    SET_ERROR_MESSAGE(state, message) {
      state.errorMessage = message;
    }
  },
  actions: {
    resetErrorMessage({
      commit
    }) {
      commit('SET_ERROR_MESSAGE', '');
    }
  },
  getters: {
    getLinks: state => {
      return state.links;
    },
    getErrorMessage: state => {
      return state.errorMessage;
    }
  }
});

function getId(youtubeLink) {
  const regex = /^(https?:\/\/)?(www.)?you.*\/(watch\?v=)?(.*)/;
  const match = regex.exec(youtubeLink);
  return match[4];
}