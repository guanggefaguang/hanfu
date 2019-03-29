const request = require('./request.js')

const auth = {
  // 获取商品列表
  getShopList(params) {
    return request.ajax("get", "/api/product", params)
  },
  //商品详情
  ShopDetails(params) {
    return request.ajax("get", `/api/product/${params}`)
  },
  //获取1级分类
  getNav(params) {
    return request.ajax("get", '/api/category', params)
  },
  getNavList(params) {
    return request.ajax("get", `/api/category/${params}`)
  },
  postAddess(params) {
    return request.ajax("post", '/api/address', params)
  },
  getAddess(params) {
    return request.ajax("get", '/api/address', params)
  },
  getPicture(params) {
    return request.ajax('get', '/api/picture', params)
  }
}


module.exports = auth