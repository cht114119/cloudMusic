import store from '@/store/index'
const httpErrorCode = {
  '4': {
    errMsg: '服务器错误',
  },
  '5': {
    errMsg: '服务器错误',
  }
}
const serverErrorCode = {
  'B00001': {
    errMsg: '服务器错误',
  },
  'A99999': {
    errMsg: '服务器错误',
  },
  'C00006': {
    errMsg: '服务器错误',
  },
  'B00003': {
    cb : function () {
      store.dispatch('sysInfo/logout')
    }
  },
  '400010': {
    cb : function () {
      store.dispatch('sysInfo/logout')
    }
  },
  'E140002': {
  },
  'E140000': {
  }
}
export default {
  httpErrorCode,
  serverErrorCode
}