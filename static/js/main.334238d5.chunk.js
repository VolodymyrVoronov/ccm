(this.webpackJsonpccm=this.webpackJsonpccm||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a.n(n),r=a(10),s=a.n(r),o=a(3),l=a(6),_=a(26),u=a(9),b=a.n(u),m=a(16),d=a(2),j="GET_GLOBAL_MARKET_INFORMATION",p="IS_GLOBAL_MARKET_INFORMATION_LOADING",f="GET_COINS_DATA",O="IS_COINS_DATA_LOADING",h="ON_PREV_BUTTON_CLICK",v="ON_NEXT_BUTTON_CLICK",x="GET_FILTERED_COINS_DATA",g="SET_FILTERED_COINS_DATA_TO_EMPTY",N="IS_ERROR",k="SET_ACTIVE_INDEX",y=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),c=1;c<t;c++)a[c-1]=arguments[c];return function(){for(var t=arguments.length,c=new Array(t),n=0;n<t;n++)c[n]=arguments[n];var i={type:e};return a.forEach((function(e,t){i[a[t]]=c[t]})),i}},C=y(j,"globalMarketInformation"),I=y(p,"isGlobalMarketInfromationLoading"),D=y(f,"coinsData"),L=y(O,"isCoinsDataLoading"),E=y(h),T=y(v),M=y(x,"filter","onCoinsFilterClicked"),w=y(g),S=y(N,"isError"),A=y(k,"activeIndex"),F=200,P=[{title:"Coin",filter_type:"by_name"},{title:"Price",filter_type:"by_price"},{title:"Market Cap",filter_type:"by_market_cap"},{title:"24h Volume",filter_type:"by_24h_volume"},{title:"Supply",filter_type:"by_supply"},{title:"1h",filter_type:"by_1h"},{title:"24h",filter_type:"by_24h"},{title:"7d",filter_type:"by_7d"}],G="by_name",R="by_price",B="by_market_cap",$="by_24h_volume",V="by_supply",K="by_1h",U="by_24h",X="by_7d",z=0,J=1,Y=2,q=3,H=4,Q=5,W=6,Z=7,ee=a(5),te=function(e,t){var a=t.trim();return Object(ee.a)(e).sort((function(e,t){return e[a]-t[a]}))},ae=function(e,t){var a=t.trim();return Object(ee.a)(e).sort((function(e,t){return t[a]-e[a]}))},ce=function(e,t){var a=t.trim();return Object(ee.a)(e).sort((function(e,t){var c=e[a].toLowerCase(),n=t[a].toLowerCase();return c<n?-1:c>n?1:0}))},ne=function(e,t){var a=t.trim();return Object(ee.a)(e).sort((function(e,t){var c=e[a].toLowerCase(),n=t[a].toLowerCase();return c>n?-1:c<n?1:0}))},ie=a(27).create({baseURL:"https://api.coinlore.net/api/"}),re=function(){return ie.get("global/")},se=function(e){return ie.get("tickers/?start=".concat(e,"&limit=100"))},oe={globalMarketInformation:[],isGlobalMarketInfromationLoading:!1,coinsData:[],isCoinsDataLoading:!1,startNumber:0,filteredCoinsData:[],isError:!1,activeIndex:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(d.a)(Object(d.a)({},e),{},{globalMarketInformation:t.globalMarketInformation});case p:return Object(d.a)(Object(d.a)({},e),{},{isGlobalMarketInfromationLoading:t.isGlobalMarketInfromationLoading});case f:return Object(d.a)(Object(d.a)({},e),{},{coinsData:t.coinsData});case O:return Object(d.a)(Object(d.a)({},e),{},{isCoinsDataLoading:t.isCoinsDataLoading});case h:return Object(d.a)(Object(d.a)({},e),{},{startNumber:e.startNumber-100});case v:return Object(d.a)(Object(d.a)({},e),{},{startNumber:e.startNumber+100});case x:var a=function(e,t,a){if(e===G){var c="name";return t?ne(a,c):ce(a,c)}if(e===R){var n="price_usd";return t?ae(a,n):te(a,n)}if(e===B){var i="market_cap_usd";return t?ae(a,i):te(a,i)}if(e===$){var r="volume24";return t?ae(a,r):te(a,r)}if(e===V){var s="tsupply";return t?ae(a,s):te(a,s)}if(e===K){var o="percent_change_1h";return t?ae(a,o):te(a,o)}if(e===U){var l="percent_change_24h";return t?ae(a,l):te(a,l)}if(e===X){var _="percent_change_7d";return t?ae(a,_):te(a,_)}};return Object(d.a)(Object(d.a)({},e),{},{filteredCoinsData:a(t.filter,t.onCoinsFilterClicked,e.coinsData.data)});case g:return Object(d.a)(Object(d.a)({},e),{},{filteredCoinsData:[]});case N:return Object(d.a)(Object(d.a)({},e),{},{isError:t.isError});case k:return Object(d.a)(Object(d.a)({},e),{},{activeIndex:t.activeIndex});default:return e}},_e=function(){return function(){var e=Object(m.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(I(!0)),e.next=4,re();case 4:(a=e.sent).status===F&&(t(C(a.data[0])),t(I(!1))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t(S(!0)),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(m.a)(b.a.mark((function t(a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(L(!0)),t.next=4,se(e);case 4:(c=t.sent).status===F&&(a(D(c.data)),a(L(!1))),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a(S(!0)),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},be=Object(l.c)({app:le}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,de=Object(l.e)(be,me(Object(l.a)(_.a))),je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(isNaN(e))return 0;var t=+e;return t.toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=+e;return t.toFixed(2)},Oe=a.p+"static/media/cryptocurrencies-icon-01.5c3367af.svg",he=a.p+"static/media/markets-icon-02.9c1fd514.svg",ve=a.p+"static/media/market-capitalization-icon-03.5a38e4ba.svg",xe=a.p+"static/media/24h-volume-icon-04.23fec9f8.svg",ge=a.p+"static/media/btc-dominance-icon-05.236bdce1.svg",Ne=(a(59),i.a.memo((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})),a=t.globalMarketInformation,n=t.isGlobalMarketInfromationLoading;i.a.useEffect((function(){e(_e())}),[]),i.a.useEffect((function(){var t=setInterval((function(){e(_e())}),3e5);return function(){return clearInterval(t)}}),[]);var r=a.coins_count,s=a.active_markets,l=a.total_mcap,_=a.total_volume,u=a.btc_d;return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("ul",{className:"header__items",children:[Object(c.jsxs)("li",{className:"header__item item",children:[Object(c.jsx)("img",{className:"item__icon",src:Oe,alt:"Cryptocurrencies"}),Object(c.jsx)("p",{className:"item__title",children:"Cryptocurrencies: "}),Object(c.jsx)("p",{className:"item__figure ".concat(n?"item__figure--updating":" "),children:r})]}),Object(c.jsxs)("li",{className:"header__item item",children:[Object(c.jsx)("img",{className:"item__icon",src:he,alt:"Markets"}),Object(c.jsx)("p",{className:"item__title",children:"Markets: "}),Object(c.jsx)("p",{className:"item__figure ".concat(n?"item__figure--updating":" "),children:s})]}),Object(c.jsxs)("li",{className:"header__item item",children:[Object(c.jsx)("img",{className:"item__icon",src:ve,alt:"Market Capitalization"}),Object(c.jsx)("p",{className:"item__title",children:"Market Capitalization: "}),Object(c.jsxs)("p",{className:"item__figure ".concat(n?"item__figure--updating":" "),children:[pe(l)," $"]})]}),Object(c.jsxs)("li",{className:"header__item item",children:[Object(c.jsx)("img",{className:"item__icon",src:xe,alt:"24h Volume"}),Object(c.jsx)("p",{className:"item__title",children:"24h Volume: "}),Object(c.jsxs)("p",{className:"item__figure ".concat(n?"item__figure--updating":" "),children:[pe(_)," $"]})]}),Object(c.jsxs)("li",{className:"header__item item",children:[Object(c.jsx)("img",{className:"item__icon",src:ge,alt:"BTC Domminance"}),Object(c.jsx)("p",{className:"item__title",children:"BTC Dominance: "}),Object(c.jsxs)("p",{className:"item__figure ".concat(n?"item__figure--updating":" "),children:[fe(u)," %"]})]})]})})})));Ne.defaultProps={globalMarketInformation:[{coins_count:0,active_markets:0,total_mcap:0,total_volume:0,btc_d:""}],isGlobalMarketInfromationLoading:!1};var ke=Ne,ye=a(28),Ce=a(7),Ie=(a(60),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.app})).activeIndex,a=i.a.useState(!1),n=Object(ye.a)(a,2),r=n[0],s=n[1];return Object(c.jsx)("div",{className:"coins-filter",children:Object(c.jsxs)("ul",{className:"coins-filter__items",children:[Object(c.jsx)("li",{className:"coins-filter__item",children:"Symbol"}),P.map((function(a,n){return Object(c.jsxs)("li",{onClick:function(){return t=n,c=a.filter_type,s(!r),e(A(t)),void e(M(c,r));var t,c},className:"coins-filter__item ".concat(t===n?"coins-filter__item--active":""),children:[a.title,"\xa0",r&&t===n?Object(c.jsx)(Ce.b,{}):Object(c.jsx)(Ce.c,{})]},n)}))]})})});Ie.defaultProps={activeIndex:0};var De=Ie,Le=function(e){return null===e?" coins-table__item--hidden":e.includes("-")?" coins-table__item--red":!e.includes("-")&&e>.009?" coins-table__item--green":void 0},Ee=(a(61),function(){var e=Object(o.c)((function(e){return e.app})),t=e.coinsData,a=e.filteredCoinsData,n=e.activeIndex;return Object(c.jsx)("div",{className:"coins-table",children:function(e,t){return 0===t.length?e:t}(t.data,a).map((function(e){var t,a=e.id,i=e.name,r=e.symbol,s=e.price_usd,o=e.market_cap_usd,l=e.volume24,_=e.tsupply,u=e.percent_change_1h,b=e.percent_change_24h,m=e.percent_change_7d;return Object(c.jsxs)("ul",{className:"coins-table__items",children:[Object(c.jsx)("li",{className:"coins-table__item",children:r}),Object(c.jsx)("li",{className:"coins-table__item ".concat(n===z?"coins-table__item--active-row":""),children:i}),Object(c.jsx)("li",{className:"coins-table__item ".concat(n===J?"coins-table__item--active-row":""),children:(t=s,t<1e-5?"\u2248 0.000001 $":"0?"===t?"unknown":"".concat(t," $"))}),Object(c.jsxs)("li",{className:"coins-table__item ".concat(n===Y?"coins-table__item--active-row":""),children:[pe(o)," $"]}),Object(c.jsxs)("li",{className:"coins-table__item ".concat(n===q?"coins-table__item--active-row":""),children:[pe(l)," $"]}),Object(c.jsxs)("li",{className:"coins-table__item ".concat(n===H?"coins-table__item--active-row":""," "),children:[pe(_)," $"]}),Object(c.jsxs)("li",{className:"coins-table__item ".concat(Le(u)," ").concat(n===Q?"coins-table__item--active-row":""),children:[fe(u)," %"]}),Object(c.jsxs)("li",{className:"coins-table__item ".concat(Le(b)," ").concat(n===W?"coins-table__item--active-row":""),children:[fe(b)," %"]}),Object(c.jsxs)("li",{className:"coins-table__item ".concat(Le(m)," ").concat(n===Z?"coins-table__item--active-row":""),children:[fe(m)," %"]})]},a)}))})});Ee.defaultProps={coinsData:[{id:"",name:"",symbol:"",price_usd:"",market_cap_usd:"",volume24:0,tsupply:0,percent_change_1h:"",percent_change_24h:"",percent_change_7d:""}],filteredCoinsData:[{id:"",name:"",symbol:"",price_usd:"",market_cap_usd:"",volume24:0,tsupply:0,percent_change_1h:"",percent_change_24h:"",percent_change_7d:""}],activeIndex:0};var Te=Ee,Me=(a(62),i.a.memo((function(e){var t=Object(o.b)(),a=Object(o.c)((function(e){return e.app})),n=a.startNumber,i=a.isCoinsDataLoading,r=a.globalMarketInformation;return Object(c.jsxs)("div",{className:"prev-next-block",children:[Object(c.jsxs)("p",{className:"prev-next-block__title",children:[e.text_title," ",e.date]}),Object(c.jsxs)("button",{className:"prev-next-block__button prev-next-block__button--prev",onClick:function(){return t(E()),t(ue(n)),t(w()),void t(A(null))},disabled:0===n||i,children:[Object(c.jsx)(Ce.e,{}),"Prev"]}),Object(c.jsxs)("button",{className:"prev-next-block__button prev-next-block__button--next",onClick:function(){return t(T()),t(ue(n)),t(w()),void t(A(null))},disabled:n>r.coins_count-50||i,children:["Next ",Object(c.jsx)(Ce.d,{})]})]})})));Me.defaultProps={startNumber:0,isCoinsDataLoading:!1,globalMarketInformation:[{coins_count:0}]};var we=Me,Se=(a(63),function(){return Object(c.jsx)("div",{className:"preloader",children:Object(c.jsxs)("div",{className:"lds-facebook",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})}),Ae=(a(64),function(){return Object(c.jsxs)("div",{className:"error-page",children:[Object(c.jsx)("h1",{className:"error-page__title",children:"Some error has been occurred."}),Object(c.jsx)("p",{className:"error-page__icon",children:Object(c.jsx)(Ce.a,{})}),Object(c.jsx)("p",{className:"error-page__text",children:"Please, refresh the page and try again."})]})}),Fe=(a(65),function(){var e=Object(o.c)((function(e){return e.app})),t=e.isCoinsDataLoading,a=e.isError;return Object(c.jsx)("div",{className:"app",children:a?Object(c.jsx)(Ae,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ke,{}),Object(c.jsx)(we,{date:(new Date).toLocaleDateString(),text_title:"Cryptocurrency Prices & Coin Market Caps \u2014"}),t?Object(c.jsx)(Se,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(De,{}),Object(c.jsx)(Te,{}),Object(c.jsx)(we,{})]})]})})});Fe.defaultProps={isCoinsDataLoading:!1,isError:!1};var Pe=Fe;a(66),a(67),a(68);de.dispatch(ue(100)),s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o.a,{store:de,children:Object(c.jsx)(Pe,{})})}),document.getElementById("root")),je()}},[[69,1,2]]]);
//# sourceMappingURL=main.334238d5.chunk.js.map