(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"/WyT":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("TSYQ"),c=t.n(l),o=t("vW3X"),s=t.n(o);function i(e){var a=e.className,t=e.children;return r.a.createElement("div",{className:c()(s.a.container,a)},t)}i.defaultProps={},a["a"]=r.a.memo(i)},"/ezw":function(e,a,t){"use strict";var n=t("q1tI"),r=t("TSYQ"),l=t.n(r);function c(){return c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}var o=function(e){var a=e.prefixCls,t=e.className,r=e.width,o=e.style;return n["createElement"]("h3",{className:l()(a,t),style:c({width:r},o)})},s=o;function i(e){return p(e)||d(e)||m(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,a){if(e){if("string"===typeof e)return f(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,a):void 0}}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return f(e)}function f(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var v=function(e){var a=function(a){var t=e.width,n=e.rows,r=void 0===n?2:n;return Array.isArray(t)?t[a]:r-1===a?t:void 0},t=e.prefixCls,r=e.className,c=e.style,o=e.rows,s=i(Array(o)).map((function(e,t){return n["createElement"]("li",{key:t,style:{width:a(t)}})}));return n["createElement"]("ul",{className:l()(t,r),style:c},s)},b=v,g=t("H84U");function h(){return h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}function y(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var k=function(e){var a,t,r=e.prefixCls,c=e.className,o=e.style,s=e.size,i=e.shape,u=l()((a={},y(a,"".concat(r,"-lg"),"large"===s),y(a,"".concat(r,"-sm"),"small"===s),a)),m=l()((t={},y(t,"".concat(r,"-circle"),"circle"===i),y(t,"".concat(r,"-square"),"square"===i),y(t,"".concat(r,"-round"),"round"===i),t)),d="number"===typeof s?{width:s,height:s,lineHeight:"".concat(s,"px")}:{};return n["createElement"]("span",{className:l()(r,c,u,m),style:h(h({},d),o)})},E=k,O=t("BGR+");function j(){return j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var C=function(e){var a=function(a){var t=a.getPrefixCls,r=e.prefixCls,c=e.className,o=e.active,s=t("skeleton",r),i=Object(O["a"])(e,["prefixCls"]),u=l()(s,c,"".concat(s,"-element"),w({},"".concat(s,"-active"),o));return n["createElement"]("div",{className:u},n["createElement"](E,j({prefixCls:"".concat(s,"-avatar")},i)))};return n["createElement"](g["a"],null,a)};C.defaultProps={size:"default",shape:"circle"};var N=C;function x(){return x=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}function I(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var S=function(e){var a=function(a){var t=a.getPrefixCls,r=e.prefixCls,c=e.className,o=e.active,s=t("skeleton",r),i=Object(O["a"])(e,["prefixCls"]),u=l()(s,c,"".concat(s,"-element"),I({},"".concat(s,"-active"),o));return n["createElement"]("div",{className:u},n["createElement"](E,x({prefixCls:"".concat(s,"-button")},i)))};return n["createElement"](g["a"],null,a)};S.defaultProps={size:"default"};var P=S;function T(){return T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},T.apply(this,arguments)}function F(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var q=function(e){var a=function(a){var t=a.getPrefixCls,r=e.prefixCls,c=e.className,o=e.active,s=t("skeleton",r),i=Object(O["a"])(e,["prefixCls"]),u=l()(s,c,"".concat(s,"-element"),F({},"".concat(s,"-active"),o));return n["createElement"]("div",{className:u},n["createElement"](E,T({prefixCls:"".concat(s,"-input")},i)))};return n["createElement"](g["a"],null,a)};q.defaultProps={size:"default"};var V=q;function M(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function R(){return R=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R.apply(this,arguments)}function A(e){return A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function _(e){return e&&"object"===A(e)?e:{}}function W(e,a){return e&&!a?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function X(e,a){return!e&&a?{width:"38%"}:e&&a?{width:"50%"}:{}}function Y(e,a){var t={};return e&&a||(t.width="61%"),t.rows=!e&&a?3:2,t}var H=function(e){var a=function(a){var t=a.getPrefixCls,r=a.direction,c=e.prefixCls,o=e.loading,i=e.className,u=e.children,m=e.avatar,d=e.title,p=e.paragraph,f=e.active,v=t("skeleton",c);if(o||!("loading"in e)){var g,h,y,k=!!m,O=!!d,j=!!p;if(k){var w=R(R({prefixCls:"".concat(v,"-avatar")},W(O,j)),_(m));h=n["createElement"]("div",{className:"".concat(v,"-header")},n["createElement"](E,w))}if(O||j){var C,N;if(O){var x=R(R({prefixCls:"".concat(v,"-title")},X(k,j)),_(d));C=n["createElement"](s,x)}if(j){var I=R(R({prefixCls:"".concat(v,"-paragraph")},Y(k,O)),_(p));N=n["createElement"](b,I)}y=n["createElement"]("div",{className:"".concat(v,"-content")},C,N)}var S=l()(v,i,(g={},M(g,"".concat(v,"-with-avatar"),k),M(g,"".concat(v,"-active"),f),M(g,"".concat(v,"-rtl"),"rtl"===r),g));return n["createElement"]("div",{className:S},h,y)}return u};return n["createElement"](g["a"],null,a)};H.defaultProps={avatar:!1,title:!0,paragraph:!0},H.Button=P,H.Avatar=N,H.Input=V;var L=H;a["a"]=L},"0+wW":function(e,a,t){e.exports={number:"_3QpzSpME",input:"XQyz8nD1",listArray:"_1BVXMzlB",row:"EpPSsstT",item:"_2kF9Xp4q",remove:"lIxaQw5e",rowItem:"KLEpAsEH"}},"3DKe":function(e,a,t){e.exports={container:"_1OWObszW",form:"_3eQwirkS"}},"3tWz":function(e,a){var t=Array.prototype,n=t.join;function r(e,a){return null==e?"":n.call(e,a)}e.exports=r},H0h1:function(e,a,t){var n=t("SKAX");function r(e,a){var t=!0;return n(e,(function(e,n,r){return t=!!a(e,n,r),t})),t}e.exports=r},Jlc5:function(e,a,t){var n=t("ZirO"),r=t("H0h1"),l=t("ut/Y"),c=t("Z0cm"),o=t("mv/X");function s(e,a,t){var s=c(e)?n:r;return t&&o(e,a,t)&&(a=void 0),s(e,l(a,3))}e.exports=s},MJIl:function(e,a,t){var n=t("QoRX"),r=t("ut/Y"),l=t("Nh2a"),c=t("Z0cm"),o=t("mv/X");function s(e,a,t){var s=c(e)?n:l;return t&&o(e,a,t)&&(a=void 0),s(e,r(a,3))}e.exports=s},Nh2a:function(e,a,t){var n=t("SKAX");function r(e,a){var t;return n(e,(function(e,n,r){return t=a(e,n,r),!t})),!!t}e.exports=r},"Pss/":function(e,a,t){"use strict";t.r(a);var n=t("k1fw"),r=t("tJVT"),l=(t("sPJy"),t("bE4q")),c=t("q1tI"),o=t.n(c),s=t("9kvl"),i=t("uqfK"),u=t("/WyT"),m=t("SQgF"),d=t("cnvx"),p=t("s28y"),f=t("3DKe"),v=t.n(f),b=o.a.memo(e=>{var a=Object(s["e"])(),t=a.formatMessage,n=o.a.createElement(l["a"],null,o.a.createElement(l["a"].Item,{href:"/dashboard"},o.a.createElement(i["a"],null)),o.a.createElement(l["a"].Item,{href:"/dashboard/services"},t({id:"dashboard.services.menu"})),o.a.createElement(l["a"].Item,null,t({id:"dashboard.services.new"}))),r=null;return o.a.createElement(m["a"],{left:n,right:r})});function g(e){var a=e.loading,t=e.addRecord;return o.a.createElement("div",{className:v.a.container},o.a.createElement(u["a"],null,o.a.createElement(b,null),o.a.createElement(d["a"],{className:v.a.form,loading:a["addRecord"],onSubmit:t})))}g.defaultProps={};var h=Object(p["a"])(["addRecord"]),y=Object(r["a"])(h,2),k=y[0],E=y[1];function O(e,a){return{loading:E(e.loading)}}function j(e,a){return Object(n["a"])({},k(e))}function w(e,a,t){return Object(n["a"])(Object(n["a"])({},e),a)}var C=Object(s["a"])(O,j,w)(o.a.memo(g));C.title="dashboard.services.title",a["default"]=C},SQgF:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("TSYQ"),c=t.n(l),o=t("sXlP"),s=t.n(o);function i(e){var a=e.className,t=e.left,n=e.right;return r.a.createElement("div",{className:c()(s.a.container,a)},r.a.createElement("div",{className:s.a.left},t),r.a.createElement("div",{className:s.a.right},n))}i.defaultProps={},a["a"]=r.a.memo(i)},VjKF:function(e,a,t){e.exports={container:"_2XgSIMhW",submit:"_1Xp1JYLQ",button:"_3Z1YKqN5"}},ZirO:function(e,a){function t(e,a){var t=-1,n=null==e?0:e.length;while(++t<n)if(!a(e[t],t,e))return!1;return!0}e.exports=t},cWXX:function(e,a,t){"use strict";t("cIOH"),t("oIFs")},cnvx:function(e,a,t){"use strict";t("miYZ");var n=t("tsqr"),r=t("k1fw"),l=(t("+L6B"),t("2/Rp")),c=(t("OaEy"),t("2fM7")),o=(t("y8nQ"),t("Vl3Y")),s=t("0Owb"),i=(t("5NDa"),t("5rEg")),u=t("qPyV"),m=t.n(u),d=t("3WF5"),p=t.n(d),f=t("q1tI"),v=t.n(f),b=t("TSYQ"),g=t.n(b),h=t("9kvl"),y=t("up7p"),k=t("yWgo"),E=t("ji4e"),O=t("Rt6h"),j=t("VjKF"),w=t.n(j),C=v.a.memo(e=>{var a=Object(h["e"])(),t=a.formatMessage,n={label:t({id:"dashboard.services.form.description"}),name:"description"};return v.a.createElement(o["a"].Item,Object(s["a"])({className:w.a.description},n),v.a.createElement(i["a"],{className:w.a.input,placeholder:t({id:"dashboard.services.form.description.placeholder"})}))}),N=v.a.memo(e=>{var a=Object(h["e"])(),t=a.formatMessage,n={label:t({id:"dashboard.services.form.upstream"}),name:"upstream"},r=Object(E["a"])({api:O["f"]}),l=r.response,i=r.loading,u=v.a.useMemo(()=>p()(m()(l||[],e=>e.id),e=>v.a.createElement(c["a"].Option,{key:e.id,value:e.key,title:e.description||e.key},e.description||e.key)),[l]),d={allowClear:!0,placeholder:t({id:"dashboard.services.form.upstream.placeholder"}),loading:i};return v.a.createElement(o["a"].Item,Object(s["a"])({className:w.a.upstream},n),v.a.createElement(c["a"],Object(s["a"])({className:w.a.select},d),u))}),x=v.a.memo(e=>{var a=e.loading,t=Object(h["e"])(),n=t.formatMessage,r=v.a.useCallback(()=>h["b"].push("/dashboard/services"),[]),c={};return v.a.createElement(o["a"].Item,Object(s["a"])({className:w.a.submit},c),v.a.createElement(l["a"],{className:w.a.button,htmlType:"submit",type:"primary",loading:a},n({id:"dashboard.services.form.submit"})),v.a.createElement(l["a"],{className:w.a.button,htmlType:"button",onClick:r},n({id:"dashboard.services.form.cancel"})))}),I=v.a.memo(e=>{var a=e.className,t=e.loading,l=e.record,c=e.onSubmit,i=Object(h["e"])(),u=i.formatMessage,m=v.a.useCallback(e=>c(Object(r["a"])({key:l.key},e)).then(()=>n["a"].success(u({id:"dashboard.services.form.".concat(Object(k["g"])(l.key)?"edit":"add",".success")}))),[u,c,l.key]),d={initialValues:l,layout:"vertical",onFinish:m};return v.a.createElement(o["a"],Object(s["a"])({className:g()(w.a.container,a)},d),v.a.createElement(C,null),v.a.createElement(N,null),v.a.createElement(y["a"],null),v.a.createElement(x,{loading:t}))});I.defaultProps={record:{}},a["a"]=I},ji4e:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return f}));var n=t("k1fw"),r=t("tJVT"),l=t("lSCD"),c=t.n(l),o=(t("Jlc5"),t("YO3V"),t("q1tI")),s=t.n(o),i=t("yWgo");function u(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i["j"];var n=s.a.useRef(void 0);n.current&&t(a,n.current)||(n.current=a),s.a.useEffect(e,n.current)}function m(e){return{config:e,loading:!1,response:void 0,error:void 0}}function d(e,a){switch(a.type){case"FETCH_INIT":return Object(i["k"])({},e,{loading:!0,response:Object(i["c"])(e,"config.resetResponseBeforeFetch",!0)?void 0:e.response,error:void 0});case"FETCH_SUCCESS":return Object(i["k"])({},e,{loading:!1,response:a.payload});case"FETCH_FAILURE":return Object(i["k"])({},e,{loading:!1,error:a.payload});default:throw new Error("Bad Action Type!")}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.config,t=s.a.useRef(void 0),l=s.a.useReducer(d,a,m),o=Object(r["a"])(l,2),u=o[0],p=o[1],f=s.a.useCallback((e,a,n)=>{var r=Object(i["k"])({},n,{cancelToken:e=>{t.current=e}});return p({type:"FETCH_INIT"}),e(a,r).then(e=>Object(i["i"])(t.current)?(t.current=void 0,p({type:"FETCH_SUCCESS",payload:e}),e):Promise.reject(new Error("Fetch canceled!"))).catch(e=>Object(i["i"])(t.current)?(t.current=void 0,p({type:"FETCH_FAILURE",payload:e}),Promise.reject(e)):Promise.reject(new Error("Fetch canceled!")))},[]);return s.a.useEffect(()=>()=>{c()(t.current)&&t.current(),t.current=void 0},[]),Object(n["a"])(Object(n["a"])({},u),{},{fetch:f})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.api,t=e.data,n=e.options,l=e.config,o=s.a.useReducer(d,l,m),p=Object(r["a"])(o,2),f=p[0],v=p[1];return u(()=>{var e,r=Object(i["k"])({},n,{cancelToken:a=>{e=a}});return v({type:"FETCH_INIT"}),a(t,r).then(a=>Object(i["i"])(e)?(e=void 0,v({type:"FETCH_SUCCESS",payload:a}),a):Promise.reject(new Error("Fetch canceled!"))).catch(a=>Object(i["i"])(e)?(e=void 0,v({type:"FETCH_FAILURE",payload:a}),a):a),()=>{c()(e)&&e(),e=void 0}},[a,t,n]),f}},mf2t:function(e,a,t){e.exports={plugin:"xa5YtSkb",row:"_1-Kgui8C",remove:"_1oUe1YM8",modal:"_22ntLq5B"}},oIFs:function(e,a,t){e.exports={"ant-skeleton":"ant-skeleton","ant-skeleton-header":"ant-skeleton-header","ant-skeleton-avatar":"ant-skeleton-avatar","ant-skeleton-avatar-circle":"ant-skeleton-avatar-circle","ant-skeleton-avatar-lg":"ant-skeleton-avatar-lg","ant-skeleton-avatar-sm":"ant-skeleton-avatar-sm","ant-skeleton-content":"ant-skeleton-content","ant-skeleton-title":"ant-skeleton-title","ant-skeleton-paragraph":"ant-skeleton-paragraph","ant-skeleton-with-avatar":"ant-skeleton-with-avatar","ant-skeleton-active":"ant-skeleton-active","ant-skeleton-loading":"ant-skeleton-loading","ant-skeleton-button":"ant-skeleton-button","ant-skeleton-input":"ant-skeleton-input","ant-skeleton-element":"ant-skeleton-element","ant-skeleton-button-circle":"ant-skeleton-button-circle","ant-skeleton-button-round":"ant-skeleton-button-round","ant-skeleton-button-lg":"ant-skeleton-button-lg","ant-skeleton-button-sm":"ant-skeleton-button-sm","ant-skeleton-input-lg":"ant-skeleton-input-lg","ant-skeleton-input-sm":"ant-skeleton-input-sm","ant-skeleton-rtl":"ant-skeleton-rtl","ant-skeleton-loading-rtl":"ant-skeleton-loading-rtl"}},qPyV:function(e,a,t){var n=t("ut/Y"),r=t("LGYb");function l(e,a){return e&&e.length?r(e,n(a,2)):[]}e.exports=l},sXlP:function(e,a,t){e.exports={container:"_1ymes307"}},up7p:function(e,a,t){"use strict";t("+L6B");var n=t("2/Rp"),r=(t("2qtc"),t("kLXV")),l=t("0Owb"),c=t("PpiC"),o=(t("y8nQ"),t("Vl3Y")),s=t("tJVT"),i=t("ijCd"),u=t.n(i),m=t("k4Da"),d=t.n(m),p=t("Y+p1"),f=t.n(p),v=t("3WF5"),b=t.n(v),g=t("q1tI"),h=t.n(g),y=t("9kvl"),k=t("RCxd"),E=t("wlus"),O=t("xvlK"),j=(t("cWXX"),t("/ezw")),w=t("k1fw"),C=(t("BoS7"),t("Sdc0")),N=(t("5NDa"),t("5rEg")),x=t("WmNS"),I=t.n(x),S=t("9og8"),P=(t("giR+"),t("fyUT")),T=(t("OaEy"),t("2fM7")),F=t("RBan"),q=t.n(F),V=t("MJIl"),M=t.n(V),R=t("3tWz"),A=t.n(R),_=t("TSYQ"),W=t.n(_),X="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),Y=new Uint8Array(16);function H(){if(!X)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return X(Y)}for(var L=[],K=0;K<256;++K)L[K]=(K+256).toString(16).substr(1);function Q(e,a){var t=a||0,n=L;return[n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]]].join("")}var z,B,J=Q,U=0,D=0;function Z(e,a,t){var n=a&&t||0,r=a||[];e=e||{};var l=e.node||z,c=void 0!==e.clockseq?e.clockseq:B;if(null==l||null==c){var o=e.random||(e.rng||H)();null==l&&(l=z=[1|o[0],o[1],o[2],o[3],o[4],o[5]]),null==c&&(c=B=16383&(o[6]<<8|o[7]))}var s=void 0!==e.msecs?e.msecs:(new Date).getTime(),i=void 0!==e.nsecs?e.nsecs:D+1,u=s-U+(i-D)/1e4;if(u<0&&void 0===e.clockseq&&(c=c+1&16383),(u<0||s>U)&&void 0===e.nsecs&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");U=s,D=i,B=c,s+=122192928e5;var m=(1e4*(268435455&s)+i)%4294967296;r[n++]=m>>>24&255,r[n++]=m>>>16&255,r[n++]=m>>>8&255,r[n++]=255&m;var d=s/4294967296*1e4&268435455;r[n++]=d>>>8&255,r[n++]=255&d,r[n++]=d>>>24&15|16,r[n++]=d>>>16&255,r[n++]=c>>>8|128,r[n++]=255&c;for(var p=0;p<6;++p)r[n+p]=l[p];return a||J(r)}var G=Z,$=t("ji4e"),ee=t("yWgo"),ae=t("jE6B"),te=t("0+wW"),ne=t.n(te),re=h.a.memo(e=>{var a=e.loading,t=e.initialValues,n=Object(y["e"])(),r=n.formatMessage,c=h.a.useMemo(()=>[{required:!0,message:r({id:"dashboard.consumers.form.plugin.select.required"})}],[r]),s={label:r({id:"dashboard.consumers.form.plugin.select"}),name:"plugin",rules:c},i=h.a.useMemo(()=>b()(t,e=>h.a.createElement(T["a"].Option,{key:e,value:e,title:e},e)),[t]),u={disabled:a||Object(ee["d"])(t)&&1===t.length,placeholder:r({id:"dashboard.consumers.form.plugin.select.placeholder"}),loading:a};return h.a.createElement(o["a"].Item,Object(l["a"])({className:ne.a.plugin},s),h.a.createElement(T["a"],Object(l["a"])({className:ne.a.select},u),i))}),le=h.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,n=[];!0===t.required&&n.push({required:!0});var r={label:A()(t.name,"-"),name:t.name,rules:n},c={defaultValue:t.default,max:t.max,min:t.min,precision:t.precision,placeholder:t.description};return h.a.createElement(o["a"].Item,Object(l["a"])({className:ne.a.number},r),h.a.createElement(P["a"],Object(l["a"])({className:ne.a.input},c)))}),ce=h.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,n=Object(y["e"])(),r=n.formatMessage,c=[];!0===t.required&&c.push({required:!0,whitespace:!0}),Object(ee["i"])(t.min)&&c.push({min:t.min}),Object(ee["g"])(t.pattern)&&c.push({pattern:new RegExp(t.pattern)}),Object(ee["d"])(t.anyOf)&&c.push({validator:function(){var e=Object(S["a"])(I.a.mark((function e(a,n){var l;return I.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(l=M()(t.anyOf,e=>{var a=new RegExp(e);return a.test(n)}),!0!==l){e.next=3;break}return e.abrupt("return",n);case 3:throw new Error(r({id:"dashboard.consumers.form.plugin.text.pattern"}));case 4:case"end":return e.stop()}}),e)})));function a(a,t){return e.apply(this,arguments)}return a}()});var s={label:A()(t.name,"-"),name:t.name,rules:c},i={defaultValue:t.default,maxLength:t.max,minLength:t.min,placeholder:t.description};return h.a.createElement(o["a"].Item,Object(l["a"])({className:ne.a.text},s),h.a.createElement(N["a"],Object(l["a"])({className:ne.a.input},i)))}),oe=h.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,n=[];!0===t.required&&n.push({required:!0});var r={label:A()(t.name,"-"),name:t.name,rules:n},c={allowClear:!0,defaultValue:t.default,placeholder:t.description},s=h.a.useMemo(()=>b()(t.options,e=>h.a.createElement(T["a"].Option,{key:e,value:e,title:e},e)),[t.options]);return h.a.createElement(o["a"].Item,Object(l["a"])({className:ne.a.switch},r),h.a.createElement(T["a"],Object(l["a"])({className:ne.a.input},c),s))}),se=h.a.memo(e=>{var a=e.values,t=void 0===a?{}:a,n=[];!0===t.required&&n.push({required:!0});var r={extra:t.description,label:A()(t.name,"-"),name:t.name,rules:n,valuePropName:"checked"},c={defaultChecked:t.default};return h.a.createElement(o["a"].Item,Object(l["a"])({className:ne.a.switch},r),h.a.createElement(C["a"],Object(l["a"])({className:ne.a.input},c)))}),ie=h.a.memo(e=>{var a=e.values,t=Object(y["e"])(),r=t.formatMessage,c={defaultValue:a.items.default,maxLength:a.items.max,minLength:a.items.min,placeholder:a.items.description},s=[];!0===a.required&&s.push({required:!0,whitespace:!0});var i=(e,t)=>{var i=b()(e,(e,n)=>{var r={fieldKey:e.fieldKey,name:e.name,rules:s,validateFirst:!0};return h.a.createElement(o["a"].Item,{key:e.key,className:ne.a.rowItem,label:0===n?q()(a.name):void 0},h.a.createElement("div",{className:ne.a.row},h.a.createElement(o["a"].Item,Object(l["a"])({className:ne.a.item},r),h.a.createElement(N["a"],Object(l["a"])({className:ne.a.input},c))),h.a.createElement(E["a"],{className:ne.a.remove,onClick:()=>t.remove(e.name)})))});return h.a.createElement("div",{className:ne.a.listArray},i,h.a.createElement(o["a"].Item,{className:ne.a.add},h.a.createElement(n["a"],{className:ne.a.button,type:"dashed",onClick:()=>t.add()},h.a.createElement(O["a"],null),"".concat(r({id:"dashboard.consumers.form.plugin.array.add"})," ").concat(q()(a.name)))))};return h.a.createElement(o["a"].List,{name:a.name},i)});function ue(e){var a=Object(ee["c"])(e,"tag"),t=Object(ee["c"])(e,"type");if("list"===a&&"object"===t){var n=Object(ee["c"])(e,"items",[]);return b()(n,ue)}var r=A()(e.name,"-");return"list"===a&&"array"===t?h.a.createElement(ie,{key:r,values:e}):"input"===a&&"number"===t?h.a.createElement(le,{key:r,values:e}):"input"===a&&"text"===t?h.a.createElement(ce,{key:r,values:e}):"select"===a&&"text"===t?h.a.createElement(oe,{key:r,values:e}):"input"===a&&"switch"===t?h.a.createElement(se,{key:r,values:e}):null}function me(e){var a=e.className,t=e.form,n=e.data,r=Object($["c"])(),c=r.fetch,i=r.loading,u=h.a.useRef({}),m=h.a.useState({}),d=Object(s["a"])(m,2),p=d[0],f=d[1],v=h.a.useCallback(e=>{var a=u.current[e];return Object(ee["f"])(a)?(f(a),Promise.resolve(a)):c(ae["d"],{plugin:e}).then(a=>(f(a),u.current[e]=a,a)).catch(()=>{})},[c]),b=h.a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(ee["g"])(e.plugin)&&v(e.plugin)}),[v]),g={form:t,layout:"vertical",onValuesChange:b};h.a.useEffect(()=>{var e=n.plugins[0],a=Object(w["a"])({plugin:e},n.settings);return"key-auth"!==a.plugin||Object(ee["g"])(a.key)||(a.key=G()),t.setFieldsValue(a),v(e),()=>{t.resetFields()}},[n.plugins,n.settings,t,v]);var y=h.a.useMemo(()=>ue(p),[p]);return h.a.createElement(o["a"],Object(l["a"])({className:W()(ne.a.container,a)},g),h.a.createElement(re,{loading:i,initialValues:n.plugins}),i?h.a.createElement(j["a"],{active:!0}):y)}me.defaultProps={};var de=h.a.memo(me),pe=t("mf2t"),fe=t.n(pe),ve=h.a.memo(e=>{var a=e.data,t=e.visible,n=e.onCancel,i=o["a"].useForm(),u=Object(s["a"])(i,1),m=u[0],d=h.a.useCallback(()=>m.validateFields().then(e=>{var t=e.plugin,r=Object(c["a"])(e,["plugin"]);return n(),a.callback([t,r]),e}).catch(()=>{}),[a,m,n]),p=Object(y["e"])(),f=p.formatMessage,v={cancelText:f({id:"dashboard.consumers.form.plugins.modal.cancel"}),closable:!0,destroyOnClose:!0,keyboard:!1,mask:!0,maskClosable:!1,okText:f({id:"dashboard.consumers.form.plugins.modal.ok"}),title:f({id:"dashboard.consumers.form.plugins.modal.title"}),visible:t,onCancel:n,onOk:d},b=h.a.useMemo(()=>({plugins:a.plugins,settings:a.settings}),[a.settings,a.plugins]);return h.a.createElement(r["a"],Object(l["a"])({wrapClassName:fe.a.modal},v),h.a.createElement(de,{className:fe.a.form,form:m,data:b}))}),be=h.a.memo(e=>{var a=e.value,t=e.onChange,r=e.onClick,l=a[0],c=a[1],o=h.a.useCallback(()=>r({plugins:[l],settings:c,callback:t}),[c,t,r,l]);return h.a.createElement(n["a"],{onClick:o},l)}),ge=h.a.memo(e=>{var a=e.onClick,t=Object(y["e"])(),n=t.formatMessage,l=h.a.useCallback(()=>r["a"].confirm({title:n({id:"dashboard.consumers.form.plugins.delete.title"}),icon:h.a.createElement(k["a"],null),content:n({id:"dashboard.consumers.form.plugins.delete.content"}),okText:n({id:"dashboard.consumers.form.plugins.delete.ok"}),okType:"danger",cancelText:n({id:"dashboard.consumers.form.plugins.delete.cancel"}),onOk:a}),[n,a]);return h.a.createElement(E["a"],{className:fe.a.remove,onClick:l})});function he(e){var a=Object($["a"])({api:ae["e"]}),t=a.response,r=void 0===t?[]:t,c=h.a.useState({}),i=Object(s["a"])(c,2),m=i[0],p=i[1],v=Object(y["e"])(),g=v.formatMessage,k=(e,a)=>{var t=b()(e,(e,t)=>{var n=h.a.createElement(ge,{onClick:()=>a.remove(e.name)}),r={fieldKey:[e.fieldKey],name:[e.name]};return h.a.createElement(o["a"].Item,{key:e.key,className:fe.a.plugin,label:"".concat(g({id:"dashboard.consumers.form.plugins"})," ").concat(t+1)},h.a.createElement("div",{className:fe.a.row},h.a.createElement(o["a"].Item,Object(l["a"])({className:fe.a.item},r),h.a.createElement(be,{onClick:p})),n))}),c={shouldUpdate:(e,a)=>{var t=b()(e.plugins,e=>e[0]),n=b()(a.plugins,e=>e[0]);return!f()(t,n)}};return h.a.createElement(h.a.Fragment,null,t,h.a.createElement(o["a"].Item,Object(l["a"])({className:fe.a.add},c),e=>{var t=()=>p({}),l=()=>{var t=b()(e.getFieldValue("plugins"),e=>e[0]),n=d()(r||[],e=>!u()(t,e));p({plugins:n,settings:{},callback:a.add})};return h.a.createElement(h.a.Fragment,null,h.a.createElement(n["a"],{className:fe.a.button,type:"dashed",disabled:!Object(ee["d"])(r)||(e.getFieldValue("plugins")||[]).length>=r.length,onClick:l},h.a.createElement(O["a"],null),g({id:"dashboard.consumers.form.plugins.add"})),h.a.createElement(ve,{data:m,visible:Object(ee["f"])(m),onCancel:t}))}))};return h.a.createElement(o["a"].List,{name:"plugins"},k)}he.defaultProps={};a["a"]=h.a.memo(he)},vW3X:function(e,a,t){e.exports={container:"_3SHyxdJu"}}}]);