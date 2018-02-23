<template>
  <!--confirm-->
  <transition name="fade2">
    <div class="confirmBox" v-show="show">
      <transition name="fade">
        <div class="confirm" v-show="show">
          <h1>{{message}}</h1>
          <div class="optionList">
            <span v-for="(item,index) in optionList" @click="onClickOption(index)" :key="index">{{item.name}}</span>
          </div>
        </div>
      </transition>
    </div>
  </transition>
  <!---->
</template>
<script>
export default {
  data () {
    return {
      message: '你是不是没吃饭？',
      show: false,
      optionList: [
        {
          name: '是的',
          callback: '1'
        },
        {
          name: '不是',
          callback: '2'
        }
      ]
    }
  },
  props: ['confirmShow'],
  created () {
    console.log(this.confirmShow)
  },
  watch: {
    confirmShow (curVal, oldVal) {
      console.log('123')
      this.show = this.confirmShow
    }
  },
  methods: {
    onClickOption (e) {
      alert(this.optionList[e].callback)
    }
  }
}
</script>
<style lang="scss" scoped>
.confirmBox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  .confirm {
    width: 70%;
    padding: 0.3rem 0;
    box-sizing: border-box;
    background: #fff;
    border-radius: 0.1rem;
    position: relative;
    h1 {
      font-size: 0.125rem;
      text-align: center;
      padding-bottom: 0.4rem;
      font-weight: 200;
      letter-spacing: 0.005rem;
    }
    .optionList {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #cecece;
      position: absolute;
      left: 0;
      bottom: 0;
      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #cecece;
        padding: 0.1rem 0;
      }
      span:last-child {
        border: none;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: rotateX(90deg);
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.5s;
}

.fade2-enter,
.fade2-leave-to {
  opacity: 0;
}
</style>