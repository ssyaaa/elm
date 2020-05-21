<template>
    <div>
        <!-- 综合排序start -->
        <van-row>
        <van-col span="8">
            <van-dropdown-menu active-color="#50c2ff" >
                <van-dropdown-item v-model="value1" :options="option1"/>
            </van-dropdown-menu>
        </van-col>
        <van-col span="4">
            <div class="font">距离</div>
        </van-col>
        <van-col span="4">
            <div class="font">销量</div>
        </van-col>
        <van-col span="8">
            <div class="font shaixuan">筛选<van-icon name="filter-o"/></div>
            
        </van-col>
        </van-row>
        <!-- 标签 -->
        <van-row>
            <van-row>
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" >守护联盟</van-tag></van-col>
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" >津贴优惠</van-tag></van-col>
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" >会员领红包</van-tag></van-col>
            <van-col span="5"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" >满减优惠</van-tag></van-col>
        </van-row>
        </van-row>
        <!-- 综合排序end -->
        <div class="shangjia">
            <ul>
                <router-link v-for="(value,key) in foodsList" :key="key" :to="{name:'Foods',params:{foodShopId:value.foodShopId}}" tag="li">
                    <div class="left">
                        <img :src="value.img" alt="">
                    </div>
                    <div class="right">
                        <h2>{{value.foodName}}</h2>
                        <van-rate v-model="value.start" readonly size="14px" allow-half/>
                        <span>{{value.start}}</span>
                        <span>月销售:{{value.xiaoshou}}</span>
                        <div class="three">
                            <span>￥{{value.qisong}}元起送</span>
                            <span>|</span>
                            <span>配送费:￥{{value.peisong}}</span>
                            <div class="tag">
                                <van-tag color="#fff4eb" text-color="#fe9b4b">“{{value.firstTag1}}”</van-tag>
                                <van-tag color="#fff4eb" text-color="#fe9b4b">“{{value.firstTag2}}”</van-tag>
                            </div>  
                            <div class="tag">
                                <van-tag color="#f2826a" plain>{{value.twoTag1}}</van-tag>
                                <van-tag color="#f2826a" plain>{{value.twoTag2}}</van-tag>
                                <van-tag color="#f2826a" plain>{{value.twoTag3}}</van-tag>
                            </div>
                            <div class="line"></div>
                            <p>{{value.p}}</p>
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return{
                // 综合排序start
                value1: 0,
                option1: [
                    { text: '综合排序', value: 0 },
                    { text: '好评优先', value: 1 },
                    { text: '距离优先', value: 2 }
                ],     
                // 综合排序end
                // foodsList:[],//所有商店数组信息
            }
        },
        computed:{
            foodsList(){
                return this.$store.state.shop.foodsList;
            }
        },
        // 请求接口数据
        // http://127.0.0.1:3000/foods
        // 请求数据接口必须在生命周期函数中执行
        created(){
            this.$axios.get("/foods").then(res => {
                this.$store.state.shop.foodsList = res.data.result;
            })
        }
    }
</script>

<style lang="scss" scoped>
.font{
    width: 100%;
    height: 50px;
    line-height: 51px;
    font-size: 14px;
    font-weight: bold;
}
.shaixuan{
    margin-left: 20px;
    text-align: center;
}
.tag{
    margin-left: 5px;
    
}
.shangjia{
    width: 100%;
    li{
        width: 100%;
        height: 230px;
        background-color: #ffffff;
        display: flex;
        .left{
            width: 35%;
            height: 200px;
            img{
                width: 110px;
                height: 110px;
                margin-top: 26px;
                border-radius: 10px;
                margin-left: 20px;
            }
        }
        .right{
            margin-left: 10px;
            width: 65%;
            height: 200px;
            h2{
                font-size: 22px;
                color: #333;
            }
            span{
                font-size: 12px;
                margin-right: 10px;
                color: #575757;
            }
            .three{
                span{
                    margin-right: 10px;
                }
                span:nth-child(2){
                    color: rgb(187, 184, 184);
                }
                .line{
                    margin-top: 15px;
                    width: 100%;
                    height: 1px;
                    background-color: rgb(230, 230, 230);
                }
                .tag{
                   padding: 0; 
                   margin-top: 10px;
                   font-size: 12px;
                }
                p{
                    margin-top: 15px;
                    font-size: 12px;
                    color: rgb(161, 157, 157);
                }
            }
        }
    }
}
.tag{
    padding: 10px;
    font-size: 13px;
}
</style>