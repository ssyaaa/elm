(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51c3bc3b"],{"0e1d":function(t,s,a){"use strict";var i=a("498c"),e=a.n(i);e.a},"498c":function(t,s,a){},e869:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"me"},[a("div",{staticClass:"info"},[""!=this.$store.state.username?a("div",{staticClass:"img"},[a("input",{attrs:{type:"file",id:"files",accept:"image/*"},on:{change:t.previewPic}}),null==this.$store.state.myInfo.myInfos?a("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583718524632&di=61c86091e2fac546e677f24d01d91ae3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.thumb.700_0.jpeg"}}):a("img",{attrs:{src:this.$store.state.myInfo.myInfos.img}})]):a("div",{staticClass:"img"},[a("img",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583718524632&di=61c86091e2fac546e677f24d01d91ae3&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F27%2F20170427155254_Kctx8.thumb.700_0.jpeg"}})]),a("div",{staticClass:"xinxi"},[this.$store.state.username?a("p",{staticClass:"nickName"},[a("span",{staticClass:"nickNamep"},[t._v(t._s(this.$store.state.username)+" ")]),a("span",{staticClass:"signOut",on:{click:t.signOut}},[t._v("退出登录")])]):a("router-link",{attrs:{to:"/login",tag:"p"}},[t._v("立即登录")]),a("p",[t._v("饿不饿都上饿了么")])],1)]),a("van-row",[a("van-col",{staticClass:"couponBg",attrs:{span:"12"}},[a("div",{staticClass:"coupon"},[a("van-row",[a("van-col",{attrs:{span:"16"}},[a("h3",[t._v("红包卡卷")]),a("P",[t._v("优惠特价")])],1),a("van-col",{attrs:{span:"8"}},[a("svg",{staticClass:"icon hongbao",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-hongbao"}})])])],1)],1)]),a("van-col",{staticClass:"couponBg",attrs:{span:"12"}},[a("div",{staticClass:"coupon"},[a("van-row",[a("van-col",{attrs:{span:"16"}},[a("h3",[t._v("钱包")]),a("P",[t._v("金币、借钱、福利")])],1),a("van-col",{attrs:{span:"8"}},[a("svg",{staticClass:"icon qianbao",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-qianbao"}})])])],1)],1)])],1),a("div",{staticClass:"cell"},[a("van-cell",{attrs:{"is-link":"",icon:"bill-o",to:"/myInfo"}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-title"},[t._v("账号信息")])])],2),a("van-cell",{attrs:{"is-link":"",icon:"location-o",to:"/address"}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-title"},[t._v("地址管理")])])],2),a("van-cell",{attrs:{"is-link":"",icon:"star-o",to:"/like"}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-title"},[t._v("我的收藏")])])],2),a("van-cell",{attrs:{"is-link":"",icon:"star-o"}},[a("template",{slot:"title"},[a("span",{staticClass:"custom-title"},[t._v("我的客服")])])],2)],1),t._m(0)],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bottom"},[a("p",[t._v("版本号：2.0.2 | Builds 2")])])}],n={data:function(){return{}},computed:{myInfo:function(){return this.$store.state.myInfo.myInfos}},methods:{signOut:function(){this.$store.state.username="",this.$store.state.myInfo.myInfos=null},previewPic:function(t){var s=this,a=t.target.files[0],i=new FileReader;i.readAsDataURL(a),i.onload=function(t){s.pic=t.target.result,s.$store.commit("myInfo/changeInfo",s.pic)}}},created:function(){var t=this,s=this.$store.state.phoneNumber;this.$axios.get("/myInfo",{params:s}).then((function(s){t.$store.commit("myInfo/changeMyInfo",s.data.result)}))}},o=n,c=(a("0e1d"),a("2877")),l=Object(c["a"])(o,i,e,!1,null,"7dc22b7e",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-51c3bc3b.3e682c82.js.map