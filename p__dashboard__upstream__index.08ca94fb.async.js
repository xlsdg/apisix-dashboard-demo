(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"/WyT":function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),d=t("TSYQ"),o=t.n(d),s=t("vW3X"),l=t.n(s),c=n.a.memo(e=>{var a=e.className,t=e.children;return n.a.createElement("div",{className:o()(l.a.container,a)},t)});c.defaultProps={},a["a"]=c},IM3G:function(e,a,t){e.exports={container:"_3M5zPixP",title:"_2ixnGDXI"}},SQgF:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),d=t("TSYQ"),o=t.n(d),s=t("sXlP"),l=t.n(s),c=n.a.memo(e=>{var a=e.className,t=e.left,r=e.right;return n.a.createElement("div",{className:o()(l.a.container,a)},n.a.createElement("div",{className:l.a.left},t),n.a.createElement("div",{className:l.a.right},r))});c.defaultProps={},a["a"]=c},aYbp:function(e,a,t){"use strict";t.r(a);var r=t("VTBJ"),n=t("ODXe"),d=(t("+L6B"),t("2/Rp")),o=t("q1tI"),s=t.n(o),l=t("9kvl"),c=t("xvlK"),i=t("/WyT"),m=t("SQgF"),u=(t("g9YV"),t("wCAj")),p=t("wx14"),b=(t("/zsF"),t("PArb")),v=t("yWgo"),h=t("z1ks"),f=t.n(h);function g(e,a,t){var r={children:e,props:{}};return Object(v["h"])(a.rowSpan)&&(r.props.rowSpan=a.rowSpan),r}var E=s.a.memo(e=>{var a=Object(l["d"])(),t=a.formatMessage;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d["a"],{type:"link",size:"small"},t({id:"dashboard.upstream.edit"})),s.a.createElement(b["a"],{type:"vertical"}),s.a.createElement(d["a"],{type:"link",size:"small",danger:!0},t({id:"dashboard.upstream.delete"})))});function w(e,a,t){return g(s.a.createElement(E,null),a,t)}var x=s.a.memo(e=>{var a=e.loading,t=e.dataSource,r=Object(l["d"])(),n=r.formatMessage,d=[{dataIndex:"id",render:g,title:n({id:"dashboard.upstream.col.id"})},{dataIndex:"description",render:g,title:n({id:"dashboard.upstream.col.description"})},{dataIndex:"type",render:g,title:n({id:"dashboard.upstream.col.type"})},{title:n({id:"dashboard.upstream.col.nodes"}),children:[{dataIndex:["node","host"],title:n({id:"dashboard.upstream.col.host"})},{dataIndex:["node","port"],title:n({id:"dashboard.upstream.col.port"})},{dataIndex:["node","weights"],title:n({id:"dashboard.upstream.col.weights"})}]},{align:"center",render:w,title:n({id:"dashboard.upstream.col.actions"})}],o={bordered:!0,columns:d,dataSource:t,loading:a,pagination:!1,rowKey:"key",size:"small"};return s.a.createElement("div",{className:f.a.container},s.a.createElement(u["a"],Object(p["a"])({className:f.a.table},o)))});x.defaultProps={dataSource:[]};var y=x,S=t("lcnJ"),I=t("IM3G"),N=t.n(I),j=s.a.memo(e=>{var a=Object(l["d"])(),t=a.formatMessage,r=s.a.createElement("span",{className:N.a.title},t({id:"dashboard.upstream.menu"})),n=s.a.createElement(d["a"],{type:"primary",onClick:()=>{}},s.a.createElement(c["a"],null)," ".concat(t({id:"dashboard.upstream.new"})));return s.a.createElement(m["a"],{left:r,right:n})}),O=s.a.memo(e=>{var a=e.loading,t=e.state;return s.a.createElement("div",{className:N.a.container},s.a.createElement(i["a"],null,s.a.createElement(j,null),s.a.createElement(y,{loading:a,dataSource:t.records})))});O.defaultProps={};var k=Object(S["b"])(""),P=Object(n["a"])(k,2),z=P[0],M=P[1],X=S["a"]["getRecords"];function J(e,a){return{loading:X(e.loading),state:z(e)}}function T(e,a){return{setState:M(e)}}function W(e,a,t){return Object(r["a"])({},e,{},a)}var F=Object(l["a"])(J,T,W)(O);F.title="dashboard.upstream.title";a["default"]=F},sXlP:function(e,a,t){e.exports={container:"_1ymes307"}},vW3X:function(e,a,t){e.exports={container:"_3SHyxdJu"}},z1ks:function(e,a,t){e.exports={container:"oNauZV5U"}}}]);