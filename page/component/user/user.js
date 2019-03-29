// page/component/new-pages/user/user.js
Page({
  data: {
    thumb: '',
    nickname: '',
    orders: [{
      thumb: '../../../image/three.jpg',
      number: '7316478136489638',
      name: '正宗原生态花生',
      count: '5',
      deliver: '北京市西城区XXXX',
      status: '已发货'
    }],
    hasAddress: false,
    address: {}
  },
  onLoad() {

  },
  getuserinfo() {
    let self = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res)
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    })
  },
  onShow() {
    var self = this;
    wx.getStorage({
      key: 'address',
      success: function(res) {
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  }

})