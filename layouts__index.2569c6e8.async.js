(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0Qud":function(e,a,t){e.exports={container:"_3FL3M8vR"}},"1keE":function(e,a,t){e.exports={logo:"_1ilkpSbc",link:"_3i13aUvT",image:"_1vRPFQU1",title:"_1m3C_LuU"}},d1sx:function(e,a,t){e.exports={avatar:"_2twyOikw",image:"_1wBxNE7t"}},qTJG:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"a",(function(){return s}));var n=t("pmdI"),r=t("tMhQ"),l=["login","logout"],c=Object(r["b"])(l),o=t("Oqv3"),u=Object(n["c"])(c),m=Object(n["d"])(c,u,o["a"].USER),s=e=>Object(n["a"])(e,o["a"].USER)},r3KN:function(e,a,t){e.exports={header:"UUnyquL7",title:"_2WCHpSxB"}},tCqT:function(e,a,t){"use strict";t.r(a);t("GNNt");var n=t("wEI+"),r=t("Xdxp"),l=t.n(r),c=t("+UJD"),o=t.n(c),u=t("Y+p1"),m=t.n(u),s=t("q1tI"),i=t.n(s),d=t("Ty5D"),E=i.a.memo(e=>{var a=e.children;return a});E.propTypes={},E.defaultProps={};var p=E,v=(t("B9cy"),t("Ol7k")),f=t("ODXe"),h=t("6qam"),A=t.n(h),g=t("TP7S"),k=t.n(g),x=t("Jdo2"),b=i.a.memo(e=>{var a=e.children,t=e.authority,n=e.errTo,r=e.authTo,l=i.a.useState(void 0),c=Object(f["a"])(l,2),o=c[0],u=c[1];return i.a.useEffect(()=>{var e=!1;return t().then(a=>{e||u(!!a)}).catch(()=>{e||u(null)}),()=>{e=!0}},[t]),k()(o)?i.a.createElement(x["default"],null):A()(o)?i.a.createElement(d["c"],{to:n}):o?i.a.createElement(d["c"],{to:r}):a});b.defaultProps={};var P=b,w=t("2m8j"),y=t("0Qud"),S=t.n(y),Q=i.a.memo(e=>{var a=e.children;return i.a.createElement(P,{authority:w["a"],errTo:"/403",authTo:"/dashboard"},i.a.createElement(v["a"],{className:S.a.container},i.a.createElement(v["a"].Content,{className:S.a.content},a)))});Q.defaultProps={};var J=Q,O=i.a.memo(e=>{var a=e.children,t=e.authority,n=e.errTo,r=e.authTo,l=i.a.useState(void 0),c=Object(f["a"])(l,2),o=c[0],u=c[1];return i.a.useEffect(()=>{var e=!1;return t().then(a=>{e||u(!!a)}).catch(()=>{e||u(null)}),()=>{e=!0}},[t]),k()(o)?i.a.createElement(x["default"],null):A()(o)?i.a.createElement(d["c"],{to:n}):o?a:i.a.createElement(d["c"],{to:r})});O.defaultProps={};var j=O,I=t("wx14"),K=(t("lUTK"),t("BvKs")),U=t("3WF5"),X=t.n(U),N=t("ZiUS"),B=t.n(N),T=t("9kvl"),z=t("55Ip"),Z=t("LF7l"),C=t("FVke"),R=t("zg/r"),H=t("FY4R"),Y=t("KPg2"),F=t("zwU1"),L=t.n(F),D=t("1keE"),G=t.n(D),q=i.a.memo(e=>{var a=e.collapsed,t=Object(T["d"])(),n=t.formatMessage,r=a?null:i.a.createElement("h1",{className:G.a.title},n({id:"page.title"}));return i.a.createElement("div",{className:G.a.logo},i.a.createElement(z["a"],{className:G.a.link,to:"/"},i.a.createElement("img",{className:G.a.image,src:L.a,alt:"logo"}),r))}),M=i.a.memo(e=>{var a=e.location,t=i.a.useState(!1),n=Object(f["a"])(t,2),r=n[0],l=n[1],c={collapsed:r,collapsible:!0,theme:"dark",onCollapse:l},o=i.a.useCallback(e=>T["b"].push("/dashboard/".concat(e.key)),[]),u=i.a.useMemo(()=>[B()(a.pathname,"/")[2]],[a.pathname]),m={mode:"inline",selectedKeys:u,theme:"dark",onClick:o},s=Object(T["d"])(),d=s.formatMessage,E=i.a.useMemo(()=>{var e=[{key:"routes",icon:i.a.createElement(Z["a"],null),text:d({id:"page.routes.menu"})},{key:"consumers",icon:i.a.createElement(C["a"],null),text:d({id:"page.consumers.menu"})},{key:"services",icon:i.a.createElement(R["a"],null),text:d({id:"page.services.menu"})},{key:"ssl",icon:i.a.createElement(H["a"],null),text:d({id:"page.ssl.menu"})},{key:"upstream",icon:i.a.createElement(Y["a"],null),text:d({id:"page.upstream.menu"})}];return X()(e,e=>i.a.createElement(K["a"].Item,{key:e.key},e.icon,i.a.createElement("span",null,e.text)))},[d]);return i.a.createElement(v["a"].Sider,Object(I["a"])({className:G.a.sider},c),i.a.createElement(q,{collapsed:r}),i.a.createElement(K["a"],Object(I["a"])({className:G.a.menu},m),E))});M.defaultProps={};var V=M,W=t("6acW"),_=t.n(W),$=t("VTBJ"),ee=(t("qVdP"),t("jsC+")),ae=(t("Telt"),t("Tckk")),te=t("aIfO"),ne=t("qTJG"),re=t("d1sx"),le=t.n(re),ce=i.a.memo(e=>{var a=e.logout,t=Object(T["d"])(),n=t.formatMessage,r=i.a.useMemo(()=>{var e=[{key:"logout",icon:i.a.createElement(te["a"],null),text:n({id:"page.user.menu.logout"})}];return X()(e,e=>i.a.createElement(K["a"].Item,{key:e.key},e.icon,e.text))},[n]),l=i.a.useCallback(e=>{switch(e.key){case"logout":return a();default:break}},[a]),c={selectable:!1,onClick:l},o=i.a.createElement(K["a"],Object(I["a"])({className:le.a.menu},c),r),u={overlay:o,placement:"bottomRight",trigger:["hover"]},m={src:L.a,alt:"avatar"};return i.a.createElement(ee["a"],u,i.a.createElement("div",{className:le.a.avatar},i.a.createElement(ae["a"],Object(I["a"])({className:le.a.image},m))))});function oe(e,a){return{loading:e.loading}}function ue(e,a){return Object($["a"])({},Object(ne["b"])(e,["logout"]))}function me(e,a,t){return Object($["a"])({},e,{},a)}ce.defaultProps={};var se=Object(T["a"])(oe,ue,me)(ce),ie=t("r3KN"),de=t.n(ie),Ee=i.a.memo(e=>{var a=e.location;return i.a.createElement("h2",{className:de.a.title},_()(B()(a.pathname,"/")[2]))}),pe=i.a.memo(e=>{var a=e.location;return i.a.createElement(v["a"].Header,{className:de.a.header},i.a.createElement("div",{className:de.a.left},i.a.createElement(Ee,{location:a})),i.a.createElement("div",{className:de.a.right},i.a.createElement(se,null)))});pe.defaultProps={};var ve=pe,fe=t("va5R"),he=t.n(fe),Ae=i.a.memo(e=>{var a=e.children,t=e.location,n="/user/login?redirect=".concat(window.encodeURIComponent(window.location.href));return i.a.createElement(j,{authority:w["a"],errTo:"/403",authTo:n},i.a.createElement(v["a"],{className:he.a.container},i.a.createElement(V,{location:t}),i.a.createElement(v["a"],{className:he.a.body},i.a.createElement(ve,{location:t}),i.a.createElement(v["a"].Content,{className:he.a.content},a),i.a.createElement(v["a"].Footer,{className:he.a.footer},"APISIX \xa92020 Created by iResty"))))});Ae.defaultProps={};var ge=Ae,ke=(t("Jlc5"),t("yWgo"));function xe(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ke["i"];var n=i.a.useRef(void 0);n.current&&t(a,n.current)||(n.current=a),i.a.useEffect(e,n.current)}var be=i.a.memo(e=>{var a=e.children,t=e.location,r=i.a.useRef(t);xe(()=>{m()(r.current,t)||(r.current=t,window.scrollTo(0,0))},[t]);var c=i.a.createElement(p,{location:t},a),u=t.pathname,s="/"!==u?o()(u,"/"):u;l()(s,"/user/")?c=i.a.createElement(J,{location:t},a):l()(s,"/dashboard/")&&(c=i.a.createElement(ge,{location:t},a));var d={autoInsertSpaceInButton:!1};return i.a.createElement(n["a"],d,c)});a["default"]=Object(d["m"])(be)},va5R:function(e,a,t){e.exports={container:"_1QHdflkf",footer:"_1dF49Sw7"}},zwU1:function(e,a){e.exports="data:image/png;base64,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"}}]);