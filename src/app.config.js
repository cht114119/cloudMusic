export default {
  pages: [
    'pages/index/index',
    'pages/video/index',
    'pages/my/index',
    'pages/cloud/index',
    'pages/account/index',

  ],
  tabBar: {
    list: [{
      'iconPath': 'assets/images/logo.png',
      'selectedIconPath': 'assets/images/logo-red.png',
      pagePath: 'pages/index/index',
      text: '发现'
    },
    {
      'iconPath': 'assets/images/video.png',
      'selectedIconPath': 'assets/images/video-select.png',
      pagePath: 'pages/video/index',
      text: '视频'
    },
    {
      'iconPath': 'assets/images/music.png',
      'selectedIconPath': 'assets/images/music-select.png',
      pagePath: 'pages/my/index',
      text: '我的'
    },
    {
      'iconPath': 'assets/images/cloud.png',
      'selectedIconPath': 'assets/images/cloud-select.png',
      pagePath: 'pages/cloud/index',
      text: '云村'
    },
    {
      'iconPath': 'assets/images/account.png',
      'selectedIconPath': 'assets/images/account-select.png',
      pagePath: 'pages/account/index',
      text: '账号'
    }

    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '首页',
    navigationBarTextStyle: 'black'
  }
}
