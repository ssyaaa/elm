(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b88f7ef8"],{c348:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:e.$route.name,"left-arrow":""},on:{"click-left":function(t){return e.$router.push("/me")}}}),a("van-form",{on:{submit:e.onSubmit}},[a("van-field",{attrs:{name:"phone",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),a("van-field",{attrs:{type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1),a("div",{staticClass:"goPage",on:{click:e.goRegister}},[e._v("如果未注册，请点击此注册")])],1)},s=[],o={data:function(){return{phone:"",password:""}},methods:{goRegister:function(){this.$router.push("/register")},onSubmit:function(e){var t=this;this.$axios.get("/login",{params:e}).then((function(e){200==e.data.code?(t.$toast(e.data.msg),t.$store.state.username=e.data.nickName,t.$store.state.phoneNumber=e.data.phone,t.$router.push("/me")):t.$toast(e.data.msg)}))}},created:function(){this.$store.state.vanTabbar=!1},mounted:function(){this.$store.state.vanTabbar=!1},destroyed:function(){this.$store.state.vanTabbar=!0}},r=o,i=(a("dac9"),a("2877")),u=Object(i["a"])(r,n,s,!1,null,"7f28f3d2",null);t["default"]=u.exports},dac9:function(e,t,a){"use strict";var n=a("e93a"),s=a.n(n);s.a},e93a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-b88f7ef8.e78852f5.js.map