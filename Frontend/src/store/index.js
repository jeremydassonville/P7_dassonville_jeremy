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
      userId: '',
      token: '',
    },
    userInfos: {
      email: '',
      name: '',
      surname: '',
      isAdmin: '',
    },
  },
  mutations: {
    setStatus: function(state, status){
      state.status = status;
    },
    logUser: function(state,user){
      state.user = user;
    },
    saveUserInfos: function(state, [email, name, surname, isAdmin]) {
      state.userInfos.email = email;
      state.userInfos.name = name;
      state.userInfos.surname = surname;
      state.userInfos.isAdmin = isAdmin;
    },
    createPost: function(state, [content, attachement]) {
      state.contentPost.content = content;
      state.contentPost.attachement = attachement;
    },
  },
  actions: {
    login: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('user/login', userInfos)
        .then(function (response) {
          console.log('store');
          commit('setStatus', '');
          commit('logUser', response.data);
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('userId',response.data.userId)
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_login');
          reject(error);
        });
      });
    },
    createAccount: ({commit}, userInfos) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('user/signup', userInfos)
        .then(function (response) {
          commit('setStatus', 'created');
          resolve(response);
        })
        .catch(function (error) {
          commit('setStatus', 'error_create');
          reject(error);
        });
      });
    },
    getUserInfos: (context) => {
      console.log(context)
      instance.get('user/me',  {
        headers:{
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then(response =>{
        context.commit('saveUserInfos',[response.data.email, response.data.name, response.data.surname, response.data.isAdmin])
      })
      .catch(error =>{
        console.log(error)
      })
    },
  }
})
