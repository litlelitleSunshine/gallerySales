<template>
<div id="order">
  <Row>
    <Col span="20" offset="2">
  <div class="show-table">
    <Table ref="showTable" :no-data-text="noDataText" :columns="columns" :data="orderData"  @on-selection-change="allPrice"/>
  </div>
  <div class="show-total">
    <span>合计：</span>
    <span class="total-price">{{total}}元</span>
    <div class="shopping-address">
      <span>收货地址：</span>
      <span>{{userAddress}}</span>
      <Button shape="circle" icon="edit" @click="editAddress"></Button>
    </div>
    <div class="btn-group">
      <Button type="ghost" size="large" @click="deleteItems">删除</Button>
      <Button type="primary" size="large" @click="pay">支付</Button>
    </div>
  </div>
  </Col>
  </Row>
  <Modal v-model="payModal" title="请扫描下方二维码进行支付！" id="payModal">
    <canvas id="pay" width="100px" height="100px"></canvas>
    <div slot="footer"></div>
  </Modal>
</div>
</template>

<script>
import user from '../js/user'
import order from '../js/order'
import gallery from '../js/share'

export default {
  name: 'order',
  data () {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          title: '全选',
          align: 'center'
        },
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
      ],
      orderData: user.order, // 表格中的数据
      userAddress: user.useAddress,
      total: 0,
      noDataText: '您还未挑选任何作品噢~,去<a href="http://localhost:8080/#/show">逛一逛</a>',
      payModal: false,
      selectedOrder: [],
      flag: 0
    }
  },
  methods: {
    allPrice (selection) {
      let self = this
      self.total = 0
      self.selectedOrder = []
      order.order = []
      selection.forEach(function (item) {
        self.total += item.price
        self.selectedOrder.push(item.goodsId)
        order.order.push(item)
      })
      order.totalMoney = self.total
      order.selectedOrder = self.selectedOrder
    },
    editAddress () {
      this.$router.push({
        path: '/personal'
      })
    },
    deleteItems () {
      let self = this
      if (self.selectedOrder.length === 0) {
        this.$Message.info('请选择需要删除的商品！')
      } else {
        self.selectedOrder.forEach(function (num) {
          self.orderData.forEach(function (item, index) {
            if (num === item.goodsId) self.orderData.splice(index, 1)
          })
        })
      }
    },
    pay () {
      let self = this
      if (self.selectedOrder.length === 0) self.$Message.info('请选择需要购买的作品')
      else {
        self.payModal = true
        gallery.useqrcode()
        setTimeout(function () {
          self.payModal = false
          order.status = '已付款'
          order.number = gallery.orderNumber()
          order.id = user.id
          order.address = user.useAddress
          self.$Message.info('付款成功！')
          self.$router.push({
            path: '/orderDetail'
          })
        }, 3000)
        user.order.forEach(function (item, index) {
          self.selectedOrder.forEach(function (sub) {
            if (sub === item.goodsId) user.order.splice(index, 1)
          })
        })
      }
    }
  }
}
</script>

<style>
/* table style */
#order .show-table .ivu-btn-circle {
  margin: 0 10px;
}
/* show price and action style */
#order .show-total {
  background: white;
  margin-top: 20px;
  padding: 20px 30px;
  overflow: hidden;
}

#order .show-total .total-price {
  float: right;
}

#order .show-total .btn-group {
  margin-top: 50px;
  float: right;
}

#order .show-total .shopping-address{
  margin-top: 20px;
}

/* payModal style */
#payModal .ivu-modal-body {
  display: flex;
  justify-content: center;
}
</style>
