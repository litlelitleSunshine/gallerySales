var order = {}
order.id = '' // 买家ID
order.order = [] // 订单
order.address = '' // 收货地址
order.number = '' // 订单编号
order.totalMoney = '' // 总金额
order.status = '' // 订单状态
Object.defineProperties(order, {
  order: {
    value: [],
    writable: true
  },
  selectedOrder: {
    value: [],
    writable: true
  }
})
export default order
