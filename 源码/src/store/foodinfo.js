export default {
    namespaced:true,
    state:{
        foodShop:[],//商品信息数组 
        buyCartLists:[],//加入购物车商品
    },
    mutations:{
        addBuyCart(state,data){
            state.buyCartLists = data;
        }
    }
}