// page/component/choice/choice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isflag: 0,
    address: [{
        name: '刘某某',
        phone: "1234567890",
        add: '北京市大兴区北臧村 比较大的一条街 不错小区2单元3号楼308'
      },
      {
        name: '刘某',
        phone: "123456789056",
        add: '北京市大兴区北臧村 比较大的一条街 不错小区2单元3号楼3008'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  checkd(e) {

    this.setData({
      isflag: parseInt(e.currentTarget.dataset.line)
    })
    wx.navigateTo({
      url: '../orders/orders'
    })

    let sin = this.data.address[this.data.isflag]
    wx.setStorage({
      key: 'address',
      data: sin
    })
  }





})