<template>
  <Modal v-model="upload" title="上传拍卖商品" ref="upload">
      <Form ref="uploadForm" :rules="rule" :model="arts">
        <FormItem prop="title" label="题目">
          <Input placeholder="请输入题目" v-model="arts.title"/>
        </FormItem>
        <FormItem prop="author" label="作者">
          <Input placeholder="请输入作者" v-model="arts.author"/>
        </FormItem>
        <FormItem prop="description" label="简介">
          <Input placeholder="请输入作者" v-model="arts.description"/>
        </FormItem>
        <FormItem>
          <div>请选择类型</div>
          <Row>
            <Col span="3">形式分类：</Col>
            <Col span="8">
            <Select v-model="arts.type1">
              <Option v-for="(item, index) in totalType1" :key="index" :value="index">{{item}}</Option>
            </Select>
            </Col>
            <Col span="3">内容分类：</Col>
            <Col span="8">
            <Select v-model="arts.type2">
              <Option v-for="(item, index) in totalType2" :key="index" :value="index">{{item}}</Option>
            </Select>
            </Col>
          </Row>
        </FormItem>
        <FormItem prop="price" label="单价">
          <Input placeholder="请输入单价" v-model="arts.price" @on-change="handlePrice"/>
        </FormItem>
        <FormItem prop="tax" label="平台费用">
          <span style="color:red">{{arts.tax}}</span>
          <p style="color:red;font-style:italic">平台费用会在押金中扣取，费用为每次成交金额的8%</p>
        </FormItem>
        <FormItem prop="total" label="最终收益">
          <span style="color:red">{{arts.total}}</span>
        </FormItem>
        <FormItem label="收款账号(支付宝)">
          <Tooltip content="这是唯一收款账号，可在个人中心中修改" placement="top-start">
            <span>{{userInfo.pay}}</span>
        </Tooltip>
        </FormItem>
        <FormItem>
          <input type="file" name="upfile" size="20" @change="uploadChange" :disabled="arts.src!==''">
        </FormItem>
        <FormItem>
          <div class="img-wrapper">
        <img :src="arts.src">
        </div>
        </FormItem>
      </Form>
      <div slot="footer">
            <Button type="primary" size="large" long @click="putAway">上架</Button>
        </div>
  </Modal>
</template>

<script>
import user from '../js/user'
import gallery from '../js/share'
import picture from '../js/picture'

export default {
  name: 'uploadModal',
  data () {
    const validatePrice = (rule, value, callback) => {
      const regNum = gallery.validateNum(value)
      if (value === '') {
        callback(new Error('请输入单价'))
      } else if (!(regNum)) {
        callback(new Error('请输入数字'))
      }
      callback()
    }
    return {
      upload: true,
      userInfo: user,
      totalType1: gallery.type1,
      totalType2: gallery.type2,
      arts: {
        title: '',
        author: '',
        description: '',
        price: '',
        tax: '',
        total: '',
        src: '',
        type1: 0,
        type2: 0
      },
      rule: {
        title: [{required: true, message: '请输入商品名称'}],
        author: [{required: true, message: '请输入作者'}],
        description: [{required: true, message: '请输入商品简介'}],
        price: [{required: true, trigger: 'change', validator: validatePrice}]
      }
    }
  },
  methods: {
    // 处理图片上传
    uploadChange (event) {
      if (event.target.files.length > 0) {
        this.files = event.target.files[0] // 提交的图片
        gallery.getBase64(event.target, (url) => {
          // 显示的图片
          this.arts.src = 'data:image/png;base64,' + url
        })
      }
    },
    // 处理单价输入
    handlePrice (e) {
      e.preventDefault()
      this.arts.tax = this.arts.price * 0.08.toFixed(2)
      this.arts.total = this.arts.price - this.arts.tax
    },
    // 处理上架
    putAway (e) {
      var self = this
      e.preventDefault()
      self.$refs['uploadForm'].validate((valid) => {
        const goodsId = picture.img.length + 1
        console.log(picture.img.length)
        if (valid) {
          if (self.arts.src === '') self.$Message.info('请上传图片')
          else {
            let result = Object.assign(self.arts, {
              number: 1,
              status: 1,
              goodsId: goodsId,
              id: user.id,
              phone: user.phone
            })
            picture.img.push(result)
            this.$Message.info('上架成功')
            this.upload = false
            user.sale.push(goodsId)
          }
        }
      })
    }
  }
}
</script>

<style>

</style>
