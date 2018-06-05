<template>
  <div id="show-item">
    <Row>
      <Col span="20" offset="2">
    <div class="search">
      <Row>
        <Col span="3" offset="3">
        <span>Discovery</span>
          </Col>
        <Col span="12">
          <Input placeholder="请输入商品名称" icon="ios-search" clearable size="large"/>
        </Col>
      </Row>
    </div>
    <div class="carousel">
      <carousel></carousel>
    </div>
    <div class="filter">
      <h2>搜索条件</h2>
      <div class="all-search">
        <Checkbox v-model="filter.all">全部</Checkbox>
      </div>
      <div class="form-search">
        <span class="classify-title">按形式分类</span>
        <Checkbox v-model="filter.oilPainting">油画</Checkbox>
        <Checkbox v-model="filter.printPainting">版画</Checkbox>
        <Checkbox v-model="filter.chinesePainting">国画</Checkbox>
        <Checkbox v-model="filter.waterPainting">水彩</Checkbox>
        <Checkbox v-model="filter.calligraphy">书法</Checkbox>
        <Checkbox v-model="filter.photos">摄影</Checkbox>
        <Checkbox v-model="filter.formOthers">其它</Checkbox>
      </div>
      <div class="content-search">
        <span class="classify-title">按内容分类</span>
        <Checkbox v-model="filter.persons">人物</Checkbox>
        <Checkbox v-model="filter.sights">风景</Checkbox>
        <Checkbox v-model="filter.animals">动物</Checkbox>
        <Checkbox v-model="filter.flowers">花卉</Checkbox>
        <Checkbox v-model="filter.contentOthers">其它</Checkbox>
      </div>
      <div class="search-button">
        <Button type="primary" shape="circle" icon="ios-search" size="large">搜索</Button>
      </div>
    </div>
    <div class="show-item">
      <ul class="show-wrapper">
        <li class="show-content" v-for="(img, index) in imgs" :class="{'shadows': index === current }" :key="img.goodsId" @mouseover="addShadows(index)" @mouseout="deleteShadows">
          <img :src="img.src" @click="shoppingView(img.goodsId)"/>
        </li>
      </ul>
    </div>
    </Col>
    </Row>
    <Modal v-model="displayModal" :title="viewShopping.title" class="detail-modal">
      <Row class="item">
        <Col span="24">
      <div class="img-wrap">
        <img :src="viewShopping.src" alt="picture">
      </div>
        </Col>
      </Row>
      <Row class="item">
        <Col span="2">
        <Icon type="ios-heart" size="20" :color="collectsColor" @click="collects"></Icon>
        </Col>
        <Col span="2" class="first-field">作者:</Col>
        <Col span="16">{{viewShopping.author}}</Col>
      </Row>
      <Row class="item">
        <Col span="2" class="first-field">简介:</Col>
        <Col span="22">{{viewShopping.description}}</Col>
      </Row>
      <Row class="item">
        <Col span="12">
        <Row>
        <Col span="4" class="first-field">单价:</Col>
        <Col span="20">{{viewShopping.price}}</Col>
        </Row>
        </Col>
        <Col span="12">
        <Row>
        <Col span="4" class="first-field">数量:</Col>
        <Col span="20">{{viewShopping.number}}</Col>
        </Row>
        </Col>
      </Row>
      <div slot="footer">
            <Button type="primary" size="large" long  @click="goShopping">购买</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import carousel from './carousel'
import picture from '../js/picture'
import gallery from '../js/share'
import user from '../js/user'

export default {
  name: 'show',
  components: { carousel },
  data () {
    return {
      filter: {
        all: false,
        oilPainting: false,
        printPainting: false,
        chinesePainting: false,
        waterPainting: false,
        calligraphy: false,
        photos: false,
        formOthers: false,
        persons: false,
        sights: false,
        animals: false,
        flowers: false,
        contentOthers: false
      },
      current: '',
      imgs: picture.img,
      user: user,
      collectsColor: '',
      displayModal: false,
      viewShopping: ''
    }
  },
  mounted () {
  },
  methods: {
    // 绑定模态框数据
    shoppingView (id) {
      let source = gallery.findSource(id, picture.img, 'goodsId')
      this.displayModal = true
      this.viewShopping = source
    },
    collects () {
    },
    goShopping () {
      const self = this
      if (!user.isLogin) {
        this.$Message.info({
          content: '您暂未登录，请先登录！',
          duration: 3})
      } else {
        if (!gallery.checkArr(self.viewShopping.goodsId, user.order)) {
          user.order.push(this.viewShopping)
          user.totalNumber++
        }
        this.$router.push({
          path: '/order'
        })
      }
    },
    addShadows (index) {
      this.current = index
    },
    deleteShadows () {
      this.isActive = false
    }
  }
}
</script>

<style>

/* search input style */
#show-item .search{
  margin-top: 20px;
}

#show-item .search span{
  font-size: 30px;
  line-height: 36px;
  font-family: STLiti;
  color: white
}

/* classify style */
#show-item .filter {
  /* margin-top: 40px; */
  background: white;
  padding: 10px 30px;
}
#show-item .filter .all-search,
#show-item .filter .form-search,
#show-item .filter .content-search{
  margin-top: 20px;
}

#show-item .filter .classify-title{
  font-size: 16px;
  margin-right: 20px
}

#show-item .filter .ivu-checkbox-wrapper{
  margin-right: 40px;
  font-size: 16px;
}

#show-item .search-button{
  margin-top: 20px;
  margin-bottom: 20px
}

/* show-item style */
#show-item .show-item .show-wrapper{
background: white;
padding: 0 80px;
margin-top:125px;
}
#show-item .show-item .show-wrapper .show-content{
  list-style: none;
  display: inline-flex;
  height: 300px;
  width: 300px;
  margin-left: 10px;
}
#show-item .show-item .show-wrapper .show-content img
{
display: block;
width: 100%;
height: 100%;
object-fit:contain;
}
.shadows {
  box-shadow: 5px 5px 5px #778899;
}

/* modal style */
.ivu-modal {
  margin-top: -60px;
}
.detail-modal .img-wrap {
width: 100%;
display: flex;
justify-content: center;
}
.detail-modal .first-field{
  color: blue;
  font-size: 14px;
}

.detail-modal .item {
  margin-top: 10px;
}
</style>
