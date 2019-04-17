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
  //获取二级商品
  getNavList(params) {
    return request.ajax("get", `/api/category/${params}`)
  },
  //添加收货地址
  postAddess(params) {
    return request.ajax("post", '/api/address', params)
  },
  //获取收获地址
  getAddess(params) {
    return request.ajax("get", '/api/address', params)
  },
  //获取轮播图片
  getPicture(params) {
    return request.ajax('get', '/api/picture', params)
  },
  //生成订单
  addOrder(params) {
    return request.ajax('post', '/api/order', params)
  },
  //获取订单列表
  getOrderList(params) {
    return request.ajax('get', '/api/order', params)
  },
  //购物车商品列表
  getCarList(params) {
    return request.ajax('get', '/api/car', params)
  },
  //添加到购物车
  addCarShop(params) {
    return request.ajax('post', '/api/car', params)
  },
  //删除购物车商品
  deleteCarShop(params) {
    return request.ajax('post', '/api/car/delete', params)
  },
  //反馈意见
  addTellMe(params) {
    return request.ajax('post', '/api/feedback', params)
  },
  //
  getOpenid(params) {
    return request.ajax('get', '/api/openid', params)
  }
}


module.exports = auth