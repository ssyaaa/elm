(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50e9edca"],{"38b1":function(t,a,s){},"873d":function(t,a,s){"use strict";var e=s("38b1"),o=s.n(e);o.a},ee36:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("van-row",[s("van-col",{attrs:{span:"2"}},[s("van-icon",{staticClass:"backIcon",attrs:{name:"arrow-left",size:"24px"},on:{click:function(a){return t.$router.go(-1)}}})],1),s("van-col",{attrs:{span:"19"}},[s("div",{staticClass:"topSearch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"螺蛳粉"},domProps:{value:t.keyword},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.searchEnter(a)},input:function(a){a.target.composing||(t.keyword=a.target.value)}}})])]),s("van-col",{attrs:{span:"3"}},[s("span",{staticClass:"searchFont",on:{click:t.searchEnter}},[t._v("搜索")])])],1),s("van-row",[s("van-col",{attrs:{span:"8"}},[s("van-dropdown-menu",{attrs:{"active-color":"#50c2ff"}},[s("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}})],1)],1),s("van-col",{attrs:{span:"4"}},[s("div",{staticClass:"font"},[t._v("距离")])]),s("van-col",{attrs:{span:"4"}},[s("div",{staticClass:"font"},[t._v("销量")])]),s("van-col",{attrs:{span:"8"}},[s("div",{staticClass:"font shaixuan"},[t._v("筛选"),s("van-icon",{attrs:{name:"filter-o"}})],1)])],1),s("van-row",[s("van-col",{attrs:{span:"6"}},[s("van-tag",{staticClass:"tag",staticStyle:{"margin-left":"10px"},attrs:{color:"#f3f3f3","text-color":"#000",size:"large"}},[t._v("守护联盟")])],1),s("van-col",{attrs:{span:"6"}},[s("van-tag",{staticClass:"tag",staticStyle:{"margin-left":"5px"},attrs:{color:"#f3f3f3","text-color":"#000",size:"large"}},[t._v("津贴优惠")])],1),s("van-col",{attrs:{span:"6"}},[s("van-tag",{staticClass:"tag",staticStyle:{"margin-left":"5px"},attrs:{color:"#f3f3f3","text-color":"#000",size:"large"}},[t._v("会员领红包")])],1),s("van-col",{attrs:{span:"6"}},[s("van-tag",{staticClass:"tag",staticStyle:{"margin-left":"10px"},attrs:{color:"#f3f3f3","text-color":"#000",size:"large"}},[t._v("满减优惠")])],1)],1),s("div",{staticClass:"shangjia"},[s("ul",t._l(t.shopFoods,(function(a,e){return s("router-link",{key:e,attrs:{to:{name:"Foods",params:{foodShopId:a.foodShopId}},tag:"li"}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:a.img,alt:""}})]),s("div",{staticClass:"right"},[s("h2",[t._v(t._s(a.foodName))]),s("van-rate",{staticClass:"xingxing",attrs:{readonly:"",size:"14px","allow-half":""},model:{value:a.start,callback:function(s){t.$set(a,"start",s)},expression:"value.start"}}),s("span",[t._v(t._s(a.start))]),s("span",[t._v("月销售:"+t._s(a.xiaoshou))]),s("span",[t._v("配送费:￥"+t._s(a.peisong))]),s("div",{staticClass:"three"},[s("div",{staticClass:"tag"},[s("van-tag",{attrs:{color:"#fff4eb","text-color":"#fe9b4b"}},[t._v("“"+t._s(a.firstTag1)+"”")]),s("van-tag",{attrs:{color:"#fff4eb","text-color":"#fe9b4b"}},[t._v("“"+t._s(a.firstTag2)+"”")])],1),s("div",{staticClass:"tag"},[s("van-tag",{attrs:{color:"#f2826a",plain:""}},[t._v(t._s(a.twoTag1))]),s("van-tag",{attrs:{color:"#f2826a",plain:""}},[t._v(t._s(a.twoTag2))]),s("van-tag",{attrs:{color:"#f2826a",plain:""}},[t._v(t._s(a.twoTag3))]),s("van-tag",{attrs:{plain:""}},[t._v("支持自取")])],1)]),s("div",{staticClass:"swiper-container swiperImg"},[s("div",{staticClass:"swiper-wrapper"},t._l(a.fooddetail,(function(a,e){return s("div",{key:e,staticClass:"swiper-slide"},[s("div",{staticClass:"foodsImg"},[s("img",{attrs:{src:a.img,alt:""}})]),s("p",[t._v(t._s(a.name))]),s("p",[t._v("￥"),s("span",[t._v(t._s(a.meny))]),t._v("起")])])})),0)])],1)])})),1)]),s("div",{staticClass:"bottom"})],1)},o=[],n=(s("4de4"),s("caad"),s("2532"),s("b619")),r={data:function(){return{keyword:this.$store.state.shop.keywordList[this.$store.state.shop.keywordList.length-1].key,shopFoods:this.$store.state.shop.foods,value1:0,option1:[{text:"综合排序",value:0},{text:"好评优先",value:1},{text:"距离优先",value:2}]}},methods:{searchEnter:function(){var t=this;this.$store.state.shop.keywordList.push({key:this.keyword}),this.shopFoods=this.$store.state.shop.foods.filter((function(a){return a.foodName.includes(t.keyword)}))}},mounted:function(){this.$store.state.vanTabbar=!1,new n["a"](".swiperImg",{slidesPerView:3,spaceBetween:10})},created:function(){var t=this;this.shopFoods=this.$store.state.shop.foods.filter((function(a){return a.foodName.includes(t.keyword)}))}},i=r,l=(s("873d"),s("2877")),c=Object(l["a"])(i,e,o,!1,null,"f197096c",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-50e9edca.cf9546a9.js.map