// pages/user/user.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inform: [{
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        zuijin: '最近搜索过',
        tag: '椰子',
        zhu: '三亚',
        fu: '24.5万人出游'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        zuijin: '最近搜索过',
        tag: '椰子',
        zhu: '三亚',
        fu: '24.5万人出游'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        zuijin: '最近搜索过',
        tag: '椰子',
        zhu: '三亚',
        fu: '24.5万人出游'
      }
    ],
    user: [{}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      user: getApp().globalData.user
    })
  },

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
  bindgetuserinfo: function(e) {
    var that = this
    // console.log(this.data.user);
    // return false;
    var wx_mini_user_info_json = e.detail.userInfo
    wx_mini_user_info_json['openid'] = getApp().globalData.user.openid;
    var wx_mini_user_info = JSON.stringify(wx_mini_user_info_json);
    console.log(wx_mini_user_info);
    wx.request({
      url: app.data.requestUrl + '/user/wx_fill_user_detail',
      data: {
        token: getApp().globalData.user.token,
        wx_mini_user_info: wx_mini_user_info,
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(data) {
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
                  // console.log(app.globalData.user);
                  that.setData({
                    user: data.data.data
                  })
                  console.log(that.data.user)
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
      },
      error: function(data) {
        console.log(data)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})