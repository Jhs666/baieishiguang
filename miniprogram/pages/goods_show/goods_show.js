// pages/goods_show/goods_show.js
const app = getApp()
var template = require('../../app.js');
var WxParse = require('../../wxParse/wxParse.js');
var common = require('../../utils/public.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    window: "none",
    showModalStatus: false,
    animationData: '',
    currentTab: 0,
    box: [{
      id: '',
      discount_price: '',
      price: '',
      title: '',
      lable_list: '',
      finish: '12',
      ends: '4',
      num: '10',
      img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
      name: '杨幂',
      cha: '1',
      detial: '',
      intro:'',
    }, ],
    item_list_string: '',
    detial: "",
    imgUrls: [
      '',
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
    selected: true,
    selected1: false,
    selected2: false,
    // 获取海报二维码
    imgPath: '',
    basicprofile: '',
    xcxcode: '',
    scene: '',
    page: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.data.iid = options.id;
    var gid = options.kind;
    wx.request({
      url: app.data.requestUrl + '/item/item_info',
      data: {
        token: getApp().globalData.user.token, //登陆时返回的user表字段中
        item_list_string: options.id
      },
      method: "POST",
      success: function(data) {
        if (data.data.code == 0) {
          getApp().globalData.preview_img = data.data.data[0].preview_img;
          getApp().globalData.title = data.data.data[0].title;
          //getApp().globalData.intro = data.data.data[0].intro;
          getApp().globalData.intro = '测试的简介';
          that.setData({
            box: data.data.data,
            imgUrls: data.data.data[0].banner_list,
            detial: data.data.data[0].detial,
          })
          WxParse.wxParse('article', 'html', that.data.detial, that, 5);
        } else if (data.data.code == -2) {
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
                    getApp().globalData.user = data.data.data;
                    that.setData({
                      user: data.data.data
                    })
                    wx.request({
                      url: app.data.requestUrl + '/item/item_info',
                      data: {
                        token: getApp().globalData.user.token, //登陆时返回的user表字段中
                        item_list_string: options.id
                      },
                      method: "POST",
                      success: function(data) {
                        if (data.data.code == 0) {
                          that.setData({
                            box: data.data.data,
                            imgUrls: data.data.data[0].banner_list,
                            detial: data.data.data[0].detial
                          })
                          WxParse.wxParse('article', 'html', that.data.detial, that, 5);
                        } else if (data.data.code == -1) {
                          wx.showToast({
                            title: "服务器异常"
                          })
                        }
                      },
                      error: function(data) {
                        console.log(data)
                      },
                    })
                  },
                  error: function(data) {
                    console.log(data)
                  }
                })
              } else {
                console.log('刷新用户状态失败！' + res.errMsg)
              }
            }
          })
        } else if (data.data.code == -1) {
          wx.showToast({
            title: "服务器异常"
          })
        }
      },
      error: function(data) {
        console.log(data)
      },
    })
  },
  selected: function(e) {
    this.setData({
      selected1: false,
      selected: true,
      selected2: false,
    })
  },
  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
    })
  },
  selected2: function(e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
    })
  },
  // 请求小程序二维码
  share: function(options) {
    var that = this
    var path1 = getApp().globalData.preview_img
    var path2 = getApp().globalData.qrcode_src
    var title = getApp().globalData.title
    var intro = getApp().globalData.intro
    var user_id = getApp().globalData.user.id
    const ctx = wx.createCanvasContext('myCanvas')
    wx.showLoading({
      title: '海报生成中...',
    })
    wx.request({
      url: app.data.requestUrl + '/tool/wx_mini_qrcode',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: getApp().globalData.user.token,
        scene: user_id,
        page: 'pages/index/index',
        item_id:'',
      },
      success: function(res) {
        getApp().globalData.qrcode_src = res.data.data;
        that.setData({
          window: "block",
          showModalStatus: false,
        })
        wx.getImageInfo({
          src: path1,
          success: function(res) {
            let Path = res.path;
            wx.getImageInfo({
              src: getApp().globalData.qrcode_src,
              success: function(reult) {
                let Paths = reult.path;//  + '?id=' + user_id
                // console.log(Paths)
                common.creat_qrcode(Path, Paths,title,intro);
              }
            })
          },
          fail: function(res) {
            //失败回调
          }
        })
        // common.creat_qrcode(getApp().globalData.preview_img,getApp().globalData.qrcode_src);
        wx.hideLoading();
      }
    })
  },
  close_btn: function(e) {
    this.setData({
      window: "none",
    })
  },
  buy: function(e) {
    var that = this
    wx.login({
      success(res) {
        wx.request({
          url: app.data.requestUrl + '/login/miniprogramlogin ',
          data: {
            js_code: res.code,
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function(data) { //登陆成功
            getApp().globalData.user = data.data.data;
            wx.request({
              url: app.data.requestUrl + '/orderform/create ',
              method: 'POST',
              data: {
                openid: getApp().globalData.user.openid, //登陆时返回的user表字段中
                commodity_id: that.data.iid, //商品id,应该在点击商品的时间中获取商品id
                pay_user_id: getApp().globalData.user.id, //支付用户的id
                target_user_id: getApp().globalData.user.id, //购买用户的id
                commodity_num: 1, //应该从用户购买商品的表单中获取
                integral_use_sum: 0, //用户购买商品所想使用的积分,当前填0就可以
                token: getApp().globalData.user.token, //登陆时返回的user表字段中
              },
              success: function(res) {
                wx.navigateTo({
                  url: '../commit_order/commit_order?commodity_price=' + res.data.data.commodity_price +
                    '&title=' + res.data.data.item_title +
                    '&orderform_id=' + res.data.data.orderform_id,
                })
              }
            })
          },
          error: function(data) {
            console.log(data)
          }
        })
      }
    })
  },
  // 遮罩层
  showModal: function() {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: "ease-in-out",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 0.1)
  },
  hideModal: function() {
    this.setData({
      showModalStatus: false,
    })
  },
  //下载海报
  savetup: function() {
    var that = this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 240,
      height: 360,
      destWidth: 240,
      destHeight: 360,
      canvasId: 'myCanvas',
      success: function(res) {
        //调取小程序当中获取图片
        console.log(res.tempFilePath);
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            wx.showModal({
              title: '保存成功',
              content: '图片成功保存到相册了，去发圈噻~',
              showCancel: false,
              confirmText: '好哒',
              confirmColor: '#72B9C3',
              success: function(res) {
                // if (res1.confirm) {
                console.log('用户点击确定');
                // }
              }
            })
          }
        })
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },
  // 海报end

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})