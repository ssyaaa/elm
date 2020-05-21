export default {
    namespaced:true,
    state:{
        likeList:[]
    },
    mutations:{
        changeLikeList(state,data){
            state.likeList.push(data);
        },
        deleteLikeList(state,data){
            state.likeList.forEach((v,item)=>{
                if(v.foodShopId == data){
                    state.likeList.splice(item,1);
                }
            })
        },
        // 删除收藏
        deleteLikeList1(state,index){
            state.likeList.splice(index,1);
        }
    }
}