<template>
    <div>
        <van-nav-bar
        :title="$route.name"
        left-arrow
        @click-left="$router.push('/me')"
        />
        <!-- 账号用户名start -->
        <van-form @submit="onSubmit">
            <van-field
                v-model="phone"
                name="phone"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
        <!-- 账号用户名end -->
        <div class="goPage" @click="goRegister">如果未注册，请点击此注册</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                phone:'',
                password:'',
            }
        },
        methods:{
            // 进入注册界面
            goRegister(){
                this.$router.push('/register');
            },
            // 登录功能
            onSubmit(values){
                this.$axios.get("/login",{
                    params:values
                }).then(res=>{
                    if(res.data.code == 200){
                        this.$toast(res.data.msg);
                        // 设置sore中添加用户名
                        this.$store.state.username = res.data.nickName;
                        this.$store.state.phoneNumber = res.data.phone;
                        this.$router.push("/me");
                    }else{
                        this.$toast(res.data.msg);
                    }
                })
            }   
        },
        created() {
            this.$store.state.vanTabbar = false;
        },
        mounted(){
            this.$store.state.vanTabbar = false;
        },
        destroyed() {
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
.goPage{
    height: 30px;
    width: 60%;
    margin: 0 auto;
    line-height: 30px;
    text-align: center;
    color: rgb(90, 186, 224);
    cursor: pointer;
}
</style>