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
      url: '../message/message'
    })
  },
  onLoad: function () {
    var that = this
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          console.log("用户已经授权")
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              that.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              app.userInfoReadyCallback = res => {
                that.setData({
                  userInfo: res.userInfo,
                  hasUserInfo: true
                })
              }
              //授权成功之后才能登陆
              wx.login({
                success: loginres => {
                  console.log(res);
                  console.log(loginres)
                  wx.request({
                    url: 'http://localhost:8080/WechatMessage/user/login',
                    data:{
                      code:loginres.code,//临时登陆凭证
                      rawData:res.rawData,//用户非敏感信息
                      signature:res.signature,//签名
                      encrypteData:res.encryptedData,//用户敏感信息
                      iv:res.iv//解密算法的向量
                    },
                    method:'POST',
                    header:{
                      'content-type':'application/json'
                    },
                    success: res => {
                      console.log("success")
                    }
                  })
                }
              })
              wx.switchTab({
                url: '../message/message',
              })
            }
          })
  
        }else{
          console.log("用户未授权")
        }
      }
    })   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.onLoad()
  }
})
