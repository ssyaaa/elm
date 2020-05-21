<template>
    <div class="me">
        <!-- 用户头像start -->
        <div class="info">
            
            <div class="img" v-if="this.$store.state.username != ''">
                <input type="file" id="files" accept="image/*" @change="previewPic">
                <img v-if="this.$store.state.myInfo.myInfos == null" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583718524632&di=61c86091e2fac546e677f24d01d91ae3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.thumb.700_0.jpeg">
                <img v-else :src="this.$store.state.myInfo.myInfos.img">
            </div>
            <div class="img" v-else>
                <img  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583718524632&di=61c86091e2fac546e677f24d01d91ae3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.thumb.700_0.jpeg">
            </div>
            <div class="xinxi">
                <!-- 登录后用户名 -->
                <p v-if="this.$store.state.username" class="nickName">
                    <span class="nickNamep">{{this.$store.state.username}} </span>
                    <span @click="signOut" class="signOut">退出登录</span>
                </p>
                    
                <!-- 立即登录 -->
                <router-link to="/login" tag="p" v-else>立即登录</router-link>
                <p>饿不饿都上饿了么</p>
            </div>

        </div>
        <!-- 用户头像end -->
        <!-- 饿了么红包卡卷钱包start -->
        <van-row>
            <van-col span="12" class="couponBg">
                <div class="coupon">
                    <van-row>
                        <van-col span="16">
                            <h3>红包卡卷</h3>
                            <P>优惠特价</P>
                        </van-col>
                        <van-col span="8">
                            <svg class="icon hongbao" aria-hidden="true">
                                <use xlink:href="#icon-hongbao"></use>
                            </svg>
                        </van-col>
                    </van-row>
                </div>
            </van-col>
            <van-col span="12" class="couponBg">
                <div class="coupon">
                    <van-row>
                        <van-col span="16">
                            <h3>钱包</h3>
                            <P>金币、借钱、福利</P>
                        </van-col>
                        <van-col span="8">
                            <svg class="icon qianbao" aria-hidden="true">
                                <use xlink:href="#icon-qianbao"></use>
                            </svg>
                        </van-col>
                    </van-row>
                </div>
            </van-col>
        </van-row>
        <!-- 饿了么红包卡卷钱包end -->
        <div class="cell">
            <van-cell is-link icon="bill-o" to="/myInfo">
                <template slot="title">
                    <span class="custom-title">账号信息</span>
                </template>
            </van-cell>
            <van-cell is-link icon="location-o" to="/address">
                <template slot="title">
                    <span class="custom-title">地址管理</span>
                </template>
            </van-cell>
            <van-cell is-link icon="star-o" to="/like">
                <template slot="title">
                    <span class="custom-title">我的收藏</span>
                </template>
            </van-cell>
            <van-cell is-link icon="star-o">
                <template slot="title">
                    <span class="custom-title">我的客服</span>
                </template>
            </van-cell>
        </div>
        <!-- 底部start -->
        <div class="bottom">
            <p>版本号：2.0.2 | Builds 2</p>
        </div>
        <!-- 底部end -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed:{
            myInfo(){
                return this.$store.state.myInfo.myInfos;
            }
        },
        methods:{
            signOut(){
                this.$store.state.username='';
                this.$store.state.myInfo.myInfos=null;
            },
            // 上传头像
            previewPic:function(e){
                var that = this;
                var file = e.target.files[0];
                var fr =new FileReader();
                fr.readAsDataURL(file);
                fr.onload = function(e){
                    that.pic = e.target.result; 
                    that.$store.commit("myInfo/changeInfo",that.pic);
                }  
            }
           
        },
        created(){
            let phoneNumber = this.$store.state.phoneNumber;
            // 查询用户信息
            this.$axios.get("/myInfo",{
                params:phoneNumber
            }).then(res=>{
                this.$store.commit("myInfo/changeMyInfo",res.data.result);
            })
        }
    }
</script>

<style lang="scss" scoped>
.me{
    overflow-y: auto;
    p,h3,h1,img,span{
        margin: 0;
        padding: 0;
    }
    // icon
    .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    }
    h1{
        margin-left: 20px;
        margin-top: 6px;
    }
    .info{
        
        width: 100%;
        height: 100px;
        margin-top: 20px;
        display: flex;

        .img{
            width: 30%;
            height: 100px;
            border-radius: 50%;
            margin-left: 20px;
            position:relative;
            img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
            input#files{
                width: 100%;
                height: 100px;
                opacity:0;
                filter:alpha(opacity=0);
                position:absolute;
                left:0;
                top:0;
            }
        }
        .xinxi{
            width: 70%;
            margin:10px 12px;
            p{
                margin-top: 10px;
            }
            p:first-child{
                font-weight: bold;
                font-size: 24px;
                display: flex;
                span{
                    display: block; 
                }
                span.nickNamep{
                    width: 70%;
                    overflow: hidden;

                    white-space: nowrap;

                    text-overflow: ellipsis;
                    
                    line-height: 30px;
                }
                span.signOut{
                    width: 30%;
                    font-size: 12px;
                    line-height: 30px;
                    margin-left: 3%;
                }
            }
            p:last-child{
                font-size: 14px;
                color: rgb(158, 156, 156);
            }
        }
    }
    .couponBg{
        background-color: #fafafa;
        h3{
            font-weight: normal;
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            margin-left: 10px;
        }
        p{
            font-size: 12px;
            color: rgb(165, 160, 160);
            margin-left: 10px;
        }
    }
    .coupon{
        width: 90%;
        height: 80px;
        margin: 20px auto;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        .hongbao{
            width: 40px;
            height: 40px;
            background-color: #ffd1c5;
            margin-top: 10px;
            border-radius: 5px;
        }
        .qianbao{
            width: 40px;
            height: 40px;
            background-color: #c7e9f7;
            margin-top: 10px;
            border-radius: 5px;
        }
    }
    .cell{
        width: 90%;
        margin: 10px auto;
        .van-cell__title{
            height: 50px;
            margin-left: 10px;
        }
    }
    .bottom{
        height: 150px;
        background-color: #fafafa;
        text-align: center;
        p{
            color: #ccc;
            font-size: 12px;
            line-height: 50px;
        }
    }
}


</style>