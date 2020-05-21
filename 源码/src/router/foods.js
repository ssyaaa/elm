export default[
    {
        path:"/foods/:foodShopId",
        name:'Foods',
        component:()=>import("../components/foodinfo/foodinfo.vue"),
    },
    {
        path:"/pay",
        name:"确认订单",
        component:()=>import("../components/order/pay.vue")
    }
]