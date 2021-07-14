import Vue from 'vue'
import Vuex from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    user: {
      userId: -1,
      token: '',
    },
  },
  mutations: {
    setStatus: function(state, status){
      state.status = status;
    },
    logUser: function(state,user){
      state.user = user;
    }
  },
  actions: {
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      instance.post('user/login', userInfos)
      .then(function (response) {
        commit('setStatus', '');
        console.log(status);
        commit('logUser', response.data)
        console.log(response);
      })
      .catch(function (error) {
        commit('setStatus', 'error_login');
        console.log(error);
      });
    },
    createAccount: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      instance.post('user/signup', userInfos)
      .then(function (response) {
        commit('setStatus', 'created');
        console.log(response);
      })
      .catch(function (error) {
        commit('setStatus', 'error_create');
        console.log(error);
      });
    }
  }
})
