(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(78)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),o=a.n(l),s=(a(38),a(13)),c=a(3),i=(a(39),a(40),a(11)),d=a.n(i),u={getSports:function(){return d.a.get("https://api.the-odds-api.com/v3/sports?apiKey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SPORTSBOOK_API_KEY))},getLines:function(e,t){switch(t){case"moneyline":return d.a.get("https://api.the-odds-api.com/v3/odds?&apiKey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SPORTSBOOK_API_KEY,"&sport=").concat(e,"&region=us&mkt=h2h&oddsFormat=american"));case"spread":return d.a.get("https://api.the-odds-api.com/v3/odds?&apiKey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SPORTSBOOK_API_KEY,"&sport=").concat(e,"&region=us&mkt=spreads&oddsFormat=american"));case"totals":return d.a.get("https://api.the-odds-api.com/v3/odds?&apiKey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SPORTSBOOK_API_KEY,"&sport=").concat(e,"&region=us&mkt=totals&oddsFormat=american"));default:return d.a.get("https://api.the-odds-api.com/v3/odds?&apiKey=".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SPORTSBOOK_API_KEY,"&sport=").concat(e,"&region=us&mkt=h2h&oddsFormat=american"))}},submitBetSlip:function(e){return console.log(e),d.a.post("/api/bet",{betInfo:e})},getBets:function(e){return d.a.get("/api/bet",{userId:e})},signup:function(e){return console.log(e),d.a.post("/signup",e)},login:function(e,t){return d.a.post("/login",{username:e,password:t}).then(function(e){return console.log(e),e.data.token&&(localStorage.setItem("user",JSON.stringify(e.data.user)),console.log("logged in wheres user")),e}).catch(function(e){console.log(e)})},isLoggedIn:function(){return null===localStorage.getItem("user")?(console.log("false"),!1):(console.log("true"),!0)},logout:function(){localStorage.removeItem("user")}};var m=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-left header-title"},"SportsBook"),r.a.createElement("div",{className:"header-right header-links"}))};a(58);var p=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h6",{className:"footer-title"},"Copyright SportsBook 2020"))},E=a(2),b=(a(59),function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),s=Object(E.a)(o,2),i=s[0],d=s[1],m=Object(n.useState)(""),p=Object(E.a)(m,2),b=p[0],f=p[1],g=Object(n.useState)(""),h=Object(E.a)(g,2),v=h[0],y=h[1],O=Object(n.useState)(""),N=Object(E.a)(O,2),S=N[0],j=N[1],w=Object(n.useState)(""),L=Object(E.a)(w,2),T=L[0],D=L[1],k=Object(n.useState)(""),C=Object(E.a)(k,2),I=C[0],P=C[1],A=Object(n.useState)(""),x=Object(E.a)(A,2),_=x[0],R=x[1],M=Object(n.useState)(""),B=Object(E.a)(M,2),U=B[0],K=B[1],Y=Object(n.useState)(!1),F=Object(E.a)(Y,2),V=F[0],J=F[1];return Object(n.useEffect)(function(){},[]),V?r.a.createElement(c.a,{to:"/members"}):r.a.createElement("form",{className:"signup-form"},r.a.createElement("div",{className:"signup-title"},"Register"),r.a.createElement("div",{className:"signup-body"},r.a.createElement("div",{className:"signup-names-fields"},r.a.createElement("input",{type:"text",className:"signup-field",id:"first-name",value:a,placeholder:"First Name",onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{type:"text",className:"signup-field",id:"last-name",value:i,placeholder:"Last Name",onChange:function(e){return d(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"signup-field",id:"email",value:b,placeholder:"Email",onChange:function(e){return f(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"signup-field",id:"address",value:v,placeholder:"Address",onChange:function(e){return y(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"signup-field",id:"city",value:S,placeholder:"City",onChange:function(e){return j(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"signup-field",id:"state",value:T,placeholder:"State",onChange:function(e){return D(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"signup-field",id:"zipcode",value:I,placeholder:"Zipcode",onChange:function(e){return P(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"signup-field",id:"password",value:_,placeholder:"Password",onChange:function(e){return R(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"signup-field",id:"confirm-password",value:U,placeholder:"Confirm Password",onChange:function(e){return K(e.target.value)}}),r.a.createElement("br",null)),r.a.createElement("div",{className:"signup-submit"},r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),console.log(a),u.signup({firstName:a,lastName:i,email:b,address:v,city:S,state:T,zipcode:I,password:_}).then(function(e){console.log(e),200===e.status&&(localStorage.setItem("user",JSON.stringify({id:e.data._id,firstName:a,lastName:i,email:b,address:v,city:S,state:T,zipcode:I})),J(!0))}).catch(function(e){console.log(e)})},className:"signup-button"},"SIGN UP")),r.a.createElement("div",{className:"login-portal"},"Already a member? ",r.a.createElement("a",{href:"/login"},"Login.")))}),f=(a(67),function(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),s=Object(E.a)(o,2),i=(s[0],s[1]),d=Object(n.useState)(""),m=Object(E.a)(d,2),p=m[0],b=m[1],f=Object(n.useState)(""),g=Object(E.a)(f,2),h=g[0],v=g[1];return Object(n.useEffect)(function(){},[]),a?(console.log("redirect try"),r.a.createElement(c.a,{to:"/members"})):r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"login-form-title"},"LOGIN"),r.a.createElement("div",{className:"login-row"},r.a.createElement("input",{type:"text",className:"login-field",id:"login-username",placeholder:"Email",value:p,onChange:function(e){b(e.target.value)}})),r.a.createElement("div",{className:"login-row"},r.a.createElement("input",{type:"password",className:"login-field",id:"login-password",placeholder:"Password",value:h,onChange:function(e){v(e.target.value)}})),r.a.createElement("div",{className:"login-row"},r.a.createElement("button",{type:"submit",className:"login-button",onClick:function(e){e.preventDefault(),u.login(p,h).then(function(e){console.log(e),!0===e.data.success?(console.log("logged in loginjs"),l(!0)):i(!0)}).catch(function(){i(!0)})}},"LOGIN")),r.a.createElement("div",null,"Not a member? ",r.a.createElement("a",{href:"/signup"},"Signup.")))}),g=a(31),h=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return r.a.createElement(c.b,Object.assign({},a,{render:function(e){return u.isLoggedIn()?r.a.createElement(t,e):r.a.createElement(c.a,{to:"/login"})}}))},v=a(5),y=a.n(v),O=a(10);a(70);var N=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),s=Object(E.a)(o,2),c=(s[0],s[1]),i=Object(n.useState)(""),d=Object(E.a)(i,2),m=d[0],p=d[1];return Object(n.useEffect)(function(){console.log("hey"),function(){var e=Object(O.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")),console.log(t),p(t.firstName),a=t._id,e.next=6,u.getBets(a).then(function(e){console.log(e.data),l(e.data),c(!1)}).catch(function(e){console.log(e)});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),console.log(a)},[]),r.a.createElement("div",{className:"dashboard-container"},r.a.createElement("div",{className:"dashboard-body"},r.a.createElement("div",{className:"dashboard-title"},"Welcome ",m,"!")))},S=a(32),j=(a(71),a(72),function(e){var t=Object(n.useState)(void 0),a=Object(E.a)(t,2),l=a[0],o=a[1],s=Object(n.useState)(),c=Object(E.a)(s,2),i=c[0],d=c[1];console.log(e),Object(n.useEffect)(function(){},[e]);return r.a.createElement("div",{className:"slip"},r.a.createElement("div",{className:"slip-title"},"BET SLIP"),e.data.isLoading?"":r.a.createElement("div",{className:"slip-body"},r.a.createElement("div",{className:"slip-exit"},"X"),r.a.createElement("div",{className:"slip-away-team"},e.data.data.awayTeam),r.a.createElement("div",{className:"slip-home-team"},"vs. ",e.data.data.homeTeam),"MONEYLINE"===e.data.slipData.type?r.a.createElement("div",{className:"slip-bet-info"},r.a.createElement("b",null,"MONEYLINE:")," ",e.data.slipData.team," (",e.data.slipData.odds,")"):"","SPREAD"===e.data.slipData.type?r.a.createElement("div",{className:"slip-bet-info"},r.a.createElement("b",null,"SPREAD:")," ",e.data.slipData.team," ",e.data.slipData.line," (",e.data.slipData.odds,")"):"","TOTALS-UNDER"===e.data.slipData.type?r.a.createElement("div",{className:"slip-bet-info"},r.a.createElement("b",null,"TOTAL:")," ",e.data.slipData.team," U/",e.data.slipData.line," (",e.data.slipData.odds,")"):"","TOTALS-OVER"===e.data.slipData.type?r.a.createElement("div",{className:"slip-bet-info"},r.a.createElement("b",null,"TOTAL:")," ",e.data.slipData.team," O/",e.data.slipData.line," (",e.data.slipData.odds,")"):"",r.a.createElement("div",{className:"slip-money"},r.a.createElement("div",{className:"slip-risk-money"},r.a.createElement("label",null,"TO RISK"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"slip-to-lose",value:l,placeholder:l,onChange:function(t){return function(e,t){switch(console.log(t),console.log(e),console.log(t.odds.toString()[0]),t.odds.toString()[0]){case"-":var a=Math.abs(e*t.odds*.01)-e;o(e),d((e-a).toFixed(2));break;default:o(e),d((e*t.odds*.01).toFixed(2))}}(t.target.value,e.data.slipData)}})),r.a.createElement("div",{className:"slip-win-money"},r.a.createElement("label",null,"TO WIN"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"slip-to-win"},i))),r.a.createElement("div",{className:"slip-buttons"},r.a.createElement("button",{className:"slip-button"},"CANCEL"),r.a.createElement("button",{onClick:function(t){return function(t){t.preventDefault(),t.persist();var a=JSON.parse(localStorage.getItem("user"));console.log(a);var n=a._id;console.log(n);var r=e.data.data.key,o=e.data.slipData.type,s=e.data.slipData.team,c=e.data.slipData.odds,d=null;console.log(e),function(){var t=Object(O.a)(y.a.mark(function t(){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=o,t.next="MONEYLINE"===t.t0?3:"SPREAD"===t.t0?6:"TOTALS-OVER"===t.t0?10:"TOTALS-UNDER"===t.t0?14:18;break;case 3:return t.next=5,u.submitBetSlip({userId:n,gameKey:r,betType:o,team:s,line:d,odds:c,toLose:l,toWin:i,status:"LIVE",outcome:null,payout:null}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 5:return t.abrupt("break",20);case 6:return d=e.data.slipData.line,t.next=9,u.submitBetSlip({userId:n,gameKey:r,betType:o,team:s,line:d,odds:c,toLose:l,toWin:i,status:"LIVE",outcome:null,payout:null}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 9:return t.abrupt("break",20);case 10:return d=e.data.slipData.line,t.next=13,u.submitBetSlip({userId:n,gameKey:r,betType:o,team:s,line:d,odds:c,toLose:l,toWin:i,status:"LIVE",outcome:null,payout:null}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 13:return t.abrupt("break",20);case 14:return d=e.data.slipData.line,t.next=17,u.submitBetSlip({userId:n,gameKey:r,betType:o,team:s,line:d,odds:c,toLose:l,toWin:i,status:"LIVE",outcome:null,payout:null}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 17:return t.abrupt("break",20);case 18:return console.log("none selected"),t.abrupt("break",20);case 20:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()}(t)},className:"slip-button",id:"submit-slip"},"PLACE BET"))))}),w=function(e){return r.a.createElement("button",{onClick:e.onClick,className:e.className,id:e.id,value:e.value,data:e.data},e.children)},L=(r.a.createContext(),function(){var e=Object(n.useState)({data:null,slipData:null,isLoading:!0}),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useContext)(T),s=["TIME","TEAM","MONEY","SPREAD","TOTAL"],c=function(e,t){switch(e.preventDefault(),e.persist(),console.log(e),console.log(e.target.id),console.log(t),e.target.id){case"away-moneyline":l({data:t,slipData:{team:t.awayTeam,odds:t.awayMoneyLine,type:"MONEYLINE"},isLoading:!1});break;case"away-spread":l({data:t,slipData:{team:t.awayTeam,line:t.awaySpread,odds:t.awaySpreadOdds,type:"SPREAD"},isLoading:!1});break;case"over":l({data:t,slipData:{team:t.awayTeam,line:t.overUnder,odds:t.overOdds,type:"TOTALS-OVER"},isLoading:!1});break;case"home-moneyline":l({data:t,slipData:{team:t.homeTeam,odds:t.homeMoneyLine,type:"MONEYLINE"},isLoading:!1});break;case"home-spread":console.log("homespread"),l({data:t,slipData:{team:t.homeTeam,line:t.homeSpread,odds:t.homeSpreadOdds,type:"SPREAD"},isLoading:!1});break;case"under":l({data:t,slipData:{team:t.homeTeam,line:t.overUnder,odds:t.underOdds,type:"TOTALS-UNDER"},isLoading:!1});break;default:console.log("None selected.")}console.log(a)};return Object(n.useEffect)(function(){console.log(a)},[c]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"render-sport-title"},"NFL"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table-headers"},r.a.createElement("th",{className:"th",id:"header-time"},s[0]),r.a.createElement("th",{className:"th",id:"header-team"},s[1]),r.a.createElement("th",{className:"th",id:"header-money"},s[2]),r.a.createElement("th",{className:"th",id:"header-spread"},s[3]),r.a.createElement("th",{className:"th",id:"header-total"},s[4])))),r.a.createElement("div",{className:"scroll-container"},o.map(function(e){return r.a.createElement("table",{key:e.key,className:"render-main-body"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:e.key},r.a.createElement("td",{className:"render-away-row"},r.a.createElement("table",{className:"render-sub-body"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"render-team"},e.awayTeam),r.a.createElement("td",{className:"render-button"},r.a.createElement(w,{onClick:function(t){return c(t,e)},value:{slipInfo:{team:e.awayTeam,odds:e.awayMoneyLine}},data:e,className:"render-moneyline",id:"away-moneyline"},"-"===e.awayMoneyLine.toString().charAt(0)?e.awayMoneyLine:"+".concat(e.awayMoneyLine))),r.a.createElement("td",{className:"render-button"},r.a.createElement(w,{onClick:function(t){return c(t,e)},value:[e.awayTeam,e.awaySpread],data:{data:e},className:"render-spread",id:"away-spread"},"-"===e.awaySpread.toString().charAt(0)?"".concat(e.awaySpread," (").concat(e.awaySpreadOdds,")"):"+".concat(e.awaySpread," (").concat(e.awaySpreadOdds,")"))),r.a.createElement("td",{className:"render-button"},r.a.createElement(w,{onClick:function(t){return c(t,e)},value:[e.awayTeam,e.awaySpread],data:e,className:"render-over",id:"over"},"O/",e.overUnder," (",e.overOdds,")"))))))),r.a.createElement("tr",null,r.a.createElement("td",{className:"render-gametime-row"},r.a.createElement("table",{className:"render-gametime"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.gameDate,r.a.createElement("br",null),e.gameTimeEst)))))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("table",{className:"render-sub-body"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"render-team"},e.homeTeam),r.a.createElement("td",{className:"render-button"},r.a.createElement(w,{onClick:function(t){return c(t,e)},value:[{away:e.homeTeam,line:e.homeMoneyLine}],data:e,className:"render-moneyline",id:"home-moneyline"},"-"===e.homeMoneyLine.toString().charAt(0)?e.homeMoneyLine:"+".concat(e.homeMoneyLine))),r.a.createElement("td",{className:"render-button"},r.a.createElement(w,{onClick:function(t){return c(t,e)},value:[e.homeTeam,e.homeSpread],data:{data:e},className:"render-spread",id:"home-spread"},"-"===e.homeSpread.toString().charAt(0)?"".concat(e.homeSpread," (").concat(e.homeSpreadOdds,")"):"+".concat(e.homeSpread," (").concat(e.homeSpreadOdds,")"))),r.a.createElement("td",{className:"render-button"},r.a.createElement(w,{onClick:function(t){return c(t,e)},value:[e.homeTeam,e.homeSpread],data:e,className:"render-over",id:"under"},"U/",e.overUnder," (",e.underOdds,")")))))))))}))),r.a.createElement("div",{className:"bet-slip"},r.a.createElement(j,{data:a})))}),T=r.a.createContext(),D=a(73),k=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),s=Object(E.a)(o,2),c=s[0],i=s[1],d=Object(n.useContext)(C);Object(n.useEffect)(function(){l(m(d)),i(!1)},[]);var u=function(e){var t=new Date(1e3*e),a=D(t).tz("America/Toronto").format("MM/D YYYY h:mm a z").split("2020 ");return[a[0],a[1]]},m=function(e){for(var t=[],a=0;a<e.moneyline.length;a++){var n=u(e.moneyline[a].commence_time),r=e.moneyline[a],l=e.spread[a],o=e.total[a];r.sites[0]&&l.sites[0]&&o.sites[0]&&t.push({key:"".concat(e.moneyline[a].home_team,"-").concat(e.moneyline[a].commence_time),league:e.moneyline[a].sport_nice,awayTeam:e.moneyline[a].teams[0],homeTeam:e.moneyline[a].teams[1],awayMoneyLine:e.moneyline[a].sites[0].odds.h2h[0],homeMoneyLine:e.moneyline[a].sites[0].odds.h2h[1],awaySpread:e.spread[a].sites[0].odds.spreads.points[0],homeSpread:e.spread[a].sites[0].odds.spreads.points[1],awaySpreadOdds:e.spread[a].sites[0].odds.spreads.odds[0],homeSpreadOdds:e.spread[a].sites[0].odds.spreads.odds[1],overUnder:e.total[a].sites[0].odds.totals.points[0],overOdds:e.total[a].sites[0].odds.totals.odds[0],underOdds:e.total[a].sites[0].odds.totals.odds[1],lastUpdated:e.moneyline[a].sites[0].last_update,siteRetrieved:e.moneyline[a].sites[0].site_key,gameDate:n[0],gameTimeEst:n[1]})}return t};return r.a.createElement("div",null,c?"":r.a.createElement(T.Provider,{value:a},r.a.createElement(L,null)))},C=r.a.createContext();var I=function(){var e=Object(n.useState)({moneyline:null,spread:null,total:null}),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),s=Object(E.a)(o,2),c=s[0],i=s[1],d=Object(n.useContext)(P);return Object(n.useEffect)(function(){var e=function(){var e=Object(O.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getLines(d[1],"moneyline");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(O.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getLines(d[1],"spread");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(O.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getLines(d[1],"totals");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Promise.all([e(),t(),n()]).then(function(e){l(Object(S.a)({},a,{moneyline:e[0],spread:e[1],total:e[2]})),i(!1)}).catch(function(e){console.log(e),i(!1)})},[]),r.a.createElement("div",null,c?"":r.a.createElement(C.Provider,{value:a},r.a.createElement(k,null)))},P=r.a.createContext();var A=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!0),s=Object(E.a)(o,2),c=s[0],i=s[1];return Object(n.useEffect)(function(){!function(){var e=Object(O.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getSports().then(function(e){l(e.data.data),i(!1)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[l]),r.a.createElement("div",null,c?"":r.a.createElement(P.Provider,{value:a.map(function(e){return e.key})},r.a.createElement(I,null)))};a(77);var x=function(){return r.a.createElement("div",{className:"members-page"},r.a.createElement(N,null),r.a.createElement(A,null))};var _=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/login",exact:!0,component:f}),r.a.createElement(c.b,{path:"/signup",exact:!0,component:b}),r.a.createElement(h,{path:"/members",exact:!0,component:x}),r.a.createElement(c.b,{path:"*",component:f})),r.a.createElement(p,null)))},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),R()}},[[33,1,2]]]);
//# sourceMappingURL=main.da59a7f6.chunk.js.map