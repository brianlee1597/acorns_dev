(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{214:function(e,t,a){},215:function(e,t,a){},254:function(e,t,a){},273:function(e,t,a){},279:function(e,t,a){},280:function(e,t,a){},281:function(e,t,a){},517:function(e,t,a){},518:function(e,t,a){},519:function(e,t,a){},600:function(e,t,a){},601:function(e,t,a){},605:function(e,t,a){},606:function(e,t,a){},607:function(e,t,a){},608:function(e,t,a){},609:function(e,t,a){},611:function(e,t,a){},612:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(91),c=a.n(r),s=(a(254),a(43)),o=a.n(s),l=a(216),d=a(16),u=a(41),j=a(30),g=a(242),b=a(38),p=a.n(b);function h(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function m(){var e=Object(n.useState)(h()),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){i(h())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var x={navigation:new Map([["aboutus",{english:"About Us",korean:"\uc18c\uac1c"}],["charity",{english:"Charity",korean:"\uae30\ubd80\ud558\uae30"}],["gifts",{english:"Gifts",korean:"\uc120\ubb3c\ud558\uae30"}],["promote",{english:"Promote",korean:"\uce84\ud398\uc778"}],["forum",{english:"Forum",korean:"\ucee4\ubba4\ub2c8\ud2f0"}],["login",{english:"Login",korean:"\ub85c\uadf8\uc778"}],["logout",{english:"Log out",korean:"\ub85c\uadf8\uc544\uc6c3"}]]),artists:new Map([["Aespa",{korean:"\uc5d0\uc2a4\ud30c",japanese:"\u30a8\u30b9\u30d1"}],["BTS",{korean:"BTS",japanese:"\u30d0\u30f3\u30bf\u30f3"}],["Blackpink",{korean:"\ube14\ub799\ud551\ud06c"}],["G-Dragon",{korean:"\uad8c\uc9c0\uc6a9"}],["Jessi",{korean:"\uc81c\uc2dc"}],["SungSiKyung",{korean:"\uc131\uc2dc\uacbd"}]])},O=(a(273),a(2)),f=function(e){var t=m(),a=(t.height,t.width),n=[{route:"/intro",text:x.navigation.get("aboutus").korean},{route:"/charity",text:x.navigation.get("charity").korean},{route:"/gifts",text:x.navigation.get("gifts").korean},{route:"/promote",text:x.navigation.get("promote").korean},{route:"/forum",text:x.navigation.get("forum").korean}].map((function(t){return Object(O.jsx)(u.b,{style:{color:e.loggedIn?"white":"black"},activeClassName:"is-active",to:t.route,children:t.text},t.text)})),i=e.loggedIn?e.user.backgroundcolor:"white";return Object(O.jsxs)("section",{id:"nav-container",style:{background:i},children:[Object(O.jsx)("div",{id:"logo-left",children:Object(O.jsx)(u.b,{to:"/",style:{color:e.loggedIn?"white":"black",borderColor:e.loggedIn?"white":"black"},className:"logo",children:"Acorns"})}),Object(O.jsx)("div",{className:"navlink-container",children:n}),Object(O.jsx)("div",{className:"profile-container",style:{display:e.loggedIn||a<=415?"none":"grid"},children:Object(O.jsx)(u.b,{activeClassName:"is-active",to:"/login",className:"login-button",children:x.navigation.get("login").korean})}),Object(O.jsx)("div",{className:"profile-container",style:{display:e.loggedIn&&a>415?"grid":"none"},children:Object(O.jsx)("button",{className:"logout-button",onClick:e.logout,children:x.navigation.get("logout").korean})})]})},v=a(85);a(279);function y(){var e=[{icon:Object(O.jsx)(v.e,{}),link:"/",title:"Home"},{icon:Object(O.jsx)(v.d,{}),link:"/charity",title:x.navigation.get("charity").korean},{icon:Object(O.jsx)(v.c,{}),link:"/gifts",title:x.navigation.get("gifts").korean},{icon:Object(O.jsx)(v.b,{}),link:"/promote",title:x.navigation.get("promote").korean},{icon:Object(O.jsx)(v.a,{}),link:"/forum",title:x.navigation.get("forum").korean}].map((function(e){return Object(O.jsx)(u.b,{to:e.link,style:{textDecoration:"none"},children:Object(O.jsxs)("div",{className:"link-container",children:[Object(O.jsx)("span",{style:{margin:"0",padding:"0",fontSize:"7vw",color:"black"},children:e.icon}),Object(O.jsx)("h5",{style:{margin:"0",padding:"0",color:"black",fontSize:"12px"},children:e.title})]})},e.title)}));return Object(O.jsx)("nav",{children:e})}a(280);var k=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)(""),s=Object(d.a)(c,2),o=s[0],l=s[1],j=function(e){"email"===e.target.name?r(e.target.value):l(e.target.value)};return Object(O.jsx)("div",{className:"login-container",children:Object(O.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==i)if(""!==o){var t={email:i,password:o};p.a.post("/login",t).then((function(e){"nouser"!==e.data?window.location.href="/":alert("Please check your email and password again")})).catch((function(e){return console.log(e)}))}else alert("Please input a password");else alert("Please input a username")},children:[Object(O.jsx)("label",{children:"\ub85c\uadf8\uc778"}),Object(O.jsx)("input",{onChange:j,type:"email",style:{width:"40vw",height:"50px"},id:"email",name:"email",minLength:5,placeholder:"\uc774\uba54\uc77c"}),Object(O.jsx)("input",{onChange:j,type:"password",style:{width:"40vw",height:"50px"},id:"password",name:"password",minLength:5,placeholder:"\ube44\ubc00\ubc88\ud638"}),Object(O.jsx)("button",{type:"submit",children:"\uace0\uace0~!"}),Object(O.jsxs)("p",{children:["Don't have an account? ",Object(O.jsx)(u.b,{to:"/register",children:"Create one"})]})]})})},w=(a(281),function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(d.a)(r,2),s=c[0],o=c[1],l=Object(n.useState)(""),u=Object(d.a)(l,2),j=u[0],g=u[1],b=Object(n.useState)(""),h=Object(d.a)(b,2),m=h[0],x=h[1],f=Object(n.useState)(""),v=Object(d.a)(f,2),y=v[0],k=v[1],w=function(e){switch(e.target.name){case"password":o(e.target.value);break;case"firstname":x(e.target.value);break;case"lastname":k(e.target.value);break;case"bias":g(e.target.value);break;default:i(e.target.value)}};return Object(O.jsx)("div",{className:"register-container",children:Object(O.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==a)if(""!==s)if(""!==j)if(""!==m)if(""!==y){var t={email:a,password:s,firstname:m,lastname:y,bias:j};p.a.post("/register",t).then((function(e){"userexists"===e.data?alert("User Already Exists"):window.location.href="/login"})).catch((function(e){return console.log(e)}))}else alert("Please input your last name");else alert("Please input your name");else alert("Please choose a bias");else alert("Please input a password");else alert("Please input an email")},autoComplete:"off",children:[Object(O.jsx)("label",{children:"\uacc4\uc815 \ub9cc\ub4e4\uae30"}),Object(O.jsx)("input",{onChange:w,type:"email",id:"email",name:"email",placeholder:"\uc774\uba54\uc77c"}),Object(O.jsx)("input",{onChange:w,type:"password",id:"password",name:"password",minLength:5,placeholder:"\ube44\ubc00\ubc88\ud638"}),Object(O.jsx)("input",{onChange:w,type:"password",id:"password",name:"password",minLength:5,placeholder:"\ube44\ubc00\ubc88\ud638 \uc7ac\uc785\ub825"}),Object(O.jsxs)("div",{class:"name-container",children:[Object(O.jsx)("input",{onChange:w,type:"text",id:"lastname",name:"lastname",placeholder:"\uc131"}),Object(O.jsx)("input",{onChange:w,type:"text",id:"firstname",name:"firstname",placeholder:"\uc774\ub984"})]}),Object(O.jsx)("h2",{children:"Bias:"}),Object(O.jsxs)("div",{className:"bias-container",children:[Object(O.jsx)("input",{type:"radio",onChange:w,name:"bias",id:"radioAespa",value:"Aespa"}),Object(O.jsx)("label",{htmlFor:"radioAespa",children:"Aespa"}),Object(O.jsx)("input",{type:"radio",onChange:w,name:"bias",id:"radioBlackpink",value:"Blackpink"}),Object(O.jsx)("label",{htmlFor:"radioBlackpink",children:"Blackpink"}),Object(O.jsx)("input",{type:"radio",onChange:w,name:"bias",id:"radioBTS",value:"BTS"}),Object(O.jsx)("label",{htmlFor:"radioBTS",children:"BTS"}),Object(O.jsx)("input",{type:"radio",onChange:w,name:"bias",id:"radioGD",value:"G-Dragon"}),Object(O.jsx)("label",{htmlFor:"radioGD",children:"G-Dragon"}),Object(O.jsx)("input",{type:"radio",onChange:w,name:"bias",id:"radioJessi",value:"Jessi"}),Object(O.jsx)("label",{htmlFor:"radioJessi",children:"Jessi"}),Object(O.jsx)("input",{type:"radio",onChange:w,name:"bias",id:"radioSSK",value:"SungSiKyung"}),Object(O.jsx)("label",{htmlFor:"radioSSK",children:"SungSiKyung"})]}),Object(O.jsx)("button",{type:"submit",children:"\uace0\uace0~!"})]})})}),N=a(218),S=a.n(N),B=a(624),C=a(614),A=a(615),U=a(616),D=a(617),T=a(618),I=a(625),F=a(619),E=(a(513),a(514),a(515),a(516),a(517),a.p+"static/media/AespaKarina.2189a0d5.jpg"),P=a.p+"static/media/bts.79e796b4.jpg",M=a.p+"static/media/exo.0f9ca843.jpg",z=a.p+"static/media/lisa.3b0d8c91.jpg";B.a.use([C.a,A.a,U.a,D.a,T.a]);var G=function(){return Object(O.jsxs)("div",{id:"infocarousel-container",children:[Object(O.jsx)("div",{id:"ic-description-container",children:Object(O.jsx)("h1",{children:"\uc774\ubc88\uc8fc\uc758 Hot-Take"})}),Object(O.jsxs)(I.a,{spaceBetween:100,slidesPerView:1,loop:!0,speed:2e3,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},effect:"fade",className:"info-carousel",children:[Object(O.jsx)(F.a,{children:Object(O.jsx)("img",{src:M,alt:"karina"})}),Object(O.jsx)(F.a,{children:Object(O.jsx)("img",{src:z,alt:"karina"})}),Object(O.jsx)(F.a,{children:Object(O.jsx)("img",{src:E,alt:"karina"})}),Object(O.jsx)(F.a,{children:Object(O.jsx)("img",{src:P,alt:"karina"})})]}),Object(O.jsxs)("div",{className:"description",children:[Object(O.jsx)("h1",{children:"Columbia Lions"}),Object(O.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum, quibusdam cumque laudantium ex eligendi distinctio sequi a. Culpa excepturi dolorem nesciunt, aspernatur itaque velit esse eaque quasi laboriosam suscipit."})]})]})},K=(a(518),a(519),a(219)),L=a(220),J=a(221),_=a(243),q=a(620),R=a(627),V=a(239),W=a(103),Y=a(244),H=function(e){Object(J.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(K.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={chartData:[]},e.componentDidMount=function(){e.setChartData()},e.setChartData=function(){p.a.get("/api/chartdata").then((function(t){return e.setState({chartData:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(L.a)(a,[{key:"render",value:function(){var e=this.state.chartData,t=window.innerWidth<=910?30:50;return Object(O.jsx)(q.a,{width:"100%",height:"90%",children:Object(O.jsxs)(R.a,{data:e,margin:{top:15,right:t,left:t},className:"linechart",children:[Object(O.jsx)(V.a,{dataKey:"month"}),Object(O.jsx)(W.a,{}),Object(O.jsx)(Y.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"BTS",stroke:"#8884d8"}),Object(O.jsx)(Y.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"Aespa",stroke:"#ADD8E6"}),Object(O.jsx)(Y.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"Blackpink",stroke:"pink"})]})})}}]),a}(n.PureComponent),Q=function(){return Object(O.jsxs)("div",{id:"top-donations",children:[Object(O.jsx)("div",{className:"chart-title-container",children:Object(O.jsx)("h3",{children:"\uac00\uc7a5 \ub9ce\uc774 \uae30\ubd80\ud55c \ud32c\ub364 (\ub2ec)"})}),Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:"chart-button-container",children:[Object(O.jsx)("button",{className:"see_chart_button",children:"\uc138\ubd80\ud55c \ucc28\ud2b8"}),Object(O.jsx)("button",{className:"see_data_button",children:"\ubaa8\ub4e0 \ub370\uc774\ud130"})]})]})},X=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{id:"dashboard-title",children:"\ucee4\ubba4\ub2c8\ud2f0 \ud5c8\ube0c"}),Object(O.jsxs)("div",{id:"dashboard-container",children:[Object(O.jsx)(Q,{}),Object(O.jsxs)("div",{className:"Gifts",children:[Object(O.jsx)("div",{className:"top-user",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"O"}),Object(O.jsxs)("div",{className:"description",children:[Object(O.jsx)("p",{children:"Ghosts have just as good a right\u2014In every way, to fear the light, as men to fear the dark."}),Object(O.jsx)("div",{})]})]})}),Object(O.jsx)("div",{className:"whatever",children:Object(O.jsx)("h1",{children:"hewwo Wolrd"})})]})]})]})};function Z(e){var t=m(),a=(t.height,t.width);return Object(O.jsx)("div",{style:{width:"100vw",height:"40px",display:a>415?"none":"grid",placeItems:"center",marginTop:"25px"},children:Object(O.jsxs)("div",{style:{margin:"0",padding:"0",width:"85vw",height:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[Object(O.jsx)("h3",{style:{margin:"0",padding:"0"},children:"Acorns"}),Object(O.jsx)(u.b,{to:"/login",style:{margin:"0",padding:"10px 20px",display:e.loggedIn||a>415?"none":"block",textTransform:"none",textDecoration:"none",backgroundColor:"black",color:"white",borderRadius:"5px"},children:"Login"}),Object(O.jsx)("button",{style:{margin:"0",padding:"10px 20px",display:e.loggedIn&&a<415?"block":"none",textTransform:"none",textDecoration:"none",backgroundColor:"black",color:"white",borderRadius:"5px"},onClick:e.logout,children:"Logout"})]})})}a(600);var $=function(e){var t=m(),a=(t.height,t.width<=910?30:50);return Object(O.jsxs)("div",{id:"landing-page",children:[Object(O.jsx)(Z,{loggedIn:e.loggedIn,logout:e.logout}),Object(O.jsx)(S.a,{className:"particle-background",params:{particles:{number:{value:a},size:{value:3},color:{value:"black"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),Object(O.jsx)(G,{}),Object(O.jsx)(X,{})]})},ee=(a(601),a(117)),te=a.n(ee),ae=(a(214),function(e){var t=[e.imageurl,e.title,e.type,e.user,e.artist],a=t[0],n=t[1],i=t[2],r=t[3],c=t[4],s=[e.amountpaid,e.amountneeded,e.dateremaining],o=s[0],l=s[1],d=s[2],j=e.percentagepaid;return Object(O.jsxs)("div",{className:"each-pinned-campaign",children:[Object(O.jsx)("div",{className:"img-container",style:{backgroundImage:"url(".concat(a,")")}}),Object(O.jsxs)("div",{className:"text-container",children:[Object(O.jsxs)("h4",{children:["[",c,"] ",n]}),Object(O.jsxs)("p",{children:[i,"\xa0 | \xa0",Object(O.jsxs)(u.b,{className:"posted-user",to:"/",children:["@",r]})]})]}),Object(O.jsx)(te.a,{width:"90%",height:"7px",rect:!0,fontColor:"gray",percentage:j.toString(),trackPathColor:"#f4f4f4",defColor:{fair:"#F7E967",good:"#70B7BA",excellent:"#A9CF54",poor:"#F1433F"}}),Object(O.jsxs)("div",{className:"description-container",children:[Object(O.jsxs)("p",{children:[o," / ",l," \uc6d0"]}),Object(O.jsxs)("p",{children:[d,"\uc77c \ub0a8\uc74c"]})]})]})});function ne(){var e=m(),t=(e.height,e.width);return Object(O.jsx)("hr",{style:{display:t<415?"none":"block",border:"none",height:"1px",backgroundColor:"rgb(200, 200, 200)",left:"0",right:"0",margin:"auto",width:"97%"}})}var ie=a(240);function re(e){var t=m(),a=(t.height,t.width);return Object(O.jsxs)("h1",{style:{margin:a<=415&&!0===e.pinned||a<=415?"0 0 0 3%":"0 0 10px 0%",padding:"0",fontSize:a<=415?"1.25rem":"1.5rem",fontWeight:"600"},children:[Object(O.jsx)("span",{style:{display:!0===e.pinned?"inline":"none",fontSize:"1.75rem",color:"rgb(255, 0, 0)",borderRadius:"50px"},children:Object(O.jsx)(ie.a,{})}),e.content]})}a(604),a(605);B.a.use([C.a]);var ce=function(e){if("nouser"===e.userBias)return null;var t="Aespa"===e.userBias?"\uac00\uc7a5 \uc18c\uc911\ud55c \uce5c\uad6c, MY":"BTS"===e.userBias?"Army, One and Only":"Blink, For You",a=m(),n=(a.height,a.width);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"pinned-container",children:[Object(O.jsx)(re,{pinned:!0,content:"  "+t}),Object(O.jsx)(ne,{}),0===e.componentsByBias.length?Object(O.jsxs)("div",{className:"nobias-exists",children:["No ",e.pageUrl," posted yet!"]}):Object(O.jsx)(I.a,{className:"bias-exists",slidesPerView:n<415?"auto":n<900?2:3,navigation:!0,speed:750,children:e.componentsByBias.map((function(e){return Object(O.jsx)(F.a,{style:{width:n<415?"75%":"0%"},children:Object(O.jsx)(ae,{imageurl:e.imageurl,title:e.title,type:e.type,user:e.user,amountpaid:e.amountpaidsofar,amountneeded:e.amountneeded,percentagepaid:e.paidtoneededratio,dateremaining:e.dateending,artist:e.artist})},e.title)}))})]})})},se=a(152),oe=function(){return Object(O.jsxs)("div",{className:"each-pinned-campaign",children:[Object(O.jsx)("div",{className:"img-container",style:{background:"#f0f0f0"}}),Object(O.jsxs)("div",{className:"text-container",children:[Object(O.jsx)("div",{style:{margin:"10px 0px",width:"90%",height:"10px",background:"#f0f0f0"}}),Object(O.jsx)("div",{style:{margin:"10px 0px",width:"60%",height:"10px",background:"#f0f0f0"}})]}),Object(O.jsx)(te.a,{width:"90%",height:"7px",rect:!0,fontColor:"gray",percentage:"0",trackPathColor:"#f0f0f0"}),Object(O.jsxs)("div",{className:"description-container",children:[Object(O.jsx)("div",{style:{margin:"10px 0px",width:"90%",height:"10px",background:"#f0f0f0"}}),Object(O.jsx)("div",{style:{margin:"10px 0px",width:"60%",height:"10px",background:"#f0f0f0"}})]})]})},le={artists:new Map([["Aespa","https://pbs.twimg.com/media/EvoVw8UVEAMr6Sw?format=jpg&name=orig"],["BTS","https://pbs.twimg.com/media/EfMRg4tU4AElo6v?format=jpg&name=medium"],["Blackpink","https://64.media.tumblr.com/21cbae5c3fbe391ec81040beb1c1ed91/tumblr_odxasdYQJe1u20wb7o1_1280.jpg"],["G-Dragon","https://dazedimg-dazedgroup.netdna-ssl.com/1050/azure/dazed-prod/1190/5/1195688.jpg"],["Jessi","https://pnation.com/data/file/artists/thumb-3076672337_NjDCQ9WV_67b5d3e3066cbb5d6aa05b3866aa3d380034caab_1920x1125.jpg"],["SungSiKyung","https://post-phinf.pstatic.net/MjAyMTA1MTFfNTEg/MDAxNjIwNjg4NjE4OTYw.FqfsONSVVx9R6hgbcRb-beKvGpZpXM6t88TI4RrSQaAg.oqE_-6sCi2PyrAuySuseFNFUNOJpg0n34hws4-lwhWAg.JPEG/3.jpg?type=w1200"]])};a(606);function de(e){var t=e.title,a=e.category;return Object(O.jsxs)("div",{className:"each-component-container",onClick:function(){return e.getComponents(t)},style:{background:"url(".concat(le[a].get(t),") no-repeat center center"),backgroundPosition:"center",backgroundSize:"cover"},children:[Object(O.jsx)("h3",{children:x[a].get(t).korean}),Object(O.jsx)("div",{className:"background-gradient"})]})}function ue(){return Object(O.jsx)("div",{className:"each-component-container",style:{background:"#f0f0f0"}})}a(215);function je(e){var t=m(),a=(t.height,t.width);return Object(O.jsx)("div",{className:"component-grid",style:{display:"grid",gridTemplateColumns:a<=550?"repeat(1, minmax(0, 1fr))":a<=900?"repeat(2, minmax(0, 1fr))":"repeat(3, minmax(0, 1fr))",margin:"0",padding:"0",width:"100%"},children:e.render})}function ge(e){var t=m(),a=(t.height,t.width);return Object(O.jsx)("div",{className:"component-grid",style:{display:"grid",gridTemplateColumns:a<=550?"repeat(2, minmax(0, 1fr))":a<=900?"repeat(3, minmax(0, 1fr))":"repeat(4, minmax(0, 1fr))"},children:e.render})}a(607);function be(e){var t=Object(n.useState)({artist:!0,deadline:!1,funding:!1,goal:!1,category:!1}),a=Object(d.a)(t,2),i=a[0],r=a[1];return Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsx)("button",{className:i.artist?"category-nav-active":"category-nav-not-active",onClick:function(){e.getAllBlocksOf("artists",e.pageUrl),r({artist:!0,deadline:!1,funding:!1,goal:!1,category:!1})},children:"\uc544\ud2f0\uc2a4\ud2b8\ubcc4"}),Object(O.jsx)("button",{className:i.deadline?"category-nav-active":"category-nav-not-active",onClick:function(){e.getAll("deadline",e.pageUrl),r({deadline:!0,artist:!1,funding:!1,goal:!1,category:!1})},children:"\ub9c8\uac10\uc77c\uc21c"}),Object(O.jsx)("button",{className:i.funding?"category-nav-active":"category-nav-not-active",onClick:function(){e.getAll("funding",e.pageUrl),r({funding:!0,artist:!1,deadline:!1,goal:!1,category:!1})},children:"\ud380\ub529\uc561\uc21c"}),Object(O.jsx)("button",{className:i.goal?"category-nav-active":"category-nav-not-active",onClick:function(){e.getAll("goal",e.pageUrl),r({goal:!0,artist:!1,deadline:!1,funding:!1,category:!1})},children:"\ubaa9\ud45c\uae08\uc561\uc21c"}),Object(O.jsx)("button",{className:i.category?"category-nav-active":"category-nav-not-active",onClick:function(){e.getAllBlocksOf("types",e.pageUrl),r({category:!0,artist:!1,deadline:!1,funding:!1,goal:!1})},style:{background:"grey",border:"1px solid transparent"},disabled:!0,children:"\ubd84\uc57c\ubcc4"})]})}a(608);function pe(e){var t=m(),a=(t.height,t.width),i=Object(n.useState)([]),r=Object(d.a)(i,2),c=r[0],s=r[1],o=Object(n.useState)([]),l=Object(d.a)(o,2),u=l[0],j=l[1],g=Object(n.useState)("artists"),b=Object(d.a)(g,2),h=b[0],x=b[1],f=Object(n.useState)(!0),v=Object(d.a)(f,2),y=(v[0],v[1]),k=function(){y(!0);var e=Object(se.a)(Array(5)).map((function(e){return Object(O.jsx)(oe,{},e)}));j(e);var t=Object(se.a)(Array(6)).map((function(e){return Object(O.jsx)(ue,{},e)}));s(t)},w=function(t){var a=e.pageUrl;x("componentsbyartist"),k(),y(!0),p.a.get("/api/get".concat(a,"by/artist?artist=").concat(t)).then((function(e){return e.data})).then((function(e){return j(e.map((function(e){return Object(O.jsx)(ae,{imageurl:e.imageurl,title:e.title,type:e.type,user:e.user,amountpaid:e.amountpaidsofar,amountneeded:e.amountneeded,percentagepaid:e.paidtoneededratio.toString(),dateremaining:e.dateending,artist:e.artist},e.id)})))})),y(!1)},N=function(t){var a=e.pageUrl;x("giftsbytype"),k(),y(!0),p.a.post("/api/get".concat(a,"by/type"),{type:t}).then((function(e){return e.data})).then((function(e){return j(e.map((function(e){return Object(O.jsx)(ae,{imageurl:e.imageurl,title:e.title,type:e.type,user:e.user,amountpaid:e.amountpaidsofar,amountneeded:e.amountneeded,percentagepaid:e.paidtoneededratio.toString(),dateremaining:e.dateending,artist:e.artist},e.id)})))})),y(!1)},S=function(e,t){x(e),k(),y(!0),p.a.get("/api/getall".concat(e,"in/").concat(t)).then((function(e){return e.data})).then((function(t){return s(t.map((function(t){return Object(O.jsx)(de,{title:t,category:e,getComponents:"artists"===e?w:N},t)})))})),y(!1)};return Object(n.useEffect)((function(){S("artists",e.pageUrl)}),[]),Object(O.jsxs)("div",{className:"all-container",style:{marginTop:"nouser"!==e.userBias&&a<=415||a<=900?"25px":"50px"},children:[Object(O.jsxs)("div",{className:"categories-container",children:[Object(O.jsx)(re,{pinned:!1,content:"\uc804\uccb4\ubcf4\uae30"}),Object(O.jsx)(be,{getAll:function(e,t){x(e),k(),y(!0),p.a.get("/api/getallby?collection=".concat(t,"&sortparam=").concat(e)).then((function(e){return e.data})).then((function(e){return j(e.map((function(e){return Object(O.jsx)(ae,{imageurl:e.imageurl,title:e.title,type:e.type,user:e.user,amountpaid:e.amountpaidsofar,amountneeded:e.amountneeded,percentagepaid:e.paidtoneededratio.toString(),dateremaining:e.dateending,artist:e.artist},e.id)})))})),y(!1)},getAllBlocksOf:S,pageUrl:e.pageUrl})]}),"artists"===h||"types"===h?Object(O.jsx)(ge,{render:c}):Object(O.jsx)(je,{render:u})]})}var he=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{userBias:e.userBias,componentsByBias:e.componentsByBias,pageUrl:e.pageUrl}),Object(O.jsx)(pe,{userBias:e.userBias,pageUrl:e.pageUrl})]})},me=(a(609),function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{userBias:e.userBias,componentsByBias:e.componentsByBias,pageUrl:e.pageUrl}),Object(O.jsx)(pe,{userBias:e.userBias,pageUrl:e.pageUrl})]})});function xe(){return Object(O.jsx)("div",{style:{width:"100vw",height:"100vh",position:"absolute",display:"grid",placeItems:"center"},children:"On It's Way!"})}a(610),a(611);var Oe=function(){var e=m(),t=(e.height,e.width),a=Object(n.useState)({}),i=Object(d.a)(a,2),r=i[0],c=i[1],s=Object(n.useState)(!0),b=Object(d.a)(s,2),h=b[0],x=b[1],v=Object(n.useState)(!1),N=Object(d.a)(v,2),S=N[0],B=N[1],C=Object(n.useState)([]),A=Object(d.a)(C,2),U=A[0],D=A[1],T=Object(n.useState)([]),I=Object(d.a)(T,2),F=I[0],E=I[1],P=function(){p.a.post("/logout").then((function(e){console.log(e),window.location.href="/"})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){p.a.get("/api/getuser").then(function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("nouser"===t.data){e.next=12;break}return c(t.data),B(!0),e.next=5,p.a.post("/api/getbiased?collection=gifts",{artist:t.data.bias});case 5:return a=e.sent,e.next=8,p.a.post("/api/getbiased?collection=donations",{artist:t.data.bias});case 8:return n=e.sent,e.abrupt("return",[a,n]);case 12:return e.abrupt("return",[{data:"nogiftstothatartist"},{data:"nodonationstothatartist"}]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){"nogiftstothatartist"!==e[0].data&&E(e[0].data),"nodonationstothatartist"!==e[1].data&&D(e[1].data)})).catch((function(e){return console.log(e)})),x(!1)}),[]),h?null:Object(O.jsx)(u.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(f,{user:r,loggedIn:S,logout:P}),Object(O.jsx)("div",{className:"navigation-margin",style:{display:t<415?"none":"block"}}),Object(O.jsx)("div",{className:"Content",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",children:Object(O.jsx)($,{loggedIn:S,logout:P})}),Object(O.jsx)(j.a,{exact:!0,path:"/login",children:Object(O.jsx)(k,{})}),Object(O.jsx)(j.a,{exact:!0,path:"/register",children:Object(O.jsx)(w,{})}),Object(O.jsx)(j.a,{exact:!0,path:"/charity",children:Object(O.jsx)(he,{userBias:S?r.bias:"nouser",componentsByBias:U,pageUrl:"donations"})}),Object(O.jsx)(j.a,{exact:!0,path:"/gifts",children:Object(O.jsx)(me,{userBias:S?r.bias:"nouser",componentsByBias:F,pageUrl:"gifts"})}),Object(O.jsx)(j.a,{exact:!0,path:"/promote",children:Object(O.jsx)(xe,{})})]})}),Object(O.jsx)(g.a,{columns:[{icon:Object(O.jsx)("img",{src:"https://img.icons8.com/material-outlined/100/000000/nut.png",alt:"footericon"}),title:"Acorns"},{title:"Donations"},{title:"Gifts"},{title:"Campaigns"},{title:"Community"}],bottom:"Copyright 2021 Acorns",backgroundColor:"#333333",style:{display:t<=415?"none":"block"}}),Object(O.jsx)(y,{logout:P})]})})};c.a.render(Object(O.jsxs)(i.a.StrictMode,{children:[Object(O.jsx)(Oe,{}),","]}),document.getElementById("root"))}},[[612,1,2]]]);
//# sourceMappingURL=main.55ed55f2.chunk.js.map