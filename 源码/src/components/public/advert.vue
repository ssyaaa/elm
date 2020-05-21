<template>
    <div>
        <div class="img">
            <h1>广告:{{num}}</h1>
            <button @click="goHome">跳过</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num:3,
                cleardata:null //清除定时器
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home/recommend");//推荐页面
            }
        },
        created(){
            // 倒计时定时器
            this.cleardata = setInterval(() => {
                if(this.num == 0){
                    this.$router.push("/home/recommend");//推荐页面
                }else{
                    this.num--;
                }
            }, 1000);
            this.$store.state.vanTabbar = false;
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
        // 销毁生命周期函数之前停止
        beforeDestroy() { //销毁vue数据与方法。组件结束执行
            // 定时器属于浏览器对象，属于window。
            clearInterval(this.cleardata);
        },
    }
</script>

<style lang="scss" scoped>
.img{
    width: 100%;
    height: 600px;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584071622958&di=573e879d67c548b9dfe0a11356dfb6e4&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F9dbc7f7446dfcbfc0f982dcf7a40f0457e8fdaf41fa1d-Ff6q4A_fw658") no-repeat;
    background-size: cover;
    position: relative;
    h1{
        width: 15%;
        font-size: 16px;
        background-color: rgb(194, 190, 190);
        color: #fff;
        position: absolute;
        right: 60px;
        top: 0;
    }
    button{
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #ccc;
        border: none;
        color: #fff;
        font-size: 14px;
    }
}
</style>