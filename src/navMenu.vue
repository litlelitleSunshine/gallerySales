<template>
  <div id="navMenu">
    <Row>
      <i-col :xs="5" offset="1">
        <div class="nav-icon first-item">
          <Icon type="eye" size="30" color="#FFFF"></Icon>
          <span>Discovery</span>
        </div>
      </i-col>
      <i-col :xs="18">
        <div class="second-item">
          <Menu mode="horizontal" :theme="theme">
            <Menu-item key="1" name="home">
              <router-link to="/home">首页</router-link>
            </Menu-item>
            <Menu-item key="2" name="browser">
              <router-link to="/show">逛一逛</router-link>
            </Menu-item>
            <Menu-item key="3" name="shoppingCar">
              <Icon type="ios-cart" color="blue" size="16"></Icon>
              购物车
              <span>[{{number}}]</span>
            </Menu-item>
            <Menu-item key="4" name="favorite">
              <Icon type="ios-heart" color="red" size="16"></Icon>
                <span>收藏夹</span>
            </Menu-item>
            <Menu-item key="5" name="login">
              <a href="#"  @click="showLoginModal">登录</a>
            </Menu-item>
            <Menu-item key="6" name="service">
              <router-link to="/concat"><a href="#" >联系客服 </a> </router-link>
            </Menu-item>
            <Menu-item key="7" name="search">
              <Input size="small" icon="ios-search" placeholder="搜索商品" />
            </Menu-item>
          </Menu>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
import home from './components/home.vue'
import Login from './components/login.vue'

export default {
  name: 'navMenu',
  data () {
    return {
      theme: 'primary',
      number: 0
    }
  },
  components: {home, Login},
  methods: {
    showLoginModal () {
      this.$Modal.confirm({
        closable: true,
        title: '登录',
        render: (h) => {
          return h(Login)
        }
      })
    }
  }
}

</script>
<style>
  #navMenu {
    height: 60px;
  }
  /* icon style */

  #navMenu i {
    vertical-align: sub;
  }

  #navMenu .nav-icon span {
    color: white;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    font-size: 1.5rem;
    font-family: STLiti;
    margin-left: 10px;
  }

  /* nav style */

  #navMenu .ivu-menu {
    margin-left: 50px;
  }

  #navMenu a {
    color: white;
  }

  #navMenu .ivu-menu .ivu-menu-item:hover,
  #navMenu .ivu-menu .ivu-menu-submenu:hover {
    background: initial;
    color: red
  }

  #navMenu .ivu-menu-horizontal .ivu-menu-item {
    z-index: -1;
  }

  #navMenu .ivu-menu-primary {
    background: initial;
  }

  #navMenu .ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
    display: inline-block;
    padding: 7px 10px 8px;
  }

  #navMenu .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item-active {
    background: initial;
  }

  /* responsive style */

  @media screen and (max-width:1080px) {
    #navMenu .ivu-menu-horizontal .ivu-menu-item,
    #navMenu .ivu-menu-horizontal .ivu-menu-submenu {
      padding: 0 10px;
      font-size: 12px;
    }
  }

  @media screen and (max-width:970px) {
    #navMenu {
      height: 120px;
    }
  }

  @media screen and (max-width:535px) {
    #navMenu .ivu-menu {
      margin-left: 0;
    }
    #navMenu .nav-icon .ivu-icon,
    #navMenu .nav-icon span {
      font-size: 16px!important;
    }
    #navMenu .ivu-menu-horizontal .ivu-menu-item,
    #navMenu .ivu-menu-horizontal .ivu-menu-submenu {
      padding: 0 5px;
    }
    #navMenu .nav-icon span {
      margin-left: 0px;
    }
  }
</style>
