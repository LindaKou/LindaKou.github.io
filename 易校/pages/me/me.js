//获取应用实例  
var app = getApp()  
Page({
  data: {
    //text:"这是一个页面"
    userInfo:{}
  },
  onLoad: function (options) {
    var that=this
    //以调用应用实例的方法获取全局数据
    app.getUserInfo( function(userInfo) {
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }

})
