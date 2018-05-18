<template>
  <Modal v-model="displayLoginModal" title="登录">
    <Form>
      <FormItem>
        <Input v-model="account" icon="person" placeholder="请输入邮箱/手机号码" />
      </FormItem>
      <FormItem>
        <Input v-model="password" icon="eye-disabled" type="password" placeholder="请输入密码" />
      </FormItem>
    </Form>
    <div slot="footer">
      <Button type="primary" long>登录</Button>
      <p>没有账号?
        <a href="#/register" @click=hidenLoginModal>点击注册</a>
      </p>
    </div>
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loginModal',
  data () {
    return {
      account: '',
      password: '',
      displayLoginModal: !this.$store.state.displayLoginModal
    }
  },
  methods: {
    hidenLoginModal () {
      this.displayLoginModal = false
    }
  },
  computed: { ...mapGetters(['getLoginModal']) },
  mounted: function () {
  }
}
</script>

<style>
  .ivu-modal .ivu-input-wrapper {
    margin-top: 10px
  }

  .ivu-modal .ivu-modal-header-inner {
    color: initial;
    font-size: 20px;
  }

  .ivu-modal .ivu-modal-footer {
    border-top: none;
  }

  .ivu-modal .ivu-modal-footer p {
    margin-top: 10px;
    font-size: italic;
  }
</style>
