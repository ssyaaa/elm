<template>
  <div class="register">
    <van-nav-bar
      title="注册界面"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="logo">
      <img class="auto-img" src="../../assets/logo.png" alt="" />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="11位手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="password"
        type="text"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="btn-box">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// 导入表单验证模块
import {valid} from '../../utils/valid'

export default {
  name: "Register",
  data() {
    return {
      phone:'',
      nickName:'',
      password:'',
    }
  },
  methods:{
    onSubmit(values) {
        console.log('submit', values);
        if (valid.validForm(values, this)) {
            //发起ajax请求
            this.$axios.get("/register",{
              params:values
            }).then((res)=>{
              console.log(res);
              if(res.data.code == 200){
                this.$toast(res.data.msg);
                this.$router.push("/login");
              }else{
                this.$toast(res.data.msg);
              }
              
            })
            
        }
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
};
</script>

<style lang="scss" scoped>
.register{
  .btn-box{
    margin-top: 16px;
    padding: 0 10px;
  }
  .logo{
    margin: 50px auto;
    width: 120px;
    height: 120px;
    img{
        width: 120px;
        height: 120px;
    }
  }
}
</style>