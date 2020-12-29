import get from 'utils/ajax'
import SEARCH_DEFAULT from 'api/index'

const state = {
  isFocus: true,
  searchVal: '',
  placeholderVar: ''
}

const mutations = {
  setIsFocus: (state, boolean) => {
    state.isFocus = boolean
  },
  setSearchVal: (state, value) => {
    state.searchVal = value
  },
  setPlaceholderVar: (state, value) => {
    state.placeholderVar = value
  },
}
const actions = {
  getPlaceholderVar({ state, commit }, params) {
    return get(SEARCH_DEFAULT)
      .then(data => {
        commit('setPlaceholderVar', data.information)
      })
      .catch(() => { })

  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
