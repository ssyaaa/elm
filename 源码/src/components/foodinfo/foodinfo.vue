<template>
    <div>
        <div class="navBar" >
            <van-row>
                <van-col span="4">
                    <van-icon @click="$router.go(-1)" color="#ffff" name="arrow-left" size="20px" style="margin-left:20px;margin-top:8px;"/>
                </van-col>
                <van-col span="16"></van-col>
                <van-col span="2">
                    <van-icon name="search" color="#ffff" size="20px" style="margin-top:8px;"/>
                </van-col>
                <van-col span="2">
                    <van-icon @click="$router.go(-1)" color="#ffff" name="close"  size="20px" style="margin-top:8px;"/>
                </van-col>
            </van-row>
        </div>
        <div class="content1">
            <div class="headPhoto">
                <img :src="foodShop.img" alt="">
            </div>
            <h2>{{foodShop.foodName}}</h2>
            <van-row class="detail">
                <van-col span="6"></van-col>
                <van-col span="3">评价{{foodShop.start}}</van-col>
                <van-col span="4">月售{{foodShop.xiaoshou}}</van-col>
                <van-col span="8">蜂鸟专送约30分钟</van-col>
                <van-col span="3">
                    <img src="../../assets/img/black.png" class="like" v-show="like" @click="likeBlack">
                    <img src="../../assets/img/red.png" class="like" v-show="like2" @click="likeRed">
                </van-col>
            </van-row>
            <!-- 优惠卷 -->
            <van-collapse v-model="activeNames">
                <van-collapse-item name="2" >
                    <div slot="title">
                        <van-tag color="#f2826a" style="margin-left:15%;" plain>{{foodShop.twoTag1}}</van-tag>
                        <van-tag color="#f2826a" style="margin-left:2%;" plain>{{foodShop.twoTag2}}</van-tag>
                        <van-tag color="#f2826a" style="margin-left:2%;" plain>配送费优惠</van-tag>
                        <span class="youhui">3个优惠</span>
                    </div>
                    <h4>优惠</h4>
                    <p><van-tag color="#f2826a" plain>满减</van-tag> 满{{foodShop.twoTag1}}元，满{{foodShop.twoTag2}}元</p>
                    <p><van-tag color="#caa073" plain>会员</van-tag> 超级会员领6元无门槛红包</p>
                    <p><van-tag color="#f2826a" plain>配送</van-tag> 配送费立减3元</p>
                    <h4>服务</h4>
                    <p><van-tag color="#c1c1c1" plain>食无忧</van-tag> 该商户已购买食品安全责任险，食品安全有保障。</p>
                </van-collapse-item>
            </van-collapse>
            
            <!-- 点餐 -->
            <van-tabs v-model="active" color="#2395ff" >
                <van-tab title="点餐" >
                    <div class="jianju"></div>
                    <van-tree-select
                        height="130vw"
                        :items="foodShop.items"
                        :main-active-index.sync="active1"
                    >
                        <template slot="content">
                            <div v-for="(v,i) in foodShop.items" :key="i">
                                <div class="foodsList"   v-if="active1 === i">
                                    <div class="title">
                                        <h4>{{v.text}}</h4>
                                    </div>
                                    <van-card
                                        v-for="(item,index) in v.fooddetail"
                                        :key="index"
                                        :title="item.name"
                                        :thumb="item.img"
                                    >
                                        <div slot="tags">
                                            <p class="decs">{{item.dec}}</p>
                                            <p class="decs">月售{{item.month}}</p>
                                            <van-tag plain type="danger" style="margin-top:5px;">8.2折</van-tag>
                                            <span class="youhui">每单限1份优惠</span>
                                            <p class="price">￥{{item.meny}}</p>
                                        </div>
                                        <div slot="footer">
                                            <div class="button1" @click="reduce(item)" ><img src="../../assets/img/reduce.png" alt=""></div>
                                            <input type="text" class="num" v-model="item.num">
                                            <div class="button" @click="add(item)"><img src="../../assets/img/add.png" alt=""></div>
                                            <!-- <van-popup v-model="show" position="bottom" :style="{ height: '70%' }" round closeable>
                                                <div class="pupImg"><img :src="pupImg" alt=""></div>
                                            </van-popup> -->
                                        </div>
                                    </van-card>
                                    <div class="space"></div>
                                </div>
                            </div>
                        </template>
                    </van-tree-select>
                </van-tab>
                <van-tab title="评价">内容 2</van-tab>
                <van-tab title="商家">内容 3</van-tab>
            </van-tabs>
        </div>
        <!-- 结算订单 -->
        <van-goods-action>
            <van-goods-action-icon icon="shopping-cart-o" size="30px" :info="num" color="#111"/>
            <div class="ddd">
                <p class="price">￥{{ totals }}</p>
                <p class="peisong">另需配送费￥0元|可自取</p>
            </div>
            <van-button color="#58d178" class="pay" @click="onSubmit">去结算</van-button>
        </van-goods-action>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeNames: ['1'],
                active: 0,
                activeKey: 0,
                active1: 0, 
                foodShop:[],// 商品信息数组       
                show:false,// 弹出层
                pupImg:'',//弹出层显示图片
                totals:0,//总价格
                num:0,//购物车数量
                like:true,
                like2:false,
                isLike:false
            }
        },
        computed:{
            username(){
                return this.$store.state.username;
            },
            buyCartLists(){
                return this.$store.state.buyCartLists;
            },
            // 我的收藏列表
            likeList(){
                return this.$store.state.like.likeList;
            }
        },
        methods:{
            add(item){ 
                // this.show = true;
                item.num++;
                this.pupImg = item.img;
                this.sum();
                this.nums();
            },
             reduce(item){
               item.num <=0 ? 0 :item.num--;
               this.sum();
                this.nums();
            },
            sum(){
                let all =0;
                for(let i = 0 ; i < this.foodShop.items.length; i++){
                     all += this.foodShop.items[i].fooddetail.reduce((total,item)=>{
                        return total + parseInt(item.meny) * parseInt(item.num);//总价格
                    },0)
                }
                this.totals = all;
            },
            nums(){
                let all =0;
                for(let i = 0 ; i < this.foodShop.items.length; i++){
                    
                     all += this.foodShop.items[i].fooddetail.reduce((total,item)=>{
                        return total + parseInt(item.num);//总数量
                    },0)
                }
                this.num = all;
            },
            onSubmit(){
                // 判断用户名是否存在
                if(this.username == ''){
                    const toast = this.$toast.loading({
                        duration: 0, // 持续展示 toast
                        forbidClick: true,
                        message: '未登录，还有 3 秒跳转登录界面'
                    });

                    let second = 3;
                    const timer = setInterval(() => {
                        second--;
                    if (second) {
                        toast.message = `未登录，还有 ${second} 秒跳转登录界面`;
                    } else {
                        clearInterval(timer);
                        // 手动清除 Toast
                        toast.clear();
                        this.$router.push('/login');
                    }
                    }, 1000);
                    
                }else{
                    if(this.num == 0){
                        this.$toast("请添加商品");
                    }else{
                        let data = [];
                        // 添加进购物车
                        for(let i = 0 ; i < this.foodShop.items.length ; i++){
                            for(let j = 0 ; j < this.foodShop.items[i].fooddetail.length ; j ++){
                                if(this.foodShop.items[i].fooddetail[j].num > 0){
                                    data.push({
                                        foodName: this.foodShop.foodName,
                                        fooddetail: this.foodShop.items[i].fooddetail[j]
                                    })
                                }
                            }
                        }
                        this.$store.commit("foodinfo/addBuyCart",data)
                        this.$router.push('/pay');
                    }
                    
                }
                
            },
            // 我的收藏 
            likeBlack(){
                this.like = false;
                this.like2 = true;
                this.foodShop['like'] = 1;
                this.$store.commit("like/changeLikeList",this.foodShop);
                console.log("我的收藏===>",this.likeList);
                console.log("bu===>",this.foodShop);
                
            },
            // 取消收藏
            likeRed(){
                this.like = true;
                this.like2 = false;
                this.foodShop['like'] = 0;
                this.$store.commit("like/deleteLikeList",this.foodShop.foodShopId);
                console.log("我的收藏===>",this.likeList);
                console.log("bu===>",this.foodShop);
            }
        },
        
        created(){
            // 商店标识ID
            let foodShopId = this.$route.params.foodShopId;
            // 请求接口数据
            // http://127.0.0.1:3000/foods/kfc01
            this.$axios.get("/foods/"+foodShopId).then(res =>{
                this.foodShop = res.data.result;
            })
            // 底部导航栏
            this.$store.state.vanTabbar = false;

        },
        mounted(){
            this.$store.state.vanTabbar = false;
        },
        destroyed(){
            this.$store.state.vanTabbar = true;
        },
        
    }
    
    
