//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '立即体验',
    userInfo: {},
    hasUserInfo: false
  },
  goToIndex: function () {
    wx.switchTab({
      url: '/pages/shiwu/shiwu',
    });
  },
  onLoad: function () {

  },
  onShow: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    var _this = this;
    setTimeout(function () {
      _this.setData({
        remind: ''
      });
    }, 1000);
  
  }
})
  