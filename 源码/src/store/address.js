import addressList from '../data/addressList'
export default {
    namespaced:true,
    state:{
        isAdd:0,//新增或者编辑地址标识    1新增 0编辑
        isDefault : true,// 显示默认地址                
        isDelete : true,// 是否显示删除
        isPastal: true,//是否显示邮政编码
        addressList,//地址选择数组
        list:[]
    },
    mutations:{
        changeData(state , data){
            state[data.key] = data.value;
        },
        changeList(state,data){
            state.list = data;
        }
    }

}