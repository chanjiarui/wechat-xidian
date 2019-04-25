// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    httpImg: [],
    imgLenght: 0,
    casArray: ['相亲', '招聘', '二手交易', '撕逼'],
    casIndex:0,
    source:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 发布模块的选择事件
   */
  bindCasPickerChange:function(e){
    this.setData({
      casIndex:e.detail.value
    })
  },
  /**
   * 选择图片，前台展示和后台上传
   */
  chooseImage:function(){
    var that = this;
    //重置上传数组
    that.setData({
      httpImg:[]
    })
    //上传图片
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
   * 表单提交事件
   */
  formSubmit:function(e){
      var that = this
      //如果文本文为空提示用户输入 否则提交表单
      if(e.detail.value.content == ''){
        wx.showModal({
          content: '请填写内容后点击发布',
          showCancel:false,
          success:function(res)
          {
            if(res.confirm)
            {

            }
          }
        });
      }else{
        //执行REQUEST写入数据库
        wx.request({
          url: '',
          data:{

          },
          header:{
            'content-type': 'application/x-www-form-urlencoded'
          },
          method:'POST',
          success:function(lb)
          {
            wx.redirectTo({
              url: '',
            });
          },
          fail:function(lb)
          {
            console.log(lb)
          }
        })
      }
  },
  /**
   * 预览图片功能
   */
  previewImage:function(e){
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imageList,
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