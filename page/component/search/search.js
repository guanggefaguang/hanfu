var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    autoFocus: true,
    keyWord: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
  },
  //input框失焦
  blursearch: function (event) {
    that.setData({
      autoFocus: false,
    });
  },
  //input框聚焦
  inputfocus: function (e) {

  },
  //联想
  inputsearch: function (event) {
    // 如果输入框有内容，展示联想
    if (event.detail.value) {
      that.setData({
        keyWord: event.detail.value,
        autoFocus: true
      });
    } else {

    }
  },
  // 搜索按钮
  searchBtn: function () {
    if (that.data.keyWord) {
      wx.showToast({
        title: '等待商品上架',
        icon: 'none',
        duration: 1500
      })
    } else {
      wx.showToast({
        title: '请输入商品名称',
        icon: 'none',
        duration: 1500
      })
    }
  },
  //键盘搜索
  goSearch: function (event) {
    if (that.data.keyWord) {

    } else {
      wx.showToast({
        title: '请输入商品名称',
        icon: 'none',
        duration: 1500
      })
    }
  },
  //清空输入框
  cancelword: function () {
    that.setData({
      keyWord: ''
    });
  },
})