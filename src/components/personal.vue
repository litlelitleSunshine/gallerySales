<template>
  <div id="personal">
    <Row>
      <Col span="20" offset="2" class="wrapper">
      <div class="title">
        <h2>Hi！{{userInfo.name}},欢迎来到
          <span class="discovery">Discovery</span></h2>
      </div>
      <Collapse v-model="active" accordion>
        <Panel name="1">
            个人信息
            <p slot="content">
              <Form :model="info" :rules = rule :label-width="100">
                <FormItem prop="name" label=" 昵称">
                  <Input v-model="info.name" clearable/>
                </FormItem>
                <FormItem prop="phone" label="电话号码">
                  <Input v-model="info.phone" clearable/>
                </FormItem>
                <FormItem prop="email" label="电子邮箱">
                  <Input v-model="info.email" clearable/>
                </FormItem>
                <FormItem prop="password" label="密码">
                  <Input v-model="info.password" type="password" clearable/>
                </FormItem>
                <FormItem>
                  <Button type="primary" long @click="saveInfo">保存</Button>
                </FormItem>
              </Form>
            </p>
        </Panel>
        <Panel name="2">
            我的订单
            <p slot="content">
              <Table :data="order.order" :columns="columns"/>
            </p>
        </Panel>
        <Panel name="3">
            拍卖作品
            <p slot="content">
              <Button type="primary" @click="uploadArts">点击上传商品</Button>
              <upload v-show="upload"></upload>
              <span class="onlineTableTitle">在售商品</span>
              <!-- <Table :data="order" :columns="columns"/> -->
            </p>
        </Panel>
        <Panel name="4">
            收货地址
            <p slot="content"></p>
        </Panel>
      </Collapse>
      </Col>
    </Row>
  </div>
</template>

<script>
import user from '../js/user'
import gallery from '../js/share'
import order from '../js/order'
import upload from './uploadModal'

export default {
  name: 'pesonal',
  inject: ['reload'],
  components: { upload },
  data () {
    const validatePhone = (rule, value, callback) => {
      const regPhone = gallery.validatePhone(value)
      if (value === '') {
        callback(new Error('请输入电话号码'))
      } else if (!(regPhone)) {
        callback(new Error('请输入正确的电话格式'))
      }
      callback()
    }
    const validateEmail = (rule, value, callback) => {
      const regEmail = gallery.validateEmail(value)
      if (value === '') {
        callback(new Error('请输入电子邮箱'))
      } else if (!(regEmail)) {
        callback(new Error('请输入正确的电子邮箱格式'))
      }
      callback()
    }
    return {
      userInfo: user,
      active: '0',
      info: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password
      },
      rule: {
        name: [{required: true, message: '请输入昵称'}],
        phone: [{required: true, validator: validatePhone}],
        email: [{required: true, validator: validateEmail}],
        password: [{required: true, message: '请输入密码'}]
      },
      order: order,
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
        // {
        //   title: '状态',
        //   align: 'center',
        //   key: 'status',
        //   render: (h, params) => {
        //     return h('span', {}, params.row.status)
        //   }
        // }
      ],
      upload: false
    }
  },
  mounted () {
    let self = this
    console.log(self.order)
  },
  methods: {
    uploadArts () {
      var self = this
      self.upload = true
      setTimeout(function () {
        self.upload = false
      }, 500000)
    },
    saveInfo () {
      for (var key in this.info) {
        user[key] = this.info[key]
      }
      this.reload()
    }
  }
}
</script>

<style>
#personal {
  margin-top: 50px;
}
#personal .wrapper {
  background: white;
}

#personal .title{
  margin:30px 10px;
}

#personal .title .discovery {
  font-family: STLiti;
  color: red;
  margin: 20px 10px;
}

#personal .onlineTableTitle{
  display: block;
}
</style>
