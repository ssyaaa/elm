export default[
    {
        path:"/search",
        name:"搜索",
        component:()=>import("../components/search/search.vue")
    },
    {
        path:"/searchDetail",
        name:"搜索结果页面",
        component:()=>import("../components/search/searchDetail.vue")
    }
]