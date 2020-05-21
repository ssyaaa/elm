<template>
  <div class="account">
    <van-nav-bar title="账号管理" left-arrow :fixed="true" @click-left="back" />
        <div v-if="this.$store.state.username != ''">
          <van-form>
            <van-field
                  v-model="myInfos.phone"
                  name="手机号"
                  label="手机号"
                  placeholder="手机号"
                  :rules="[{ required: true, message: '请填写手机号' }]"
              />
              <van-field
                  v-model="myInfos.nickName"
                  name="昵称"
                  label="昵称"
                  placeholder="昵称"
                  :rules="[{ required: true, message: '请填写昵称' }]"
              />
              <div style="margin: 16px;">
                  <van-button round block type="info" native-type="submit">
                  修改信息
                  </van-button>
              </div>
          </van-form>
      </div>
      <div v-else>请先登录</div>  
    

  </div>
</template>

<script>

  export default {

    data() {
      return {
        username:'',
        userInfo: {
            userImg: '',
            phone: '',
            nickName: '',
          },

      };
    },

    methods: {
        back(){
            this.$router.go(-1);
        },

    },
    computed:{
        myInfos(){
            return this.$store.state.myInfo.myInfos;
        }
    },
    created(){
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
  .account{ 
    padding-top: 46px;

  }
</style>