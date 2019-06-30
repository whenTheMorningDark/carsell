<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    props:{
        probeType:{
            type:Number,
            default:1
        },
        click:{
            type:Boolean,
            default:true
        },
        data:{
            type:Array,
            default:null
        },
        listenScrollEnd:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            scrollTop:0
        };
    },
    computed: {

    },
    watch: {
        data(){
            setTimeout(()=>{
                this.refresh();
            },20)
        }
    },
    methods: {
        //初始化
        _initScroll () {
            if(!this.$refs.wrapper){
                return;
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType:this.probeType,
                click:this.click
            })
            
            if(this.listenScrollEnd){
                let _this = this;
                this.scroll.on("scrollEnd",(pos)=>{
                    _this.$emit("scrollEnd",pos)
                })
            }
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        scrollTo(y){  
            this.scroll && this.scroll.scrollTo(0,y);
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    },
    mounted(){
        setTimeout(()=>{
            this._initScroll()
            
        },20)
    }
};
</script>

<style scoped lang="scss">

</style>
