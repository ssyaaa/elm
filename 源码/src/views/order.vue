<template>
    <div class="order">
        <van-nav-bar
        :title="$route.name"
        />
        <div class="dingdan" v-if="this.$store.state.username != ''">
            <div class="title">
                <van-cell title="饿了么" is-link arrow-direction="down" value="其他订单" />
            </div>
            <!-- 订单详情start -->
            <div v-for="(item,index) in foodLists" :key="index">
                <van-card
                :price="item.price.toFixed(2)"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.thumb"
                >
                    <div slot="tags">
                        <van-tag plain type="danger" class="service">商品已完成</van-tag>
                        <p>{{item.foodDetail}} 等{{item.num}}件</p>
                    </div>
                    <div slot="footer">
                        <van-button size="mini" @click="del(index)">删除订单</van-button>
                        <van-button size="mini" @click="showPopup">评价</van-button>
                    </div>
                </van-card>
            </div>
            <div class="space"></div>
            <!-- 订单详情end -->
            <!-- 弹出层start -->
            <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '41%' }"
                closeable
                close-icon="close"
            >   
                <!-- 标题 -->
                <van-nav-bar  title="我的评价"/>
                <!-- 五星好评 -->
                <van-field name="rate" label="商品评分">
                    <template #input>
                        <van-rate v-model="rate1" />
                    </template>
                </van-field>
                <van-field name="rate" label="骑手评分">
                    <template #input>
                        <van-rate v-model="rate2" />
                    </template>
                </van-field>
                <van-field 
                    rows="2" 
                    autosize 
                    label="留言评价" 
                    type="textarea" 
                    maxlength="50" 
                    placeholder="请输入评价" 
                />
                <!-- 提交 -->
                <van-button type="primary" block >提交</van-button>
            </van-popup>
            <!-- 弹出层end -->
        </div>
        <div v-else>请先登录</div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('order')
import {mapState} from 'vuex'
    export default {
        data() {
            return {       
                show: false,// 弹出层是否显示
                rate1: 3,//商品评价星星
                rate2: 3,//骑手评价星星
            }
        },
        computed:{
            ...mapState('order',['foodLists'])
        },
        methods:{
            ...mapMutations([
                "del",//删除功能
            ]),
            // 评价弹出层
            showPopup() {
                this.show = true;
            },
            // 提交评价
        },
        created(){
            
        }
    }
</script>

<style lang="scss" scoped>
.order{
    overflow-y: auto;
}
h1,html,body{
    margin: 0;
    padding: 0;
}

.dingdan{
    width: 89%;
    margin: 10px auto;
}
.van-cell__title{
    font-size: 22px;
    color: rgb(85, 84, 84);
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.service{
    position: absolute;
    right: 0;
    top: 10px;
}
.space{
    height: 50px;
}
</style>