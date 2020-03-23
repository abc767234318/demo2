// pages/shop/shop.js
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
    var flag;
    if(options.id==0)
    flag="正品"
    if(options.id==1)
    flag="我要定制"
    if(options.id==2)
    flag="新品上市"
    if(options.id==3)
    flag="闲置出租"
    if(options.id==4)
    flag="二手交易"
    if(options.id==5)
    flag="宠物托管"
    that.setData(
      {
        id:flag,
      }
    )
    
    wx.request({
      url: (app.globalData.url + 'commodity/getList'),
      method:'post',
      data: {
        typeId:options.id,
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'csrf-csrf': 'csrf-csrf'
      },
      success: function (res) {
        for (var i = 0; i < 3; ++i) { 
          //处理photo字段下的数据，只保留第一张图片，用于显示商品
          res.data.data[i]["photo"]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+res.data.data[i]["photo"].split(";")[0]
          //处理userPhoto字段下的数据，用于显示商铺图像
          res.data.data[i]["userPhoto"]="http://49.233.216.140:8080/mp-plus-0.0.1-SNAPSHOT/uploads/"+res.data.data[i]["userPhoto"]
          //处理时间参数
          res.data.data[i]["createTime"]=res.data.data[i]["createTime"].split(" ")[0] 
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

  }
})