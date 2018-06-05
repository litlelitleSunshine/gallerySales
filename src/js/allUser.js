var allUser = [
  {
    id: 1, // id
    name: '小小九', // 昵称
    phone: '15923589756', // 电话
    password: 'asdf', // 密码
    email: '1234567654@qq.com', // 电子邮箱
    identified: false, // 是否认证
    idCard: '', // 身份证号
    pay: '', // 收款账号
    guarantee: '', // 保证金
    address: ['重庆市沙坪坝区重庆大学虎溪校区'], // 收货地址列表
    useAddress: '重庆市沙坪坝区重庆大学虎溪校区', // 正在使用的收货地址
    loving: [], // 收藏夹列表
    isLogin: true, // 是否登录
    order: [], // 订单表
    totalNumber: 0, // 购物车中物品数量
    goods: [] // 寄售列表
  },
  {
    id: 2, // id
    name: '小二', // 昵称
    phone: '15923589853', // 电话
    password: 'asdf', // 密码
    email: '1234567654@qq.com', // 电子邮箱
    identified: true, // 是否认证
    idCard: '500114199802189712', // 身份证号
    pay: '15923589756', // 收款账号
    guarantee: '300', // 保证金
    address: ['重庆市沙坪坝区重庆大学虎溪校区'], // 收货地址列表
    useAddress: '重庆市沙坪坝区重庆大学虎溪校区', // 正在使用的收货地址
    loving: [], // 收藏夹列表
    isLogin: true, // 是否登录
    order: [], // 订单表
    totalNumber: 0, // 购物车中物品数量
    goods: [1, 2] // 寄售列表
  }
]

export default allUser
