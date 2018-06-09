<template>
  <div id="personal">
    <Row>
      <Col span="20" offset="2" class="wrapper">
      <div class="title">
        <h2>Hi！{{userInfo.name}},欢迎来到
          <span class="discovery">Discovery</span></h2>
      </div>
      <Collapse v-model="active" accordion @on-change="handleChange">
        <Panel name="info">
            个人信息
            <p slot="content">
              <Form :model="info" :rules = rule :label-width="100">
                <FormItem>
                <Button type="primary" :disabled="info.identified" @click="identifiedModal = true">{{info.identified ? '已认证' : '未认证'}}</Button>
                </FormItem>
                <div class="wrapper" v-show="info.identified ">
                <FormItem label="认证身份证">
                  <span>{{info.idCard}}</span>
                </FormItem>
                <FormItem label="保证金">
                  <span>{{info.guarantee}}</span>
                </FormItem>
                <FormItem label="收款账号">
                  <Input v-model="info.pay" clearable placeholder="请输入支付宝账户，这是唯一的收款账户，请确保输入正确！"/>
                </FormItem>
                </div>
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
        <Panel name="order">
            我的订单
            <p slot="content">
              <Table :data="orderData.order" :columns="myOrderColumns" no-data-text="暂时没有订单噢~，去<a href='http://localhost:8080/#/show'>逛一逛</a>"/>
            </p>
        </Panel>
        <Panel name="sell">
            寄售商品
            <p slot="content">
              <Button type="primary" @click="uploadGoods">点击上传商品</Button>
              <upload v-if="upload"></upload>
              <span class="onlineTableTitle">在售商品</span>
              <Table :columns="saleColumns" :data="saleData"/>
            </p>
        </Panel>
        <Panel name="address">
            收货地址
            <p slot="content"></p>
        </Panel>
      </Collapse>
      </Col>
    </Row>
    <Modal v-model="identifiedModal" title="卖家认证" id="identifiedModal">
      <Form ref="identified" :model="identifiedModalInfo" :rules="rule">
        <FormItem label="押金">
          <Input v-model="identifiedModalInfo.guarantee" disabled/>
        </FormItem>
         <FormItem prop="idCard" label="身份证号">
          <Input placeholder="请输入身份证号" v-model="identifiedModalInfo.idCard"/>
        </FormItem>
        <FormItem>
          <label>请上传身份证（包括正面和反面）</label>
        </FormItem>
        <FormItem>
         <input type="file" name="upfile" size="20" @change="uploadChange" :disabled="imgDataUrl.length >= 2">
        </FormItem>
        <FormItem>
          <div class="img-wrapper">
        <img alt="picture" v-for="(img, index) in imgDataUrl" :key="index" :src="img">
        </div>
        </FormItem>
      </Form>
      <div slot="footer">
            <Button type="primary" size="large" long @click="handleIdentified">提交</Button>
        </div>
    </Modal>
    <Modal v-model="payModal" title="请扫描下方二维码进行押金支付！" id="payModal">
    <canvas id="pay" width="100px" height="100px"></canvas>
    <div slot="footer"></div>
  </Modal>
  </div>
</template>

<script>
import user from '../js/user'
import gallery from '../js/share'
import order from '../js/order'
import upload from './uploadModal'
import Login from './login'
import picture from '../js/picture'

