const app = getApp()
var that
Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),

    },
    onLoad: function () {

        that = this;
        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getStorage({
                        key: 'openId',
                        success(res) {
                            console.log(res.data)
                            app.globalData.openId = res.data
                            console.log(app.globalData.openId)
                        }
                    })
                    wx.getUserInfo({
                        success: function (res) {
                            wx.switchTab({
                                url: '/pages/basics/basics',
                            })
                        }
                    });
                }
            }
        })
    },

    bindGetUserInfo: function (e) {
        if (e.detail.userInfo) {
            console.log(e.detail.userInfo)
            wx.setStorage({
                key: 'userinformation',
                data: e.detail.userInfo
            })
            wx.setStorage({
                key: 'province',
                data: e.detail.userInfo.province
            })


            wx.login({

                success(res) {
                    if (res.code) {
                        // 发起网络请求
                        console.log(res)

                        wx.request({
                            url: (app.globalData.apiUrl + '?m=home&c=Api&a=getOpenId&appid=' + app.globalData.appId + '&secret=' + app.globalData.appSecret + '&js_code=' + res.code + '&grant_type=authorization_code').replace(/\s+/g, ""),
                            // 'https://api.weixin.qq.com/sns/jscode2session?appid=' + app.globalData.appId + '&secret=' + app.globalData.appSecret + '&js_code=' + res.code + '&grant_type=authorization_code',
                            header: {
                                'content-type': 'application/json' // 默认值                     
                            },
                            method: "GET",
                            success(res) {
                                console.log(res)
                                console.log(res.data)
                                if (e.detail.userInfo) {

                                    wx.setStorage({
                                        key: 'openId',
                                        data: res.data
                                    })
                                    wx.request({
                                        url: (app.globalData.apiUrl + '?m=home&c=Api&a=Add&userid=' + res.data + '&province=' + e.detail.userInfo.province + '&city=' + e.detail.userInfo.city + '&nickname=' + e.detail.userInfo.nickName).replace(/\s+/g, ""),
                                        method: "GET",
                                        header: {
                                            'content-type': 'application/json'
                                        },
                                        success(res) {

                                            console.log(res.data)
                                            wx.setStorage({
                                                key: 'userid',
                                                data: res.data[0]["ID"]
                                            })
                                        }

                                    })

                                }


                            }

                        })
                    } else {
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
            wx.switchTab({
                url: '../basics/basics',
            })
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title: '警告',
                content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”')
                    }
                }
            })
        }
    },

    // queryUsreInfo: function () {

    //     wx.request({
    //         url: (app.globalData.apiUrl + '?m=home&c=Api&a=Search&userid=' + app.globalData.openId).replace(/\s+/g, ""),
    //         method: "GET",
    //         header: {
    //             'content-type': 'application/json'
    //         },
    //         success: function (res) {
    //             console.log(res.data);
    //             app.globalData.userInfo = res.data;
    //             console.log(app.globalData.userInfo)

    //         }

    //     })
    // },

})