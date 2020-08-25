(function(t){function n(n){for(var e,i,r=n[0],c=n[1],u=n[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,n=0;n<o.length;n++){for(var a=o[n],e=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(e=!1)}e&&(o.splice(n--,1),t=i(i.s=a[0]))}return t}var e={},s={app:0},o=[];function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,n,a){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)i.d(a,e,function(n){return t[n]}.bind(null,e));return a},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/stock-trader-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"034f":function(t,n,a){"use strict";var e=a("85ec"),s=a.n(e);s.a},1:function(t,n){},"217f":function(t,n,a){},"2cdc":function(t,n,a){"use strict";var e=a("9d61"),s=a.n(e);s.a},3639:function(t,n,a){"use strict";var e=a("fdea"),s=a.n(e);s.a},"56d7":function(t,n,a){"use strict";a.r(n);var e={};a.r(e),a.d(e,"loadData",(function(){return ut}));a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"container"},[a("Header"),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-md-12"},[a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)])],1)},i=[],r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Stock Trader")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/portfolio",tag:"li",activeClass:"active"}},[t._v("Portfolio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/stocks",tag:"li",activeClass:"active"}},[t._v("Stocks")])],1)]),a("ul",{staticClass:"nav-bar nav ml-auto"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",on:{click:t.endDay}},[t._v("End Day")])]),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Save & Load")]),a("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("li",{staticClass:"nav-item nav-link"},[a("a",{staticClass:"dropdown-item",on:{click:t.saveData}},[t._v("Save Data")])]),a("li",{staticClass:"nav-item nav-link"},[a("a",{staticClass:"dropdown-item",on:{click:t.loadData}},[t._v("Load Data")])])])])]),a("strong",{staticClass:"navbar-text navbar-right"},[t._v("Funds: "+t._s(t._f("currency")(t.funds)))])])],1)},c=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u=a("5530"),l=a("2f62"),d={computed:{funds:function(){return this.$store.getters.funds}},methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])({randomizeStocks:"randomizeStocks",fetchData:"loadData"})),{},{endDay:function(){this.randomizeStocks()},saveData:function(){var t={funds:this.$store.getters.funds,stockPortfolio:this.$store.getters.stockPortfolio,stocks:this.$store.getters.stocks};this.$http.put("data.json",t)},loadData:function(){this.fetchData()}})},f=d,p=(a("8baf"),a("2877")),v=Object(p["a"])(f,r,c,!1,null,null,null),m=v.exports,k={components:{Header:m},created:function(){this.$store.dispatch("initStocks")}},b=k,h=(a("034f"),Object(p["a"])(b,o,i,!1,null,null,null)),y=h.exports,_=a("8c4f"),g=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("h1",[t._v("Trade or View Your Portfolio")]),a("h6",[t._v("You may Save & Load your Data")]),a("h6",[t._v("Click on 'End Day' to begin a New Day!")]),a("hr"),a("p",[t._v("Your Funds: "+t._s(t._f("currency")(t.funds)))])])},C=[],S={computed:{funds:function(){return this.$store.getters.funds}}},O=S,q=Object(p["a"])(O,g,C,!1,null,null,null),w=q.exports,j=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"row row-cols-1 row-cols-md-2"},t._l(t.stocks,(function(t,n){return a("app-stock",{key:n,attrs:{stock:t}})})),1)])},P=[],T=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"col mb-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" "+t._s(t.stock.name)+" "),a("small",[t._v("(Price: "+t._s(t.stock.price)+" | Quantity: "+t._s(t.stock.quantity)+")")])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientQuantity},attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}})]),a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-success",attrs:{disabled:t.insufficientQuantity||t.quantity<=0||Number.isInteger(t.quantity)},on:{click:t.sellStock}},[t._v(t._s(t.insufficientQuantity?"Not enough":"Sell"))])])])])])},x=[],D={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity||this.quantity<0}},methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])({placeSellOrder:"sellStock"})),{},{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.placeSellOrder(t),this.quantity=0}})},$=D,E=(a("3639"),Object(p["a"])($,T,x,!1,null,"2682f56c",null)),I=E.exports,L={computed:Object(u["a"])({},Object(l["c"])({stocks:"stockPortfolio"})),components:{appStock:I}},F=L,K=Object(p["a"])(F,j,P,!1,null,null,null),M=K.exports,N=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"row row-cols-1 row-cols-md-2"},t._l(t.stocks,(function(t,n){return a("Stock",{key:n,attrs:{stock:t}})})),1)])},Q=[],z=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"col mb-4"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" "+t._s(t.stock.name)+" "),a("small",[t._v("(Price: "+t._s(t.stock.price)+")")])]),a("div",{staticClass:"card-body"},[a("div",[a("div",{staticClass:"float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientFunds},attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}})]),a("div",{staticClass:"float-right"},[a("button",{staticClass:"btn btn-success",attrs:{disabled:t.quantity<=0||Number.isInteger(t.quantity)||t.insufficientFunds},on:{click:t.buyStock}},[t._v(t._s(t.insufficientFunds?"Insufficient funds":"Buy"))])])])])])])},Y=[],B=(a("a9e3"),{props:["stock"],data:function(){return{quantity:Number}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}}}),R=B,H=(a("e58e"),Object(p["a"])(R,z,Y,!1,null,"1594741e",null)),G=H.exports,J={data:function(){return{stockPurchased:Object}},components:{Stock:G},computed:{stocks:function(){return this.$store.getters.stocks}}},U=J,A=(a("2cdc"),Object(p["a"])(U,N,Q,!1,null,"209f548f",null)),V=A.exports,W=[{path:"",component:w},{path:"/portfolio",component:M},{path:"/stocks",component:V},{path:"*",redirect:"/"},{path:"/redirect-me",redirect:{name:"Home"}}],X=(a("4160"),a("159b"),[{id:1,name:"BMW",price:100},{id:2,name:"Google",price:200},{id:3,name:"Facebook",price:300},{id:4,name:"Amazon",price:400},{id:5,name:"Optimai",price:500},{id:6,name:"MOG",price:600},{id:7,name:"Multicare",price:700}]),Z={stocks:[]},tt={SET_STOCKS:function(t,n){t.stocks=n},RND_STOCKS:function(t){t.stocks.forEach((function(t){t.price=Math.round(t.price*(1+Math.random()-.5))}))}},nt={buyStock:function(t,n){var a=t.commit;a("BUY_STOCK",n)},initStocks:function(t){var n=t.commit;n("SET_STOCKS",X)},randomizeStocks:function(t){var n=t.commit;n("RND_STOCKS")}},at={stocks:function(t){return t.stocks}},et={state:Z,getters:at,mutations:tt,actions:nt},st=(a("7db0"),a("c975"),a("d81d"),a("a434"),a("b0c0"),{funds:1e4,stocks:[]}),ot={BUY_STOCK:function(t,n){var a=n.stockId,e=n.quantity,s=n.stockPrice,o=t.stocks.find((function(t){return t.id==a}));o?o.quantity=parseInt(o.quantity)+parseInt(e):t.stocks.push({id:a,quantity:e}),t.funds-=s*e},SELL_STOCK:function(t,n){var a=n.stockId,e=n.quantity,s=n.stockPrice,o=t.stocks.find((function(t){return t.id==a}));o.quantity>e?o.quantity-=e:t.stocks.splice(t.stocks.indexOf(o),1),t.funds+=s*e},SET_PORTFOLIO:function(t,n){t.funds=n.funds,t.stocks=n.stockPortfolio?n.stockPortfolio:[]}},it={sellStock:function(t,n){var a=t.commit;a("SELL_STOCK",n)}},rt={stockPortfolio:function(t,n){return t.stocks.map((function(t){var a=n.stocks.find((function(n){return n.id==t.id}));return{id:t.id,quantity:t.quantity,name:a.name,price:a.price}}))},funds:function(t){return t.funds}},ct={state:st,mutations:ot,actions:it,getters:rt},ut=function(t){var n=t.commit;s["a"].http.get("data.json").then((function(t){return t.json()})).then((function(t){if(t){var a=t.stocks,e=t.funds,s=t.stockPortfolio,o={stockPortfolio:s,funds:e};n("SET_STOCKS",a),n("SET_PORTFOLIO",o)}}))};s["a"].use(l["a"]);var lt=new l["a"].Store({actions:e,modules:{stocks:et,portfolio:ct}}),dt=a("28dd");s["a"].config.productionTip=!1,s["a"].use(_["a"]),s["a"].use(dt["a"]),s["a"].http.options.root="https://vuejs-stock-trader-97a83.firebaseio.com/",s["a"].filter("currency",(function(t){return"$"+t.toLocaleString()}));var ft=new _["a"]({routes:W,mode:"history"});new s["a"]({el:"#app",router:ft,store:lt,render:function(t){return t(y)}})},6860:function(t,n,a){},"85ec":function(t,n,a){},"8baf":function(t,n,a){"use strict";var e=a("6860"),s=a.n(e);s.a},"9d61":function(t,n,a){},e58e:function(t,n,a){"use strict";var e=a("217f"),s=a.n(e);s.a},fdea:function(t,n,a){}});
//# sourceMappingURL=app.d7671b5a.js.map