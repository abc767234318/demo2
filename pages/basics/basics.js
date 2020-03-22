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

      icon: 'shop',
      color: 'red',
      badge: 120,
      name: '正品'
    }, {
      icon: 'skin',
      color: 'red',
      badge: 1,
      name: '我要定制'
    }, {
      icon: 'goods',
      color: 'red',
      badge: 0,
      name: '新品上市'
    }, {
      icon: 'home',
      color: 'red',
      badge: 22,
      name: '闲置出租'
    }, {
      icon: 'flashbuyfill',
      color: 'red',
      badge: 0,
      name: '二手交易'
    }, {
      icon: 'github',
      color: 'red',
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
  show: function(e) { //点击对应商品
    console.log(e)
    wx.navigateTo({ 
      url: '/pages/details/details?id='+e.currentTarget.dataset.id, //跳转到详情页
    });
  },

  show1: function(e) { //点击宫格
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({ 
      url: '/pages/'+e.currentTarget.dataset.id+'/'+e.currentTarget.dataset.id, //跳转到详情页
      //正品：shop
      //我要定制：skin
      //新品上市：goods
      //闲置出租:home
      //二手交易：flashbuyfill
      //宠物托管：github
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
        var path=new Array() ;
        for (var i = 0; i < 3; ++i) { //处理photo字段下的数据，只保留第一张图片，用于显示商品
          res.data.data[i]["photo"]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+res.data.data[i]["photo"].split(";")[0]
          console.log(res.data.data[i]["photo"])
          path[i]=res.data.data[i]["photo"] //为轮播图设置路径
        }
        that.setData(
          {
            goods:res.data.data,
            imgUrls:path
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