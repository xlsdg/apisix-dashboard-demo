(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"/WyT":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),c=a("vW3X"),o=a.n(c),s=r.a.memo(e=>{var t=e.className,a=e.children;return r.a.createElement("div",{className:l()(o.a.container,t)},a)});s.defaultProps={},t["a"]=s},"/zsF":function(e,t,a){"use strict";a("cIOH"),a("bE4E")},"34oU":function(e,t,a){e.exports={container:"_1Ai6tu8z"}},"6JZL":function(e,t,a){e.exports={container:"_1VnzDplX",title:"_1ZySfcPK"}},Bayg:function(e,t,a){"use strict";a.r(t);var n=a("VTBJ"),r=a("ODXe"),i=(a("+L6B"),a("2/Rp")),l=a("q1tI"),c=a.n(l),o=a("9kvl"),s=a("xvlK"),d=a("/WyT"),u=a("SQgF"),m=(a("g9YV"),a("wCAj")),v=a("wx14"),f=(a("/zsF"),a("PArb")),p=a("34oU"),b=a.n(p),h=c.a.memo(e=>{var t=Object(o["d"])(),a=t.formatMessage;return c.a.createElement(c.a.Fragment,null,c.a.createElement(i["a"],{type:"link",size:"small"},a({id:"dashboard.ssl.edit"})),c.a.createElement(f["a"],{type:"vertical"}),c.a.createElement(i["a"],{type:"link",size:"small",danger:!0},a({id:"dashboard.ssl.delete"})))});function g(e,t,a){return c.a.createElement(h,null)}var y=c.a.memo(e=>{var t=e.loading,a=e.dataSource,n=Object(o["d"])(),r=n.formatMessage,i=[{dataIndex:"id",title:r({id:"dashboard.ssl.col.id"})},{dataIndex:"sni",title:r({id:"dashboard.ssl.col.sni"})},{align:"center",render:g,title:r({id:"dashboard.ssl.col.actions"})}],l={bordered:!0,columns:i,dataSource:a,loading:t,pagination:!1,rowKey:"key",size:"small"};return c.a.createElement("div",{className:b.a.container},c.a.createElement(m["a"],Object(v["a"])({className:b.a.table},l)))});y.defaultProps={dataSource:[]};var E=y,x=a("eVV/"),O=a("6JZL"),w=a.n(O),j=c.a.memo(e=>{var t=Object(o["d"])(),a=t.formatMessage,n=c.a.createElement("span",{className:w.a.title},a({id:"dashboard.ssl.menu"})),r=c.a.createElement(i["a"],{type:"primary",onClick:()=>{}},c.a.createElement(s["a"],null)," ".concat(a({id:"dashboard.ssl.new"})));return c.a.createElement(u["a"],{left:n,right:r})}),P=c.a.memo(e=>{var t=e.loading,a=e.state;return c.a.createElement("div",{className:w.a.container},c.a.createElement(d["a"],null,c.a.createElement(j,null),c.a.createElement(E,{loading:t,dataSource:a.records})))});P.defaultProps={};var N=Object(x["b"])(""),S=Object(r["a"])(N,2),z=S[0],I=S[1],k=x["a"]["getRecords"];function J(e,t){return{loading:k(e.loading),state:z(e)}}function T(e,t){return{setState:I(e)}}function X(e,t,a){return Object(n["a"])({},e,{},t)}var C=Object(o["a"])(J,T,X)(P);C.title="dashboard.ssl.title";t["default"]=C},PArb:function(e,t,a){"use strict";var n=a("q1tI"),r=a("TSYQ"),i=a.n(r),l=a("H84U");function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},d=function(e){return n["createElement"](l["a"],null,(function(t){var a,r=t.getPrefixCls,l=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,m=e.orientation,v=void 0===m?"center":m,f=e.className,p=e.children,b=e.dashed,h=s(e,["prefixCls","type","orientation","className","children","dashed"]),g=r("divider",l),y=v.length>0?"-".concat(v):v,E=i()(f,g,"".concat(g,"-").concat(u),(a={},o(a,"".concat(g,"-with-text").concat(y),p),o(a,"".concat(g,"-dashed"),!!b),a));return n["createElement"]("div",c({className:E},h,{role:"separator"}),p&&n["createElement"]("span",{className:"".concat(g,"-inner-text")},p))}))};t["a"]=d},SQgF:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),c=a("sXlP"),o=a.n(c),s=r.a.memo(e=>{var t=e.className,a=e.left,n=e.right;return r.a.createElement("div",{className:l()(o.a.container,t)},r.a.createElement("div",{className:o.a.left},a),r.a.createElement("div",{className:o.a.right},n))});s.defaultProps={},t["a"]=s},bE4E:function(e,t,a){e.exports={"ant-divider":"ant-divider","ant-divider-vertical":"ant-divider-vertical","ant-divider-horizontal":"ant-divider-horizontal","ant-divider-with-text-center":"ant-divider-with-text-center","ant-divider-with-text-left":"ant-divider-with-text-left","ant-divider-with-text-right":"ant-divider-with-text-right","ant-divider-inner-text":"ant-divider-inner-text","ant-divider-dashed":"ant-divider-dashed"}},sXlP:function(e,t,a){e.exports={container:"_1ymes307"}},vW3X:function(e,t,a){e.exports={container:"_3SHyxdJu"}}}]);