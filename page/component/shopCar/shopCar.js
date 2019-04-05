// page/component/shopCar/shopCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    look: [],
    items: [{
        name: 'USA',
        value: '美国',
        num: 1,
        checked: false,
        price: 10
      },
      {
        name: 'CHN',
        value: '中国',
        checked: false,
        num: 1,
        price: 20
      },
      {
        name: 'BRA',
        value: '巴西',
        checked: false,
        num: 1,
        price: 30
      },
      {
        name: 'JPN',
        value: '日本',
        checked: false,
        num: 1,
        price: 40
      },
      {
        name: 'ENG',
        value: '英国',
        checked: false,
        num: 1,
        price: 10
      }
    ],
    totalPrice: 0,
    Allchecked: false,

  },
  checkboxChange(e) {
    let mink = 0
    var index = e.currentTarget.dataset.id
    var min = this.data.items[index].checked
    let cars = this.data.items
    cars[index].checked = !cars[index].checked
    this.setData({
      items: cars
    })

    for (let i = 0; i < cars.length; i++) {
      if (cars[i].checked == true) {
        mink++
      }
    }
    if (this.data.items.length !== mink) {
      this.setData({
        Allchecked: false
      })
    } else {
      this.setData({
        Allchecked: true
      })
    }


    this.getTotalPrice()
  },
  getTotalPrice() {
    let carts = this.data.items;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].checked) {
        total += carts[i].num * carts[i].price;
      }
    }
    this.setData({
      totalPrice: total.toFixed(2)
    });
  },
  allChange(e) {
    let Allchecked = this.data.Allchecked
    Allchecked = !Allchecked
    let cars = this.data.items
    for (let i = 0; i < cars.length; i++) {
      cars[i].checked = Allchecked
    }
    this.setData({
      Allchecked: Allchecked,
      items: cars
    })
    this.getTotalPrice()
  },
  ReduceNum(e) {
    var index = e.currentTarget.dataset.id
    var min = this.data.items[index].num
    let cars = this.data.items
    if (min <= 1) {
      min = this.data.items[index].num
      return
    }
    min--
    cars[index].num = min
    this.setData({
      items: cars
    })
    this.getTotalPrice()
  },
  AddNum(e) {
    var index = e.currentTarget.dataset.id
    var min = this.data.items[index].num
    let cars = this.data.items
    min++
    cars[index].num = min
    this.setData({
      items: cars
    })
    this.getTotalPrice()
  },
  getVal(e) {
    console.log(e)
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

  }
})