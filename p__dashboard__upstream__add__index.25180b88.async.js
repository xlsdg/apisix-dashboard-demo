(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"/WyT":function(e,a,t){"use strict";var r=t("q1tI"),s=t.n(r),n=t("TSYQ"),l=t.n(n),m=t("vW3X"),o=t.n(m);function c(e){var a=e.className,t=e.children;return s.a.createElement("div",{className:l()(o.a.container,a)},t)}c.defaultProps={},a["a"]=s.a.memo(c)},"5cRm":function(e,a,t){"use strict";t.r(a);var r=t("k1fw"),s=t("tJVT"),n=(t("sPJy"),t("bE4q")),l=t("q1tI"),m=t.n(l),o=t("9kvl"),c=t("uqfK"),d=t("/WyT"),u=t("SQgF"),i=t("W91k"),b=t("lcnJ"),p=t("Fc5G"),h=t.n(p),f=m.a.memo(e=>{var a=Object(o["e"])(),t=a.formatMessage,r=m.a.createElement(n["a"],null,m.a.createElement(n["a"].Item,{href:"/dashboard"},m.a.createElement(c["a"],null)),m.a.createElement(n["a"].Item,{href:"/dashboard/upstream"},t({id:"dashboard.upstream.menu"})),m.a.createElement(n["a"].Item,null,t({id:"dashboard.upstream.new"}))),s=null;return m.a.createElement(u["a"],{left:r,right:s})});function E(e){var a=e.loading,t=e.addRecord;return m.a.createElement("div",{className:h.a.container},m.a.createElement(d["a"],null,m.a.createElement(f,null),m.a.createElement(i["a"],{className:h.a.form,loading:a["addRecord"],onSubmit:t})))}E.defaultProps={};var v=Object(b["a"])(["addRecord"]),y=Object(s["a"])(v,2),O=y[0],g=y[1];function k(e,a){return{loading:g(e.loading)}}function j(e,a){return Object(r["a"])({},O(e))}function N(e,a,t){return Object(r["a"])(Object(r["a"])({},e),a)}var w=Object(o["a"])(k,j,N)(m.a.memo(E));w.title="dashboard.upstream.title",a["default"]=w},Fc5G:function(e,a,t){e.exports={container:"_6jovdi2-",form:"_239n4tgS"}},SQgF:function(e,a,t){"use strict";var r=t("q1tI"),s=t.n(r),n=t("TSYQ"),l=t.n(n),m=t("sXlP"),o=t.n(m);function c(e){var a=e.className,t=e.left,r=e.right;return s.a.createElement("div",{className:l()(o.a.container,a)},s.a.createElement("div",{className:o.a.left},t),s.a.createElement("div",{className:o.a.right},r))}c.defaultProps={},a["a"]=s.a.memo(c)},W91k:function(e,a,t){"use strict";var r=t("k1fw"),s=(t("miYZ"),t("tsqr")),n=(t("+L6B"),t("2/Rp")),l=(t("giR+"),t("fyUT")),m=t("WmNS"),o=t.n(m),c=t("9og8"),d=(t("2qtc"),t("kLXV")),u=(t("BoS7"),t("Sdc0")),i=(t("OaEy"),t("2fM7")),b=(t("y8nQ"),t("Vl3Y")),p=t("0Owb"),h=(t("5NDa"),t("5rEg")),f=t("3WF5"),E=t.n(f),v=t("xaJk"),y=t.n(v),O=t("q1tI"),g=t.n(O),k=t("TSYQ"),j=t.n(k),N=t("9kvl"),w=t("RCxd"),q=t("wlus"),I=t("xvlK"),x=t("Rt6h"),M=t("yWgo"),S=t("vabO"),T=t.n(S),C=g.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.upstream.form.description"}),name:"description"};return g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.description},r),g.a.createElement(h["a"],{className:T.a.input,placeholder:t({id:"dashboard.upstream.form.description.placeholder"})}))}),K=g.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage,r=g.a.useMemo(()=>[{required:!0,message:t({id:"dashboard.upstream.form.type.required"})}],[t]),s={label:t({id:"dashboard.upstream.form.type"}),name:"type",rules:r},n=g.a.useMemo(()=>y()(x["a"],(e,a,t)=>(e.push(g.a.createElement(i["a"].Option,{key:t,value:t,title:a.name},a.name)),e),[]),[]);return g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.type},s),g.a.createElement(i["a"],{className:T.a.select,placeholder:t({id:"dashboard.upstream.form.type.placeholder"})},n))}),Z=g.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage,r=g.a.useCallback((e,a)=>e.type!==a.type,[]),s=g.a.useCallback(e=>{var a=e.getFieldValue("type");if(!Object(M["g"])(a))return null;var r=[{required:!0,message:t({id:"dashboard.upstream.form.hash.on.required"})}],s={label:t({id:"dashboard.upstream.form.hash.on"}),name:[a,"hashOn"],rules:r},n=y()(Object(M["c"])(x["a"],"".concat(a,".props.hashOn.items"),[]),(e,a)=>(e.push(g.a.createElement(i["a"].Option,{key:a.value,value:a.value,title:a.name},a.name)),e),[]);return Object(M["d"])(n)?g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.hashOn},s),g.a.createElement(i["a"],{className:T.a.select,placeholder:t({id:"dashboard.upstream.form.hash.on.placeholder"})},n)):null},[t]);return g.a.createElement(b["a"].Item,{noStyle:!0,shouldUpdate:r},s)}),F=g.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage,r=g.a.useCallback((e,a)=>e.type!==a.type,[]),s=g.a.useCallback(e=>{var a=e.getFieldValue("type");if(!Object(M["g"])(a))return null;var r=[{required:!0,message:t({id:"dashboard.upstream.form.hash.key.required"})}],s={label:t({id:"dashboard.upstream.form.hash.key"}),name:[a,"hashKey"],rules:r},n=y()(Object(M["c"])(x["a"],"".concat(a,".props.hashKey.items"),[]),(e,a)=>(e.push(g.a.createElement(i["a"].Option,{key:a.value,value:a.value,title:a.name},a.name)),e),[]);return Object(M["d"])(n)?g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.hashKey},s),g.a.createElement(i["a"],{className:T.a.select,placeholder:t({id:"dashboard.upstream.form.hash.key.placeholder"})},n)):null},[t]);return g.a.createElement(b["a"].Item,{noStyle:!0,shouldUpdate:r},s)}),W=g.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage,r={label:t({id:"dashboard.upstream.form.websocket"}),name:"websocket",valuePropName:"checked"};return g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.websocket},r),g.a.createElement(u["a"],null))}),_=g.a.memo(e=>{var a=e.onClick,t=Object(N["e"])(),r=t.formatMessage,s=g.a.useCallback(()=>d["a"].confirm({title:r({id:"dashboard.upstream.form.nodes.delete.title"}),icon:g.a.createElement(w["a"],null),content:r({id:"dashboard.upstream.form.nodes.delete.content"}),okText:r({id:"dashboard.upstream.form.nodes.delete.ok"}),okType:"danger",cancelText:r({id:"dashboard.upstream.form.nodes.delete.cancel"}),onOk:a}),[r,a]);return g.a.createElement(q["a"],{className:T.a.remove,onClick:s})}),R=g.a.memo(e=>{var a=Object(N["e"])(),t=a.formatMessage,r=(e,a)=>{var r=E()(e,(r,s)=>{var n=[{required:!0,message:t({id:"dashboard.upstream.form.nodes.host.required"})},{validator:function(){var e=Object(c["a"])(o.a.mark((function e(a,r){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(r)){e.next=4;break}return e.abrupt("return");case 4:if(!/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/.test(r)){e.next=8;break}return e.abrupt("return");case 8:throw new Error(t({id:"dashboard.upstream.form.nodes.host.required"}));case 9:case"end":return e.stop()}}),e)})));function a(a,t){return e.apply(this,arguments)}return a}()}],m={fieldKey:[r.fieldKey,"host"],name:[r.name,"host"],rules:n,validateFirst:!0},d=[{required:!0,message:t({id:"dashboard.upstream.form.nodes.port.required"})}],u={fieldKey:[r.fieldKey,"port"],name:[r.name,"port"],rules:d},i=[{required:!0,message:t({id:"dashboard.upstream.form.nodes.weights.required"})}],f={fieldKey:[r.fieldKey,"weights"],name:[r.name,"weights"],rules:i},E=g.a.createElement(_,{onClick:()=>a.remove(r.name)});return g.a.createElement(b["a"].Item,{key:r.key,className:T.a.node,label:"".concat(t({id:"dashboard.upstream.form.nodes.node"})," ").concat(s+1)},g.a.createElement("div",{className:T.a.row},g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.host},m),g.a.createElement(h["a"],{placeholder:t({id:"dashboard.upstream.form.nodes.host.placeholder"})})),g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.port},u),g.a.createElement(l["a"],{min:0,max:65535,placeholder:t({id:"dashboard.upstream.form.nodes.port.placeholder"})})),g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.weights},f),g.a.createElement(l["a"],{min:0,placeholder:t({id:"dashboard.upstream.form.nodes.weights.placeholder"})})),e.length>1?E:null))}),s={};return g.a.createElement(g.a.Fragment,null,r,g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.add},s),g.a.createElement(n["a"],{className:T.a.button,type:"dashed",onClick:()=>a.add()},g.a.createElement(I["a"],null),t({id:"dashboard.upstream.form.nodes.add"}))))};return g.a.createElement(b["a"].List,{name:"nodes"},r)}),z=g.a.memo(e=>{var a=e.loading,t=Object(N["e"])(),r=t.formatMessage,s=g.a.useCallback(()=>N["b"].push("/dashboard/upstream"),[]),l={};return g.a.createElement(b["a"].Item,Object(p["a"])({className:T.a.submit},l),g.a.createElement(n["a"],{className:T.a.button,htmlType:"submit",type:"primary",loading:a},r({id:"dashboard.upstream.form.submit"})),g.a.createElement(n["a"],{className:T.a.button,htmlType:"button",onClick:s},r({id:"dashboard.upstream.form.cancel"})))}),V=g.a.memo(e=>{var a=e.className,t=e.loading,n=e.record,l=e.onSubmit,m=Object(N["e"])(),o=m.formatMessage,c=g.a.useCallback(e=>Object(M["d"])(e.nodes)?l(Object(r["a"])({key:n.key},e)).then(()=>s["a"].success(o({id:"dashboard.upstream.form.".concat(Object(M["g"])(n.key)?"edit":"add",".success")}))):s["a"].error(o({id:"dashboard.upstream.form.nodes.node.required"})),[o,l,n.key]),d={initialValues:n,layout:"vertical",onFinish:c};return g.a.createElement(b["a"],Object(p["a"])({className:j()(T.a.container,a)},d),g.a.createElement(C,null),g.a.createElement(K,null),g.a.createElement(Z,null),g.a.createElement(F,null),g.a.createElement(W,null),g.a.createElement(R,null),g.a.createElement(z,{loading:t}))});V.defaultProps={record:{}},a["a"]=V},sXlP:function(e,a,t){e.exports={container:"_1ymes307"}},vW3X:function(e,a,t){e.exports={container:"_3SHyxdJu"}},vabO:function(e,a,t){e.exports={container:"_2ZV7WMp7",node:"_2krVaOWr",row:"_1NXhHZbt",host:"_3leBNRsX",port:"_3fFssNz2",weights:"UHaseRxp",remove:"_1ZtTcqab",submit:"_1M518Kea",button:"bYGJfTXV"}}}]);