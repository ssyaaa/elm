<template>
    <div class="pay">
        <van-nav-bar
            :title="$route.name"
            left-arrow
            @click-left="$router.go(-1)"
            fixed
        />
        <!-- 地址start -->
        <div class="address" @click="choseAddress">
            <div v-if="addressGoods.length!=0">
                <h4>{{addressGoods.address}}</h4>
                <p class="name"><span>{{addressGoods.name}}</span><span>{{addressGoods.tel}}</span></p>
                
            </div>
            <div v-else>请选择收货地址</div>
            
            
        </div>
        <van-action-sheet v-model="show" title="选择收货地址">
            <div class="content">
                <van-address-list
                    v-model="chosenAddressId"
                    :list="list"
                    @add="onAddAddress"
                    @select="choseId"
                />
            </div>
        </van-action-sheet>
        <!-- 商品信息 -->
        <div class="payInfo">
            <h5>{{buyCartLists[0].foodName}}</h5>
            <van-card
                v-for="(v,i) in buyCartLists" :key="i"
                :num="v.fooddetail.num"
                :price="v.fooddetail.meny"
                desc="描述信息"
                :title="v.fooddetail.name"
                :thumb="v.fooddetail.img"
            />
            <div class="totals">
                <span>共{{num}}件商品</span><span>合计:<strong>￥{{totals}}</strong></span>
            </div>
        </div>
        
        <!-- 底部支付按钮 -->
        <van-submit-bar
            :price="totals*100"
            label=" "
            text-align="left"
            button-text="支付"
            safe-area-inset-bottom
            @submit="onSubmit"
        >
        </van-submit-bar>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                show: false,//面板选择
                chosenAddressId: '0',
                addressGoods:[],//收获地址
            }
        },
        computed:{
            buyCartLists(){
                return this.$store.state.foodinfo.buyCartLists;
            },
            // 总价格
            totals(){
               return this.buyCartLists.reduce((total,item)=>{
                    return total + parseInt(item.fooddetail.meny) * parseInt(item.fooddetail.num);//总价格
                },0)
                
            },
            // 总数量
            num(){
               return this.buyCartLists.reduce((total,item)=>{
                    return total + parseInt(item.fooddetail.num);//总数量
                },0)
                
            },
            ...mapState('address',['list']),
            ...mapState('order',['foodLists'])
        },
        methods: {
            onSubmit(){
                this.$toast("支付成功");
                let data = {};
                let detail = ''
                var date = new Date();
                var y = date.getFullYear();
                var m = date.getMonth()+1
                var d = date.getDate(); 

                this.buyCartLists.forEach(v=>{
                    detail += " " + v.fooddetail.name
                    data = {
                        title:v.foodName, 
                        price:this.totals,
                        desc:y+"-"+m+"-"+d,
                        thumb:v.fooddetail.img,
                        num:this.num,
                        foodDetail: detail
                    }
                })
                this.foodLists.push(data);
                this.$router.push("/order");
            },
            // 选择收货地址
            choseAddress(){
                this.show = true;
                // this.list.forEach(v=>{
                //     if(this.chosenAddressId == v.id){
                //         this.addressGoods = v;
                //     }
                // })
            },
            choseId(){
                this.list.forEach(v=>{
                    if(this.chosenAddressId == v.id){
                        this.addressGoods = v;
                    }
                })
            },
            onAddAddress() {
                // idAdd:1 新增地址 0 编辑地址
                this.$router.push({name:'NewAddress',query:{isAdd:1}})
            },
        },
        created(){
            this.$store.state.vanTabbar = false;
            // 查询地址
            this.$axios.get('/findAddress').then(res=>{
                if(res.data.code == 200){
                    let list = [];
                    for(let i = 0 ; i < res.data.result.length ; i ++){
                        if(res.data.result[i].phoneNumber == this.$store.state.phoneNumber){
                            let o = {
                                id:i-1+'',
                                aid:res.data.result[i].aip,
                                name:res.data.result[i].name,
                                tel:res.data.result[i].tel,
                                address:res.data.result[i].province + " " + res.data.result[i].city +"  " +res.data.result[i].county+"  " +res.data.result[i].addressDetail,
                                isDefault:res.data.result[i].isDefault
                            }
                            if(o.isDefault == 'true'){
                                this.chosenAddressId = o.id;
                            }
                            list.push(o);
                        }
                    }
                    // 修改vuex list 
                    this.$store.commit('address/changeData',{key:'list',value:list})
                }
            })
            
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
p,span,h4{
    margin: 0;
    padding: 0;
}
::v-deep .van-address-item .van-radio__icon--checked i.van-icon{
    background-color: #1989fa ;
    border-color: #1989fa;
}

.van-button--danger{
    background-color: #1989fa;
    border-color: #1989fa;
}

.van-tag--danger{
    background-color: #1989fa;
}
.van-address-item__edit{
    color: transparent;
}
.van-submit-bar__bar{
    background-color: rgb(67,67,69);
    
}
.van-submit-bar__price{
    color: white;
}
.van-submit-bar__button--danger{
    background:transparent;
    background-color: rgb(88,209,120);
    z-index: 1000;
    border-radius: 5px;
}
h5,.van-card{
    margin: 0;
    padding: 0;
}
.pay{
    min-height: 700px;
    width: 100%;
    background-color: #f0f0f0;
    padding-top: 45px;
    .content{
        padding: 10px;
    }
    .address{ 
        width: 93%;
        background-color: rgb(250,250,250);
        margin:10px auto;
        min-height: 50px;
        line-height: 50px;
        h4{
            padding-left: 5px;
        }
        p{
            padding-left: 5px;
            font-size: 14px;
            span{
                margin-right: 10px;
            }
        }
    }
    .payInfo{
        width: 93%;
        background-color: rgb(250,250,250);
        margin:10px auto;
        border-radius: 10px;
        h5{
            padding: 10px;
            border-bottom: 1px solid rgb(199, 198, 198);
        }
        .van-card{
            padding: 5px;
        }
        .totals{
            width: 100%;
            height: 40px;
            display: flex;
            span{
                font-size: 14px;
                color: rgb(155, 153, 153);
                line-height: 40px;
            }
            span:first-child{
                width: 70%;
                text-align: right;
                padding-right: 10px;
            }
            span:nth-child(2){
                width: 30%;
                strong{
                    color: #000;
                }
            }
        }
    }
}

// 
</style>