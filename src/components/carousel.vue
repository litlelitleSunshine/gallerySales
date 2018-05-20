<template>
    <Carousel autoplay loop id="carousel">
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style>
#carousel .demo-carousel {
 height:200px;
 line-height:200px;
 text-align:center;
 color:#fff;
 font-size:20px;
 background:#506b9e
}
#carousel {
  margin-top: 30px;
}
</style>
