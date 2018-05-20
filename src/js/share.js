
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
export default gallery
