<template>
  <section class="container">
    <banner :imgList="imgList"></banner>
    <div class="abouts_box">
      <ul>
        <li><span class="iconfont icon-yinhang"></span>
          <h3>信息披露</h3>
        </li>
        <li><span class="iconfont icon-zhengxinzhaopian-copy"></span>
          <h3>积分商城</h3>
        </li>
        <li><span class="iconfont icon-yinxing"></span>
          <h3>客服帮助</h3>
        </li>
      </ul>
    </div>
    <!-- 热兑商品 -->
    <div class="hot_brand">
      <p class="hot_brand_head">
        <span class="hot_brand_title">热兑商品</span>
        <nuxt-link :to="`/`" class="hot_brand_more">
          <span>更多</span>
        </nuxt-link>
      </p>
      <ul class="hot_brand_box">
        <li class="hot_brand_list">
          <div class="hot_brand_detail">
            <p>
              <span class="hot_brand_detail_title">138</span>
              <span class="hot_brand_detail_content">元红包</span>
            </p>
            <p class="hot_brand_detail_describe">投资2000元以上可用</p>
          </div>
          <p class="hot_brand_detail_envelope">138元红包</p>
          <p class="hot_brand_detail_integral">200元积分</p>
        </li>
        <li class="hot_brand_list">
          <div class="hot_brand_detail">
            <p>
              <span class="hot_brand_detail_title">138</span>
              <span class="hot_brand_detail_content">元红包</span>
            </p>
            <p class="hot_brand_detail_describe">投资2000元以上可用</p>
          </div>
          <p class="hot_brand_detail_envelope">138元红包</p>
          <p class="hot_brand_detail_integral">200元积分</p>
        </li>
      </ul>
    </div>
    <!-- 头条资讯 -->
    <div class="headLines">
      <h2 class="headLines_title">头条资讯</h2>
      <div class="headLines_box">
        <img src="/" alt="">
        <div class="headLines_box_list">
          <h2 class="headLines_box_list_subtitle">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</h2>
          <p class="headLines_box_list_date">2018-01-01</p>
        </div>
      </div>
    </div>
    <confirm :confirmShow="boxShow"></confirm>
  </section>
</template>
<script>
// import axios from '~/plugins/axios'
import banner from '~/components/common/swiper'
import proBanner from '~/components/home/swiper'
import sproBanner from '~/components/home/sswiper'
import popup from '~/components/common/popup'
export default {
  components: {
    banner,
    confirm: popup,
    proBanner,
    sproBanner
  },
  head () {
    return {
      title: '索星金服'
    }
  },
  data () {
    return {
      imgList: [
        {
          url: 'http://www.baidu.com',
          src:
            'https://www.suoxing.vip/suoxing/upload/attached/image/20171110/20171110142405_522.jpg'
        },
        {
          url: 'http://www.baidu.com',
          src:
            'https://www.suoxing.vip/suoxing/upload/attached/image/20180115/20180115142140_872.png'
        },
        {
          url: 'http://www.baidu.com',
          src:
            'https://www.suoxing.vip/suoxing/upload/attached/image/20170911/20170911092850_489.jpg'
        }
      ],
      boxShow: false
    }
  },
  created () {
    this.onClickOption()
  },
  methods: {
    onClickOption () {
      this.boxShow = true
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin-bottom: 0.6rem;
  .abouts_box {
    width: 100%;
    box-sizing: border-box;
    padding: 0.15rem 0.1rem;
    background: #fff;
    ul {
      width: 100%;
      display: flex;
      li {
        width: 100%;
        text-align: center;
        span {
          color: red;
          font-size: 0.5rem;
          display: block;
          color: #ed6071;
        }
        h3 {
          display: block;
          color: #333333;
          font-weight: 200;
        }
      }
      li:first-child {
        span {
          color: #40a3f1;
        }
      }
      li:last-child {
        span {
          color: #4dd4a5;
        }
      }
    }
  }
  .hot_brand{
    margin: 0.05rem 0;
    overflow: hidden;
    .hot_brand_head{
      padding: 0 0.15rem;
      height: 0.5rem;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f3f3f3;
      .hot_brand_title{
        font-size: 0.14rem;
        color: #333333;
        font-weight: bold;
      }
      .hot_brand_more{
        font-size: 0.12rem;
        color: #333333;
      }
    }
    .hot_brand_box{
      padding-bottom: 0.05rem;
      background-color: white;  
      .hot_brand_list{
        float: left;
        width: 50%;
        padding: 0.1rem 0.2rem;
        border-right: 1px solid #F5F5F5;
        border-bottom: 1px solid #f5f5f5;
        .hot_brand_detail{
          color: white;
          background-color: lightpink;
          border-radius: 4px;
          padding: 0.1rem;
          .hot_brand_detail_title{
            font-size: 0.16rem;
          }
        }
        .hot_brand_detail_envelope{
            font-size: 0.14rem;
            line-height: 0.14rem;
            margin: 0.06rem 0;
          }
          .hot_brand_detail_integral{
            font-size: 0.14rem;
            line-height: 0.14rem;
          }
      }
    }
  }
  .headLines{
    background-color: #fff;
    padding: 0.1rem 0.2rem 0.02rem;
    .headLines_title{
      color: #333333;
      font-size: 0.16rem;
      margin-bottom: 0.08rem;
    }
    .headLines_box{
      overflow: hidden;
      img{
        float: left;
        width: 1.2rem;
        height: 0.8rem;
        background-color: #ed6071;
      }
      .headLines_box_list{
        float: left;
        width: 2rem;
        display: flex;
        height: 0.8rem;
        margin-left: 0.1rem;
        flex-direction: column;
        justify-content: space-between;
        .headLines_box_list_subtitle{
          font-size: 0.12rem;
          color: #999999;
        }
        .headLines_box_list_date{
          font-size: 0.14rem;
        }
      }
    }
  }
}
</style>