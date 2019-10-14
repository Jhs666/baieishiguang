// pages/directory/directory.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    b1: "none",
    a1: "block",
    taglist: [{
        li: '栈桥'
      },
      {
        li: '五四广场'
      },
      {
        li: '奥帆中心'
      }
    ],
    mes_list: [{
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '青岛站·栈桥',
        tit: '看一片海等一个人'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '奥帆中心',
        tit: '青岛新地标 文化体验地'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '五四广场',
        tit: '青岛之魂'
      }
    ],
    eatlist: [{
        li: '饺子'
      },
      {
        li: '海鲜'
      },
      {
        li: '啤酒'
      }
    ],
    eat_list: [{
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '青岛啤酒',
        tit: '看一片海等一个人'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '青岛啤酒',
        tit: '豪饮岛城醉看红瓦绿树，香飘五洲情系碧海蓝天'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '鲅鱼水饺',
        tit: '饕餮世间味，最是此物鲜'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '鲅鱼水饺',
        tit: '饕餮世间味，最是此物鲜'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '鲅鱼水饺',
        tit: '饕餮世间味，最是此物鲜'
      }
    ],
    buylist: [{
        li: '台东'
      },
      {
        li: '万象天成'
      },
      {
        li: '海鲜市场'
      }
    ],
    buy_list: [{
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '台东夜市·步行街',
        tit: '看一片海等一个人'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '万象天成',
        tit: '豪饮岛城醉看红瓦绿树，香飘五洲情系碧海蓝天'
      },
      {
        img: 'http://pin.lanhaihui.net/public/wx_mini/images//ceshi.jpg',
        title: '海鲜市场',
        tit: '饕餮世间味，最是此物鲜'
      }
    ],
    note: [{
        name: '大脸猫',
        time: '11',
        heart_num: '1',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '2',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '3',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '4',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '5',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://f10.baidu.com/it/u=121654667,1482133440&fm=72',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '6',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img3.imgtn.bdimg.com/it/u=1417732605,3777474040&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      },
      {
        name: '大脸猫爱吃鱼',
        heart_num: '7',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img4.imgtn.bdimg.com/it/u=2748975304,2710656664&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '8',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }, {
        name: '大脸猫爱吃鱼',
        heart_num: '8',
        title: '你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识你所不知道的红酒知识',
        url: 'http://img2.imgtn.bdimg.com/it/u=1561660534,130168102&fm=26&gp=0.jpg',
        avatar: 'http://img4.imgtn.bdimg.com/it/u=349345436,3394162868&fm=26&gp=0.jpg'
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
  },
  selected: function(e) {
    this.setData({
      selected1: false,
      selected: true,
      selected2: false,
      selected3: false,
    })
  },
  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
    })
  },
  selected2: function(e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
    })
  },
  selected3: function(e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
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
  add_btn: function(e) {
    this.setData({
      b1: "block",
      a1: "none"
    })
  },
  close_btn: function(e) {
    this.setData({
      b1: "none",
      a1: "block"
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})