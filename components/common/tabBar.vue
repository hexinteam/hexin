<template>
  <div class="tabbar">
    <ul class="bar_list">
      <li v-for="(tab,index) in tabnav" :key="index">
        <nuxt-link :to="tab.path_url" :style="{color: tab.iconfont_color}">
          <em class="iconfont" :class="tab.icon_url"></em>
          <span>{{tab.name}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabnav: [
        {
          iconfont_color: '#69aee5',
          icon_url: 'icon-shouye',
          name: '首页',
          path_url: '/'
        },
        {
          iconfont_color: '#989898',
          icon_url: 'icon-touziguanli',
          name: '众筹',
          path_url: '/raise'
        },
        {
          iconfont_color: '#989898',
          icon_url: 'icon-faxian-copy',
          name: '发现',
          path_url: '/discover'
        },
        {
          iconfont_color: '#989898',
          icon_url: 'icon-gr2',
          name: '我的',
          path_url: '/member'
        }
      ]
    }
  },
  watch: {
    $route: function () {
      this.routePath()
    }
  },
  created () {
    this.routePath()
  },
  methods: {
    routePath () {
      // let datas = this.tabnav
      let paths = this.$route.path.substring(0)
      for (let i = 0; i < this.tabnav.length; i++) {
        if (paths === this.tabnav[i].path_url) {
          this.tabnav[i].iconfont_color = '#69aee5'
        } else {
          this.tabnav[i].iconfont_color = '#989898'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: -2px;
  border-bottom: 1px;
  left: 0;
  z-index: 99;
  background: #fff;
  padding: 0.05rem 0;
  border-top: 1px solid #e5e5e5;
  .bar_list {
    width: 100%;
    overflow: hidden;
    display: flex;
    li {
      width: 33.33%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-size: 0.05rem;
      text-align: center;
      font-weight: 200;
      float: left;
      a {
        display: block;
        width: 100%;
        color: #989898;
        em {
          width: 100%;
          display: block;
          font-size: 0.2rem;
          line-height: 0.275rem;
        }
        span {
          width: 100%;
          display: block;
          font-size: 0.1rem;
        }
        .checkeds {
          color: #ca0606;
        }
      }
    }
  }
}
</style>