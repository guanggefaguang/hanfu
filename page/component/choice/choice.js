// page/component/choice/choice.js

const auth = require('../../../api/auth.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: wx.getStorageSync('openId'),
    address: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.openid)
    let params = {
      where: `openid="${this.data.openid}"`
    }
    this.getAddess(params)
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

  },
  getAddess(params) {
    auth.getAddess(params).then((res) => {
      console.log(res.data.data)
      this.setData({
        address: res.data.data
      })
    })
  }
})