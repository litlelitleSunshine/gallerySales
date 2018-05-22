<template>
  <Modal v-model="upload" title="上传拍卖商品">
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
        <FormItem prop="price" label="单价">
          <Input placeholder="请输入单价" v-model="arts.price"/>
        </FormItem>
        <FormItem prop="number" label="数量">
          <Input placeholder="请输入数量" v-model="arts.number"/>
        </FormItem>
        <FormItem prop="tax" label="平台费用">
          <Input disabled v-model="arts.tax"/>
        </FormItem>
        <FormItem prop="total" label="最终收益">
          <Input disabled v-model="arts.total"/>
        </FormItem>
        <FormItem prop="way" label="收款账号(支付宝)">
          <Input placeholder="请输入收款账号，这是唯一收款账号噢~" v-model="arts.way"/>
        </FormItem>
      </Form>
      <div class="img-wrap">
      <Button @click="uploadImg">上传作品</Button>
        <img :src="img.src" alt="picture">
      </div>
      <div slot="footer">
            <Button type="primary" size="large" long>上架</Button>
        </div>
  </Modal>
</template>

<script>
export default {
  name: 'uploadModal',
  data () {
    return {
      upload: true,
      img: {
        src: ''
      },
      arts: {
        title: '',
        author: '',
        description: '',
        price: '',
        number: '',
        tax: '',
        total: '',
        way: ''
      },
      rule: {
        title: [{required: true, message: '请输入商品名称'}],
        author: [{required: true, message: '请输入作者'}],
        description: [{required: true, message: '请输入商品简介'}],
        price: [{required: true, type: 'number', message: '请输入单价'}],
        number: [{required: true, type: 'number', message: '请输入商品数量'}],
        way: [{required: true, message: '请输入商品收款账号，注意这是唯一收款账号！'}]
      }
    }
  },
  methods: {
    uploadImg () {},
    close () {
      console.log('false')
      this.$emit('init')
    }
  }
}
</script>

<style>

</style>
