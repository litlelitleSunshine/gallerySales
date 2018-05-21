
var gallery = {}
gallery.validateEmail = function (str) {
  let regex = /^([a-zA-Z0-9+_.-])+@(([a-zA-Z0-9+_-])+\.)+([a-zA-Z0-9]{2,4})+$/g
  return regex.test(str)
}

gallery.validatePhone = function (str) {
  let regex = /^1[34578]\d{9}$/g
  return regex.test(str)
}

gallery.findSource = function (id, arr) {
  let result
  arr.forEach(function (item) {
    if (item.id === id) {
      result = Object.assign({}, item)
    }
  })
  return result
}

gallery.orderNumber = function () {
  let s = (Math.floor(Math.random() * 10000) % 9 + 1).toString()
  for (var i = 0; i < 8; i++) {
    s = s + (Math.floor(Math.random() * 10000) % 10).toString()
  }
  return s
}
export default gallery
