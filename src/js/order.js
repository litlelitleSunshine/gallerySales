// 订单列表
var order = {}
order.id = '' // 买家ID
order.address = '' // 收货地址
order.number = '' // 订单编号
order.totalMoney = '' // 总金额
order.status = '' // 订单状态
Object.defineProperties(order, { // 订单,即是选中的订单
  order: {
    value: [],
    writable: true
  },
  selectedOrder: { // 已选择的商品
    value: [],
    writable: true
  }
})
export default order
