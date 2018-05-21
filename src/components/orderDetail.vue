<template>
  <div id="orderDetail">
    <Row>
      <Col span="20" offset="2">
      <div class = "wrapper">
    <div class="orderNumber space">{{orderDetail[3]}}</div>
    <Table :columns="columns" :data="orderDetail[0]"></Table>
    <div class="orderMoney space">
      <span>合计：</span>
      {{orderDetail[2]}}元</div>
    <div class="orderAdress space">
      <span>收货地址：</span>
      {{orderDetail[1]}}</div>
      <div class="back">
        <Button type="primary" @click="clickBack">确定</Button>
      </div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import user from '../js/user'

export default {
  name: 'orderDetail',
  data () {
    return {
      orderDetail: user.totalOrder,
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
        }
      ]
    }
  },
  methods: {
    clickBack () {
      this.$router.push({
        path: '/home'
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
