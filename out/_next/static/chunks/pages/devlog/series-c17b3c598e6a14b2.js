(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{9317:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var i=r(29),n=r(7794),s=r.n(n),a=r(7294),c=r(2125),l=r(1163),o=r(196),u=r(5675),d=r(5893),f=c.ZP.div.withConfig({displayName:"series__Root",componentId:"sc-1l4z2i5-0"})([".series{display:flex;flex-wrap:wrap;.cardSeries{height:35vh;flex-wrap:wrap;width:42%;margin-top:8%;margin-left:4%;margin-right:4%;cursor:pointer;.cardSeriesThumb{position:relative;width:100%;height:75%;}.cardSeriesSubject{font-size:1.5rem;line-height:5vh;font-weight:bold;.cardSeriesCount{color:#9DC9BF;font-size:1rem;font-weight:normal;}}.cardSeriesDate{opacity:0.5;font-size:0.7rem;}}}"]),h=function(e){var t,r;return e.sort((function(e,t){return new Date(t.createDate)-new Date(e.createDate)})),(0,d.jsx)(u.default,{src:"/images/devlogThumb/".concat(null!==(t=null===(r=e[0])||void 0===r?void 0:r.thumb)&&void 0!==t?t:"defaultThumb.svg"),layout:"fill",alt:"thumb nail"})};function v(){var e,t=(0,l.useRouter)(),r=(0,a.useState)({}),n=r[0],c=r[1];return(0,a.useEffect)((function(){(0,i.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.ZP.get("/api/series");case 3:r=e.sent,c(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.series),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,d.jsxs)(f,{children:[(0,d.jsxs)("div",{className:"postType",children:[(0,d.jsx)("a",{className:"/devlog"===t.pathname?"active":"",onClick:function(e){e.preventDefault(),t.push("/devlog")},children:"\ud3ec\uc2a4\ud2b8"}),(0,d.jsx)("a",{className:"/devlog/series"===t.pathname?"active":"",onClick:function(e){e.preventDefault(),t.push("/devlog/series")},children:"\uc2dc\ub9ac\uc988"})]}),(0,d.jsx)("div",{className:"series",children:null===(e=Object.keys(n))||void 0===e?void 0:e.map((function(e,r){return(0,d.jsxs)("div",{className:"cardSeries",onClick:function(r){r.preventDefault(),t.push({pathname:"/devlog/seriesDetail",query:{seriesList:JSON.stringify(n[e].file),seriesName:e}})},children:[(0,d.jsx)("div",{className:"cardSeriesThumb",children:h(n[e].file)}),(0,d.jsxs)("div",{className:"cardSeriesSubject",children:[e," ",(0,d.jsxs)("span",{className:"cardSeriesCount",children:["(",n[e].count,")"]})]}),(0,d.jsx)("div",{className:"cardSeriesDate",children:(i=n[e].file,i.sort((function(e,t){return new Date(t.createDate)-new Date(e.createDate)})),(0,d.jsxs)("div",{children:["\ub9c8\uc9c0\ub9c9 \uc5c5\ub370\uc774\ud2b8 : ",i[0].createDate]}))})]},r);var i}))})]})}},6071:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/devlog/series",function(){return r(9317)}])}},function(e){e.O(0,[260,774,888,179],(function(){return t=6071,e(e.s=t);var t}));var t=e.O();_N_E=t}]);