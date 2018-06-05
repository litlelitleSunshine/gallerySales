<template>
    <Carousel autoplay loop id="carousel">
        <CarouselItem>
            <div class="demo-carousel" @click="openChineseSource" style="color:red">国画的起源，了解一下？</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" @click="openAncientPoetry" style="color:#FA8072">诗是画？亦是画是诗?</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" @click="openStory">
              悼良会之永绝兮，哀一逝而异乡&nbsp;&nbsp;&nbsp;&nbsp;——洛神赋
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
export default {
  name: 'carousel',
  methods: {
    openChineseSource () {
      this.$router.push({
        path: '/chineseSource'
      })
    },
    openAncientPoetry () {
      this.$router.push({
        path: '/ancientPoetry'
      })
    },
    openStory () {
      this.$router.push({
        path: '/story'
      })
    }
  }
}
</script>

<style>
#carousel .demo-carousel {
 height:200px;
 line-height:200px;
 text-align:center;
 color:#FFFACD;
 font-size:30px;
 background:#506b9e;
 font-family: STLiti;
}
#carousel {
  margin-top: 30px;
}

#carousel .demo-carousel .litleTitle {
  font-size: 20px;
}
</style>
