<template>
    <div class="animated fadeInUp">   
        <!-- 搜索框start -->
        <van-row>
            <van-col span="2">
                <van-icon @click="$router.go(-1)" name="arrow-left" size="24px" class="backIcon"/>
            </van-col>
            <van-col span="19">
                <div class="topSearch">
                    <input type="text" ref="searchPlaceholder" placeholder="螺蛳粉" @keyup.enter="searchEnter" v-model="keyword">
                    <!-- <van-icon name="search" class="searchIcon"/> -->
                </div>
            </van-col>
            <van-col span="3">
                <span class="searchFont" @click="searchEnter" >搜索</span>
            </van-col>
        </van-row>   
        <!-- 搜索框end -->
        <!-- 历史记录start -->
        <div class="block">
            <van-row>
                <van-col span="12">
                    <h3>历史搜索</h3>
                </van-col>
                <van-col span="12">
                    <van-icon name="delete" class="delete" size="18px" @click="delTag"/>
                </van-col>
            </van-row>
            <div class="history">
                <span v-for="(item,index) in $store.state.shop.keywordList" :key="index">{{item.key}}</span>
            </div>
        </div>
        <!-- 历史记录end -->
        <!-- 搜索发现start -->
        <div class="block">
            <van-row>
                <van-col span="12">
                    <h3>搜索发现</h3>
                </van-col>
            </van-row>
            <div class="history">
                <span>
                    <img src="../../assets/img/fire.png" alt="">
                    必胜客满200减100
                </span>
                <span>益禾堂</span>
                <span>查理王子</span>
                <span>爱民螺蛳粉</span>
                <span>尝不忘</span>
                <span>伊人鲜花</span>
                <span>巧二娘</span>
            </div>
        </div>
        <!-- 搜索发现end -->
        <!-- 推荐start -->
        <ul>
            <li>
                <div class="img">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584203664523&di=905ef2c3fbd8b07eb8e52738fd50a7a9&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1803%2F5d%2F4d300869c0e14837.jpg_r_480x360x95_0ac600bd.jpg" alt="">
                </div>
                <div class="content">
                    <h4>柳源螺蛳粉（西大店）</h4>
                    <van-tag color="#fff4eb" text-color="#fe9643" class="size">根据你的下单推荐</van-tag>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584204795605&di=0c879203fb5c3d2aabc828b7a058fa59&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fbainuo%2Fwh%3D720%2C436%2Fsign%3D6652b5edbe014a90816b4eba9b471526%2Fc8177f3e6709c93d088a04a8983df8dcd1005470.jpg" alt="">
                </div>
                <div class="content">
                    <h4>肯德基（西大店）</h4>
                    <van-tag color="#fff4eb" text-color="#fe9643" class="size">根据你的浏览推荐</van-tag>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584204980938&di=409e18971c9d840ccdb88781035b3a99&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1508%2Ff3%2F3376a44bb5617f.jpg_r_1024x683x95_7624ea29.jpg" alt="">
                </div>
                <div class="content">
                    <h4>等花花开益鲜花店</h4>
                    <van-tag color="#fff4eb" text-color="#fe9643" class="size">根据你的下单推荐</van-tag>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584205065085&di=56965a84634a2fac0c0ba1f322871c0b&imgtype=0&src=http%3A%2F%2Fimg.96jm.com%2Fuploads%2F2019-06-21%2F5cfc7d4828e49.jpg" alt="">
                </div>
                <div class="content">
                    <h4>华莱士·全鸡汉堡</h4>
                    <van-tag color="#fff4eb" text-color="#fe9643" class="size">根据你的下单推荐</van-tag>
                </div>
            </li>
        </ul>
        <!-- 推荐end -->
    </div>
</template>

<script>
const regu = "^[ ]+$";

const re = new RegExp(regu);
    export default {
        data:function(){
            return{
                keyword:null,
            }
        },
        methods:{
            searchEnter(){
                if(this.keyword==null){
                    return;
                }else if(re.test(this.keyword)){
                    this.$store.state.shop.keywordList.push({key:this.$refs.searchPlaceholder.placeholder});
                    this.$router.push("/searchDetail");
               }else{
                    this.$store.state.shop.keywordList.push({key:this.keyword});
                    this.$router.push("/searchDetail");
                }
                
            },
            // 删除Tag
            delTag(){
                this.$store.state.shop.keywordList.splice(0,this.$store.state.shop.keywordList.length);
            }
        },
        created() {
                this.$store.state.vanTabbar = false;
        },
        destroyed() {
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
p,h3,h4{
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
}
// 搜索框
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
    // background-color: red;
    text-align: center;
    margin-right: 5%;
}
// 历史搜索
.block{
    width: 100%;
    min-height: 100px;
    margin-top: 20px;
    margin-left: 20px;
    h3{       
        font-size: 18px;
        letter-spacing: 1px;
    }
    .delete{
        margin-left: 75%;
    }
    .history{
        width: 100%;
        margin-top: 20px;
        span{
            display: inline-block;
            padding: 10px;
            background-color: #f7f7f7;
            font-size: 14px;
            color: #636363;
            margin-right: 10px;
            margin-bottom: 10px;
            img{
                width: 15px;
                height: 15px;
            }
        }
    }
}
ul{
    width: 100%;
    margin-top: 20px;
}
ul li{
    width: 40%;
    height: 80px;
    float: left;
    margin-left: 20px;
    margin-bottom: 10px;
    display: flex;
    .img{
        width: 30%;
        height: 80px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 10px;
        }
    }
    .content{
        width: 65%;
        height: 80px;   
        margin-left: 10px;
        h4{
            margin-top: 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 15px;
            margin-bottom: 5px;
        }
        .size{
            font-size: 10px;
        }
    }
}
</style>