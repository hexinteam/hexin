<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in imgList" :key="index">
        <img :src="banner.src" style="width:100%">
        <div class="describe">
          <p class="des-title">西安精品公寓融资</p>
          <p class="des-content">这里每间房间都是被定格的一张风景明信片</p>
        </div>
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
        // autoplay: 2000,
        initialSlide: 0,
        direction: 'horizontal',
        // loop: true,
        // pagination: '.swiper-pagination',
        // paginationElement: 'li',
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
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
      width: 3.1rem;
      .describe{
        padding-bottom: 0.05rem;
        margin-bottom: 0.1rem;
        background-color: palegoldenrod;
        .des-title{
          color: #666666;
          font-size: 0.14rem;
          text-indent: 0.05rem;
          padding: 0.02rem 0;
        }
        .des-content{
          color: #666666;
          font-size: 0.12rem;
          text-indent: 0.05rem;
        }
      }
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>