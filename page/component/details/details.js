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
      buy_num: ''
    },
    shopId: '',
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

  // 进入购物车
  Gohref() {
    let params = {
      openid: wx.getStorageSync('openId'),
      product_id: this.data.shopId,
      num: 1
    }
    auth.addCarShop(params).then((res) => {
      console.log(111)
      wx.showModal({
        title: '提示',
        content: '加入成功',
        showCancel: false
      })
    })

  },

  // 付款
  Gohref2() {
    // wx.showModal({
    //   title: '提示',
    //   content: '支付功能还未开放，敬请期待',
    //   showCancel: false
    // })
    wx.navigateTo({
      url: '../orders/orders',
    })
  },



// 用户点击右上角分享



onShareAppMessage: function(option){
    console.log(option);
    let obj = {
      title: '商品标题',
      path: 'pages/index/index',
      imageUrl: ''
    };
    return util.shareEvent(option, obj);

  },



  onLoad(options) {
    this.setData({
      shopId: options.id
    })
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