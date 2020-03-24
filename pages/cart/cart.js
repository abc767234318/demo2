// pages/cart/cart.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  show: function(e) { //点击对应商品
    console.log(e)
    wx.navigateTo({ 
      url: '/pages/details/details?id='+e.currentTarget.dataset.id, //跳转到详情页
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取购物车商品id串
    
    wx.request({
      url: (app.globalData.url + 'user-detail/getCart'),
      method:'post',
      data: {
        userId:'1'
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'csrf-csrf': 'csrf-csrf'
      },
      success: function (res) {
        var ids='('+res.data.data[0]['comId']+')'
        console.log(ids)

        wx.request({
          url: (app.globalData.url + 'commodity/byIds'),
          method:'post',
          data: {
            comIds:ids
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
          }
        })


      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   *
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