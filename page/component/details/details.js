// page/component/details/details.js
const auth = require('../../../api/auth.js')

Page({
  data: {
    goods: {
      id: '',
      image: '/image/goods1.png',
      title: '',
      price: '',
      picture: '',
      buy_num:''
    },
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    beforeColor: 'white',
    afterColor: 'coral',
    params: {
      id: ''
    }
  },
  // 付款
  Gohref() {
    // wx.showModal({
    //   title: '提示',
    //   content: '支付功能还未开放，敬请期待',
    //   showCancel: false
    // })
    wx.navigateTo({
      url: '../orders/orders',
    })
  },
  // 进入购物车
  Gohref2() {
    wx.showModal({
      title: '提示',
      content: '加入成功',
      showCancel: false
    })
    // wx.navigateTo({
    //   url: '../shopCar/shopCar',
    // })
  },


  
  onLoad(options) {
    this.getDetails(options.id)
  },
  getDetails(params) {
    auth.ShopDetails(params).then((res) => {
      console.log(res.data.data)
      this.setData({
        goods: res.data.data
      })
    })
  }
})