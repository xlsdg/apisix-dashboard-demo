(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0Qud":function(e,a,t){e.exports={container:"_3FL3M8vR"}},"1keE":function(e,a,t){e.exports={logo:"_1ilkpSbc",link:"_3i13aUvT",image:"_1vRPFQU1",title:"_1m3C_LuU"}},d1sx:function(e,a,t){e.exports={avatar:"_2twyOikw",image:"_1wBxNE7t"}},qTJG:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var n=t("pmdI"),r=t("tMhQ"),l=["login","logout"],c=Object(r["b"])(l),o=t("Oqv3"),s=Object(n["b"])(c),u=e=>Object(n["c"])(e,c,s,o["a"].USER),m=e=>Object(n["g"])(e,c,s,o["a"].USER)},r3KN:function(e,a,t){e.exports={header:"UUnyquL7",title:"_2WCHpSxB"}},tCqT:function(e,a,t){"use strict";t.r(a);t("GNNt");var n=t("wEI+"),r=t("Xdxp"),l=t.n(r),c=t("+UJD"),o=t.n(c),s=t("Y+p1"),u=t.n(s),m=t("q1tI"),i=t.n(m),d=t("Ty5D"),E=i.a.memo(e=>{var a=e.children;return a});E.defaultProps={};var f=E,h=(t("B9cy"),t("Ol7k")),p=t("ODXe"),v=t("6qam"),A=t.n(v),k=t("TP7S"),b=t.n(k),x=t("Jdo2");function g(e){var a=e.children,t=e.authority,n=e.errTo,r=e.authTo,l=i.a.useState(void 0),c=Object(p["a"])(l,2),o=c[0],s=c[1];return i.a.useEffect(()=>{var e=!1;return t().then(a=>{e||s(!!a)}).catch(()=>{e||s(null)}),()=>{e=!0}},[t]),b()(o)?i.a.createElement(x["default"],null):A()(o)?i.a.createElement(d["c"],{to:n}):o?i.a.createElement(d["c"],{to:r}):a}g.defaultProps={};var P=i.a.memo(g),w=t("2m8j"),S=t("0Qud"),y=t.n(S);function Q(e){var a=e.children;return i.a.createElement(P,{authority:w["a"],errTo:"/403",authTo:"/dashboard"},i.a.createElement(h["a"],{className:y.a.container},i.a.createElement(h["a"].Content,{className:y.a.content},a)))}Q.defaultProps={};var J=i.a.memo(Q);function j(e){var a=e.children,t=e.authority,n=e.errTo,r=e.authTo,l=i.a.useState(void 0),c=Object(p["a"])(l,2),o=c[0],s=c[1];return i.a.useEffect(()=>{var e=!1;return t().then(a=>{e||s(!!a)}).catch(()=>{e||s(null)}),()=>{e=!0}},[t]),b()(o)?i.a.createElement(x["default"],null):A()(o)?i.a.createElement(d["c"],{to:n}):o?a:i.a.createElement(d["c"],{to:r})}j.defaultProps={};var O=i.a.memo(j),I=t("wx14"),K=(t("lUTK"),t("BvKs")),U=t("3WF5"),X=t.n(U),N=t("ZiUS"),B=t.n(N),T=t("9kvl"),z=t("55Ip"),Z=t("LF7l"),C=t("FVke"),R=t("zg/r"),H=t("FY4R"),Y=t("KPg2"),F=t("zwU1"),L=t.n(F),D=t("1keE"),G=t.n(D),M=i.a.memo(e=>{var a=e.collapsed,t=Object(T["e"])(),n=t.formatMessage,r=a?null:i.a.createElement("h1",{className:G.a.title},n({id:"page.title"}));return i.a.createElement("div",{className:G.a.logo},i.a.createElement(z["a"],{className:G.a.link,to:"/"},i.a.createElement("img",{className:G.a.image,src:L.a,alt:"logo"}),r))}),q=i.a.memo(e=>{var a=i.a.useState(!1),t=Object(p["a"])(a,2),n=t[0],r=t[1],l={collapsed:n,collapsible:!0,theme:"dark",onCollapse:r},c=i.a.useCallback(e=>T["b"].push("/dashboard/".concat(e.key)),[]),o=Object(d["j"])(),s=i.a.useMemo(()=>[B()(o.pathname,"/")[2]],[o.pathname]),u={mode:"inline",selectedKeys:s,theme:"dark",onClick:c},m=Object(T["e"])(),E=m.formatMessage,f=i.a.useMemo(()=>{var e=[{key:"routes",icon:i.a.createElement(Z["a"],null),text:E({id:"dashboard.routes.menu"})},{key:"consumers",icon:i.a.createElement(C["a"],null),text:E({id:"dashboard.consumers.menu"})},{key:"services",icon:i.a.createElement(R["a"],null),text:E({id:"dashboard.services.menu"})},{key:"ssl",icon:i.a.createElement(H["a"],null),text:E({id:"dashboard.ssl.menu"})},{key:"upstream",icon:i.a.createElement(Y["a"],null),text:E({id:"dashboard.upstream.menu"})}];return X()(e,e=>i.a.createElement(K["a"].Item,{key:e.key},e.icon,i.a.createElement("span",null,e.text)))},[E]);return i.a.createElement(h["a"].Sider,Object(I["a"])({className:G.a.sider},l),i.a.createElement(M,{collapsed:n}),i.a.createElement(K["a"],Object(I["a"])({className:G.a.menu},u),f))});q.defaultProps={};var V=q,W=(t("qVdP"),t("jsC+")),_=(t("Telt"),t("Tckk")),$=t("aIfO"),ee=t("qTJG"),ae=t("d1sx"),te=t.n(ae),ne=Object(ee["b"])(["logout"]);function re(e){var a=ne(),t=Object(p["a"])(a,1),n=t[0].logout,r=Object(T["e"])(),l=r.formatMessage,c=i.a.useMemo(()=>{var e=[{key:"logout",icon:i.a.createElement($["a"],null),text:l({id:"user.menu.logout"})}];return X()(e,e=>i.a.createElement(K["a"].Item,{key:e.key},e.icon,e.text))},[l]),o=i.a.useCallback(e=>{switch(e.key){case"logout":return n();default:break}},[n]),s={selectable:!1,onClick:o},u=i.a.createElement(K["a"],Object(I["a"])({className:te.a.menu},s),c),m={overlay:u,placement:"bottomRight",trigger:["hover"]},d={src:L.a,alt:"avatar"};return i.a.createElement(W["a"],m,i.a.createElement("div",{className:te.a.avatar},i.a.createElement(_["a"],Object(I["a"])({className:te.a.image},d))))}re.defaultProps={};var le=i.a.memo(re),ce=t("r3KN"),oe=t.n(ce),se=i.a.memo(e=>{var a=Object(T["e"])(),t=a.formatMessage;return i.a.createElement("h2",{className:oe.a.title},t({id:"dashboard.title"}))}),ue=i.a.memo(e=>i.a.createElement(h["a"].Header,{className:oe.a.header},i.a.createElement("div",{className:oe.a.left},i.a.createElement(se,null)),i.a.createElement("div",{className:oe.a.right},i.a.createElement(le,null))));ue.defaultProps={};var me=ue,ie=t("va5R"),de=t.n(ie);function Ee(e){var a=e.children,t="/user/login?redirect=".concat(window.encodeURIComponent(window.location.href));return i.a.createElement(O,{authority:w["a"],errTo:"/403",authTo:t},i.a.createElement(h["a"],{className:de.a.container},i.a.createElement(V,null),i.a.createElement(h["a"],{className:de.a.body},i.a.createElement(me,null),i.a.createElement(h["a"].Content,{className:de.a.content},a),i.a.createElement(h["a"].Footer,{className:de.a.footer},"APISIX \xa92020 Created by iResty"))))}Ee.defaultProps={};var fe=i.a.memo(Ee),he=(t("Jlc5"),t("yWgo"));function pe(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:he["i"];var n=i.a.useRef(void 0);n.current&&t(a,n.current)||(n.current=a),i.a.useEffect(e,n.current)}function ve(e){var a=e.children,t=Object(d["j"])(),r=i.a.useRef(t);pe(()=>{u()(r.current,t)||(r.current=t,window.scrollTo(0,0))},[t]);var c=i.a.createElement(f,null,a),s=t.pathname,m="/"!==s?o()(s,"/"):s;l()(m,"/user/")?c=i.a.createElement(J,null,a):l()(m,"/dashboard/")&&(c=i.a.createElement(fe,null,a));var E={autoInsertSpaceInButton:!1};return i.a.createElement(n["a"],E,c)}ve.defaultProps={};a["default"]=i.a.memo(ve)},va5R:function(e,a,t){e.exports={container:"_1QHdflkf",footer:"_1dF49Sw7"}},zwU1:function(e,a){e.exports="data:image/png;base64,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"}}]);