<template>
  <section class="container">
    <banner :imgList="imgList"></banner>
    <div class="news-box">
      <span class="iconfont icon-sound"></span><span  @click="onClickOption()">公告</span>
      <p @click="consoleTodo()">【2017-11-09】关于近期部分银行维护的通知
      </p>
      <nuxt-link :to="`/`" class="more" @click="consoleTodo()">更多</nuxt-link>
    </div>
    <div class="abouts-box">
      <ul>
        <li><span class="iconfont icon-yinhang"></span>
          <h3>安全保障</h3>
        </li>
        <li><span class="iconfont icon-zhengxinzhaopian-copy"></span>
          <h3>活动中心</h3>
        </li>
        <li><span class="iconfont icon-yinxing"></span>
          <h3>邀请好友</h3>
        </li>
      </ul>
    </div>
    <div class="project">
      <p class="pro-top">
        <span class="pro-title">精品项目</span>
        <nuxt-link :to="`/`" class="pro-more">更多</nuxt-link>
      </p>
      <div class="swiper-box">
        <pro-banner :imgList="imgList"></pro-banner>
      </div>
    </div>
    <div class="project">
      <p class="pro-top">
        <span class="pro-title">成功项目</span>
        <nuxt-link :to="`/`" class="pro-more">更多</nuxt-link>
      </p>
      <div class="swiper-box">
        <spro-banner :imgList="imgList"></spro-banner>
      </div>
    </div>
    <div class="invest-total">
      <ul>
        <li class="invest">
          <p class="invest-title">累计投资金额</p>
          <p class="invest-content">201000</p>
        </li>
        <li class="invest">
          <p class="invest-title">累计投资人数（次）</p>
          <p class="invest-content">3200</p>
        </li>
      </ul>
    </div>
    <test></test>
    <!-- <confirm :confirmShow="boxShow"></confirm> -->
  </section>
</template>
<script>
// import axios from '~/plugins/axios'
import banner from '~/components/common/swiper'
import proBanner from '~/components/home/swiper'
import sproBanner from '~/components/home/sswiper'
// import popup from '~/components/common/popup'
import login from '~/components/login/login'
import { mapMutations } from 'vuex'
// import axios from '~/plugins/axios'

const testDiv = {
  template: '<div>{{msg}}</div>',
  data: function () {
    return {msg: '一个局部组件在这里'}
  }
}
export default {
  // 获得地区列表
  // asyncData ({ params, error }) {
  //   return axios.get('/api/location')
  //     .then((res) => {
  //       console.info('res', res)
  //       return { user: res.data }
  //     })
  //     .catch((e) => {
  //       error({ statusCode: 404, message: 'User not found' })
  //     })
  // },
  components: {
    banner,
    // confirm: popup,
    proBanner,
    sproBanner,
    test: testDiv,
    login
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
    // this.onClickOption()
  },
  mounted () {
    this.boxShow = true
    console.info('aaa', this.$store.state.todos)
  },
  methods: {
    onClickOption () {
      // this.boxShow = true
      // this.$store.commit('consoleTodo')
    },
    ...mapMutations([
      'consoleTodo'
    ])
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin-bottom: 0.6rem;
  .news-box {
    width: 100%;
    padding: 0.125rem 0.05rem;
    line-height: 0.15rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 0.075rem;
    background: #fff;
    box-sizing: border-box;
    overflow: hidden;
    span {
      float: left;
      padding: 0 0.025rem;
    }
    p {
      color: #666;
      float: left;
    }
    .more{
      float: right;
      color: #666;
    }
  }
  .abouts-box {
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
  .project{
    margin-top: 0.05rem;
    background: #ffffff;
    .pro-top{
      overflow: hidden;
      padding: 0.07rem 0.15rem;
    }
    .pro-title{
      float: left;
      color: #333333;
      font-size: 0.07rem;
    }
    .pro-more{
      float: right;
      color: #999999;
      font-size: 0.06rem;
    }
    .swiper-box{
      padding: 0 0.15rem;
    }
  } 
  .invest-total{
    background-color: white;
    margin: 0.05rem 0;
    ul{
      display: flex;
      justify-content: space-between;
    }
    .invest{
      padding: 0.15rem;
      text-align: center;
    }
  }
  .proList {
    width: 100%;
    padding: 0.075rem 0;
    margin-bottom: 0.5rem;
    .item {
      width: 100%;
      background: #fff;
      padding: 0.05rem;
      box-sizing: border-box;
      margin-bottom: 0.1rem;
      h1 {
        width: 100%;
        font-size: 0.15rem;
        font-weight: 400;
        letter-spacing: 0.005rem;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.1rem;
        .tag {
          border: 1px solid #3d94dc;
          padding: 0.015rem 0.05rem;
          border-radius: 4px;
          color: #3d94dc;
          margin-left: 5px;
          font-size: 12px;
        }
      }
      .moneyRate {
        width: 100%;
        font-size: 0.1rem;
        text-align: center;
        display: block;
        margin-top: 0.1rem;
        color: #989898;
      }
      p {
        font-size: 0.4rem;
        color: #ee3755;
        text-align: center;
        em {
          font-size: 0.2rem;
          font-style: normal;
          margin-left: -10px;
        }
      }
      .proInfo {
        width: 100%;
        display: flex;
        margin-top: 10px;
        li {
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          flex-direction: column;
          span {
            font-size: 0.3rem;
            font-weight: 400;
            color: #666666;
            letter-spacing: 0.5px;
            em {
              font-size: 0.14rem;
            }
          }
          span:last-child {
            font-weight: 200;
            font-size: 14px;
          }
        }
      }
      .bidForBtn {
        width: 75%;
        margin: 20px auto;
        line-height: 0.8rem;
        background: #3793df;
        font-size: 14px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
      }
    }
  }
}
</style>