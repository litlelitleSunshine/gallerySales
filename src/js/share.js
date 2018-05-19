
var gallery = {}
gallery.validateEmail = function (str) {
  let regex = /^([a-zA-Z0-9+_.-])+@(([a-zA-Z0-9+_-])+\.)+([a-zA-Z0-9]{2,4})+$/g
  return regex.test(str)
}

gallery.validatePhone = function (str) {
  let regex = /^1[34578]\d{9}$/g
  return regex.test(str)
}

export default gallery
