<template>
    <div>
        <!-- 搜索框start -->
        <van-row>
            <van-col span="2">
                <van-icon @click="$router.go(-1)" name="arrow-left" size="24px" class="backIcon"/>
            </van-col>
            <van-col span="19">
                <div class="topSearch">
                    <input type="text" placeholder="螺蛳粉" @keyup.enter="searchEnter" v-model="keyword">
                </div>
            </van-col>
            <van-col span="3">
                <span class="searchFont" @click="searchEnter">搜索</span>
            </van-col>
        </van-row>   
        <!-- 搜索框end -->
        <!-- 综合排序start -->
        <van-row>
        <van-col span="8">
            <van-dropdown-menu active-color="#50c2ff" >
                <van-dropdown-item v-model="value1" :options="option1" />
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
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" style="margin-left: 10px;">守护联盟</van-tag></van-col>
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" style="margin-left: 5px;">津贴优惠</van-tag></van-col>
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" style="margin-left: 5px;">会员领红包</van-tag></van-col>
            <van-col span="6"><van-tag class="tag" color="#f3f3f3" text-color="#000" size="large" style="margin-left: 10px;">满减优惠</van-tag></van-col>
        </van-row>
        <!-- 综合排序end -->
        <!-- 店家start -->
        <div class="shangjia">
            <ul>
                <router-link v-for="(value,key) in shopFoods" :key="key" :to="{name:'Foods',params:{foodShopId:value.foodShopId}}" tag="li">
                    <div class="left">
                        <img :src="value.img" alt="">
                    </div>
                    <div class="right">
                        <h2>{{value.foodName}}</h2>
                        <van-rate v-model="value.start" readonly size="14px" allow-half class="xingxing"/>
                        <span>{{value.start}}</span>
                        <span>月销售:{{value.xiaoshou}}</span>
                        <span>配送费:￥{{value.peisong}}</span>
                        <div class="three">                            
                            <div class="tag">
                                <van-tag color="#fff4eb" text-color="#fe9b4b">“{{value.firstTag1}}”</van-tag>
                                <van-tag color="#fff4eb" text-color="#fe9b4b">“{{value.firstTag2}}”</van-tag>
                            </div>  
                            <div class="tag">
                                <van-tag color="#f2826a" plain>{{value.twoTag1}}</van-tag>
                                <van-tag color="#f2826a" plain>{{value.twoTag2}}</van-tag>
                                <van-tag color="#f2826a" plain>{{value.twoTag3}}</van-tag>
                                <van-tag plain>支持自取</van-tag>
                            </div>
                        </div>
                        <!-- 食品图片 -->
                        <div class="swiper-container swiperImg">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in value.fooddetail" :key="index">
                                    <div class="foodsImg"><img :src="item.img" alt=""></div>
                                    <p>{{item.name}}</p>
                                    <p>￥<span>{{item.meny}}</span>起</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </router-link>
            </ul>
        </div>
        <!-- 店家end -->
        <!-- 底部 -->
        <div class="bottom"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
    export default {    
        data:function(){
            return {
                keyword:this.$store.state.shop.keywordList[this.$store.state.shop.keywordList.length-1].key,//搜索关键字
                shopFoods:this.$store.state.shop.foods,//商店商品首页排列表
                // 综合排序start
                value1: 0,
                option1: [
                    { text: '综合排序', value: 0 },
                    { text: '好评优先', value: 1 },
                    { text: '距离优先', value: 2 }
                ],
                
                // 综合排序end

            }
        },
        methods:{
            searchEnter(){
                this.$store.state.shop.keywordList.push({key:this.keyword});
                this.shopFoods = this.$store.state.shop.foods.filter(item=>{
                    return item.foodName.includes(this.keyword);
                });
                
            },
        },
        mounted() {
            this.$store.state.vanTabbar = false;   
            new Swiper('.swiperImg', {
                slidesPerView: 3,
                spaceBetween: 10,
            });
        },
        created(){
            this.shopFoods = this.$store.state.shop.foods.filter(item=>item.foodName.includes(this.keyword));
            
        },
    }
</script>

<style lang="scss" scoped>
h2,div.tag,p{
    padding: 0;
    margin: 0;
}
.clearfix::after{
    display: block;
    content: "";
    clear: both;
}
// swiper start
.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: left;
      font-size: 18px;
    }
// swiper end
.backIcon{
    margin-top: 12px;
    margin-left: 10px;
}
.topSearch{
    height: 55px;
    width: 100%;
    background-color: #fff;
    position: relative;
    input{
        border: none;
        width: 90%;
        height: 35px;
        text-align: left;
        padding-left: 5%;
        border: 1px solid #eaeaea;
        border-radius: 20px;
        background-color: #eaeaea;
        margin-top: 5px;
        margin-left: 10px;
    }
    .searchIcon{
        position: absolute;
        top: 0;
        z-index: 200;
        left: 35%;
        top: 30%;
    }
}
.searchFont{
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    display: inline-block;
    text-align: center;
    margin-right: 5%;
}
// 综合排序start
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
    padding: 10px;
    font-size: 13px;
    
}
// 综合排序end
// 店家start
.shangjia{
    width: 100%;
    li{
        width: 100%;
        height: 290px;
        background-color: #ffffff;
        margin-bottom: 10px;
        .left{
            float: left;
            width: 14%;
            height: 280px;
            img{
                width: 40px;
                height: 40px;
                margin-top: 16px;
                border-radius: 10px;
                margin-left: 20px;
            }
        }
        .right{
            float: right;
            width: 86%;
            height: 280px;
            h2{
                font-size: 18px;
                color: #333;
                margin-top: 10px;
                letter-spacing: 1px;
                margin-left: 10px;
            }
            .xingxing{
                margin-left: 10px;
            }
            span{
                font-size: 12px;
                margin-right: 10px;
                color: #575757;
            }
            .three{
                height: 60px;
                .tag{
                    margin-left: 10px;
                    margin-top: 5px;
                }
            }
        }
    }
}
// 店家end
// 食品排序start
.swiperImg{
    height: 160px;
    margin-left: 10px;
    .foodsImg{
        width: 110px;
        height: 120px;
        margin-right: 10px;
        img{
            width: 110px;
            height: 120px;
            border-radius: 10px;
        }
    }
    p{
        font-size: 13px;
        letter-spacing: 1px;
        color: #535353;
        margin-top: 2px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    p:nth-child(3){
        color: red;
        letter-spacing: normal;
        span{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
// 食品排序end
// 底部start
.bottom{
    width: 100%;
    height: 50px;
}
// 底部end
</style>