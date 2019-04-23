// pages/message/message.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["关注", "相亲", "招聘", "二手交易"],
    currentNavtab: "0",
    feed:[],
    feed_length:0,
    photoWidth:wx.getSystemInfoSync().windowWidth / 5
  },
  /**
   * 跳转到添加页面
   */
  addPost:function(){
    wx.navigateTo({
      url: '../add/add'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    this.getData();
  },
  /**
   * upper向上滚动事件
   */
  upper:function(){
    wx.showNavigationBarLoading()
    this.refresh()
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },2000)
    console.log("upper")
  },
  /**
   * lower向下滚动刷新事件
   */
  lower:function(e){
    wx.showNavigationBarLoading()
    var that = this;
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      that.nextLoad();
    }, 1000)
    console.log("lower");
  },
  /**
   * nextLoad下拉加载数据
   * 使用本地 fake 数据实现继续加载效果
   */
  nextLoad:function(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    });
    var next = util.getNextDiscovery();
    console.log("loadNext");
    var next_data = next.data;
    console.log(next_data);
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length:this.data.feed_length + next_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },
  /**
   * 使用网络请求的数据进行刷新
   */
  refresh0:function(){
    var index_api=''
    util.getData(index_api).then(function(data){
      //...
    });
  },
  /**
   * 使用本地fake数据实现刷新
   */
  getData:function(){
    var feed = util.getDiscovery();
    console.log(feed.data);
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
  },
  refresh:function(){
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    var feed = util.getDiscovery();
    console.log(feed.data);
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
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
   * 导航栏的切换tab事件函数
   */
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    })
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