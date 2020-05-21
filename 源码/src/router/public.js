export default[
    {
        path:"/advertpage",
        name:"广告页",
        component:()=>import("../components/public/advert.vue"),
        // 独享路由守卫
        // beforeEnter: (to, from, next) => {
        //     // 1 通过存储过程，判断存储中是否存在数据
        //     if(localStorage.advertpage){
        //         // 2.有参数值，直接跳过引导页，进广告页
        //         next();
        //     }else{
        //         // 没有参数值，进入引导页
        //         localStorage.advertpage = true;
        //         next("/guidepage");
        //     }
        // }
    }
]