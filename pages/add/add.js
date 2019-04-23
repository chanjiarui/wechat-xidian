// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    httpImg: [],
    imgLenght: 0,
    source:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 选择图片，前台展示和后台上传
   */
  chooseImage:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        that.data.imgLenght = tempFilePaths.lenth;

        /*遍历图片集合上传服务器*/
        for(var i=0;i<tempFilePaths.length;i++){
          that.data.httpImg.push(tempFilePaths[i]);
          
          // wx.uploadFile({
          //   url: '',
          //   filePath: tempFilePaths[a],
          //   name: 'file',
          //   formData: {
          //     flag: 'uploadfile'
          //   },
          //   success: function (res) {
          //     //console.log(res)
          //     //var data = res.data
          //     //that.data.httpImg.push(res.data)
          //   },
          //   fail: function (res) {
          //     console.debug(res)
          //   }
          // })
        }
        that.setData({
          imageList: that.data.httpImg
        })
      },
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