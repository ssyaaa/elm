export default{
    path:"/home",
    component:()=>import("../views/home.vue"),
    children:[
        {
            path:"recommend",
            name:"推荐",
            component:()=>import("../components/home/recommend.vue")
        }
    ]
}