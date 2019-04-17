// page/component/orders/orders.js




Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,

    // tab
    currentTab: 0,


    orders: [{
      id: 1,
      title: '笔记本电脑',
      image: '/image/01-1.png',
      num: 1,
      price: 12999
    }, ],
    // 配送状态：
    onLoad: function(options) {
      // 页面初始化 options为页面跳转所带来的参数

    },
    // 配送状态：end



  },

  // 选择配送方式
  //滑动切换
  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // 选择配送方式 end



  onReady() {
    this.getTotalPrice();
  },

  onShow: function() {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
  }
})