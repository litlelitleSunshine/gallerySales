
// 当前用户信息
var user =
  {
    // id: 1 // id
    // name: '小小九', // 昵称
    // phone: '15923589756', // 电话
    // password: 'asdf', // 密码
    // email: '1234567654@qq.com', // 电子邮箱
    // identified: false, // 是否认证
    // idCard: '', // 身份证号
    // pay: '', // 收款账号
    // guarantee: '', // 保证金
    // address: ['重庆市沙坪坝区重庆大学虎溪校区'], // 收货地址列表
    // useAddress: '重庆市沙坪坝区重庆大学虎溪校区', // 正在使用的收货地址
    // loving: [], // 收藏夹列表
    // isLogin: false, // 是否登录
    // order: [], // 订单表
    // totalNumber: 0 // 购物车中物品数量
    // sale: [] 寄售商品列表
  }
Object.defineProperties(user, {
  id: {
    writable: true
  },
  name: {
    writable: true
  },
  phone: {
    writable: true
  },
  email: {
    writable: true
  },
  identified: {
    writable: true
  },
  idCard: {
    writable: true
  },
  pay: {
    writable: true
  },
  guarantee: {
    writable: true
  },
  address: {
    writable: true
  },
  useAddress: {
    writable: true
  },
  loving: {
    writable: true
  },
  isLogin: {
    writable: true
  },
  order: {
    writable: true
  },
  totalNumber: {
    writable: true
  },
  sale: {
    writable: true,
    value: []
  }
})
export default user
