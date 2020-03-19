// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLike: true,
    goodname:'',
    goodprice:'',
    // banner
    
    imgUrls: [
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
      "https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg"
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    // 商品详情介绍
  },

  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;

    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgUrls // 需要预览的图片http链接列表  
    })
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 加入购物车

  // 立即购买
  buy: function(e) {
    wx.navigateTo({ 
      url: '/pages/form/form' //跳转到详情页
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodname:options.goodname,
      goodprice: options.goodprice
    })
    console.log(options)
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