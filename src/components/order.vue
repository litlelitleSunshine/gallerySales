<template>
<div id="order">
  <Row>
    <Col span="20" offset="2">
  <div class="show-table">
    <Table ref="showTable" :columns="columns" :data="orderData" height="200"/>
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
            return h('div', {}, [h('Button', {props: {type: 'primary', shape: 'circle', icon: 'plus-round'}}, ''),
              h('span', {}, parma.row.number),
              h('Button', {props: {type: 'primary', shape: 'circle', icon: 'minus'}}, '')])
          }
        }
      ],
      orderData: user.order
    }
  },
  mounted () {
    console.log()
  }
}
</script>

<style>

</style>
