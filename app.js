//addpp.js
App({
  globalData: {
    appid: 'wx156a78adcd18d3ad',
    openid: 0,
    code: 0
  },
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code == '') {
          //获取openId
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid: 'wx5c006c821ce5d383',
              secret: '9beb6a6e42a9780d37e4b8ef786466db',
              grant_type: 'authorization_code',
              js_code: res.code
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function(openIdRes) {
              console.info("登录成功返回的openId：" + openIdRes.data.openid);
              wx.setStorageSync('openId', openIdRes.data.openid)
              // 判断openId是否获取成功
            }
          })
        }
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
