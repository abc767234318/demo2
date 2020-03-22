// pages/details/details.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    current: 'tab1',
    isLike: true,
    // banner
    
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
  },
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
  },

  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 加入购物车

  // 立即购买
  immeBuy: function(e) {
    wx.navigateTo({ 
      url: '/pages/form/form' //跳转到购买页
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //发起商品详情页请求
    wx.request({
      url: (app.globalData.url + 'commodity/getDetail'),
      method:'post',
      data: {
        comId:options.id,
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'csrf-csrf': 'csrf-csrf'
      },
      success: function (res) {
        //处理图片路径
        var path1 = res.data.data[0]['photo'].split(";")
        for(var i=0;i< path1.length;++i){
          path1[i]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+path1[i]
        }
        var path2 = res.data.data[0]['detail'].split(";")
        for(var i=0;i< path2.length;++i){
          path2[i]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+path2[i]
        }
        that.setData({
          comName:res.data.data[0]['comName'],
          price:res.data.data[0]['price'],
          userName:res.data.data[0]['userName'],
          imgUrls:path1, //轮播图的地址
          detail:path2  //详情图
        })
        console.log(res.data.data[0]['photo'].split(";"))
      }
    })
    
    console.log(id)
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