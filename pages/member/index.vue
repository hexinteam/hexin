<template>
  <section class="container">
    <!-- 用户信息 -->
    <div class="my_header">
      <div class="my_header_user">
        <div class="my_header_user_msg">
          <img  class="my_header_user_msg_logo" src="/html5/img/my/my_icon.png">
          <i>15110296260</i>
          <nuxt-link :to="`/member`" class="my_header_user_msg_vip">
            <img src="/html5/img/my/my_icon.png">
          </nuxt-link>
        </div>
        <div class="my_header_user_account">
          <p class="my_header_user_account_title">资产总额（元）</p>
          <p class="my_header_user_account_money">1000</p>
          <nuxt-link :to="`/member/assets`" class="my_header_user_account_detail">
            <p>查看账户详情</p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- 余额信息 -->
    <section class="my_section">
      <ul class="my_balbance">
        <li class="balbance balbance_s1">
          <p class="balbance_title">可用余额（元）</p>
          <p class="balbance_money">1000</p>
        </li>
        <li class="balbance balbance_s2">
          <nuxt-link :to="`/`" class="balbance_withdraw">充值</nuxt-link>
          <nuxt-link :to="`/`" class="balbance_recharge">提现</nuxt-link>
        </li>
      </ul>
    </section>
    <!-- 福利 积分 邀请好友 -->
    <section class="my_section">
      <ul class="integral">
        <li class="integral_item">
          <nuxt-link :to="`/`">
            <p class="integral_item_detail">2张</p>
            <p class="integral_item_title">福利券</p>
            <p class="integral_item_describe">收益up</p>
          </nuxt-link>
        </li>
        <li class="integral_item">
          <nuxt-link :to="`/`">
            <p class="integral_item_detail">2张</p>
            <p class="integral_item_title">积分</p>
            <p class="integral_item_describe">对心动好礼</p>
          </nuxt-link>
        </li>
        <li class="integral_item">
          <nuxt-link :to="`/`">
            <p class="integral_item_detail">2张</p>
            <p class="integral_item_title">邀请好友</p>
            <p class="integral_item_describe">邀友返现</p>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <!-- 资金明细 我的投资 汇款日历 -->
    <section class="my_section">
      <ul class="my_cate">
        <li class="my_cate_item">
          <nuxt-link :to="`/member/assets`">
            资金明细
            <i class="my_cate_item_arrow">></i>
          </nuxt-link>
        </li>
        <li class="my_cate_item">
          <nuxt-link :to="`/member/investment`">
            我的投资
            <i class="my_cate_item_arrow">></i>
          </nuxt-link>
        </li>
        <li class="my_cate_item">
          <nuxt-link :to="`/member/calendar`">
            回款日历
            <i class="my_cate_item_arrow">></i>
          </nuxt-link>
        </li>
      </ul>
    </section>
  </section>
</template>
<script src='//kefu.easemob.com/webim/easemob.js?configId=4532b3f0-c701-4df6-aad4-696052f13807'></script>
<script>
export default {
  head () {
    return {
      title: '我的'
    }
  },
  mounted () {
    console.info(11)
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  h1 {
    width: 100%;
  }
  .my_header {
    width: 100%;
    height: 1.9rem;
    background-image: url('../../static/img/person_bg_blue.png');
    // background-color: pink;
    background-size: 100% 100%;
    .my_header_user {
      padding-top: 0.13rem;
      .my_header_user_msg {
        height: 0.31rem;
        display: flex;
        align-items: center;
        font-size: 0.15rem;
        .my_header_user_msg_logo {
          width: 0.31rem;
          height: 0.31rem;
          border-radius: 50%;
          display: inline-block;
          margin: 0 0.1rem;
          background-color: burlywood;
        }
        i {
          color: #fcfdff;
          vertical-align: top;
        }
        .my_header_user_msg_vip{
          display: flex;
          img{
            width: 0.31rem;
            height: 0.31rem;
            border-radius: 50%;
            display: inline-block;
            margin: 0 0.1rem;
            background-color: burlywood;
          }
        }
      }
    }
    .my_header_user_account{
      text-align: center;
      color: #fdfffe;
      .my_header_user_account_title{
        font-size: 0.12rem;
        line-height: 0.12rem;
        margin-top: 0.17rem;
        color: #bbe6fe;
      }
      .my_header_user_account_money{
        font-size: 0.275rem;
        margin-top: 0.15rem;
        line-height: 0.275rem;
      }
      .my_header_user_account_detail{
        color: white;
        p{
          margin-top: 0.15rem;
          font-size: 0.14rem;
          line-height: 0.15rem;
        }
      }
    }
  }
  .my_section{
    .my_balbance{
      height: 0.6rem;
      background: #fff;
      margin-top: 0.09rem;
      display: flex;
      box-shadow: 0.015rem 0.015rem 0.015rem #DFDFDF;
    }
    .balbance{
      flex: 1;
      height: 0.6rem;
      .balbance_title{
        font-size: 0.12rem;
        line-height: 0.12rem;
        color: #333333;
        margin-top: 0.05rem;
      }
      .balbance_money{
        font-size: 0.12rem;
        line-height: 0.12rem;
        color: #a1a1a1;
        margin-top: 0.05rem;
      }
      .balbance_withdraw{
        font-size: 0.14rem;
        width: 0.6rem;
        height: 0.31rem;
        line-height: 0.31rem;
        float: left;
        background: #3793e0;
        border-radius: 0.05rem;
        color: #fefefe;
        margin-right: 0.1rem;
      }
      .balbance_recharge{
        font-size: 0.14rem;
        width: 0.6rem;
        float: left;
        height: 0.30rem;
        line-height: 0.30rem;
        border: 1px solid #3793e0;
        border-radius: 0.05rem;
        color: #52a1e5;
        margin-right: 0.11rem;
      }
    }
    .balbance_s1{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .balbance_s2{
      display: flex;
      align-items: center;
      text-align: center;
      line-height: 0.6rem;
      margin-left: 1.2rem;
    }
    // 
    .integral{
      display: flex;
      padding: 0.2rem;
      text-align: center; 
      justify-content: space-between;
      background: #fff;
      margin-top: 0.09rem;
      box-shadow: 0.015rem 0.015rem 0.015rem #DFDFDF;
      .integral_item{
        color: #333333;
        .integral_item_detail{
          font-size: 0.16rem;
          line-height: 0.16rem;
          color: #333;
        }
        .integral_item_title{
          font-size: 0.14rem;
          line-height: 0.14rem;
          margin: 0.1rem 0;
          color: #333;
        }
        .integral_item_describe{
          font-size: 0.12rem;
          line-height: 0.12rem;
          color: #999999;
        }
      }
    }
    .my_cate{
      background: #fff;
      margin-top: 0.09rem;
      box-shadow: 0.015rem 0.015rem 0.015rem #DFDFDF;
      .my_cate_item{
        height: 0.5rem;
        line-height: 0.5rem;
        margin: 0 0.1rem;
        border-bottom: 1px solid #999;
        a{
          color: #666;
          height: 100%;
          width: 100%;
          display: inline-block;
          .my_cate_item_arrow{
            float: right;
          }
        }
        &:nth-last-child(1){
          border: none;
        }
      }
    }
  }
}
</style>