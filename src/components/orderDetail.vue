<template>
  <div id="orderDetail">
    <Row>
      <Col span="20" offset="2">
      <div class = "wrapper">
    <div class="orderNumber space"></div>
    <Table :columns="columns" :data="orderDetailData.order"></Table>
    <div class="orderMoney space">
      <span>合计：</span>
      {{orderDetailData.totalMoney}}元</div>
    <div class="orderAdress space">
      <span>收货地址：</span>
      {{orderDetailData.address}}
    </div>
    <div class="orderAdress space">
      <span>订单状态：</span>
      {{orderDetailData.status}}
    </div>
    <div class="orderAdress space">
      <span>订单编号：</span>
      {{orderDetailData.number}}
    </div>
      <div class="back">
        <Button type="primary" @click="clickBack">确定</Button>
      </div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import order from '../js/order'

export default {
  name: 'orderDetail',
  data () {
    return {
      orderDetailData: order,
      columns: [
        {
          title: '商品',
          align: 'center',
          key: 'title'
        },
        {
          title: '作者',
          align: 'center',
          key: 'author'
        },
        {
          title: '单价',
          align: 'center',
          key: 'price'
        },
        {
          title: '数量',
          align: 'center',
          key: 'number'
        },
        {
          title: '卖家电话',
          align: 'center',
          key: 'phone'
        }
      ]
    }
  },
  methods: {
    clickBack () {
      console.log(order)
      order.order.forEach(function (item, index) {
        order.selectedOrder.forEach(function (sub) {
          if (item === sub) order.order.splice(index, 1)
        })
      })
      this.$router.push({
        path: '/show'
      })
    }
  }

}
</script>

<style>
#orderDetail .wrapper{
  padding: 20px 30px;
  background: white;
  overflow: hidden;
}
#orderDetail .wrapper .space {
  margin: 20px 0;
}

#orderDetail .back{
  float: right
}
</style>
