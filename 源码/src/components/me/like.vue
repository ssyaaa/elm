<template>
  <div class="like">
    <van-nav-bar
        title="我的收藏"
        left-arrow
        :fixed="true"
        @click-left="$router.go(-1)"
      />
    <template v-if="likeList.length > 0 && this.$store.state.username != ''">
      
      <div class="box">
          <div class="like-box"  v-for="(item, index) in likeList" :key="index">
            <div class="img">
              <img class="auto-img" :src="item.img" alt="">
            </div>
            <div class="title">{{item.foodName}}</div>
            <div class="content">
              <span class="price">{{item.twoTag3}}</span>
              <span class="delete" >
                <van-icon class="v-icon" name="delete" @click="deleteLike(index)"/>
              </span>
            </div>
          </div>
      </div>
      
    </template>

    <template v-else>
      <div>
         <div class="not-like">
          <div class="not-like-icon">
            <van-icon name="like" />
          </div>
          <div v-if="this.$store.state.username != ''">没有收藏商品，赶紧去逛一逛！</div>
          <div v-else>
            <span class="login-text">未登录，不能查看收藏数据</span>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
  export default {
    computed:{
      likeList(){
        return this.$store.state.like.likeList;
      }
    },
    methods:{
      // 删除收藏
      deleteLike(index){
        this.$store.commit("like/deleteLikeList1",index);
      }
    },
    created(){
      console.log(this.likeList);
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
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
  .like{
    padding-top: 46px;
    min-height: 800px;
    background-color: rgb(241, 241, 241);
    .not-like{
      font-size: 18px;
      margin-top: 50px;
      color: #e0e0e0;
      text-align: center;
    }
    .not-like-icon{
      font-size: 64px;
    }
      .login-text{
      color: #444;
    }
  .box{
    width: 100%;
    .like-box{
      float: left;
      width: 46%;
      margin-left: 10px;
      margin-bottom: 10px;
      background-color: #fff;
      .img{
        width: 150px;
        height: 160px;
        margin: 10px auto;
        .auto-img{
          width: 150px;
          height: 160px;
        }
      }
    }
    .title{
      padding: 10px 5px;
      color: #444;
      font-size: 16px;
    }
    .content{
      display: flex;
    }
    .price{
      margin-left: 5px;
      width: 80%;
      font-size: 14px;
      color: #165DAD;
      line-height: 24px;
    }
    .delete{
      width: 20%;
      height: 24px;
      width: 24px;
      .v-icon{
        font-size: 24px;
        color: #e0e0e0;
      }
    }
  }

  }
</style>