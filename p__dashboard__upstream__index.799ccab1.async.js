(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"/WyT":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("TSYQ"),o=a.n(i),d=a("vW3X"),c=a.n(d),l=n.a.memo(e=>{var t=e.className,a=e.children;return n.a.createElement("div",{className:o()(c.a.container,t)},a)});l.defaultProps={},t["a"]=l},"/zsF":function(e,t,a){"use strict";a("cIOH"),a("bE4E")},IM3G:function(e,t,a){e.exports={container:"_3M5zPixP",title:"_2ixnGDXI"}},PArb:function(e,t,a){"use strict";var r=a("q1tI"),n=a("TSYQ"),i=a.n(n),o=a("H84U");function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},s=function(e){return r["createElement"](o["a"],null,(function(t){var a,n=t.getPrefixCls,o=e.prefixCls,s=e.type,u=void 0===s?"horizontal":s,m=e.orientation,p=void 0===m?"center":m,v=e.className,h=e.children,f=e.dashed,b=l(e,["prefixCls","type","orientation","className","children","dashed"]),g=n("divider",o),x=p.length>0?"-".concat(p):p,y=i()(v,g,"".concat(g,"-").concat(u),(a={},c(a,"".concat(g,"-with-text").concat(x),h),c(a,"".concat(g,"-dashed"),!!f),a));return r["createElement"]("div",d({className:y},b,{role:"separator"}),h&&r["createElement"]("span",{className:"".concat(g,"-inner-text")},h))}))};t["a"]=s},SQgF:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("TSYQ"),o=a.n(i),d=a("sXlP"),c=a.n(d),l=n.a.memo(e=>{var t=e.className,a=e.left,r=e.right;return n.a.createElement("div",{className:o()(c.a.container,t)},n.a.createElement("div",{className:c.a.left},a),n.a.createElement("div",{className:c.a.right},r))});l.defaultProps={},t["a"]=l},aYbp:function(e,t,a){"use strict";a.r(t);var r=a("VTBJ"),n=a("ODXe"),i=(a("+L6B"),a("2/Rp")),o=a("q1tI"),d=a.n(o),c=a("9kvl"),l=a("xvlK"),s=a("/WyT"),u=a("SQgF"),m=(a("g9YV"),a("wCAj")),p=a("wx14"),v=(a("/zsF"),a("PArb")),h=a("yWgo"),f=a("z1ks"),b=a.n(f);function g(e,t,a){var r={children:e,props:{}};return Object(h["h"])(t.rowSpan)&&(r.props.rowSpan=t.rowSpan),r}var x=d.a.memo(e=>{var t=Object(c["d"])(),a=t.formatMessage;return d.a.createElement(d.a.Fragment,null,d.a.createElement(i["a"],{type:"link",size:"small"},a({id:"dashboard.upstream.edit"})),d.a.createElement(v["a"],{type:"vertical"}),d.a.createElement(i["a"],{type:"link",size:"small",danger:!0},a({id:"dashboard.upstream.delete"})))});function y(e,t,a){return g(d.a.createElement(x,null),t,a)}var w=d.a.memo(e=>{var t=e.loading,a=e.dataSource,r=Object(c["d"])(),n=r.formatMessage,i=[{dataIndex:"id",render:g,title:n({id:"dashboard.upstream.col.id"})},{dataIndex:"description",render:g,title:n({id:"dashboard.upstream.col.description"})},{dataIndex:"type",render:g,title:n({id:"dashboard.upstream.col.type"})},{title:n({id:"dashboard.upstream.col.nodes"}),children:[{dataIndex:["node","host"],title:n({id:"dashboard.upstream.col.host"})},{dataIndex:["node","port"],title:n({id:"dashboard.upstream.col.port"})},{dataIndex:["node","weights"],title:n({id:"dashboard.upstream.col.weights"})}]},{align:"center",render:y,title:n({id:"dashboard.upstream.col.actions"})}],o={bordered:!0,columns:i,dataSource:a,loading:t,pagination:!1,rowKey:"key",size:"small"};return d.a.createElement("div",{className:b.a.container},d.a.createElement(m["a"],Object(p["a"])({className:b.a.table},o)))});w.defaultProps={dataSource:[]};var E=w,O=a("lcnJ"),S=a("IM3G"),j=a.n(S),P=d.a.memo(e=>{var t=Object(c["d"])(),a=t.formatMessage,r=d.a.createElement("span",{className:j.a.title},"SSL"),n=d.a.createElement(i["a"],{type:"primary",onClick:()=>{}},d.a.createElement(l["a"],null)," ".concat(a({id:"dashboard.upstream.new"})));return d.a.createElement(u["a"],{left:r,right:n})}),I=d.a.memo(e=>{var t=e.loading,a=e.state;return d.a.createElement("div",{className:j.a.container},d.a.createElement(s["a"],null,d.a.createElement(P,null),d.a.createElement(E,{loading:t,dataSource:a.records})))});I.defaultProps={};var N=Object(O["b"])(""),z=Object(n["a"])(N,2),k=z[0],M=z[1],T=O["a"]["getRecords"];function X(e,t){return{loading:T(e.loading),state:k(e)}}function C(e,t){return{setState:M(e)}}function F(e,t,a){return Object(r["a"])({},e,{},t)}var J=Object(c["a"])(X,C,F)(I);J.title="dashboard.upstream.title";t["default"]=J},bE4E:function(e,t,a){e.exports={"ant-divider":"ant-divider","ant-divider-vertical":"ant-divider-vertical","ant-divider-horizontal":"ant-divider-horizontal","ant-divider-with-text-center":"ant-divider-with-text-center","ant-divider-with-text-left":"ant-divider-with-text-left","ant-divider-with-text-right":"ant-divider-with-text-right","ant-divider-inner-text":"ant-divider-inner-text","ant-divider-dashed":"ant-divider-dashed"}},sXlP:function(e,t,a){e.exports={container:"_1ymes307"}},vW3X:function(e,t,a){e.exports={container:"_3SHyxdJu"}},z1ks:function(e,t,a){e.exports={container:"oNauZV5U"}}}]);