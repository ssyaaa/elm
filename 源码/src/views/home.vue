<template>
    <div class="home">
        <!-- 顶部标题start -->
        <van-nav-bar left-text="当前定位" class="topTitle">
            <van-icon name="scan" slot="right" size="20px"/>
            <van-icon name="chat-o" slot="right" size="20px"/>
        </van-nav-bar>
        <!-- 顶部标题end -->
        <!-- 搜索框吸顶start -->
        <van-sticky>
            <div class="topSearch">
                <input type="text" placeholder="螺蛳粉"  @focus="getSearch">
                <van-icon name="search" class="searchIcon"/>
            </div>     
        </van-sticky>
        <!-- 搜索框吸顶end -->
        <!-- 轮播start -->
        <div class="swiper-container swiperRecommend">
            <div class="swiper-wrapper">
                <div class="swiper-slide lunboImg" v-for="(item,index) in imglist" :key="index"> 
                    <img :src="item.img" alt="">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationRecommend"></div>
        </div>
        <!-- 轮播end -->
        <!-- 导航宫格start -->
        <van-grid column-num="5">
            <van-grid-item>
                <div class="maxIcon red">
                    <img src="../assets/img/maxIcon1.png" >
                </div>
                <p>美食</p>
            </van-grid-item>
            <van-grid-item>
                <div class="maxIcon blue">
                    <img src="../assets/img/maxIcon2.png" >
                </div>
                <p>商超便利</p>
            </van-grid-item><van-grid-item>
                <div class="maxIcon orage">
                    <img src="../assets/img/maxIcon3.png" >
                </div>
                <p>水果</p>
            </van-grid-item><van-grid-item>
                <div class="maxIcon green">
                    <img src="../assets/img/maxIcon4.png" >
                </div>
                <p>送药上门</p>
            </van-grid-item><van-grid-item>
                <div class="maxIcon pink">
                    <img src="../assets/img/maxIcon5.png" >
                </div>
                <p>甜品饮品</p>
            </van-grid-item>
        </van-grid>
        <van-grid square column-num="5">
             <van-grid-item>
                 <img src="../assets/img/icon1.png" class="icon">
                <p>夜宵</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon2.png" class="icon">
                <p>披萨汉堡</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon3.png" class="icon">
                <p>烧烤海鲜</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon4.png" class="icon">
                <p>买菜</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon5.png" class="icon">
                <p>会员任务</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon6.png" class="icon">
                <p>星选好店</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon8.png" class="icon">
                <p>大牌惠吃</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon7.png" class="icon">
                <p>签到赢饭钱</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon9.png" class="icon">
                <p>跑腿代购</p>
            </van-grid-item>
            <van-grid-item>
                 <img src="../assets/img/icon10.png" class="icon">
                <p>全部分类</p>
            </van-grid-item>
        </van-grid> 
        <!-- 导航宫格end -->
        <!-- 超级会员start -->
        <van-row>
        <van-col span="12" class="member">
            <div class="left">
                <h3>超级会员</h3>
                <p>下单即可获得奖励金</p>
            </div>
            <div class="right">
                <img src="../assets/img/member.png" alt="">
            </div>
        </van-col>
        <van-col span="12" class="allowance">
            <div class="left">
                <h3>津贴优惠</h3>
                <p><i>20元</i>专属补贴</p>
            </div>
            <div class="right">
                <img src="../assets/img/allowance.png" alt="">
            </div>
        </van-col>
        </van-row>
        <!-- 超级会员end -->
        <!-- 优惠专区start -->
        <div class="discount">
            <h2>优惠专区</h2>
            <van-row>
                <van-col span="12">
                    <div class="bgImg1">
                        <span class="miaosha">限时秒杀</span>
                        <div class="detail">
                            <h3>早餐9.9元起</h3>
                            <p>5点场<span>01</span>:<span>30</span>:<span>53</span></p>
                        </div>
                    </div>
                </van-col>
                <van-col span="12">
                    <div class="bgImg2">
                        <span class="miaosha">安心美食</span>
                        <div class="detail">
                            <h3>配送费减免</h3>
                            <p>最高领8元红包</p>
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
        <!-- 优惠专区end -->
        <!-- 品质套餐start -->
        <div class="pinzhi">
            <div class="left">
                <h2>品质套餐</h2>
                <p>搭配齐全吃得好</p>
                <p>立即抢购&gt;</p>
            </div>
            <div class="right">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583689775692&di=c8ab9c4ca1dd6262231f627a275bbb4b&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F23%2F22%2F32%2Fpic_lib%2Fs960x639%2F31s960x639.jpg" alt="">
            </div>
        </div>
        <!-- 品质套餐end -->
        <!-- 导航栏切换start -->
        
        <van-tabs v-model="active" color="#50c2ff" title-active-color="#50c2ff">
            <van-tab title="推荐" to="/home/recommend">
                <router-view></router-view>
            </van-tab>
            <van-tab title="发现好菜">内容 2</van-tab>
            <van-tab title="果蔬超市">内容 3</van-tab>
            <van-tab title="到店自取">内容 4</van-tab>
        </van-tabs>
        <div class="bottom"></div>
        <!-- 导航栏切换end -->
        <!-- 商家推荐start -->
        <!-- <router-view></router-view> -->
        <!-- 商家推荐end -->
    </div>
