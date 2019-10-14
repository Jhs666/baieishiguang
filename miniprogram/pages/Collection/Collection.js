// pages/Collection/Collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    inform: [{
        tag: '邮轮游',
        tit: '上海出发',
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        desc: '海洋量子号 六天五晚福冈+长崎海洋量子号 六天五晚福冈+长崎',
        num: '已拼5件',
        qian: '￥5633起'
      },
      {
        tag: '邮轮游',
        tit: '上海出发',
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        desc: '海洋量子号 六天五晚福冈+长崎海洋量子号 六天五晚福冈+长崎',
        num: '已拼5件',
        qian: '￥5633起'
      },
      {
        tag: '邮轮游',
        tit: '上海出发',
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        desc: '海洋量子号 六天五晚福冈+长崎海洋量子号 六天五晚福冈+长崎',
        num: '已拼5件',
        qian: '￥5633起'
      }
    ],
    history: [{
        date: '2018年12月2日',
        tag: '邮轮游',
        tit: '上海出发',
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        desc: '海洋量子号 六天五晚福冈+长崎海洋量子号 六天五晚福冈+长崎',
        num: '已拼5件',
        qian: '￥5633起'
      },
      {
        date: '2018年13月25日',
        tag: '邮轮游',
        tit: '上海出发',
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        desc: '海洋量子号 六天五晚福冈+长崎海洋量子号 六天五晚福冈+长崎',
        num: '已拼5件',
        qian: '￥5633起'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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