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
        <li class="show-content" v-for="img in imgs" :key="img.id">
          <img :src="img.src" @click="shoppingView(img.id)"/>
        </li>
      </ul>
    </div>
    </Col>
    </Row>
    <Modal v-model="viewShopping.display" :title="viewShopping.title">
      <div class="img-wrap">
        <img :src="viewShopping.src" alt="picture">
      </div>
      <ul class="info-wrap">
        <li>作者
          <p>{{viewShopping.author}}</p>
        </li>
        <li>简介
          <p>{{viewShopping.description}}</p>
        </li>
        <li>单价
          <p>{{viewShopping.price}}</p>
        </li>
      </ul>
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
      imgs: picture.img,
      viewShopping: {
        display: false,
        title: '',
        src: '',
        author: '',
        description: '',
        price: '',
        number: 1
      }
    }
  },
  methods: {
    shoppingView (id) {
      var self = this
      let source = gallery.findSource(id, self.imgs)
      self.viewShopping.display = true
      self.viewShopping = Object.assign({}, self.viewShopping, source)
    },
    goShopping () {
      var self = this
      if (!user.login) {
        this.$Message.info({
          content: '您暂未登录，请先登录！',
          duration: 3})
      } else {
        user.order.push(self.viewShopping)
        this.$router.push({
          path: '/order'
        })
      }
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
margin-top:125px;
background: white;
}
#show-item .show-item .show-wrapper .show-content{
  list-style: none;
  display: inline-flex;
  height: 300px;
}
#show-item .show-item .show-wrapper .show-content img
{
display: block;
width: 100%;
height: 100%;
object-fit:contain;
}
</style>
