const env = require("../utils/env.js")

const request = {
  header() {
    let header = {
      "Content-Type": 'application/json'
    }
    return header
  },
  toastErrr(res) {
    let Error = ""
    switch (res) {
      case 404:
        Error = "请求地址出错"
        break;
    }
    wx.showToast({
      title: Error,
      icon: 'none',
    })
  },
  ajax(method, url, params) {
    var _this = this
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${env.api}${url}`,
        method: method,
        header: this.header(),
        data: params,
        success(res) {
          resolve(res)
          if (res.statusCode !== 200) {
            _this.toastErrr(res.statusCode)
          }
        },
        fail(error) {
          reject(error)
        }
      })
    })
  }
}


module.exports = request