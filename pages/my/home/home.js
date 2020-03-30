// pages/my/home/home.js
const app = getApp();
Page({
  data: {
    useropenid: null,
    type: null
  },
  open: function (e) {
    wx.navigateTo({
      url: '/pages/self/self', //跳转到个人信息页
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options)
    wx.getStorage({
      key: 'openId',
      success: function (res) {
        console.log(res)
        this.data.useropenid = res.data
        that.setData({
          useropenid: res.data
        })
      },
    })
    wx.getStorage({
      key: 'userinformation',
      success: function (res) {
        console.log(res)
        that.setData({
          user: res.data
        })
      }
    })
    wx.request({
      url: app.globalData.url + '/user/getUser',
      method: 'post',
      data: {
        openId: that.data.useropenid
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'csrf-csrf': 'csrf-csrf'
      },
      success: function (response) {
        console.log(response)
        that.setData({
          type: '0'
        })
      }
    })
  },


})