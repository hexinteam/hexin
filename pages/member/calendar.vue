<template>
  <section class="container">
    <!-- 我的日历 -->
    <div class="my_calendar">
      <DatePicker type="date" placeholder="Select date" style="width: 200px" open="open"></DatePicker>
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
      open: true
    }
  }
}
</script>
<style lang="scss">
.container {
  .ivu-date-picker{
    display:inherit;
    .ivu-input-wrapper{
      display: none;
    }
    .ivu-select-dropdown{
      margin: 0;
      .ivu-date-picker-header{
        height: 0.4rem;
        line-height: 0.4rem;
        .ivu-picker-panel-icon-btn{
          margin-top: 0.08rem;
        }
      }
      .ivu-date-picker-cells-header span{
        width: 0.5357rem;
        height: 0.5357rem;
        line-height: 0.5357rem;
        text-align: center;
        margin: 0;
      }
      .ivu-date-picker-cells{
        width: 100%;
        margin: 0;
        span.ivu-date-picker-cells-cell{
          width: 0.5357rem;
          height: 0.5357rem;
          line-height: 0.5357rem;
          text-align: center;
        }
      }
    }
  }

}
</style>