(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"/WyT":function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("TSYQ"),o=t.n(l),c=t("vW3X"),s=t.n(c);function i(e){var a=e.className,t=e.children;return n.a.createElement("div",{className:o()(s.a.container,a)},t)}i.defaultProps={},a["a"]=n.a.memo(i)},"/ezw":function(e,a,t){"use strict";var r=t("q1tI"),n=t("TSYQ"),l=t.n(n);function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var c=function(e){var a=e.prefixCls,t=e.className,n=e.width,c=e.style;return r["createElement"]("h3",{className:l()(a,t),style:o({width:n},c)})},s=c;function i(e){return p(e)||d(e)||m(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,a){if(e){if("string"===typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,a):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return f(e)}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}var v=function(e){var a=function(a){var t=e.width,r=e.rows,n=void 0===r?2:r;return Array.isArray(t)?t[a]:n-1===a?t:void 0},t=e.prefixCls,n=e.className,o=e.style,c=e.rows,s=i(Array(c)).map((function(e,t){return r["createElement"]("li",{key:t,style:{width:a(t)}})}));return r["createElement"]("ul",{className:l()(t,n),style:o},s)},b=v,h=t("H84U");function g(){return g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},g.apply(this,arguments)}function y(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var E=function(e){var a,t,n=e.prefixCls,o=e.className,c=e.style,s=e.size,i=e.shape,u=l()((a={},y(a,"".concat(n,"-lg"),"large"===s),y(a,"".concat(n,"-sm"),"small"===s),a)),m=l()((t={},y(t,"".concat(n,"-circle"),"circle"===i),y(t,"".concat(n,"-square"),"square"===i),y(t,"".concat(n,"-round"),"round"===i),t)),d="number"===typeof s?{width:s,height:s,lineHeight:"".concat(s,"px")}:{};return r["createElement"]("span",{className:l()(n,o,u,m),style:g(g({},d),c)})},O=E,k=t("BGR+");function j(){return j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},j.apply(this,arguments)}function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var C=function(e){var a=function(a){var t=a.getPrefixCls,n=e.prefixCls,o=e.className,c=e.active,s=t("skeleton",n),i=Object(k["a"])(e,["prefixCls"]),u=l()(s,o,"".concat(s,"-element"),w({},"".concat(s,"-active"),c));return r["createElement"]("div",{className:u},r["createElement"](O,j({prefixCls:"".concat(s,"-avatar")},i)))};return r["createElement"](h["a"],null,a)};C.defaultProps={size:"default",shape:"circle"};var N=C;function x(){return x=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function I(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var S=function(e){var a=function(a){var t=a.getPrefixCls,n=e.prefixCls,o=e.className,c=e.active,s=t("skeleton",n),i=Object(k["a"])(e,["prefixCls"]),u=l()(s,o,"".concat(s,"-element"),I({},"".concat(s,"-active"),c));return r["createElement"]("div",{className:u},r["createElement"](O,x({prefixCls:"".concat(s,"-button")},i)))};return r["createElement"](h["a"],null,a)};S.defaultProps={size:"default"};var P=S;function q(){return q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)}function T(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var F=function(e){var a=function(a){var t=a.getPrefixCls,n=e.prefixCls,o=e.className,c=e.active,s=t("skeleton",n),i=Object(k["a"])(e,["prefixCls"]),u=l()(s,o,"".concat(s,"-element"),T({},"".concat(s,"-active"),c));return r["createElement"]("div",{className:u},r["createElement"](O,q({prefixCls:"".concat(s,"-input")},i)))};return r["createElement"](h["a"],null,a)};F.defaultProps={size:"default"};var M=F;function A(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function R(){return R=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}function V(e){return V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function _(e){return e&&"object"===V(e)?e:{}}function W(e,a){return e&&!a?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function X(e,a){return!e&&a?{width:"38%"}:e&&a?{width:"50%"}:{}}function H(e,a){var t={};return e&&a||(t.width="61%"),t.rows=!e&&a?3:2,t}var L=function(e){var a=function(a){var t=a.getPrefixCls,n=a.direction,o=e.prefixCls,c=e.loading,i=e.className,u=e.children,m=e.avatar,d=e.title,p=e.paragraph,f=e.active,v=t("skeleton",o);if(c||!("loading"in e)){var h,g,y,E=!!m,k=!!d,j=!!p;if(E){var w=R(R({prefixCls:"".concat(v,"-avatar")},W(k,j)),_(m));g=r["createElement"]("div",{className:"".concat(v,"-header")},r["createElement"](O,w))}if(k||j){var C,N;if(k){var x=R(R({prefixCls:"".concat(v,"-title")},X(E,j)),_(d));C=r["createElement"](s,x)}if(j){var I=R(R({prefixCls:"".concat(v,"-paragraph")},H(E,k)),_(p));N=r["createElement"](b,I)}y=r["createElement"]("div",{className:"".concat(v,"-content")},C,N)}var S=l()(v,i,(h={},A(h,"".concat(v,"-with-avatar"),E),A(h,"".concat(v,"-active"),f),A(h,"".concat(v,"-rtl"),"rtl"===n),h));return r["createElement"]("div",{className:S},g,y)}return u};return r["createElement"](h["a"],null,a)};L.defaultProps={avatar:!1,title:!0,paragraph:!0},L.Button=P,L.Avatar=N,L.Input=M;var Q=L;a["a"]=Q},"0+wW":function(e,a,t){e.exports={number:"_3QpzSpME",input:"XQyz8nD1",listArray:"_1BVXMzlB",row:"EpPSsstT",item:"_2kF9Xp4q",remove:"lIxaQw5e",rowItem:"KLEpAsEH"}},"3tWz":function(e,a){var t=Array.prototype,r=t.join;function n(e,a){return null==e?"":r.call(e,a)}e.exports=n},"8QAd":function(e,a,t){e.exports={container:"_1g-auZ5w",submit:"cHdXk47V",button:"_1KZxR83W"}},BxjO:function(e,a,t){"use strict";t("miYZ");var r=t("tsqr"),n=t("k1fw"),l=(t("+L6B"),t("2/Rp")),o=(t("OaEy"),t("2fM7")),c=(t("y8nQ"),t("Vl3Y")),s=t("0Owb"),i=(t("5NDa"),t("5rEg")),u=t("qPyV"),m=t.n(u),d=t("3WF5"),p=t.n(d),f=t("q1tI"),v=t.n(f),b=t("TSYQ"),h=t.n(b),g=t("9kvl"),y=t("up7p"),E=t("yWgo"),O=t("ji4e"),k=t("Rt6h"),j=t("7CY4"),w=t("AAfL"),C=t("8QAd"),N=t.n(C),x=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.routes.form.description"}),name:"description"};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.description},r),v.a.createElement(i["a"],{className:N.a.input,placeholder:t({id:"dashboard.routes.form.description.placeholder"})}))}),I=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r=v.a.useMemo(()=>[{required:!0,message:t({id:"dashboard.routes.form.uris.required"})},{pattern:/^([\\*\\./0-9a-zA-Z-_~@\\?\\!#$\\(\\)]+)$/,message:t({id:"dashboard.routes.form.uris.pattern"})}],[t]),n={label:t({id:"dashboard.routes.form.uris"}),name:"uris",rules:r},l={allowClear:!0,mode:"tags",placeholder:t({id:"dashboard.routes.form.uris.placeholder"})};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.uris},n),v.a.createElement(o["a"],Object(s["a"])({className:N.a.select},l)))}),S=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.routes.form.hosts"}),name:"hosts"},n={allowClear:!0,mode:"tags",placeholder:t({id:"dashboard.routes.form.hosts.placeholder"})};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.hosts},r),v.a.createElement(o["a"],Object(s["a"])({className:N.a.select},n)))}),P=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.routes.form.remote.address"}),name:"remoteAddress"};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.remoteAddress},r),v.a.createElement(i["a"],{className:N.a.input,placeholder:t({id:"dashboard.routes.form.remote.address.placeholder"})}))}),q=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.routes.form.methods"}),name:"methods"},n=v.a.useMemo(()=>p()(w["a"],e=>v.a.createElement(o["a"].Option,{key:e,value:e,title:e},e)),[]),l={allowClear:!0,mode:"multiple",placeholder:t({id:"dashboard.routes.form.methods.placeholder"})};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.methods},r),v.a.createElement(o["a"],Object(s["a"])({className:N.a.select},l),n))}),T=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.routes.form.upstream"}),name:"upstream"},n=Object(O["a"])({api:k["f"]}),l=n.response,i=n.loading,u=v.a.useMemo(()=>p()(m()(l||[],e=>e.id),e=>v.a.createElement(o["a"].Option,{key:e.id,value:e.key,title:e.description||e.key},e.description||e.key)),[l]),d={allowClear:!0,placeholder:t({id:"dashboard.routes.form.upstream.placeholder"}),loading:i};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.upstream},r),v.a.createElement(o["a"],Object(s["a"])({className:N.a.select},d),u))}),F=v.a.memo(e=>{var a=Object(g["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.routes.form.service"}),name:"service"},n=Object(O["a"])({api:j["e"]}),l=n.response,i=n.loading,u=v.a.useMemo(()=>p()(m()(l||[],e=>e.id),e=>v.a.createElement(o["a"].Option,{key:e.id,value:e.key,title:e.description||e.key},e.description||e.key)),[l]),d={allowClear:!0,placeholder:t({id:"dashboard.routes.form.service.placeholder"}),loading:i};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.service},r),v.a.createElement(o["a"],Object(s["a"])({className:N.a.select},d),u))}),M=v.a.memo(e=>{var a=e.loading,t=Object(g["e"])(),r=t.formatMessage,n=v.a.useCallback(()=>g["b"].push("/dashboard/routes"),[]),o={};return v.a.createElement(c["a"].Item,Object(s["a"])({className:N.a.submit},o),v.a.createElement(l["a"],{className:N.a.button,htmlType:"submit",type:"primary",loading:a},r({id:"dashboard.routes.form.submit"})),v.a.createElement(l["a"],{className:N.a.button,htmlType:"button",onClick:n},r({id:"dashboard.routes.form.cancel"})))}),A=v.a.memo(e=>{var a=e.className,t=e.loading,l=e.record,o=e.onSubmit,i=Object(g["e"])(),u=i.formatMessage,m=v.a.useCallback(e=>o(Object(n["a"])({key:l.key},e)).then(()=>r["a"].success(u({id:"dashboard.routes.form.".concat(Object(E["g"])(l.key)?"edit":"add",".success")}))),[u,o,l.key]),d={initialValues:l,layout:"vertical",onFinish:m};return v.a.createElement(c["a"],Object(s["a"])({className:h()(N.a.container,a)},d),v.a.createElement(x,null),v.a.createElement(I,null),v.a.createElement(S,null),v.a.createElement(P,null),v.a.createElement(q,null),v.a.createElement(T,null),v.a.createElement(F,null),v.a.createElement(y["a"],null),v.a.createElement(M,{loading:t}))});A.defaultProps={record:{}},a["a"]=A},H0h1:function(e,a,t){var r=t("SKAX");function n(e,a){var t=!0;return r(e,(function(e,r,n){return t=!!a(e,r,n),t})),t}e.exports=n},Jlc5:function(e,a,t){var r=t("ZirO"),n=t("H0h1"),l=t("ut/Y"),o=t("Z0cm"),c=t("mv/X");function s(e,a,t){var s=o(e)?r:n;return t&&c(e,a,t)&&(a=void 0),s(e,l(a,3))}e.exports=s},"LJq/":function(e,a,t){"use strict";t.r(a);var r=t("k1fw"),n=t("tJVT"),l=(t("sPJy"),t("bE4q")),o=t("q1tI"),c=t.n(o),s=t("9kvl"),i=t("uqfK"),u=t("/WyT"),m=t("SQgF"),d=t("BxjO"),p=t("6v52"),f=t("QlUh"),v=t.n(f),b=c.a.memo(e=>{var a=Object(s["e"])(),t=a.formatMessage,r=c.a.createElement(l["a"],null,c.a.createElement(l["a"].Item,{href:"/dashboard"},c.a.createElement(i["a"],null)),c.a.createElement(l["a"].Item,{href:"/dashboard/routes"},t({id:"dashboard.routes.menu"})),c.a.createElement(l["a"].Item,null,t({id:"dashboard.routes.new"}))),n=null;return c.a.createElement(m["a"],{left:r,right:n})});function h(e){var a=e.loading,t=e.addRecord;return c.a.createElement("div",{className:v.a.container},c.a.createElement(u["a"],null,c.a.createElement(b,null),c.a.createElement(d["a"],{className:v.a.form,loading:a["addRecord"],onSubmit:t})))}h.defaultProps={};var g=Object(p["a"])(["addRecord"]),y=Object(n["a"])(g,2),E=y[0],O=y[1];function k(e,a){return{loading:O(e.loading)}}function j(e,a){return Object(r["a"])({},E(e))}function w(e,a,t){return Object(r["a"])(Object(r["a"])({},e),a)}var C=Object(s["a"])(k,j,w)(c.a.memo(h));C.title="dashboard.routes.title",a["default"]=C},MJIl:function(e,a,t){var r=t("QoRX"),n=t("ut/Y"),l=t("Nh2a"),o=t("Z0cm"),c=t("mv/X");function s(e,a,t){var s=o(e)?r:l;return t&&c(e,a,t)&&(a=void 0),s(e,n(a,3))}e.exports=s},Nh2a:function(e,a,t){var r=t("SKAX");function n(e,a){var t;return r(e,(function(e,r,n){return t=a(e,r,n),!t})),!!t}e.exports=n},QlUh:function(e,a,t){e.exports={container:"_30RyFwUu",form:"_3UAtBW1r"}},SQgF:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),l=t("TSYQ"),o=t.n(l),c=t("sXlP"),s=t.n(c);function i(e){var a=e.className,t=e.left,r=e.right;return n.a.createElement("div",{className:o()(s.a.container,a)},n.a.createElement("div",{className:s.a.left},t),n.a.createElement("div",{className:s.a.right},r))}i.defaultProps={},a["a"]=n.a.memo(i)},ZirO:function(e,a){function t(e,a){var t=-1,r=null==e?0:e.length;while(++t<r)if(!a(e[t],t,e))return!1;return!0}e.exports=t},cWXX:function(e,a,t){"use strict";t("cIOH"),t("oIFs")},ji4e:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return f}));var r=t("k1fw"),n=t("tJVT"),l=t("lSCD"),o=t.n(l),c=(t("Jlc5"),t("YO3V"),t("q1tI")),s=t.n(c),i=t("yWgo");function u(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i["j"];var r=s.a.useRef(void 0);r.current&&t(a,r.current)||(r.current=a),s.a.useEffect(e,r.current)}function m(e){return{config:e,loading:!1,response:void 0,error:void 0}}function d(e,a){switch(a.type){case"FETCH_INIT":return Object(i["k"])({},e,{loading:!0,response:Object(i["c"])(e,"config.resetResponseBeforeFetch",!0)?void 0:e.response,error:void 0});case"FETCH_SUCCESS":return Object(i["k"])({},e,{loading:!1,response:a.payload});case"FETCH_FAILURE":return Object(i["k"])({},e,{loading:!1,error:a.payload});default:throw new Error("Bad Action Type!")}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.config,t=s.a.useRef(void 0),l=s.a.useReducer(d,a,m),c=Object(n["a"])(l,2),u=c[0],p=c[1],f=s.a.useCallback((e,a,r)=>{var n=Object(i["k"])({},r,{cancelToken:e=>{t.current=e}});return p({type:"FETCH_INIT"}),e(a,n).then(e=>Object(i["i"])(t.current)?(t.current=void 0,p({type:"FETCH_SUCCESS",payload:e}),e):Promise.reject(new Error("Fetch canceled!"))).catch(e=>Object(i["i"])(t.current)?(t.current=void 0,p({type:"FETCH_FAILURE",payload:e}),Promise.reject(e)):Promise.reject(new Error("Fetch canceled!")))},[]);return s.a.useEffect(()=>()=>{o()(t.current)&&t.current(),t.current=void 0},[]),Object(r["a"])(Object(r["a"])({},u),{},{fetch:f})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.api,t=e.data,r=e.options,l=e.config,c=s.a.useReducer(d,l,m),p=Object(n["a"])(c,2),f=p[0],v=p[1];return u(()=>{var e,n=Object(i["k"])({},r,{cancelToken:a=>{e=a}});return v({type:"FETCH_INIT"}),a(t,n).then(a=>Object(i["i"])(e)?(e=void 0,v({type:"FETCH_SUCCESS",payload:a}),a):Promise.reject(new Error("Fetch canceled!"))).catch(a=>Object(i["i"])(e)?(e=void 0,v({type:"FETCH_FAILURE",payload:a}),a):a),()=>{o()(e)&&e(),e=void 0}},[a,t,r]),f}},mf2t:function(e,a,t){e.exports={plugin:"xa5YtSkb",row:"_1-Kgui8C",remove:"_1oUe1YM8",modal:"_22ntLq5B"}},oIFs:function(e,a,t){e.exports={"ant-skeleton":"ant-skeleton","ant-skeleton-header":"ant-skeleton-header","ant-skeleton-avatar":"ant-skeleton-avatar","ant-skeleton-avatar-circle":"ant-skeleton-avatar-circle","ant-skeleton-avatar-lg":"ant-skeleton-avatar-lg","ant-skeleton-avatar-sm":"ant-skeleton-avatar-sm","ant-skeleton-content":"ant-skeleton-content","ant-skeleton-title":"ant-skeleton-title","ant-skeleton-paragraph":"ant-skeleton-paragraph","ant-skeleton-with-avatar":"ant-skeleton-with-avatar","ant-skeleton-active":"ant-skeleton-active","ant-skeleton-loading":"ant-skeleton-loading","ant-skeleton-button":"ant-skeleton-button","ant-skeleton-input":"ant-skeleton-input","ant-skeleton-element":"ant-skeleton-element","ant-skeleton-button-circle":"ant-skeleton-button-circle","ant-skeleton-button-round":"ant-skeleton-button-round","ant-skeleton-button-lg":"ant-skeleton-button-lg","ant-skeleton-button-sm":"ant-skeleton-button-sm","ant-skeleton-input-lg":"ant-skeleton-input-lg","ant-skeleton-input-sm":"ant-skeleton-input-sm","ant-skeleton-rtl":"ant-skeleton-rtl","ant-skeleton-loading-rtl":"ant-skeleton-loading-rtl"}},qPyV:function(e,a,t){var r=t("ut/Y"),n=t("LGYb");function l(e,a){return e&&e.length?n(e,r(a,2)):[]}e.exports=l},sXlP:function(e,a,t){e.exports={container:"_1ymes307"}},up7p:function(e,a,t){"use strict";t("+L6B");var r=t("2/Rp"),n=(t("2qtc"),t("kLXV")),l=t("0Owb"),o=t("PpiC"),c=(t("y8nQ"),t("Vl3Y")),s=t("tJVT"),i=t("ijCd"),u=t.n(i),m=t("k4Da"),d=t.n(m),p=t("Y+p1"),f=t.n(p),v=t("3WF5"),b=t.n(v),h=t("q1tI"),g=t.n(h),y=t("9kvl"),E=t("RCxd"),O=t("wlus"),k=t("xvlK"),j=(t("cWXX"),t("/ezw")),w=t("k1fw"),C=(t("BoS7"),t("Sdc0")),N=(t("5NDa"),t("5rEg")),x=t("WmNS"),I=t.n(x),S=t("9og8"),P=(t("giR+"),t("fyUT")),q=(t("OaEy"),t("2fM7")),T=t("RBan"),F=t.n(T),M=t("MJIl"),A=t.n(M),R=t("3tWz"),V=t.n(R),_=t("TSYQ"),W=t.n(_),X="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),H=new Uint8Array(16);function L(){if(!X)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return X(H)}for(var Q=[],Y=0;Y<256;++Y)Q[Y]=(Y+256).toString(16).substr(1);function U(e,a){var t=a||0,r=Q;return[r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],"-",r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]],r[e[t++]]].join("")}var B,z,J=U,K=0,Z=0;function D(e,a,t){var r=a&&t||0,n=a||[];e=e||{};var l=e.node||B,o=void 0!==e.clockseq?e.clockseq:z;if(null==l||null==o){var c=e.random||(e.rng||L)();null==l&&(l=B=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==o&&(o=z=16383&(c[6]<<8|c[7]))}var s=void 0!==e.msecs?e.msecs:(new Date).getTime(),i=void 0!==e.nsecs?e.nsecs:Z+1,u=s-K+(i-Z)/1e4;if(u<0&&void 0===e.clockseq&&(o=o+1&16383),(u<0||s>K)&&void 0===e.nsecs&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");K=s,Z=i,z=o,s+=122192928e5;var m=(1e4*(268435455&s)+i)%4294967296;n[r++]=m>>>24&255,n[r++]=m>>>16&255,n[r++]=m>>>8&255,n[r++]=255&m;var d=s/4294967296*1e4&268435455;n[r++]=d>>>8&255,n[r++]=255&d,n[r++]=d>>>24&15|16,n[r++]=d>>>16&255,n[r++]=o>>>8|128,n[r++]=255&o;for(var p=0;p<6;++p)n[r+p]=l[p];return a||J(n)}var $=D,G=t("ji4e"),ee=t("yWgo"),ae=t("jE6B"),te=t("0+wW"),re=t.n(te),ne=g.a.memo(e=>{var a=e.loading,t=e.initialValues,r=Object(y["e"])(),n=r.formatMessage,o=g.a.useMemo(()=>[{required:!0,message:n({id:"dashboard.consumers.form.plugin.select.required"})}],[n]),s={label:n({id:"dashboard.consumers.form.plugin.select"}),name:"plugin",rules:o},i=g.a.useMemo(()=>b()(t,e=>g.a.createElement(q["a"].Option,{key:e,value:e,title:e},e)),[t]),u={disabled:a||Object(ee["d"])(t)&&1===t.length,placeholder:n({id:"dashboard.consumers.form.plugin.select.placeholder"}),loading:a};return g.a.createElement(c["a"].Item,Object(l["a"])({className:re.a.plugin},s),g.a.createElement(q["a"],Object(l["a"])({className:re.a.select},u),i))}),le=g.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,r=[];!0===t.required&&r.push({required:!0});var n={label:V()(t.name,"-"),name:t.name,rules:r},o={defaultValue:t.default,max:t.max,min:t.min,precision:t.precision,placeholder:t.description};return g.a.createElement(c["a"].Item,Object(l["a"])({className:re.a.number},n),g.a.createElement(P["a"],Object(l["a"])({className:re.a.input},o)))}),oe=g.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,r=Object(y["e"])(),n=r.formatMessage,o=[];!0===t.required&&o.push({required:!0,whitespace:!0}),Object(ee["i"])(t.min)&&o.push({min:t.min}),Object(ee["g"])(t.pattern)&&o.push({pattern:new RegExp(t.pattern)}),Object(ee["d"])(t.anyOf)&&o.push({validator:function(){var e=Object(S["a"])(I.a.mark((function e(a,r){var l;return I.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(l=A()(t.anyOf,e=>{var a=new RegExp(e);return a.test(r)}),!0!==l){e.next=3;break}return e.abrupt("return",r);case 3:throw new Error(n({id:"dashboard.consumers.form.plugin.text.pattern"}));case 4:case"end":return e.stop()}}),e)})));function a(a,t){return e.apply(this,arguments)}return a}()});var s={label:V()(t.name,"-"),name:t.name,rules:o},i={defaultValue:t.default,maxLength:t.max,minLength:t.min,placeholder:t.description};return g.a.createElement(c["a"].Item,Object(l["a"])({className:re.a.text},s),g.a.createElement(N["a"],Object(l["a"])({className:re.a.input},i)))}),ce=g.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,r=[];!0===t.required&&r.push({required:!0});var n={label:V()(t.name,"-"),name:t.name,rules:r},o={allowClear:!0,defaultValue:t.default,placeholder:t.description},s=g.a.useMemo(()=>b()(t.options,e=>g.a.createElement(q["a"].Option,{key:e,value:e,title:e},e)),[t.options]);return g.a.createElement(c["a"].Item,Object(l["a"])({className:re.a.switch},n),g.a.createElement(q["a"],Object(l["a"])({className:re.a.input},o),s))}),se=g.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,r=[];!0===t.required&&r.push({required:!0});var n={extra:t.description,label:V()(t.name,"-"),name:t.name,rules:r,valuePropName:"checked"},o={defaultChecked:t.default};return g.a.createElement(c["a"].Item,Object(l["a"])({className:re.a.switch},n),g.a.createElement(C["a"],Object(l["a"])({className:re.a.input},o)))}),ie=g.a.memo(e=>{var a=e.values,t=Object(y["e"])(),n=t.formatMessage,o={defaultValue:a.items.default,maxLength:a.items.max,minLength:a.items.min,placeholder:a.items.description},s=[];!0===a.required&&s.push({required:!0,whitespace:!0});var i=(e,t)=>{var i=b()(e,(e,r)=>{var n={fieldKey:e.fieldKey,name:e.name,rules:s,validateFirst:!0};return g.a.createElement(c["a"].Item,{key:e.key,className:re.a.rowItem,label:0===r?F()(a.name):void 0},g.a.createElement("div",{className:re.a.row},g.a.createElement(c["a"].Item,Object(l["a"])({className:re.a.item},n),g.a.createElement(N["a"],Object(l["a"])({className:re.a.input},o))),g.a.createElement(O["a"],{className:re.a.remove,onClick:()=>t.remove(e.name)})))});return g.a.createElement("div",{className:re.a.listArray},i,g.a.createElement(c["a"].Item,{className:re.a.add},g.a.createElement(r["a"],{className:re.a.button,type:"dashed",onClick:()=>t.add()},g.a.createElement(k["a"],null),"".concat(n({id:"dashboard.consumers.form.plugin.array.add"})," ").concat(F()(a.name)))))};return g.a.createElement(c["a"].List,{name:a.name},i)});function ue(e){var a=Object(ee["c"])(e,"tag"),t=Object(ee["c"])(e,"type");if("list"===a&&"object"===t){var r=Object(ee["c"])(e,"items",[]);return b()(r,ue)}var n=V()(e.name,"-");return"list"===a&&"array"===t?g.a.createElement(ie,{key:n,values:e}):"input"===a&&"number"===t?g.a.createElement(le,{key:n,values:e}):"input"===a&&"text"===t?g.a.createElement(oe,{key:n,values:e}):"select"===a&&"text"===t?g.a.createElement(ce,{key:n,values:e}):"input"===a&&"switch"===t?g.a.createElement(se,{key:n,values:e}):null}function me(e){var a=e.className,t=e.form,r=e.data,n=Object(G["c"])(),o=n.fetch,i=n.loading,u=g.a.useRef({}),m=g.a.useState({}),d=Object(s["a"])(m,2),p=d[0],f=d[1],v=g.a.useCallback(e=>{var a=u.current[e];return Object(ee["f"])(a)?(f(a),Promise.resolve(a)):o(ae["d"],{plugin:e}).then(a=>(f(a),u.current[e]=a,a)).catch(()=>{})},[o]),b=g.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(ee["g"])(e.plugin)&&v(e.plugin)}),[v]),h={form:t,layout:"vertical",onValuesChange:b};g.a.useEffect(()=>{var e=r.plugins[0],a=Object(w["a"])({plugin:e},r.settings);return"key-auth"!==a.plugin||Object(ee["g"])(a.key)||(a.key=$()),t.setFieldsValue(a),v(e),()=>{t.resetFields()}},[r.plugins,r.settings,t,v]);var y=g.a.useMemo(()=>ue(p),[p]);return g.a.createElement(c["a"],Object(l["a"])({className:W()(re.a.container,a)},h),g.a.createElement(ne,{loading:i,initialValues:r.plugins}),i?g.a.createElement(j["a"],{active:!0}):y)}me.defaultProps={};var de=g.a.memo(me),pe=t("mf2t"),fe=t.n(pe),ve=g.a.memo(e=>{var a=e.data,t=e.visible,r=e.onCancel,i=c["a"].useForm(),u=Object(s["a"])(i,1),m=u[0],d=g.a.useCallback(()=>m.validateFields().then(e=>{var t=e.plugin,n=Object(o["a"])(e,["plugin"]);return r(),a.callback([t,n]),e}).catch(()=>{}),[a,m,r]),p=Object(y["e"])(),f=p.formatMessage,v={cancelText:f({id:"dashboard.consumers.form.plugins.modal.cancel"}),closable:!0,destroyOnClose:!0,keyboard:!1,mask:!0,maskClosable:!1,okText:f({id:"dashboard.consumers.form.plugins.modal.ok"}),title:f({id:"dashboard.consumers.form.plugins.modal.title"}),visible:t,onCancel:r,onOk:d},b=g.a.useMemo(()=>({plugins:a.plugins,settings:a.settings}),[a.settings,a.plugins]);return g.a.createElement(n["a"],Object(l["a"])({wrapClassName:fe.a.modal},v),g.a.createElement(de,{className:fe.a.form,form:m,data:b}))}),be=g.a.memo(e=>{var a=e.value,t=e.onChange,n=e.onClick,l=a[0],o=a[1],c=g.a.useCallback(()=>n({plugins:[l],settings:o,callback:t}),[o,t,n,l]);return g.a.createElement(r["a"],{onClick:c},l)}),he=g.a.memo(e=>{var a=e.onClick,t=Object(y["e"])(),r=t.formatMessage,l=g.a.useCallback(()=>n["a"].confirm({title:r({id:"dashboard.consumers.form.plugins.delete.title"}),icon:g.a.createElement(E["a"],null),content:r({id:"dashboard.consumers.form.plugins.delete.content"}),okText:r({id:"dashboard.consumers.form.plugins.delete.ok"}),okType:"danger",cancelText:r({id:"dashboard.consumers.form.plugins.delete.cancel"}),onOk:a}),[r,a]);return g.a.createElement(O["a"],{className:fe.a.remove,onClick:l})});function ge(e){var a=Object(G["a"])({api:ae["e"]}),t=a.response,n=void 0===t?[]:t,o=g.a.useState({}),i=Object(s["a"])(o,2),m=i[0],p=i[1],v=Object(y["e"])(),h=v.formatMessage,E=(e,a)=>{var t=b()(e,(e,t)=>{var r=g.a.createElement(he,{onClick:()=>a.remove(e.name)}),n={fieldKey:[e.fieldKey],name:[e.name]};return g.a.createElement(c["a"].Item,{key:e.key,className:fe.a.plugin,label:"".concat(h({id:"dashboard.consumers.form.plugins"})," ").concat(t+1)},g.a.createElement("div",{className:fe.a.row},g.a.createElement(c["a"].Item,Object(l["a"])({className:fe.a.item},n),g.a.createElement(be,{onClick:p})),r))}),o={shouldUpdate:(e,a)=>{var t=b()(e.plugins,e=>e[0]),r=b()(a.plugins,e=>e[0]);return!f()(t,r)}};return g.a.createElement(g.a.Fragment,null,t,g.a.createElement(c["a"].Item,Object(l["a"])({className:fe.a.add},o),e=>{var t=()=>p({}),l=()=>{var t=b()(e.getFieldValue("plugins"),e=>e[0]),r=d()(n||[],e=>!u()(t,e));p({plugins:r,settings:{},callback:a.add})};return g.a.createElement(g.a.Fragment,null,g.a.createElement(r["a"],{className:fe.a.button,type:"dashed",disabled:!Object(ee["d"])(n)||(e.getFieldValue("plugins")||[]).length>=n.length,onClick:l},g.a.createElement(k["a"],null),h({id:"dashboard.consumers.form.plugins.add"})),g.a.createElement(ve,{data:m,visible:Object(ee["f"])(m),onCancel:t}))}))};return g.a.createElement(c["a"].List,{name:"plugins"},E)}ge.defaultProps={};a["a"]=g.a.memo(ge)},vW3X:function(e,a,t){e.exports={container:"_3SHyxdJu"}}}]);