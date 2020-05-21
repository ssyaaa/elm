export default{
    namespaced:true,
    state:{
        foodLists:[
            {
                title:"柳源螺蛳粉店", 
                price:20,
                desc:"2020-03-08 18:00",
                thumb:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583721294766&di=d29071bca70a6cf34e59b7b015da1fb8&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fpoi%2F1803%2F5d%2F4d300869c0e14837.jpg_r_480x360x95_0ac600bd.jpg",
                num:4,
                foodDetail:"原味螺蛳粉 三两"
            }
        ]
    },
    mutations:{
        del(state,index){
            state.foodLists.splice(index,1);
        }
    },
    actions:{},
    getters:{},
    modules:{}
}