<template>
    <div class="new-address">
        <van-nav-bar
            :title="title"
            left-arrow
            @click-left="$router.go(-1)"
            fixed
        />
        <van-address-edit
            :area-list = "addressList"
            :address-info="addressInfo"
            :show-set-default = "isDefault"
            :show-delete = "isDelete"
            :show-postal = "isPastal"
            save-button-text = "保存地址"
            delete-button-text = "删除地址"
            detail-rows = 2
            detail-maxlength  = 50
            @save = "saveAddress"
        />
    </div>
</template>

<script>

import {mapState} from 'vuex'
    export default {
        name:'NewAddress',
        data() {
            return {          
                title:'新增地址',//标题名称
                // 初始化组件地址内容，编辑地址需要用到，编辑地址需要aid，新增地址不需要
                addressInfo:{
                    aid:'',
                    name:'',
                    tel:'',
                    province:'', 
                    city:'',
                    county:'',
                    addressDetail:'',
                    areaCode:'',
                    postalCode:'',
                    isDefault:true,
                },
                searchResult: []
            }
        },
        computed:{
            ...mapState('address',['isDefault','isDelete','isPastal','addressList','isAdd','list'])
        },
        methods: {
            // 保存地址
            saveAddress(addressContent){
                // 拷贝对象
                let data = Object.assign({} , addressContent);
                delete data.country;
                
                if(this.isAdd == 1){
                    // 新增地址
                    delete data.aid;

                }
                // 登录的手机号码 
                data['phoneNumber'] = this.$store.state.phoneNumber;

                this.$axios.get('/addAddress',{
                    params : data
                    
                }).then(res => {
                    if(res.data[res.data.length - 1].code == 200){
                        this.$toast(res.data[res.data.length - 1].msg);
                    }
                })
            },
            // 删除地址

        },
        created(){
            this.$store.state.vanTabbar = false; 
            // 截取查询参数
            let isAdd = this.$route.query.isAdd;
            let aid = this.$route.query.aid;
            this.$store.commit("address/changeData",{key:'isAdd',value:isAdd})
            // 编辑地址
            if(isAdd == 0){
                this.title = '编辑地址';
                let data = this.list.filter(item=>{
                    return item.aid.includes(aid);
                });
                let details = data[0].address.split(" ");
                this.addressInfo = {
                    aid:data[0].aid,
                    name:data[0].name,
                    tel:data[0].tel,
                    province:details[0], 
                    city:details[1],
                    county:details[2],
                    addressDetail:details[3],
                    areaCode:'',
                    postalCode:'',
                    isDefault:data[0].isDefault,
                }
            }
            
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
.new-address{
    padding-top: 46px;
    ::v-deep .van-button--danger{
        background-color: #1989fa;
        border-color: #1989fa;
    }
}

</style>