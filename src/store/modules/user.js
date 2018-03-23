import {makePostRequest} from '../../api/request'
import {USER} from '../../api/apiurl'

const state = {
  username: '',
  authorization: ''
}

const actions = {
  onLogin({commit, state}, {username, password, cookies}) {
    console.log('Info', username, password);

    return new Promise((resolve,reject) => {
      makePostRequest(
        USER.login,
        {
          userName: username,
          password: password,
        },
        state.authorization,
        response => {
          commit('updateUserInfo',{username,authorization:response.headers['Authorization'], cookies:cookies});
          resolve(response.data);
        },
        error => {
          reject(error)
        }
      )
    })
  }
}

const mutations = {
  updateUserInfo: (state, payload) => {
    state.username = payload.username;
    state.authorization = payload.authorization;
    payload.cookies.set('username', payload.username);
    payload.cookies.set('authorization', payload.authorization)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
