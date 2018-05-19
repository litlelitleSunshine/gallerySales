<template>
  <div id="register">
    <Row>
    <Col span="12" offset="6">
    <Row type="flex" justify="center">
      <Col span="12" offset="10">
    <div class="title">免费注册</div>
    </Col></Row>
    <Form :model="register" :rules = rule :label-width="100">
      <FormItem prop="name" label=" 昵称">
        <Input placeholder="请输入昵称" v-model="register.name" clearable/>
      </FormItem>
      <FormItem prop="phone" label="电话号码">
        <Input placeholder="请输入电话" v-model="register.phone" clearable/>
      </FormItem>
      <FormItem prop="email" label="电子邮箱">
        <Input placeholder="请输入邮箱" v-model="register.email" clearable/>
      </FormItem>
      <FormItem prop="password" label="密码">
        <Input placeholder="请输入密码" v-model="register.password" clearable/>
      </FormItem>
      <FormItem prop="confirmPassword" label="确认密码">
        <Input placeholder="再次输入密码" v-model="register.confirmPassword" clearable/>
      </FormItem>
      <FormItem prop="verCode" label="短信验证码">
        <Input placeholder="请输入短信验证码" v-model="register.verCode" clearable/>
      </FormItem>
      <FormItem>
        <Checkbox v-model="register.agree">
          <span>我同意
              <i @click="showTerms=true">用户协议</i>
          </span>
        </Checkbox>
      </FormItem>
      <FormItem>
        <Button type="primary" long :disabled="!register.agree">提交</Button>
      </FormItem>
    </Form>
  </Col>
  </Row>
  <Modal v-model="showTerms">
      <div slot="header">
          <div class="modal-header">
              <h2>Terms and Conditions</h2>
          </div>
      </div>
      <div class="modal-body">
          <terms></terms>
      </div>
      <div slot="footer">
          <div class="modal-footer">
              <button type="button" @click="showTerms=false">取消</button>
          </div>
      </div>
  </Modal>
  </div>
</template>

<script>
import gallery from '../js/share'
import terms from './terms.vue'
export default {
  name: 'register',
  components: { terms },
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
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (this.register.confirmPassword !== '') {
        this.$refs.register.validateField('confirmPassword')
        callback()
      }
    }
    const validateComfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.register.password) {
        callback(new Error('输入的两次密码不匹配'))
      } else {
        callback()
      }
    }
    const validateVerCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入短信验证码'))
      } else if (typeof value !== 'string') {
        callback(new Error('短信验证码只能是数字'))
      } else {
        callback()
      }
    }
    return {
      register: {
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        verCode: '',
        agree: false
      },
      showTerms: false,
      rule: {
        name: [{required: true, message: '请输入昵称'}],
        phone: [{required: true, validator: validatePhone}],
        email: [{required: true, validator: validateEmail}],
        password: [{required: true, validator: validatePassword}],
        confirmPassword: [{required: true, validator: validateComfirmPassword}],
        verCode: [{required: true, validator: validateVerCode}]
      }
    }
  }
}
</script>

<style>
#register i{
  color:blue
}

#register .title{
  font-size: 20px;
  margin: 20px 0;
  color: white;
}
</style>
