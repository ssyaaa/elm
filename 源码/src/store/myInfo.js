export default {
    namespaced:true,
    state:{
        myInfos:null,//个人信息
    },
    mutations:{
        changeMyInfo(state,data){
            state.myInfos = data;
        },
        // 修改头像
        changeInfo(state,data){
            state.myInfos['img'] = data
        }
    }
}