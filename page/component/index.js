const auth = require('../../api/auth.js')
const env = require("../../utils/env.js")

Page({
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    beforeColor: 'white',
    afterColor: 'coral',
    Shop: [],
    api: ''
  },
  onShow: function() {
    this.getShop()
    this.getPicture()
    this.setData({
      api: env.api
    })
  },
  goview: function() {
    wx.navigateTo({
      url: './list/list',
    })
  },
  getShop() {
    auth.getShopList().then((res) => {
      this.setData({
        Shop: res.data.data
      })
    })
  },
  Godetails(e) {
    wx.navigateTo({
      url: `./details/details?id=${e.currentTarget.dataset.id}`
    })
  },
  getPicture() {
    auth.getPicture().then((res) => {
      console.log(res.data.data)
      this.setData({
        imgUrls: res.data.data
      })
    })
  }
})