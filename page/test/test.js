// pages/test/test.js
const auth = require('../../api/auth.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    params: {
      name: '这里'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getdata()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  getdata() {
    auth.getposonal().then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }
})