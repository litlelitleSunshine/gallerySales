<template>
  <div id="login-modal">
    <Form ref="loginModal" :rules="rule" :model="loginData">
        <FormItem prop="user">
            <i-input type="text" v-model="loginData.user" placeholder="请输入电话/邮箱" clearable>
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
        <FormItem prop="password">
            <i-input type="password" v-model="loginData.password" placeholder="请输入密码" clearable>
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </i-input>
        </FormItem>
    </Form>
    <div class="login-footer">
      <Button type="primary" long @click="login"> 登录</Button>
      <p><a href="#">忘记密码</a></p>
      <p class="register">没有账号?
        <a href="#/register" @click="closeLoginModal">点击注册</a>
      </p>
  </div>
  </div>
</template>

<script>
import gallery from '../js/share'
export default {
  name: 'loginModal',
  data () {
    const validateUser = (rule, value, callback) => {
      const regPhone = gallery.validatePhone(value)
      const regEmail = gallery.validateEmail(value)
      if (value === '') {
        callback(new Error('请输入账号'))
      } else if (!(regPhone || regEmail)) {
        callback(new Error('请输入正确的格式'))
      }
      callback()
    }
    return {
      loginData: {
        user: '',
        password: ''
      },
      rule: {
        user: [{required: true, message: '', trigger: 'change', validator: validateUser}],
        password: [{required: true, message: '请输入密码', trigger: 'change'}]
      }
    }
  },
  methods: {
    closeLoginModal () {
      this.$Modal.remove()
    },
    login () {
      var self = this
      self.$refs['loginModal'].validate((valid) => {
        self.$Modal.remove()
        window.location.href = 'http://localhost:8080/#/personal'
      })
    }
  }
}
</script>

<style>
   #login-modal .ivu-form-item-content {
    margin-top: 10px
  }

  #login-modal .login-footer p {
    margin-top: 10px;
    height: 20px;
    display: inline-block;
  }

  #login-modal .login-footer .register {
    position: absolute;
    right: 0
  }

  .ivu-modal-body .ivu-modal-confirm-footer {
    display: none;
  }
</style>
