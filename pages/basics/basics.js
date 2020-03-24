// pages/basics/basics.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    url2:'../details/details', //商品详情页
    iconList: [{
      id:'0',
      icon: 'shop',
      color: 'blue',
      badge: 0,
      name: '正品'
    }, {
      id:'1',
      icon: 'skin',
      color: 'blue',
      badge: 0,
      name: '我要定制'
    }, {
      id:'2',
      icon: 'goods',
      color: 'blue',
      badge: 0,
      name: '新品上市'
    }, {
      id:'3',
      icon: 'home',
      color: 'blue',
      badge: 0,
      name: '闲置出租'
    }, {
      id:'4',
      icon: 'flashbuyfill',
      color: 'blue',
      badge: 0,
      name: '二手交易'
    }, {
      id:'5',
      icon: 'github',
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
  pic: function(e) { //点击对应商品
    console.log(e)
    wx.navigateTo({ 
      url: '/pages/details/details?id='+e.currentTarget.dataset.id, //跳转到详情页
    });
  },
  show: function(e) { //点击对应商品
    console.log(e)
    wx.navigateTo({ 
      url: '/pages/details/details?id='+e.currentTarget.dataset.id, //跳转到详情页
    });
  },

  show1: function(e) { //点击宫格
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({ 
      url: '/pages/shop/shop?id='+e.currentTarget.dataset.id, //跳转到详情页
    });
  },


  onLoad: function (options) {
    //获取轮播图
    var that = this;
    wx.request({
      url: (app.globalData.url + 'commodity/getAll'),
      method:'post',
      data: {
        start:'3',
        end:'4'
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'csrf-csrf': 'csrf-csrf'
      },
      success: function (res) {
        for (var i = 0; i < res.data.data.length; ++i) { //处理photo字段下的数据，只保留第一张图片，用于显示商品
          res.data.data[i]["photo"]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+res.data.data[i]["photo"].split(";")[0]
          console.log(res.data.data[i]["photo"])
        }
        console.log(res.data.data)
        that.setData(
          {
            imgUrls:res.data.data,
          }
        )
        console.log(res)
      }
    })

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
        for (var i = 0; i < res.data.data.length; ++i) { //处理photo字段下的数据，只保留第一张图片，用于显示商品
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