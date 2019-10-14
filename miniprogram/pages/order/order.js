// pages/directory/directory.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    all_order: [{
        item_title: '',
        cteate_time: '',
        update_time: '',
        order_pay_status: '',
        commodity_price: '',
      },
      // {
      //     img: 'http://pin.lanhaihui.net/public/wx_mini/images//wei_h.png',
      //     title1: '西双版纳双飞六日游【跟团游】…',
      //     play_date1: '2018-06-08至2018-06-13',
      //     date1: '2018-06-02',
      //     result1: '未拼成',
      //     money1: '￥5632',
      //     btn1: '查看',
      // },
      // {
      //     img: 'http://pin.lanhaihui.net/public/wx_mini/images//dai_h.png',
      //     title1: '西双版纳双飞六日游【跟团游】…',
      //     play_date1: '2018-06-08至2018-06-13',
      //     date1: '2018-06-02',
      //     result1: '待支付',
      //     money1: '￥5632',
      //     btn1: '继续支付',
      // },
      // {
      //     img: 'http://pin.lanhaihui.net/public/wx_mini/images//delete.png',
      //     title1: '西双版纳双飞六日游【跟团游】…',
      //     play_date1: '2018-06-08至2018-06-13',
      //     date1: '2018-06-02',
      //     result1: '已取消',
      //     money1: '￥5632',
      //     btn1: '删除',
      // },
    ],
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: app.data.requestUrl + '/user/get_orderform',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data: {
        token: getApp().globalData.user.token,
        pay_user_id: getApp().globalData.user.id, //支付用户的id
        target_user_id: getApp().globalData.user.id, //购买用户的id
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          all_order: res.data.data
        })
      }
    })
  },
  selected: function (e) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    })
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})