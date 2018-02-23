
<template>
    <div class="header">
        <span class="iconfont icon-fanhui iconfixed" @click="goHistory()"></span>
        <h1>{{setModuleInfo.titleName}}</h1>
        <div class="setModule" v-show="setModuleInfo.modelShow" @click="onConfirm">
            <span v-if="setModuleInfo.urlType == 'icon'" class="iconfont" :class="setModuleInfo.icon_name"></span>
            <span v-else>
                {{setModuleInfo.model_name}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            setModuleInfo: {
                model_name: "自定义内容",
                path_url: "",
                iconfont_color: "",
                modelShow: false,
                titleName: "标题",
                urlType: 'icon',//or url
                icon_name:"icon-kefu"  //在urltype等于icon时使用
            }
        }
    },
    props: ['headModuleInfo'],
    created() {
        this.setModuleInfo = this.headModuleInfo;
    },
    methods: {
        goHistory() {
            this.$router.go(-1);
        },
        onConfirm() { //head 头部设置自定义部分方法
            if (this.setModuleInfo.urlType == 'icon') { //设置为图标 则触发弹窗
                console.log("此处为弹窗组件")
            } else { //设置为url 则触发路由跳转
                console.log("此处为路由导航")
            }

        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    line-height: 0.5rem;
    border-bottom: 1px solid #d9d9d9;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    h1 {
        width: 100%;
        text-align: center;
        font-size: .16rem;
        font-weight: 200;
        letter-spacing: 1px;
    }
    .iconfixed {
        position: absolute;
        margin-left: 10px;
        left: 0;
    }
    .setModule {
        position: absolute;
        right: 0;
        margin-right: 10px;
    }
}
</style>