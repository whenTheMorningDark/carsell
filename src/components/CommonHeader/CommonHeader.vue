<template>
    <div class="common-header">
        <i class="iconfont icon-fanhui back" @click="back"></i>
        <div class="title">{{title}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:"租用车详情页"
        };
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
};
</script>

<style scoped lang="scss">
    .common-header {
        display: flex;
        height: 0.7rem;
        background: #d9b765;
        padding: 0 0.28rem;
        // justify-content: center;
        align-items: center;
        .back{
            color: #fff;
        }
        .title {
            flex:1;
            font-size: 0.36rem;
            color:#fff;
            text-align: center;
        }
    }
</style>
