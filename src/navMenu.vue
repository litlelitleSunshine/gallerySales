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
            <Submenu key="2" name="browser">
              <template slot="title">逛一逛
                <router-link to="/show">全部</router-link>
              </template>
              <Menu-item key="2-0" name="all">
                <router-link to="/show">全部</router-link>
              </Menu-item>
              <Menu-group title="形式分类">
                <Menu-item key="2-1-1" name="oilPainting">
                  <a href="#/show" @click="console.log(1)">油画</a>
                </Menu-item>
                <Menu-item key="2-1-2" name="printPainting">
                  <a href="#">版画</a>
                </Menu-item>
                <Menu-item key="2-1-3" name="chinesePainting">
                  <a href="#">国画</a>
                </Menu-item>
                <Menu-item key="2-1-4" name="waterPainting">
                  <a href="#">水彩</a>
                </Menu-item>
                <Menu-item key="2-1-5" name="calligraphy">
                  <a href="#">书法</a>
                </Menu-item>
                <Menu-item key="2-1-6" name="photos">
                  <a href="#">摄影</a>
                </Menu-item>
                <Menu-item key="2-1-7" name="others">
                  <a href="#">其它</a>
                </Menu-item>
              </Menu-group>
              <Menu-group title="内容分类">
                <Menu-item key="2-2-1" name="person">
                  <a href="#">人物</a>
                </Menu-item>
                <Menu-item key="2-2-2" name="sights">
                  <a href="#">风景</a>
                </Menu-item>
                <Menu-item key="2-2-3" name="animals">
                  <a href="#">动物</a>
                </Menu-item>
                <Menu-item key="2-2-4" name="flowers">
                  <a href="#">花卉</a>
                </Menu-item>
                <Menu-item key="2-2-5" name="others">
                  <a href="#">其它</a>
                </Menu-item>
              </Menu-group>
            </Submenu>
            <Menu-item key="3" name="shoppingCar">
              <Icon type="ios-cart" color="#99CCCC" size="16"></Icon>
              购物车
              <span>[{{number}}]</span>
            </Menu-item>
            <Submenu key="4" name="favorite">
              <template slot="title">
                <Icon type="ios-heart" color="red" size="16"></Icon>
                收藏夹</template>
              <Menu-item key="4-1" name="goods">
                <a href="#">收藏的物品</a>
              </Menu-item>
              <Menu-item key="4-2" name="shop">
                <a href="#">收藏的店铺</a>
              </Menu-item>
            </Submenu>
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
