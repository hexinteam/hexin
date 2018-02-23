<template>
  <section class="container">
    <!-- 资产明细 -->
    <div class="my_invest">
      <div class="invest_total">
        <ul>
          <li class="invest_total_list">
            <p class="invest_total_list_title">待收本金(元）</p>
            <p class="invest_total_list_content">5000</p>
          </li>
          <li class="invest_total_list">
            <p class="invest_total_list_title">待收收益(元）</p>
            <p class="invest_total_list_content">5.00</p>
          </li>
        </ul>
      </div>
      <div class="my_invest_tabs">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">全部</mt-tab-item>
          <mt-tab-item id="2">持有中</mt-tab-item>
          <mt-tab-item id="3">已回款</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div class="my_invest_tabs_box" v-for="(value, index) in 3" :title="'content ' + value" :key="index">
              <p class="my_invest_tabs_top">
                <span class="my_invest_tabs_top_site">上海精品酒店融资</span>
                <span class="my_invest_tabs_top_money">5,000元</span>
              </p>
              <p class="my_invest_tabs_bottom">
                <span class="my_invest_tabs_bottom_date">2018-02-25</span>
                <span class="my_invest_tabs_bottom_status">还款中</span>
              </p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="my_invest_tabs_box" v-for="(value, index) in 3" :title="'content ' + value" :key="index">
              <p class="my_invest_tabs_top">
                <span class="my_invest_tabs_top_site">上海精品酒店融资</span>
                <span class="my_invest_tabs_top_money">5,000元</span>
              </p>
              <p class="my_invest_tabs_bottom">
                <span class="my_invest_tabs_bottom_date">2018-02-25</span>
                <span class="my_invest_tabs_bottom_status">还款中</span>
              </p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class="my_invest_tabs_box" v-for="(value, index) in 3" :title="'content ' + value" :key="index">
              <p class="my_invest_tabs_top">
                <span class="my_invest_tabs_top_site">上海精品酒店融资</span>
                <span class="my_invest_tabs_top_money">5,000元</span>
              </p>
              <p class="my_invest_tabs_bottom">
                <span class="my_invest_tabs_bottom_date">2018-02-26</span>
                <span class="my_invest_tabs_bottom_status">还款中</span>
              </p>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </section>
</template>
<script>
import { Tabs, TabPane, Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui'

export default {
  components: {
    'Tabs': Tabs,
    'TabPane': TabPane,
    'mt-navbar': Navbar,
    'mt-tab-item': TabItem,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-cell': Cell
  },
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
      selected: '1',
      active: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .my_invest{
    .invest_total{
      background-color: white;
      margin-bottom: 0.05rem;
      ul{
        display: flex;
        justify-content: space-between;
      }
      .invest_total_list{
        padding: 0.15rem;
        text-align: center;
      }
    }
    .my_invest_tabs{
      .mint-tab-item.is-selected{
        margin-bottom: 0px;
      }
    }
  }
  .my_tabs{
    .ivu-tabs-bar{
      .ivu-tabs-nav{
        width: 100%;
        .ivu-tabs-ink-bar{
          width: 1.22rem;
        }
        .ivu-tabs-tab{
          
          width: 33.333%;
          padding: 0;
          text-align: center;
          margin-right: 0;
          &:nth-last-child(1){
            margin-right: 0;
          }
        }
      }
    }
  }
  .my_invest_tabs_box{
    display: flex;
    flex-direction: column;
    height: 0.6rem;
    justify-content: center;
    margin-bottom: 0.1rem;
    background-color: white;
  }
  .my_invest_tabs_top{
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    background-color: white;
    .my_invest_tabs_top_site{
      font-size: 0.14rem;
    }
    .my_invest_tabs_top_money{
      font-size: 0.12rem;
    }
  }
  .my_invest_tabs_bottom{
    display: flex;
    justify-content: space-between;
    padding: 0 0.1rem;
    background-color: white;
    .my_invest_tabs_bottom_date{
      font-size: 0.14rem;
    }
    .my_invest_tabs_bottom_status{
      font-size: 0.12rem;
    }
  }
}
</style>