</template>

<script>
import { Toast } from 'vant';
import Swiper from "swiper";
    export default {
        data() {
            return {
                value: '',
                 images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                // 轮播图图片
                imglist:[ 
                    {
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583952635700&di=542cc590594a55cca2638a033645eea1&imgtype=0&src=http%3A%2F%2Fpic80.nipic.com%2Ffile%2F20151016%2F11729074_161956026000_2.jpg"
                    },
                    {
                        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583951461936&di=bef727932229df0cf7dbbc0c4a837d82&imgtype=0&src=http%3A%2F%2Fwww.youhuizhijia.com%2Fupload%2F2019%2F0706%2F12362926663.jpg"
                    },
                    {
                        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3463052001,3668035837&fm=15&gp=0.jpg"
                    },
                ],
                // 标签导航栏
                active: 0
            };
        },
        methods: {
            onSearch(val) {
                Toast(val);
            },
            onCancel() {
                Toast('取消');
            },
           getSearch(){
               this.$router.push("/search");
           },
        },
        mounted() {
            new Swiper('.swiperRecommend', {
                pagination: {
                    el: '.paginationRecommend',
                },
            })
        },
    }
</script>

<style lang="scss" scoped>
.home{
    overflow-y: auto;
}
.topTitle .van-icon{
    color: #333;
    margin-left: 20px;
}
h2,h3,p{
    padding: 0;
    margin: 0;
}
ul{
    list-style: none;
}
// 搜索框
.topSearch{
    height: 55px;
    width: 100%;
    background-color: #fff;
    position: relative;
    input{
        border: none;
        width: 90%;
        height: 35px;
        text-align: center;
        border: 1px solid #eaeaea;
        border-radius: 20px;
        background-color: #eaeaea;
        margin: 9px 5%;
    }
    .searchIcon{
        position: absolute;
        top: 0;
        z-index: 200;
        left: 35%;
        top: 38%;
    }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
// swiper公共样式
.swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
        
}

