(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2a5342dd":"563ad316","chunk-5311fcbe":"b1f5971b","chunk-8d5d90e4":"e417c0ba"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-2a5342dd":1,"chunk-5311fcbe":1,"chunk-8d5d90e4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2a5342dd":"541b48ac","chunk-5311fcbe":"99f841b2","chunk-8d5d90e4":"0c340979"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"2ddf":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("59ca"),o=n.n(r),a=(n("e71f"),o.a.initializeApp({apiKey:"AIzaSyCvyPcQHvikqeM0rl188nz0FZfC5qTaf3k",authDomain:"anders-web-app.firebaseapp.com",databaseURL:"https://anders-web-app.firebaseio.com",projectId:"anders-web-app",storageBucket:"anders-web-app.appspot.com",messagingSenderId:"997223589905",appId:"1:997223589905:web:0b501a72f99b1a66e569b0"}).firestore()),i=a.collection("posts")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("JOKEWORLD")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Jokes")]),e._v(" | "),n("router-link",{attrs:{to:"/opret"}},[e._v("Opret joke")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("joke-list")],1)},f=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticClass:"search-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Søg efter jokes.."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),n("div",{staticClass:"grid-container"},e._l(e.filteredPosts,(function(t){return n("article",{key:t.id},[n("router-link",{attrs:{to:{name:"detail",params:{post:t}}}},[n("img",{attrs:{src:t.image,alt:""}})]),n("div",{attrs:{id:"flexbox"}},[n("p",{on:{click:function(n){return e.deleteJoke(t.id)}}},[e._v("Slet joke")]),n("router-link",{attrs:{to:{name:"update",params:{post:t}}}},[n("p",[e._v("Rediger joke")])]),n("div",{attrs:{id:"setflex"},on:{click:e.upCounter}},[n("p",[e._v("❤ "+e._s(e.count))])])],1),n("router-link",{attrs:{to:{name:"detail",params:{post:t}}}},[n("h3",[e._v(e._s(t.name))]),n("p",{staticClass:"category"},[e._v(e._s(t.category))]),n("p",{staticClass:"joke"},[e._v(e._s(t.description))])])],1)})),0)])},m=[],v=(n("4de4"),n("b0c0"),n("ac1f"),n("466d"),n("841c"),n("2ddf")),g={data:function(){return{posts:[],id:"",name:"",description:"",category:"",uploadName:"",image:"",search:"",count:0}},firestore:{posts:v["a"]},methods:{deleteJoke:function(e){confirm("Ønsker du virkelig at slette denne joke?")&&v["a"].doc(e).delete()},triggerChooseImg:function(){this.$refs.fileInput.click()},previewImage:function(){var e=this,t=this.$refs.fileInput.files[0],n=new FileReader;n.onload=function(t){e.post.image=t.target.result},n.readAsDataURL(t)},upCounter:function(){this.count+=1}},computed:{filteredPosts:function(){var e=this;return this.posts.filter((function(t){return t.name.toLowerCase().match(e.search.toLowerCase())}))}}},b=g,k=(n("d86f"),Object(i["a"])(b,h,m,!1,null,null,null)),y=k.exports,w={components:{JokeList:y}},_=w,j=Object(i["a"])(_,p,f,!1,null,null,null),C=j.exports;r["a"].use(d["a"]);var O=[{path:"/",name:"Home",component:C},{path:"/opret",name:"opret",component:function(){return n.e("chunk-5311fcbe").then(n.bind(null,"ba5f"))}},{path:"/update",name:"update",component:function(){return n.e("chunk-8d5d90e4").then(n.bind(null,"2e8c"))},props:!0},{path:"/detail",name:"detail",component:function(){return n.e("chunk-2a5342dd").then(n.bind(null,"c84b"))},props:!0}],x=new d["a"]({mode:"history",base:"/",routes:O}),S=x,E=n("2f62");r["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("0ff2");r["a"].use(A["a"]),r["a"].config.productionTip=!1,new r["a"]({router:S,store:P,render:function(e){return e(u)}}).$mount("#app")},"6c1e":function(e,t,n){},"85ec":function(e,t,n){},d86f:function(e,t,n){"use strict";var r=n("6c1e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7d699ce1.js.map