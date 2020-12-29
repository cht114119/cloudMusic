export default {
  LOGIN: '/login/cellphone', //手机号登录  必选参数 : phone: 手机号码  password: 密码
  LOGIN_REFRESH: '/login/refresh',// 说明 : 调用此接口 , 可刷新登录状态
  CAPTCHA_SENT: '/captcha/sent',// 发送验证码 说明 : 调用此接口 ,传入手机号码, 可发送验证码 必选参数 : phone: 手机号码
  CAPTCHA_VERIFY: '/captcha/verify', //验证验证码   说明 : 必选参数 : phone: 手机号码  captcha: 验证码
  SEARCH_DEFAULT: '/search/default', //默认搜索关键词
}
