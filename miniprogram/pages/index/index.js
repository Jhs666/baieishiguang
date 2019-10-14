//index.js
var common = require('../../utils/public.js')
const app = getApp()
Page({
  // 转发
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      path: '/pages/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  data: {
    //1. 轮播图片数据
    imgUrls: [
      './swiper1.jpg',
      './swiper2.jpg'
    ],
    //2. 轮播配置
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 600,
    indicatorColor: 'rgba(255,255,255,0.4)',
    indicatorActiveColor: '#fff',
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    type: [{
      img_show: '',
      name: ''
    }, ],
    inform: [{
        tit: '1.故宫',
        img: app.data.url + '/wx_mini/images//hot.svg'
      },
      {
        tit: '2.八达岭长城',
        img: app.data.url + '/wx_mini/images//hot.svg'
      },
      {
        tit: '3天安门广场',
        img: app.data.url + '/wx_mini/images/hot.svg'
      },
      {
        tit: '4.东直门',
        img: app.data.url + '/wx_mini/images/hot.svg'
      },
      {
        tit: '5.四合院',
        img: app.data.url + '/wx_mini/images/hot.svg'
      },
      {
        tit: '6.军事博物馆',
        img: app.data.url + '/wx_mini/images/hot.svg'
      }
    ],
    left_list: [{
      price: '',
      page_id: '',
      id: '',
      preview_img: '',
      title: '',
    }],
    test: app.globalData.requestUrl,
  },
  onLoad: function() {
    // 调用下拉刷新
    this.initialize();
  },
  // 下拉刷新函数
  initialize: function() {
    app.onLoad();
    var that = this
    wx.request({
      url: app.data.requestUrl + '/item/item_type',
      data: {
        token: getApp().globalData.user.token, //登陆时返回的user表字段中
      },
      method: 'POST',
      success: function(data) {
        if (data.data.msg == "登陆过期") {
          wx.login({
            success(res) {
              if (res.code) {
                // 发起网络请求
                wx.request({
                  url: app.data.requestUrl + '/login/miniprogramlogin',
                  data: {
                    js_code: res.code,
                  },
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function(data) {
                    // 重新定义全局token
                    app.globalData.user = data.data.data;
                    var user_token = data.data.data.token;
                    wx.request({
                      url: app.data.requestUrl + '/item/item_type',
                      data: {
                        token: user_token, //登陆时返回的user表字段中
                      },
                      method: 'POST',
                      success: function(data) {
                        // console.log(data);
                        that.setData({
                          type: data.data.data
                        })
                      }
                    })
                  },
                  error: function(data) {
                    console.log(data)
                  }
                })
              } else {
                console.log('获取用户登录态失败！' + res.errMsg)
              }
            }
          })
        }
      },
      error: function(data) {
        console.log(data)
      }
    })
    wx.request({
      url: app.data.requestUrl + '/item/item_list',
      data: {
        token: getApp().globalData.user.token, //登陆时返回的user表字段中
        page_id: 1
      },
      method: 'POST',
      success: function(data) {
        if (data.data.msg == "登陆过期") {
          wx.login({
            success(res) {
              if (res.code) {
                // 发起网络请求
                wx.request({
                  url: app.data.requestUrl + '/login/miniprogramlogin',
                  data: {
                    js_code: res.code,
                  },
                  method: 'POST',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function(data) {
                    // 重新定义全局token
                    app.globalData.user = data.data.data;
                    var user_token = data.data.data.token;
                    wx.request({
                      url: app.data.requestUrl + '/item/item_list',
                      data: {
                        token: getApp().globalData.user.token, //登陆时返回的user表字段中
                        page_id: 1
                      },
                      method: 'POST',
                      success: function(data) {
                        that.setData({
                          left_list: data.data.data
                        })
                      }
                    })
                  },
                  error: function(data) {
                    console.log(data)
                  }
                })
              } else {
                console.log('获取用户登录态失败！' + res.errMsg)
              }
            }
          })
        } else {
          that.setData({
            left_list: data.data.data
          })
        }
      },
      error: function(data) {
        console.log(data)
      }
    })
  },

  // 获取滚动条位置
  onPageScroll: function(e) {
    var that = this;
    common.onPageScroll(e, that)
  },
  //回到顶部
  goTop: function(e) {
    common.goTop()
  },
  // 下拉刷新
  onPullDownRefresh: function() {
    this.initialize();
  }
})