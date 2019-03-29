// page/component/new-pages/user/address/address.js

const auth = require('../../../api/auth.js')

Page({
  data: {
    address: {
      name: '',
      phone: '',
      detail: '',
      params: {
        username: '',
        phone: '',
        province: '',
        city: '',
        area: '',
        address: '',
        openid: ''
      }
    },
    region: [],
  },
  onLoad() {},
  bindRegionChange(e) {
    this.setData({
      "params.province": e.detail.value[0],
      "params.city": e.detail.value[1],
      "params.area": e.detail.value[2]
    })
    this.setData({
      region: e.detail.value
    })
  },
  formSubmit(e) {
    this.setData({
      "params.username": e.detail.value.username,
      "params.phone": e.detail.value.phone,
      "params.address": e.detail.value.address,
      "params.openid": wx.getStorageSync('openId')
    })
    const value = e.detail.value;
    if (value.username && value.phone && value.address) {
      auth.postAddess(this.data.params).then((res) => {
        wx.navigateTo({
          url: '../choice/choice',
        })
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },
  postAddess() {
    postAddess(params).then((res) => {
      console.log(res)
    })
  }
})