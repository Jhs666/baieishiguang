// pages/add_passenger/add_passenger.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: ['请选择','居民身份证', '护照'],
        objectArray: [
            {
                id: 0,
                name: '请选择'
            },
            {
                id: 1,
                name: '居民身份证'
            },
            {
                id: 2,
                name: '护照'
            }
        ],
        index: 0,
        country: ['请选择', '中国', '美国'],
        objectcountryArray: [
            {
                id: 0,
                name: '请选择'
            },
            {
                id: 1,
                name: '中国'
            },
            {
                id: 2,
                name: '美国'
            }
        ],
        countryindex: 0,
        sex: ['请选择', '男', '女'],
        objectsexArray: [
            {
                id: 0,
                name: '请选择'
            },
            {
                id: 1,
                name: '男'
            },
            {
                id: 2,
                name: '女'
            }
        ],
        sexindex: 0,
        kehu: ['请选择', '男客户', '女客户'],
        objectkehuArray: [
            {
                id: 0,
                name: '请选择'
            },
            {
                id: 1,
                name: '男客户'
            },
            {
                id: 2,
                name: '女客户'
            }
        ],
        kehuindex: 0,
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            countryindex: e.detail.value
        })
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            sexindex: e.detail.value
        })
    },
    bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            kehuindex: e.detail.value
        })
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