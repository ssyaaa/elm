<template>
    <div class="address">
        <div v-if="this.$store.state.username != ''">
        <!-- <div v-if="true"> -->
            <van-nav-bar
                title="地址管理"
                left-arrow
                @click-left="$router.go(-1)"
                fixed
            />
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                default-tag-text=""
                @add="onAddAddress"
                @edit="onEditAddress"
                :switchable="false"
            />
        </div>
        <div v-else>
            <van-nav-bar
                title="地址管理"
                left-arrow
                @click-left="$router.go(-1)"
                fixed
            />
            请先登录
        </div>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                chosenAddressId: '0',
            }
        },
        computed:{
            ...mapState('address',['list'])
        },
        methods: {
            onAddAddress() {
                // idAdd:1 新增地址 0 编辑地址
                this.$router.push({name:'NewAddress',query:{isAdd:1}})
            },
            onEditAddress(item) {
                this.$router.push({name:'NewAddress',query:{isAdd:0,aid:item.aid}})

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
                                id:i+'',
                                aid:res.data.result[i].aip,
                                name:res.data.result[i].name,
                                tel:res.data.result[i].tel,
                                address:res.data.result[i].province + " " + res.data.result[i].city +" " +res.data.result[i].county+" " +res.data.result[i].addressDetail,
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
                    console.log("aaaa======>",this.list);
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
  .address{
    padding-top: 46px;

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
  }
</style>