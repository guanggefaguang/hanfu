// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{ name: '全部', index: 0 }, { name: '已付款', index: 1 }, { name: '待收货', index: 2 }],
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
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },

  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },

  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.orderShow()
  },

  orderShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.alreadyShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.lostShow()
        break
    }
  },
  alreadyShow: function () {
    this.setData({
      alreadyOrder: [
        { name: "电脑", state: "交易成功", time: "2018-09-30 14:00", order: "9832698639", status: "已完成", url: "../../../image/01-1.png", money: "9999" },
        { name: "电脑", state: "交易成功", time: "2018-10-12 18:00", order: "9832698639", status: "待收货", url: "../../../image/05.png", falg:1, money: "8999" }
       ]
    })
  },

  waitPayShow: function () {
    this.setData({
      waitPayOrder: [
        { name: "电脑", state: "待付款", time: "2018-11-14 14:00", order:"9832698639",status: "待收货", url: "../../../image/03.png", money: "11600" }
        ],
    })
  },

  lostShow: function () {
    this.setData({
      lostOrder: [
        { name: "电脑", state: "待收货", time: "2018-10-4 10:00-12:00", order: "9832698639", status: "已发货", url: "../../../image/02.png", falg:1, money: "12000" }
        ],
    })
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
