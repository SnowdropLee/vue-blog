webpackJsonp([5],{"32/Z":function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),r={data:function(){return{blogs:[],total:0,page:1,currentPage:0}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){console.log(e),t.blogs=e.data,t.total=e.total,t.page=e.page,t.currentPage=parseInt(t.$route.query.page)})},methods:{onPagechange:function(t){var e=this;console.log(t),n.a.getIndexBlogs({page:t}).then(function(a){console.log(a),e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}}),e.currentPage=parseInt(e.$route.query.page)})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v(t._s(e.title)),a("span",[t._v(" 发布于"+t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])})),t._v(" "),a("section",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,layout:"prev, pager, next",total:t.total},on:{"current-change":t.onPagechange,"update:currentPage":function(e){t.currentPage=e}}})],1)])},staticRenderFns:[]};var o=a("VU/8")(r,s,!1,function(t){a("32/Z")},"data-v-6f6dfb2f",null);e.default=o.exports}});
//# sourceMappingURL=5.0353f594fb20d606b2a0.js.map