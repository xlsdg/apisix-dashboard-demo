(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0Qud":function(e,a,t){e.exports={container:"_3FL3M8vR"}},"1keE":function(e,a,t){e.exports={logo:"_1ilkpSbc",link:"_3i13aUvT",image:"_1vRPFQU1",title:"_1m3C_LuU"}},d1sx:function(e,a,t){e.exports={avatar:"_2twyOikw",image:"_1wBxNE7t"}},ji4e:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return E})),t.d(a,"a",(function(){return f}));var r=t("k1fw"),n=t("tJVT"),c=t("lSCD"),o=t.n(c),l=(t("Jlc5"),t("YO3V"),t("q1tI")),u=t.n(l),s=t("yWgo");function i(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s["j"];var r=u.a.useRef(void 0);r.current&&t(a,r.current)||(r.current=a),u.a.useEffect(e,r.current)}function m(e){return{config:e,loading:!1,response:void 0,error:void 0}}function d(e,a){switch(a.type){case"FETCH_INIT":return Object(s["k"])({},e,{loading:!0,response:Object(s["c"])(e,"config.resetResponseBeforeFetch",!0)?void 0:e.response,error:void 0});case"FETCH_SUCCESS":return Object(s["k"])({},e,{loading:!1,response:a.payload});case"FETCH_FAILURE":return Object(s["k"])({},e,{loading:!1,error:a.payload});default:throw new Error("Bad Action Type!")}}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.config,t=u.a.useRef(void 0),c=u.a.useReducer(d,a,m),l=Object(n["a"])(c,2),i=l[0],E=l[1],f=u.a.useCallback((e,a,r)=>{var n=Object(s["k"])({},r,{cancelToken:e=>{t.current=e}});return E({type:"FETCH_INIT"}),e(a,n).then(e=>Object(s["i"])(t.current)?(t.current=void 0,E({type:"FETCH_SUCCESS",payload:e}),e):Promise.reject(new Error("Fetch canceled!"))).catch(e=>Object(s["i"])(t.current)?(t.current=void 0,E({type:"FETCH_FAILURE",payload:e}),Promise.reject(e)):Promise.reject(new Error("Fetch canceled!")))},[]);return u.a.useEffect(()=>()=>{o()(t.current)&&t.current(),t.current=void 0},[]),Object(r["a"])(Object(r["a"])({},i),{},{fetch:f})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.api,t=e.data,r=e.options,c=e.config,l=u.a.useReducer(d,c,m),E=Object(n["a"])(l,2),f=E[0],p=E[1];return i(()=>{var e,n=Object(s["k"])({},r,{cancelToken:a=>{e=a}});return p({type:"FETCH_INIT"}),a(t,n).then(a=>Object(s["i"])(e)?(e=void 0,p({type:"FETCH_SUCCESS",payload:a}),a):Promise.reject(new Error("Fetch canceled!"))).catch(a=>Object(s["i"])(e)?(e=void 0,p({type:"FETCH_FAILURE",payload:a}),a):a),()=>{o()(e)&&e(),e=void 0}},[a,t,r]),f}},qTJG:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return i}));var r=t("pmdI"),n=t("tMhQ"),c=["login","logout"],o=Object(n["b"])(c),l=t("Oqv3"),u=Object(r["b"])(o),s=e=>Object(r["c"])(e,o,u,l["a"].USER),i=e=>Object(r["g"])(e,o,u,l["a"].USER)},r3KN:function(e,a,t){e.exports={header:"UUnyquL7",title:"_2WCHpSxB"}},tCqT:function(e,a,t){"use strict";t.r(a);t("GNNt");var r=t("wEI+"),n=t("Xdxp"),c=t.n(n),o=t("+UJD"),l=t.n(o),u=t("Y+p1"),s=t.n(u),i=t("q1tI"),m=t.n(i),d=t("Ty5D"),E=m.a.memo(e=>{var a=e.children;return a});E.defaultProps={};var f=E,p=(t("B9cy"),t("Ol7k")),v=t("tJVT"),h=t("6qam"),b=t.n(h),k=t("TP7S"),A=t.n(k),g=t("Jdo2");function j(e){var a=e.children,t=e.authority,r=e.errTo,n=e.authTo,c=m.a.useState(void 0),o=Object(v["a"])(c,2),l=o[0],u=o[1];return m.a.useEffect(()=>{var e=!1;return t().then(a=>{e||u(!!a)}).catch(()=>{e||u(null)}),()=>{e=!0}},[t]),A()(l)?m.a.createElement(g["default"],null):b()(l)?m.a.createElement(d["c"],{to:r}):l?m.a.createElement(d["c"],{to:n}):a}j.defaultProps={};var y=m.a.memo(j),w=t("2m8j"),x=t("0Qud"),O=t.n(x);function P(e){var a=e.children;return m.a.createElement(y,{authority:w["a"],errTo:"/403",authTo:"/dashboard"},m.a.createElement(p["a"],{className:O.a.container},m.a.createElement(p["a"].Content,{className:O.a.content},a)))}P.defaultProps={};var S=m.a.memo(P);function I(e){var a=e.children,t=e.authority,r=e.errTo,n=e.authTo,c=m.a.useState(void 0),o=Object(v["a"])(c,2),l=o[0],u=o[1];return m.a.useEffect(()=>{var e=!1;return t().then(a=>{e||u(!!a)}).catch(()=>{e||u(null)}),()=>{e=!0}},[t]),A()(l)?m.a.createElement(g["default"],null):b()(l)?m.a.createElement(d["c"],{to:r}):l?a:m.a.createElement(d["c"],{to:n})}I.defaultProps={};var T=m.a.memo(I),C=t("0Owb"),J=(t("lUTK"),t("BvKs")),Q=t("3WF5"),U=t.n(Q),F=t("ZiUS"),K=t.n(F),N=t("9kvl"),X=t("55Ip"),B=t("LF7l"),H=t("FVke"),R=t("zg/r"),z=t("FY4R"),Z=t("KPg2"),L=t("zwU1"),Y=t.n(L),D=t("1keE"),G=t.n(D),q=m.a.memo(e=>{var a=e.collapsed,t=Object(N["e"])(),r=t.formatMessage,n=a?null:m.a.createElement("h1",{className:G.a.title},r({id:"page.title"}));return m.a.createElement("div",{className:G.a.logo},m.a.createElement(X["a"],{className:G.a.link,to:"/"},m.a.createElement("img",{className:G.a.image,src:Y.a,alt:"logo"}),n))}),M=m.a.memo(e=>{var a=m.a.useState(!1),t=Object(v["a"])(a,2),r=t[0],n=t[1],c={collapsed:r,collapsible:!0,theme:"dark",onCollapse:n},o=m.a.useCallback(e=>N["b"].push("/dashboard/".concat(e.key)),[]),l=Object(d["j"])(),u=m.a.useMemo(()=>[K()(l.pathname,"/")[2]],[l.pathname]),s={mode:"inline",selectedKeys:u,theme:"dark",onClick:o},i=Object(N["e"])(),E=i.formatMessage,f=m.a.useMemo(()=>{var e=[{key:"routes",icon:m.a.createElement(B["a"],null),text:E({id:"dashboard.routes.menu"})},{key:"consumers",icon:m.a.createElement(H["a"],null),text:E({id:"dashboard.consumers.menu"})},{key:"services",icon:m.a.createElement(R["a"],null),text:E({id:"dashboard.services.menu"})},{key:"ssl",icon:m.a.createElement(z["a"],null),text:E({id:"dashboard.ssl.menu"})},{key:"upstream",icon:m.a.createElement(Z["a"],null),text:E({id:"dashboard.upstream.menu"})}];return U()(e,e=>m.a.createElement(J["a"].Item,{key:e.key},e.icon,m.a.createElement("span",null,e.text)))},[E]);return m.a.createElement(p["a"].Sider,Object(C["a"])({className:G.a.sider},c),m.a.createElement(q,{collapsed:r}),m.a.createElement(J["a"],Object(C["a"])({className:G.a.menu},s),f))});M.defaultProps={};var V=M,W=(t("qVdP"),t("jsC+")),_=(t("Telt"),t("Tckk")),$=t("aIfO"),ee=t("qTJG"),ae=t("d1sx"),te=t.n(ae),re=Object(ee["b"])(["logout"]);function ne(e){var a=re(),t=Object(v["a"])(a,1),r=t[0].logout,n=Object(N["e"])(),c=n.formatMessage,o=m.a.useMemo(()=>{var e=[{key:"logout",icon:m.a.createElement($["a"],null),text:c({id:"user.menu.logout"})}];return U()(e,e=>m.a.createElement(J["a"].Item,{key:e.key},e.icon,e.text))},[c]),l=m.a.useCallback(e=>{switch(e.key){case"logout":return r();default:break}},[r]),u={selectable:!1,onClick:l},s=m.a.createElement(J["a"],Object(C["a"])({className:te.a.menu},u),o),i={overlay:s,placement:"bottomRight",trigger:["hover"]},d={src:Y.a,alt:"avatar"};return m.a.createElement(W["a"],i,m.a.createElement("div",{className:te.a.avatar},m.a.createElement(_["a"],Object(C["a"])({className:te.a.image},d))))}ne.defaultProps={};var ce=m.a.memo(ne),oe=t("r3KN"),le=t.n(oe),ue=m.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage;return m.a.createElement("h2",{className:le.a.title},t({id:"dashboard.title"}))}),se=m.a.memo(e=>m.a.createElement(p["a"].Header,{className:le.a.header},m.a.createElement("div",{className:le.a.left},m.a.createElement(ue,null)),m.a.createElement("div",{className:le.a.right},m.a.createElement(ce,null))));se.defaultProps={};var ie=se,me=t("va5R"),de=t.n(me);function Ee(e){var a=e.children,t="/user/login?redirect=".concat(window.encodeURIComponent(window.location.href));return m.a.createElement(T,{authority:w["a"],errTo:"/403",authTo:t},m.a.createElement(p["a"],{className:de.a.container},m.a.createElement(V,null),m.a.createElement(p["a"],{className:de.a.body},m.a.createElement(ie,null),m.a.createElement(p["a"].Content,{className:de.a.content},a),m.a.createElement(p["a"].Footer,{className:de.a.footer},"APISIX \xa92020 Created by iResty"))))}Ee.defaultProps={};var fe=m.a.memo(Ee),pe=t("ji4e");function ve(e){var a=e.children,t=Object(d["j"])(),n=m.a.useRef(t);Object(pe["b"])(()=>{s()(n.current,t)||(n.current=t,window.scrollTo(0,0))},[t]);var o=m.a.createElement(f,null,a),u=t.pathname,i="/"!==u?l()(u,"/"):u;c()(i,"/user/")?o=m.a.createElement(S,null,a):c()(i,"/dashboard/")&&(o=m.a.createElement(fe,null,a));var E={autoInsertSpaceInButton:!1};return m.a.createElement(r["a"],E,o)}ve.defaultProps={};a["default"]=m.a.memo(ve)},va5R:function(e,a,t){e.exports={container:"_1QHdflkf",footer:"_1dF49Sw7"}},zwU1:function(e,a){e.exports="data:image/png;base64,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"}}]);