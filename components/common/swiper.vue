<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in imgList" :key="index">
        <img :src="banner.src" style="width:100%">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        initialSlide: 1,
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination',
        paginationElement: 'li',
        onSlideChangeEnd: swiper => {}
      }
    }
  },
  props: ['imgList'],
  mounted () {}
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  .swiper-wrapper {
    width: 100%;
    .swiper-slide {
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>