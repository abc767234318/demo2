// pages/basics/basics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{      //轮播图图片路径
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: '正品'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '我要定制'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '新品上市'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '闲置出租'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '二手交易'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '宠物托管'
    }],
    gridCol:3,
    motto: 'Hi 开发者！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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