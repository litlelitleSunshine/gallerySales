<template>
<div id="order">
  <Row>
    <Col span="20" offset="2">
  <div class="show-table">
    <Table ref="showTable" :no-data-text="noDataText" :columns="columns" :data="orderData" height="200" @on-select="plusPrice" @on-select-cancel="minusPrice" @on-select-all="allPrice"/>
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
      <Button type="primary" size="large">支付</Button>
    </div>
  </div>
  </Col>
  </Row>
</div>
</template>

<script>
import user from '../js/user'
export default {
  name: 'order',
  data () {
    // var self = this
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
          render: (h, parma) => {
            let self = this
            return h('div', {}, [h('Button', {props: {shape: 'circle', icon: 'plus-round', size: 'small'},
              on: {
                click: function () {
                  if (parma.row.number < parma.row.totalNumber) parma.row.number++ // user.order[i].number is not change
                  else self.$Message.info('购买数量已达上限！')
                }
              }}, ''),
            h('span', {}, parma.row.number),
            h('Button', {props: {shape: 'circle', icon: 'minus', size: 'small'},
              on: {
                click: function () {
                  if (parma.row.number > 0) parma.row.number = parma.row.number - 1
                }
              }}, '')])
          }
        }
      ],
      orderData: user.order,
      userAddress: user.address[0],
      total: 0,
      noDataText: '您还未挑选任何作品噢~'
    }
  },
  mounted () {
    console.log()
  },
  methods: {
    plusPrice (selection, row) {
      this.total += row.number * row.price
    },
    minusPrice (selection, row) {
      this.total -= row.number * row.price
    },
    allPrice (selection) {
      let self = this
      self.total = 0
      selection.forEach(function (item) {
        self.total += item.number * item.price
      })
    },
    editAddress () {
      this.$router.push({
        path: '/personal'
      })
    },
    deleteItems () {
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
</style>
