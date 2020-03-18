// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧', '其他'],
    externalView: 0,
    detailPage: 0,
    imgList1: [],
    imgList2: [],
    index1: null,
    index2: null
  },
  ChooseImage1() {
    wx.chooseImage({
      count: 6, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList1.length != 0) {
          this.setData({
            imgList1: this.data.imgList1.concat(res.tempFilePaths),
          })
          this.externalView++;
        } else {
          this.setData({
            imgList1: res.tempFilePaths,
          })
          this.externalView++;
        }
      }
    });
  },
  ChooseImage2() {
    wx.chooseImage({
      count: 6, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList2.length != 0) {
          this.setData({
            imgList2: this.data.imgList2.concat(res.tempFilePaths),
          })
          this.detailPage++;
        } else {
          this.setData({
            imgList2: res.tempFilePaths,
          })
          this.detailPage++;
        }
      }
    });
  },
  UpLoad() {
    for (i = 0; i < externalView; i++) {
      wx.uploadFile({
        url: 'https://localhost:8080/upload', //仅为示例，非真实的接口地址
        filePath: imgList1,
        name: userId + createCode(),
        success(res) {
          const data = res.data
          //do something
        }
      })
    }
    for(i = 0;i < detailPage;i++){
      wx.uploadFile({
        url: 'https://localhost:8080/upload', //仅为示例，非真实的接口地址
        filePath: imgList2,
        name: userId + createCode(),
        success(res) {
          const data = res.data
          //do something
        }
      })
    }
    //这里缺少上传数据的东西
  },
  ViewImage1(e) {
    wx.previewImage({
      urls: this.data.imgList1,
      current: e.currentTarget.dataset.url
    });
  },
  ViewImage2(e) {
    wx.previewImage({
      urls: this.data.imgList2,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg1(e) {
    wx.showModal({
      title: '亲爱的商家',
      content: '确定要删除这个图片吗',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList1.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList1: this.data.imgList1
          })
        }
      }
    })
  },
  DelImg2(e) {
    wx.showModal({
      title: '亲爱的商家',
      content: '确定要删除这个图片吗',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList2.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList2: this.data.imgList2
          })
        }
      }
    })
  },
  createCode() {
    let codeInput = document.getElementsByClassName("code")[0];
    let codeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let length = 4;
    code = "";
    for (let i = 0; i < length; i++) {
      let randomI = Math.floor(Math.random() * 62);
      code += codeArr[randomI];
    }
    console.log(code);
    return code;
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