export default {
  name: 'pesonal',
  inject: ['reload'],
  components: { upload, Login },
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
    const validateIDCard = (rule, value, callback) => {
      const regID = gallery.validateIDCard(value)
      if (value === '') {
        callback(new Error('请输入身份证号码'))
      } else if (!(regID)) {
        callback(new Error('请输入正确的身份证号码'))
      }
      callback()
    }
    const self = this
    return {
      userInfo: user,
      active: '',
      identifiedModal: false,
      imgDataUrl: [],
      payModal: false,
      // 个人基本信息
      info: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
        guarantee: user.guarantee,
        pay: user.pay,
        identified: user.identified,
        idCard: user.idCard
      },
      // 售卖列表
      saleData: [],
      sales: user.sale,
      imgs: picture.img,
      // 认证模态框信息
      identifiedModalInfo: {
        idCard: '',
        guarantee: 1000
      },
      rule: {
        name: [{required: true, message: '请输入昵称'}],
        phone: [{required: true, validator: validatePhone}],
        email: [{required: true, validator: validateEmail}],
        password: [{required: true, message: '请输入密码'}],
        idCard: [{required: true, validator: validateIDCard}]
      },
      orderData: order,
      statusList: ['已付款', '已发货', '已收货'],
      myOrderColumns: [
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
        },
        {
          title: '状态',
          align: 'center',
          key: 'status',
          render: (h, parma) => {
            return h('span', {}, this.statusList[parma.row.status - 1])
          }
        },
        {
          title: '修改状态',
          align: 'center',
          key: 'change',
          render: (h, parma) => {
            return h('Button', {
              attrs: {
                disabled: parma.row.status === 3,
                type: 'primary'
              },
              on: {
                click: function () {
                  self.$Modal.confirm({
                    closable: true,
                    title: '确认收货',
                    render: (h) => {
                      return h('div', {}, [
                        h('p', {
                          class: {
                            confirmModal: true
                          }
                        }, '请确保您已经收到商品，此状态修改后不能再改变！'),
                        h('Button', {
                          on: {
                            click: function () {
                              order.order.forEach(function (item) {
                                if (item.goodsId === parma.row.goodsId) {
                                  item.status = 3
                                  self.reload()
                                  self.$Modal.remove()
                                }
                              })
                            }
                          },
                          attrs: {
                            type: 'primary'
                          }
                        }, '确定'),
                        h('Button', {
                          on: {
                            click: function () {
                              self.$Modal.remove()
                            }
                          },
                          class: {
                            cancelBtn: true
                          }
                        }, '取消')
                      ])
                    }
                  })
                }
              }
            }, '确认收货')
          }
        }
      ],
      saleColumns: [{
        title: '商品',
        align: 'center',
        key: 'title'
      },
      {
        title: '价格',
        align: 'center',
        key: 'price'
      },
      {
        title: '状态',
        align: 'center',
        key: 'status',
        render: (h, parma) => {
          return h('span', {}, gallery.sellStatus[parma.row.status - 1])
        }
      },
      {
        title: '下架',
        align: 'center',
        key: 'sold',
        render: (h, parma) => {
          return h('Button', {
            attrs: {
              type: 'primary',
              disabled: parma.row.status - 1 === 1
            },
            on: {
              click: function () {
                self.imgs.forEach(function (item, index) {
                  if (item.goodsId === parma.row.goodsId) {
                    picture.img.splice(index, 1)
                    // self.saleData.splice(index, 1)
                  }
                })
              }
            }
          }, '下架')
        }
      },
      {
        title: '确认发货',
        align: 'center',
        key: 'deliver',
        render: (h, parma) => {
          return h('Button', {
            attrs: {
              type: 'primary'
            }
          }, '确认已发货')
        }
      }
      ],
      upload: false
    }
  },
  methods: {
    // 打开寄售商品的模态框
    uploadGoods () {
      var self = this
      if (!user.identified) {
        self.$Message.info('您暂未认证，请进行认证！')
      } else {
        self.upload = true
      }
    },
    // 获取寄售商品信息列表
    handleGetGoodsList () {
      let self = this
      self.sales.forEach(function (item) {
        self.imgs.forEach(function (sub) {
          if (item === sub.goodsId) self.saleData.push(sub)
        })
      })
    },
    // 修改个人信息
    saveInfo (e) {
      if (!user.isLogin) {
        this.$Message.info('您暂未登录，请先登录')
        this.$Modal.confirm({
          closable: true,
          title: '登录',
          render: (h) => {
            return h(Login)
          }
        })
      } else {
        for (var key in this.info) {
          user[key] = this.info[key]
        }
        this.$Message.info('修改成功')
      }
    },
    // 处理认证
    handleIdentified () {
      var self = this
      self.$refs['identified'].validate((valid) => {
        if (valid) {
          if (self.imgDataUrl.length !== 2) {
            self.$Message.info('请上传身份证正反面照片')
            return
          }
          this.payModal = true
          gallery.useqrcode()
          setTimeout(function () {
            self.$Message.info('认证成功')
            user.identified = true
            user.idCard = self.identifiedModalInfo.idCard
            user.guarantee = self.identifiedModalInfo.guarantee
            self.reload()
            self.payModal = false
            self.identifiedModal = false
          }, 3000)
        }
      })
    },
    // 处理图片上传
    uploadChange (event) {
      if (event.target.files.length > 0) {
        this.files = event.target.files[0] // 提交的图片
        gallery.getBase64(event.target, (url) => {
          // 显示的图片
          this.imgDataUrl.push('data:image/png;base64,' + url)
        })
      }
    },
    handleChange () {
      this.handleGetGoodsList()
    }
  }
}
</script>

<style>
.confirmModal {
  margin: 30px 0;
  color: red;
}
.cancelBtn {
  margin-left: 10px;
}
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
  margin-top: 10px;
}

/* 认证模态框 */

#identifiedModal .img-wrapper {
  display: flex;
  width: 100%;
  overflow-x: scroll
}

#identifiedModal .img-wrapper img {
 margin: 0 10px;
}
/* payModal style */
#payModal .ivu-modal-body {
  display: flex;
  justify-content: center;
}
</style>
