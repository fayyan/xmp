(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{550:function(e,t,o){e.exports={m_modal:"m_modal_2O5Cj99z",m_modal_scroll:"m_modal_scroll_1WvtbnuD"}},643:function(e,t,o){"use strict";var l=o(550),n=o.n(l);t.default=n.a},722:function(e,t,o){"use strict";o.r(t);o(215);var l={props:{open:{required:!0,type:Boolean},loading:{type:Boolean,default:!1},title:{type:String,default:"Tips"},width:{type:Number,default:750},closable:{type:Boolean,default:!1}},data:function(){return{openModal:!1,modalHeight:100}},watch:{open:function(e){this.openModal=e},openModal:function(e){this.$emit("update:open",e),e&&this.getHeight()}},methods:{getHeight:function(){var e=this;this.$nextTick((function(){var t=e.$refs.modal.$el,o=t.querySelector(".ivu-modal-header").clientHeight,l=t.querySelector(".ivu-modal-footer").clientHeight,n=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.modalHeight=n-o-l-60}))},handleModalHidden:function(){document.body.style.overflow="",document.body.style.paddingRight=""}},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.openModal&&e.getHeight()}))}},n=o(643),i=o(7);var a=Object(i.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Modal",{ref:"modal",class:e.$style.m_modal,attrs:{title:e.title,closable:e.closable,width:e.width,"mask-closable":!1,styles:{top:"20px"}},on:{"on-hidden":e.handleModalHidden},model:{value:e.openModal,callback:function(t){e.openModal=t},expression:"openModal"}},[o("div",{class:e.$style.m_modal_scroll,style:{maxHeight:e.modalHeight+"px",position:"relative"}},[e._t("content")],2),e._v(" "),e._t("footer",null,{slot:"footer"}),e._v(" "),e.loading?o("Spin",{attrs:{size:"large",fix:""}}):e._e()],2)}),[],!1,(function(e){this.$style=n.default.locals||n.default}),null,null);t.default=a.exports}}]);