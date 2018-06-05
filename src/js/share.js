
var gallery = {}
// 验证邮箱
gallery.validateEmail = function (str) {
  let regex = /^([a-zA-Z0-9+_.-])+@(([a-zA-Z0-9+_-])+\.)+([a-zA-Z0-9]{2,4})+$/g
  return regex.test(str)
}
//  眼神电话号码
gallery.validatePhone = function (str) {
  let regex = /^1[34578]\d{9}$/g
  return regex.test(str)
}
// id:目标值
// arr:查询的数组
// field：用来查询的字段
gallery.findSource = function (id, arr, field) {
  let result
  arr.forEach(function (item) {
    if (item[field] === id) {
      result = Object.assign({}, item)
    }
  })
  return result
}
// 订单编号
gallery.orderNumber = function () {
  let s = (Math.floor(Math.random() * 10000) % 9 + 1).toString()
  for (var i = 0; i < 8; i++) {
    s = s + (Math.floor(Math.random() * 10000) % 10).toString()
  }
  return s
}
// 检验数组中是否有重复的数(验证订单中是否有重复的项)
gallery.checkArr = function (target, arr) {
  let result
  result = arr.some(function (item) {
    return item.goodsId === target
  })
  return result
}

// 提取url中的参数传递
gallery.getQueryValue = function () {
  let qs = (window.location.search.length > 0 ? location.search.substring(1) : '')
  let args = {}
  let items = qs.length ? qs.split('&') : []
  let item = null
  let name = null
  let value = null
  var i = 0
  let len = items.length
  for (i = 0; i < len; i++) {
    item = items[i].split('=')
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) args[name] = value
  }
  return args
}
export default gallery
