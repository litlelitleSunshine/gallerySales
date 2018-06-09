import oil2 from '@/img/oil2.jpg'
import oil4 from '@/img/oil4.jpg'
import chinese1 from '@/img/chinese1.jpg'
import print1 from '@/img/print1.jpg'

import animal from '@/img/animal.jpg'
import cat from '@/img/cat.jpg'
import chinese from '@/img/chinese.jpg'
import dog from '@/img/dog.jpg'
import flower from '@/img/flower.jpg'
import oil from '@/img/oil.jpg'
import person from '@/img/person.jpg'
import photo from '@/img/photo.jpg'
import print from '@/img/print.jpg'
import shufa from '@/img/shufa.jpg'
import shufaa from '@/img/shufaa.jpg'
import sights from '@/img/sights.jpg'
import watercolor from '@/img/watercolor.jpg'

import chineseAnimal from '@/img/chinese-animal.jpg'
import chineseFlower from '@/img/chinese-flower.jpg'
import chinesePerson from '@/img/chinese-person.jpg'
import chineseSights from '@/img/chinese-sights.jpg'

import oilAnimal from '@/img/oil-animal.jpg'
import oilFlower from '@/img/oil-flower.jpg'
import oilPerson from '@/img/oil-person.jpg'
import oilSights from '@/img/oil-sights.jpg'

import photoAnimal from '@/img/photo-animal.jpg'
import photoFlower from '@/img/photo-flower.jpg'
import photoPerson from '@/img/photo-person.jpg'
import photoSights from '@/img/photo-sights.jpg'

import printAnimal from '@/img/print-animal.jpg'
import printFlower from '@/img/print-flower.jpg'
import printPerson from '@/img/print-person.jpg'
import printSights from '@/img/print-sights.jpg'

import watercolorAnimal from '@/img/watercolor-animal.jpg'
import watercolorFlower from '@/img/watercolor-flower.jpg'
import watercolorPerson from '@/img/watercolor-person.jpg'
import watercolorSights from '@/img/watercolor-sights.jpg'

// 图片列表
var picture = {}

// *id:所属人id
// *goodsId：商品id
// author:作者
// *price:单价
// description：描述
// *status：状态 1-在售2-已售3-已下架
// *title：题目
// *number：数量
// *phone: 所属卖家电话
// type1：形式分类 0-其它1-油画2-版画3-国画4-水彩5-书法6-摄影
// type2： 内容分类 0-其它1-人物2-风景3-动物4-花卉
// *src: 商品存放地址

picture.img = [{
  id: 1,
  goodsId: 1,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: chineseAnimal
},
{
  id: 1,
  goodsId: 2,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: chineseFlower
},
{
  id: 1,
  goodsId: 3,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: chinesePerson
},
{
  id: 1,
  goodsId: 4,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: chineseSights
},
{
  id: 1,
  goodsId: 5,
  author: '一久',
  price: 3000,
  description: '天苍苍，野茫茫，风吹草低见牛羊。美丽而辽阔的草原，是心中飞驰的远方；袅袅炊烟，人间烟火，是可以看得见的温暖。这幅画中虽然没有辽阔的草原，但是溪河搭配草地和人间烟火，无不是个缩小版的草原和人间烟火。大抵，诗和远方的生活就是如此吧。',
  status: 1,
  title: '诗和远方',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 3,
  src: oilAnimal
},
{
  id: 1,
  goodsId: 6,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: oilFlower
},
{
  id: 1,
  goodsId: 7,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: oilPerson
},
{
  id: 1,
  goodsId: 8,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: oilSights
},
{
  id: 1,
  goodsId: 9,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: photoAnimal
},
{
  id: 1,
  goodsId: 10,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: photoFlower
},
{
  id: 1,
  goodsId: 11,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: photoPerson
},
{
  id: 1,
  goodsId: 12,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: photoSights
},
{
  id: 1,
  goodsId: 13,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: printAnimal
},
{
  id: 1,
  goodsId: 14,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: printFlower
},
{
  id: 1,
  goodsId: 15,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: printPerson
},
{
  id: 1,
  goodsId: 16,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: printSights
},
{
  id: 1,
  goodsId: 17,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: watercolorAnimal
},
{
  id: 1,
  goodsId: 18,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: watercolorFlower
},
{
  id: 1,
  goodsId: 19,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: watercolorPerson
},
{
  id: 1,
  goodsId: 20,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: watercolorSights
},
{
  id: 1,
  goodsId: 21,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: oil2
},
{
  id: 1,
  goodsId: 22,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: oil4
},
{
  id: 1,
  goodsId: 23,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: chinese1
},
{
  id: 1,
  goodsId: 24,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: print1
},
{
  id: 1,
  goodsId: 25,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: animal
},
{
  id: 1,
  goodsId: 26,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: cat
},
{
  id: 1,
  goodsId: 27,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: chinese
},
{
  id: 1,
  goodsId: 28,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: dog
},
{
  id: 1,
  goodsId: 29,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: flower
},
{
  id: 1,
  goodsId: 30,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: oil
},
{
  id: 1,
  goodsId: 31,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: person
},
{
  id: 1,
  goodsId: 32,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: photo
},
{
  id: 1,
  goodsId: 33,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: print
},
{
  id: 1,
  goodsId: 34,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: shufa
},
{
  id: 1,
  goodsId: 35,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: shufaa
},
{
  id: 1,
  goodsId: 36,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: sights
},
{
  id: 1,
  goodsId: 37,
  author: '张三',
  price: 3000,
  description: '',
  status: 1,
  title: '落日啊',
  number: 1,
  phone: '13245670980',
  type1: 1,
  type2: 1,
  src: watercolor
}
]
export default picture
