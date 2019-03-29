const auth = require('../../../api/auth.js')

Page({
  data: {
    category: [],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },
  onReady() {
    this.getList().then((res) => {
      let id = res[0].id
      this.getmore(id)
    })

  },
  switchTab(e) {
    this.getmore(e.currentTarget.dataset.id)
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function() {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function() {
      self.setData({
        isScroll: false
      })
    }, 1)
  },
  getList() {
    return new Promise((resolve, reject) => {
      auth.getNav().then((res) => {
        this.setData({
          category: res.data.data
        })
        resolve(res.data.data)
      })
    })
  },
  getmore(params) {
    auth.getNavList(params).then((res) => {
      this.setData({
        detail: res.data.data
      })
    })
  },
  godetails(e) {
    wx.navigateTo({
      url: `../details/details?id=${e.currentTarget.dataset.id}`
    })
  }
})