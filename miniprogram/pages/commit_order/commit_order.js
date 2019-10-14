// pages/commit_order/commit_order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    animationData: '',
    item_title: '',
    price: '',
    orderform_id: '',
    trip_name: '',
    realname: '',
    phone: '',
    email: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    this.data.iid = options.id
    that.setData({
      price: options.commodity_price,
      item_title: options.title,
      orderform_id: options.orderform_id
    })
    var commodity_price = that.data.price
    var item_title = that.data.item_title
    // return true
  },
  // 输入出行人、联系人、手机号、邮箱
  trip_nameInput: function(e) {
    var that = this
    that.setData({
      trip_name: e.detail.value
    })
    console.log(that.data.trip_name);
  },
  realnameInput: function(e) {
    var that = this
    that.setData({
      realname: e.detail.value
    })
    console.log(that.data.realname);
  },
  phoneInput: function(e) {
    var that = this
    that.setData({
      phone: e.detail.value
    })
    console.log(that.data.phone);
  },
  emailInput: function(e) {
    var that = this
    that.setData({
      email: e.detail.value
    })
    console.log(that.data.email);
  },
  formSubmit: function(options) {
    var that = this
    var commodity_price = that.data.price
    console.log(commodity_price)
    var item_title = that.data.item_title
    console.log(item_title)
    // 检验出行人、联系人、手机号、邮箱
    var trip_name = that.data.trip_name
    var realname = that.data.realname
    var phone = that.data.phone
    var email = that.data.email
    var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
    var str = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    var msg = ''
    if (email == '') {
      msg = '请输入邮箱'
    } else if (!str.test(email)) {
      msg = '邮箱格式不正确'
    }
    if (phone == '') {
      msg = '请输入手机号'
    } else if (!phonetel.test(phone)) {
      msg = '手机号格式不正确'
    }
    if (realname == '') {
      msg = '请输入联系人姓名'
    }
    if (trip_name == '') {
      msg = '请填写出行人'
    }
    if (msg) {
      wx.showToast({
        title: msg,
        icon: 'none'
      })
      return
    }

    wx.request({
      //这个链接是后端写的
      url: app.data.requestUrl + '/orderform/place_on',
      data: {
        orderform_id: that.data.orderform_id,
        //创建订单接口返回的订单号
        order_pay_type: 'wx',
        //下单支付时方式选择的支付方式,此处填写wx,代表微信支付的意思
        token: getApp().globalData.user.token,
        trip_name: trip_name,
        realname: realname,
        phone: phone,
        email: email,

      },
      method: 'POST',
      success: function(res) {
        var this_res = res.data.data;
        // console.log(this_res);
        // return true;
        console.log(this_res.package)
        // 发起支付
        wx.requestPayment({
          'appId': this_res.appId,
          'timeStamp': this_res.timeStamp,
          'nonceStr': this_res.nonceStr,
          'package': this_res.package,
          'signType': this_res.signType,
          'paySign': this_res.paySign,
          'success': function(res) {
            wx.showToast({
              title: '支付成功'
            });
            console.log(res);
            setTimeout(function() {
              wx.navigateTo({
                url: '../pay_success/pay_success?commodity_price=' + commodity_price + '&item_title=' + item_title,
              })
            }, 2000)
          },
          'fail': function(res) {
            console.log(res)
          }
        });
      },
      error: function(data) {
        console.log(data)
      }
    })
  },
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