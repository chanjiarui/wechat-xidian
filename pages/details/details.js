// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      "useravator": "http://img.zcool.cn/community/018be955433d640000019ae96d51f1.jpg@1280w_1l_2o_100sh.png",
      "username": "西电小喇叭",
      "content": "西电小喇叭内容信息西电小喇叭内容信息西电小喇叭内容信息西电小喇叭内容信息西电小喇叭内容信息，西电小喇叭内容信息",
      "photos": [
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg"
      ],
      "time": "2018-07-25 10:19:55",
      "look_people_avators":[
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=3481317470,1879213750&fm=26&gp=0.jpg"
      ],
      "comments":[
        {
          "useravator": "http://img.zcool.cn/community/018be955433d640000019ae96d51f1.jpg@1280w_1l_2o_100sh.png",
          "username": "西电小喇叭",
          "content": "西电小喇叭内容信息西电小喇叭",
          "time": "2018-07-25 10:19:55"
        },
        {
          "useravator": "http://img.zcool.cn/community/018be955433d640000019ae96d51f1.jpg@1280w_1l_2o_100sh.png",
          "username": "西电小喇叭",
          "content": "西电小喇叭内容信息西电小喇叭",
          "time": "2018-07-25 10:19:55"
        },
        {
          "useravator": "http://img.zcool.cn/community/018be955433d640000019ae96d51f1.jpg@1280w_1l_2o_100sh.png",
          "username": "西电小喇叭",
          "content": "西电小喇叭内容信息西电小喇叭",
          "time": "2018-07-25 10:19:55"
        }
      ]
    },
    photoWidth: wx.getSystemInfoSync().windowWidth / 5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //设置scroll的高度
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
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