</script>

<style lang="scss" scoped>
p{
    margin: 0;
    padding: 0;
}
.navBar{
    height: 200px;
    width: 100%;
    position:relative;
}
.navBar::before{
    position:absolute;
    content:'';
    // content:"infomation";
    top:0;
    left:0;
    height: 200px;
    width: 100%;
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583690927575&di=5997ab0588715caf46c64cbcf3de775a&imgtype=0&src=http%3A%2F%2F04imgmini.eastday.com%2Fmobile%2F20180828%2F20180828145727_c10e36e793bb5f2aa92222b1c5c18bbd_12.jpeg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    z-index: -1;
}
// 内容
.content1{
    width: 100%;
    height: 500px;
    background-color: #fff;
    margin-top: -10px;
    // 头像
    .headPhoto{
        position: absolute;
        width: 120px;
        height: 120px;
        left: 50%;
        margin-left: -60px;
        top: 17%;
        img{
            width: 120px;
            height: 120px;
        }
    }
    h2{
        padding: 0;
        height: 60px;
        line-height: 90px;
        text-align: center;
    }
    .detail{
        font-size: 12px;
        color: rgb(129, 129, 129);
    }
    .youhui{
        position:absolute;
        right:8%;
        font-size: 12px;
        color: rgb(136, 133, 133);
    }
    h4{
        color: #000;
    }
   
}
.pay{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30%;
    height: 100%;
}
.ddd{
    margin-left: 10px;
    .price{
        font-weight: bold;
        font-size: 20px;
            
    }
    .peisong{
        font-size: 10px;
        color: rgb(177, 174, 174);
    }
}
// 中间食物
h4,p{
    padding: 0;
    margin: 0;
}
.van-sidebar-item--select{
    border: transparent;
    font-weight: bold;
}
.van-sidebar-item{
    color: rgb(119, 117, 117);
    height:60px;
    line-height: 40px;
}
.foodsList{
    background-color: #fafafa;
    .van-card{
        height: 120px;
    }
    .title{
        h4{
            span{
                font-size: 12px;
                color: rgb(168, 166, 166);
                font-weight: normal;
                margin-left: 5px;
            }
        }
    }
    .decs{
        font-size: 10px;
        color: rgb(155, 154, 154);
        margin-top: 3px;
    }
    .price{
        color: #ff563d;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
        del{
            color: #ccc;
            font-size: 11px;
            font-weight: normal;
            margin-left: 5px;
        }
    }
    .youhui{
        font-size: 10px;
        color: #ff622a;
        margin-left: 5px;
    }
    .button1{
        width: 25px;
        height: 25px;
        position: absolute;
        right: 27%;
        bottom: 7%;
        margin-left: 10px;
        img{
            width: 25px;
            height: 25px; 
        }
    }
    .num{
        position: absolute;
        right: 15%;
        bottom: 8%;
        width: 25px;
        border: none;
        border: 1px solid #ccc;
    }
    .button{
        width: 25px;
        height: 25px;
        position: absolute;
        right: 5%;
        bottom: 7%;
        img{
            width: 25px;
            height: 25px; 
        }
    }
}
// 弹出层图片
.pupImg{
    width: 100px;
    height: 100px;
    padding: 10px;
    img{
        width: 100px;
        height: 100px;
        border-radius: 5px;
    }
}
.space{
    height: 100px;
}
.like{
    width: 20px;
    height: 20px;
}
</style>