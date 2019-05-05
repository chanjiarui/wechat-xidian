//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          console.log("用户请先授权")
        }
      }
    })
    //小程序启动的时候验证是否登录过
    //this.checkLogin()
  },
  //验证登录状态
  checkLogin:function(){
    let that = this;
    let openid = wx.getStorageSync("openid")
    if(openid){
      //检查session_key是否过期
        wx.checkSession({
          success: res => {
            //session_key有效
            // 直接从Storage中获取用户信息
            let userStorageInfo = wx.getStorageSync('userInfo');
            if (userStorageInfo) {
              that.globalData.userInfo = JSON.parse(userStorageInfo);
            } else {
              that.showInfo('缓存信息缺失');
              console.error('登录成功后将用户信息存在Storage的userStorageInfo字段中，该字段丢失');
            }
          },
          fail: res => {
            //session_key过期了，重新登录
            console.log("重新登录")
            that.doLogin();
          }
        })
    }else{
      //无key，作为首次登录
      console.log("用户第一次登录")
      that.doLogin();
    }
  },
  doLogin: function (callback = () => { }) {
    let that = this
    if (that.globalData.is_authentication) {
      console.log("用户已经授权")
      wx.login({
        success: function (loginRes) {
          if (loginRes.code) {
            console.log(loginRes.code)
            //获取用户信息

            wx.getUserInfo({
              success: function (infoRes) {
                console.log(infoRes, ">>>");
                //请求服务器的登录接口
                wx.request({

                  url: 'http://localhost:8080/WechatMessage/login',
                  data: {
                    code: loginRes.code,//临时登陆凭证
                    rawData: infoRes.rawData,//用户非敏感信息
                    signature: infoRes.signature,//签名
                    encrypteData: infoRes.encryptedData,//用户敏感信息
                    iv: infoRes.iv//解密算法的向量
                  },
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: res => {
                    console.log("login success")
                    res = res.data;
                    console.log(res)
                    if (res.result == 0) {
                      wx.setStorageSync('userInfo', JSON.stringify(res.userInfo));
                      wx.setStorageSync("openid", res.openid);
                      console.log("skey=" + res.openid);
                      callback();
                    } else {
                      that.showInfo(res.errmsg);
                    }
                  },
                  fail: error => {
                    // 调用服务端登录接口失败
                    that.showInfo('调用接口失败');
                    console.log(error);
                  }
                })
              },
              fail: function (error) {
                // 获取 userInfo 失败，去检查是否未开启权限
                wx.hideLoading();
                that.checkUserInfoPermission();
              }
            })
          } else {
            // 获取 code 失败
            that.showInfo('登录失败');
            console.log('调用wx.login获取code失败');
          }
        }
      })
    } else {
      console.log("用户还没有授权")
    }
  },
  // 获取用户登录标示 供全局调用
  getLoginFlag: function () {
    return wx.getStorageSync('loginFlag');
  },
  // 封装 wx.showToast 方法
  showInfo: function (info = 'error', icon = 'none') {
    wx.showToast({
      title: info,
      icon: icon,
      duration: 1500,
      mask: true
    });
  },
  globalData: {
    userInfo: null,
    is_authentication:false,
  }
})