.lunboImg{
    border-radius: 20px;
    height: 130px;
    margin-top: 10px;
    img{
        border-radius: 20px;
        width: 90%;
        height: 100%;
    }
}
// 大图片
.maxIcon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    img{
        width: 30px;
        height: 30px;
        margin: 10px;
    }
}
.red{
    background-color: #fe5928;
}
.blue{
    background-color: #01b9fe;
}
.orage{
    background-color: #ffa601;
}
.green{
    background-color: #1fd8bb;
}
.pink{
    background-color: #fa90c9;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
// 轮播图end
.icon{
    width: 30px;
    height: 30px;
}
p{
    font-size: 12px;
    color: #5f5f5f;
}
// 会员津贴
.member{
    width: 44%;
    height: 65px;
    background-color: #fcf0d9;
    margin-left: 5%;
    border-radius: 10px;
    .left{
        float: left;
        width: 75%;
        h3{        
            font-size: 18px;
            color: #846d58;
            margin-left: 20px;
            margin-top: 8px;
        }
        p{
            font-size: 11px;
            color: #ab967e;
            margin-left: 20px;
            margin-top: 5px;
        }
    }
    .right{
        float: left;
        width: 25%;
        img{
            width: 35px;
            height: 35px;
            margin-top: 20px;
        }
    }
}
.allowance{
    width: 44%;
    height: 65px;
    margin-left: 2%;
    border-radius: 10px;
    background-color:#ffe9ea;
    .left{
        float: left;
        width: 75%;
        h3{        
            font-size: 18px;
            color: #846d58;
            margin-left: 20px;
            margin-top: 8px;
        }
        p{
            font-size: 12px;
            color: #ab967e;
            margin-left: 20px;
            margin-top: 5px;
            i{
                font-weight: bold;
                color: rgb(180, 62, 62);
                margin-right: 2px;
            }
        }
    }
    .right{
        float: left;
        width: 25%;
        img{
            width: 35px;
            height: 35px;
            margin-top: 20px;
        }
    }
}
// 优惠专区
.discount{
    width: 100%;
    height: 210px;
    margin-top: 20px;
    h2{
        font-weight: normal;
        font-size: 21px;
        margin-left: 20px;
        margin-bottom: 15px;
    }
    .bgImg1{
        width: 88%;
        height: 170px;
        background-color: red;
        margin-left: 8%;
        border-radius: 10px;
        margin-right: 2px;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583984025781&di=9530f80557ce7af0ae036abf3c66703b&imgtype=0&src=http%3A%2F%2Ffx120.120askimages.com%2F120ask_news%2F2017%2F0410%2F201704101491810697632651.jpg") no-repeat;
        background-size: cover;
        position: relative;
        .miaosha{
            position: absolute;
            width: 100px;
            height: 30px;
            background: linear-gradient(to right,#ff6f1f,#ff401f);
            border-radius: 3px;
            color: white;
            line-height: 30px;
            text-align: center;
            left: 25%;
            top: 0;
        }
        .detail{
            position: absolute;
            width: 90%;
            height: 50px;
            background-color: #fff;
            border-radius: 5px;
            bottom: 10px;
            left: 5%;
            h3{
                font-size: 17px;
                text-align: center;
                margin-top: 5px;
            }
            p{
                color: #f07e6f;
                font-size: 14px;
                letter-spacing: 2px;
                text-align: center;
                span{
                    background-color: #ff4b33;
                    border-radius: 5px;
                    color: white;
                    
                }
            }
        }
    }
    .bgImg2{
        width: 88%;
        height: 170px;
        background-color: red;
        margin-left: 2%;
        margin-right: 8%;
        border-radius: 10px;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584091990888&di=130d1b0eaf307be034978fd48489f7ca&imgtype=0&src=http%3A%2F%2Fimg.959.cn%2F7%2F2018%2F1112%2F20181112065324714.jpg") no-repeat;
        background-size: cover;
        position: relative;
        .miaosha{
            position: absolute;
            width: 100px;
            height: 30px;
            background: linear-gradient(to right,#49c7ff,#46aeff);
            border-radius: 3px;
            color: white;
            line-height: 30px;
            text-align: center;
            left: 25%;
            top: 0;
        }
        .detail{
            position: absolute;
            width: 90%;
            height: 50px;
            background-color: #fff;
            border-radius: 5px;
            bottom: 10px;
            left: 5%;
            h3{
                font-size: 17px;
                text-align: center;
                margin-top: 5px;
            }
            p{
                color: #666666;
                font-size: 14px;
                text-align: center;
            }
        }
    }
}
.pinzhi{
    width: 90%;
    margin: 20px auto;
    height: 200px;
    background-color: #fafafa;
    .left{
        float: left;
        width: 50%;
        height: 200px;
        // background-color: red;
        h2{
            margin-left: 20px;
            margin-top: 30%;
            margin-bottom: 10px;
        }
        p{
            margin-left: 20px;
            margin-bottom: 10px;
            color: #818181;
        }
        p:last-child{
            color: #c5a281;
        }
    }
    .right{
        float: right;
        width: 50%;
        height: 200px;
        img{
            width: 80%;
            height: 60%;
            margin: 30% 15%;
            border-radius: 10px;
        }
    }
}
// 导航栏

.bottom{
    width: 100%;
    height: 50px;
}
</style>