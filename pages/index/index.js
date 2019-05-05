//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function() {
    console.log("onshow")
    app.checkLogin()
  },
  onLoad: function () {
    if(app.globalData.userInfo){
      console.log("用户已经登录,跳转验证页面");
      this.setData({
        userInfo:app.globalData.userInfo,
        hasUserInfo:true
      })
      wx.redirectTo({
        url: '../authentication/authentication',
      })
    }else if(this.data.canIUse){
      console.log("允许使用按钮提示用户授权")
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log("回调函数");
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo:app.globalData.userInfo,
          hasUserInfo:true
        })
        wx.redirectTo({
          url: '../authentication/authentication',
        })
      }
    }else{
      console.log("不支持open-type=getUserInfo")
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        fail: res => {
        }
      })

    }
  },
  
  getUserInfo: function(e) {
    console.log(e)
    if(e.detail.userInfo){
      wx.showToast({
        title: '授权成功',
        icon: 'success',
        duration: 1500
      })
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }else{
      this.openSetting();
    }
    
  },
})
