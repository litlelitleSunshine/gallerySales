<template>
    <Carousel autoplay loop id="carousel">
        <CarouselItem>
            <div class="demo-carousel" @click="openChineseSource">国画的起源，了解一下？</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" @click="openAncientPoetry">如诗如画，如画亦如诗</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" @click="openStory">仿佛兮若轻云之蔽月，飘飘兮若流风之回雪</div>
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
 color:#fff;
 font-size:20px;
 background:#506b9e;
 font-family: STLiti;
}
#carousel {
  margin-top: 30px;
}
</style>
