// pages/basics/basics.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url2:'../details/details', //商品详情页
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
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  show: function(e) {
    console.log(e)
    wx.navigateTo({ 
      url: '/pages/details/details?id='+e.currentTarget.dataset.id, //跳转到详情页
    });
  },

  onLoad: function (options) {
    var that = this;
    console.log("hahahahaha")
    wx.request({
      url: (app.globalData.url + 'commodity/getAll'),
      method:'post',
      data: {
        start:'0',
        end:'3'
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'csrf-csrf': 'csrf-csrf'
      },
      success: function (res) {
        for (var i = 0; i < 3; ++i) { //处理photo字段下的数据，只保留第一张图片，用于显示商品
          res.data.data[i]["photo"]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+res.data.data[i]["photo"].split(";")[0]
          console.log(res.data.data[i]["photo"])
        }
        that.setData(
          {
            goods:res.data.data,
          }
        )
        console.log(res)
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

  },
  cardSwiper: function(){

  }
})