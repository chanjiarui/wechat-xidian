// pages/authentication/authentication.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    schArray: ['西安电子科技大学', '西北大学'],
    schIndex: 0,
    conArray: ['软件学院', '通信工程学院'],
    conIndex: 0,
    degArray: ['本科', '硕士','博士'],
    degIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.is_authentication)

  },
  /**
   * 选择学校的选择事件
   */
  bindSchPickerChange: function (e) {
    this.setData({
      schIndex: e.detail.value
    })
  },
  /**
   * 选择学院的选择事件
   */
  bindConPickerChange: function (e) {
    this.setData({
      conIndex: e.detail.value
    })
  },
  /**
   * 选择学位的选择事件
   */
  bindDegPickerChange: function (e) {
    this.setData({
      degIndex: e.detail.value
    })
  },
  /**
   * 表单提交事件
   */
  formSubmit:function(e){
    console.log("click")
    let skey = wx.getStorageSync('loginFlag')
    console.log(skey)
    wx.request({
      url: 'http://localhost:8080/WechatMessage/authentication',
      data:{
        'skey':skey,
        'school':e.detail.value.school,
        'college':e.detail.value.college,
        'degree':e.detail.value.degree,
        'studentNumber':e.detail.value.studentNumber
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        wx.navigateTo({
          url: '../message/message',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})