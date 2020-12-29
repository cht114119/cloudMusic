import Cookies from 'js-cookie'

const state = {

  // 用户名
  name: '',
  // 用户id
  userId: ''
}

const mutations = {
  setName: (state, data) => {
    if (data) {
      Cookies.set('userName', encodeURIComponent(data))
    } else {
      Cookies.remove('userName')
    }
    state.name = data
  },
  setUserId: (state, data) => {
    if (data) {
      Cookies.set('userId', encodeURIComponent(data))
    } else {
      Cookies.remove('userId')
    }
    state.userId = data
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
