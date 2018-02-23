<template>
  <section class="container">
    <!-- 资产总额 -->
    <div class="my_assets">
      <div class="my_assets_total">
        <p class="my_assets_total_title">资产总额（元）</p>
        <p class="my_assets_total_money">1,000.00</p>
        <p class="my_assets_total_income">累计收益（元）:100.00</p>
      </div>
    </div>
    <!-- 账户余额 -->
    <div class="my_balance">
      <ul>
        <li class="my_balance_list">
          <p class="my_balance_list_title">账户余额（元）</p>
          <div class="my_balbance_list_income">
            <p class="my_balbance_list_income_title">1000.00</p>
            <p class="my_balbance_list_income_content">累计收益（元）：0.20</p>
          </div>
        </li>
        <li class="my_balance_list">
          <p class="my_balance_list_title">待收本金（元）</p>
          <div class="my_balbance_list_income">
            <p class="my_balbance_list_income_title">1000.00</p>
            <p class="my_balbance_list_income_content">预测待收收益（元）：0.20</p>
          </div>
        </li>
        <li class="my_balance_list">
          <p class="my_balance_list_title">冻结金额（元）</p>
          <div class="my_balbance_list_income">
            <p class="my_balbance_list_income_title">1000.00</p>
            <p class="my_balbance_list_income_content"></p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  head () {
    return {
      title: '账户详情'
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
  .my_assets{
    .my_assets_total{
      background-color: white;
      text-align: center;
      padding: 0.2rem 0;
      color: #333;
      margin-bottom: 0.1rem;
      .my_assets_total_title{
        font-size: 0.16rem;
        line-height: 0.16rem;
      }
      .my_assets_total_money{
        font-size: 0.2rem;
        line-height: 0.2rem;
        margin: 0.1rem 0;
      }
      .my_assets_total_title{
        font-size: 0.14rem;
        line-height: 0.14rem;
      }
    }
  }
  .my_balance{
    .my_balance_list{
      padding: 0.2rem;
      display: flex;
      justify-content: space-between;
      background-color: white;
      border-bottom: 1px solid #999999;
      align-items: center;
      .my_balance_list_title{
        font-size: 0.14rem;
      }
      .my_balbance_list_income{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .my_balbance_list_income_title{
          font-size: 0.18rem;
        }
      }
    }
  }
}
</style>