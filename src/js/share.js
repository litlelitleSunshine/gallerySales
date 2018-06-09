import QRCode from 'qrcode'

var gallery = {}
// 形式分类
gallery.type1 = ['其它', '油画', '版画', '国画', '水彩', '书法', '摄影']
// 内容分类
gallery.type2 = ['其它', '人物', '风景', '动物', '花卉']
// 寄售商品状态
gallery.sellStatus = ['在售', '已售']
// 验证邮箱
gallery.validateEmail = function (str) {
  let regex = /^([a-zA-Z0-9+_.-])+@(([a-zA-Z0-9+_-])+\.)+([a-zA-Z0-9]{2,4})+$/g
  return regex.test(str)
}
//  验证电话号码
gallery.validatePhone = function (str) {
  let regex = /^1[34578]\d{9}$/g
  return regex.test(str)
}
//  验证身份证
gallery.validateIDCard = function (str) {
  let regex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g
  return regex.test(str)
}
// 验证只能输入数字
gallery.validateNum = function (str) {
  let regex = /^[0-9]+$/g
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
// 二维码生成
gallery.useqrcode = function () {
  this.QueryDetail = 'http://www.baidu.com/#/guard' + '?unique_code=' + this.QueryDetail
  var canvas = document.getElementById('pay')
  QRCode.toCanvas(canvas, this.QueryDetail, function (error) {
    if (error) console.error(error)
  })
}
// 图片处理
gallery.getBase64 = function (file, callback) {
  var maxWidth = 640
  if (file.files && file.files[0]) {
    var thisFile = file.files[0]
    if (thisFile.size > 2019200) {
      // mualert.alertBox("图片不能超过800K")
      this.$Message.info('图片不能超过2M')
      return
    }
    var reader = new FileReader()
    reader.onload = function (event) {
      var imgUrl = event.target.result
      var img = new Image()
      img.onload = function () {
        var canvasId = 'canvasBase64Imgid'
        var canvas = document.createElement('canvas')
        canvas.innerHTML = 'New Canvas'
        canvas.setAttribute('id', canvasId)
        canvas.style.display = 'none'
        document.body.appendChild(canvas)
        canvas.width = this.width
        canvas.height = this.height
        var imageWidth = this.width
        var imageHeight = this.height
        if (this.width > maxWidth) {
          imageWidth = maxWidth
          imageHeight = this.height * maxWidth / this.width
          canvas.width = imageWidth
          canvas.height = imageHeight
        }
        var context = canvas.getContext('2d')
        context.clearRect(0, 0, imageWidth, imageHeight)
        context.drawImage(this, 0, 0, imageWidth, imageHeight)
        var base64 = canvas.toDataURL('image/png', 1)
        var imgbase = base64.substr(22)
        callback(imgbase)
      }
      img.src = imgUrl
    }
    reader.readAsDataURL(file.files[0])
  }
}
export default gallery
