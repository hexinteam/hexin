<template>
  <section class="container">
    <!-- 资产明细 -->
    <div class="my_funding">
      <ul>
        <li class="my_funding_list" v-for="(funding, index) in fundingList" :key="index">
          <div class="my_funding_list_box_l">
            <p>
              <span class="my_funding_list_box_l_top">{{funding.funding_top}}</span>
              <span class="my_funding_list_box_l_status">{{funding.funding_status}}</span>
            </p>
            <p class="my_funding_list_box_l_date">{{funding.funding_date}}</p>
          </div>
          <div class="my_funding_list_box_r">
            <p class="my_funding_list_box_r_money">{{funding.funding_money}}</p>
            <p class="my_funding_list_box_r_balance">余额{{funding.funding_balance}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 账户余额 -->
  </section>
</template>
<script>
export default {
  head () {
    return {
      title: '资金明细'
    }
  },
  mounted () {
    console.info(11)
  },
  data () {
    return {
      fundingList: [
        {
          funding_top: '充值',
          funding_status: '交易中',
          funding_date: '2017-10-05 09:25:05',
          funding_money: '+1,000.00',
          funding_balance: '1,500.00'
        },
        {
          funding_top: '提现',
          funding_status: '交易失败',
          funding_date: '2017-10-05 09:25:05',
          funding_money: '-200.00',
          funding_balance: '1,500.00'
        },
        {
          funding_top: '投资',
          funding_status: '交易中',
          funding_date: '2017-10-05 09:25:05',
          funding_money: '-1,000.00',
          funding_balance: '1,500.00'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .my_funding{
    .my_funding_list{
      display: flex;
      height: 0.8rem;
      padding: 0 0.2rem;
      margin-bottom: 0.1rem;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      .my_funding_list_box_l{
        .my_funding_list_box_l_top{
          font-size: 0.14rem;
          color: #333333;
        }
        .my_funding_list_box_l_status{
          color: white;
          font-size: 0.12rem;
          border-radius: 0.08rem;
          padding: 0.03rem;
          margin-left: 0.1rem;
          background-color: orange;
        }
        .my_funding_list_box_l_date{
          font-size: 0.12rem;
          line-height: 0.12rem;
          margin-top: 0.1rem;
        }
      }
      .my_funding_list_box_r{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
  }
}
</style>