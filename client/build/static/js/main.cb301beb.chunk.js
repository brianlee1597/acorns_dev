(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{245:function(e,t,n){},247:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},593:function(e,t,n){},594:function(e,t,n){},595:function(e,t,n){},596:function(e,t,n){},597:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(87),a=n.n(s),r=(n(245),n(55)),o=n(28),j=n(234),d=(n(246),n(29)),l=(n(247),n(1)),b=(n(249),n(250),function(){var e=Object(c.useState)({display:"none"}),t=Object(d.a)(e,2),n=(t[0],t[1]),i=Object(c.useState)({display:"none"}),s=Object(d.a)(i,2),a=(s[0],s[1]);return Object(l.jsxs)("section",{id:"nav-container",children:[Object(l.jsx)("div",{id:"logo-left",children:Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"https://img.icons8.com/material-outlined/100/000000/nut.png",alt:"logo"})})}),Object(l.jsxs)("div",{id:"rightside-container",children:[Object(l.jsxs)("div",{className:"profile-container",children:[Object(l.jsx)("h4",{children:"Welcome, Newcomer!"}),Object(l.jsx)(r.b,{to:"/login",className:"login-button",children:"Log In"})]}),Object(l.jsxs)("div",{className:"navlink-container",children:[Object(l.jsx)(r.b,{to:"/donations",onMouseEnter:function(e){return n({display:"block"})},onMouseLeave:function(e){return n({display:"none"})},children:"Donations"}),Object(l.jsx)(r.b,{to:"/gifts",onMouseEnter:function(e){return a({display:"block"})},onMouseLeave:function(e){return a({display:"none"})},children:"Gifts"}),Object(l.jsx)(r.b,{to:"/campaigns",children:"Campaigns"}),Object(l.jsx)(r.b,{to:"/community",children:"Community"})]})]})]})}),h=(n(255),function(){return Object(l.jsx)("div",{className:"login-container",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("label",{children:"Log In"}),Object(l.jsx)("input",{type:"text",style:{width:"40vw",height:"50px"},id:"username",name:"username",placeholder:"Username"}),Object(l.jsx)("input",{type:"text",style:{width:"40vw",height:"50px"},id:"password",name:"password",placeholder:"Password"}),Object(l.jsx)("button",{type:"submit",children:"Log In"})]})})}),x=(n(256),n(610)),u=n(600),O=n(601),p=n(602),m=n(603),g=n(604),f=n(611),v=n(605),w=(n(257),n(258),n(259),n(260),n(261),n.p+"static/media/AespaKarina.2189a0d5.jpg"),y=n.p+"static/media/bts.79e796b4.jpg",N=n.p+"static/media/exo.0f9ca843.jpg",k=n.p+"static/media/lisa.3b0d8c91.jpg";x.a.use([u.a,O.a,p.a,m.a,g.a]);var _=function(){return Object(l.jsxs)("div",{id:"infocarousel-container",children:[Object(l.jsx)("div",{id:"ic-description-container",children:Object(l.jsx)("h1",{children:"This week's Snapshot"})}),Object(l.jsxs)(f.a,{spaceBetween:100,slidesPerView:1,loop:!0,speed:2e3,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},effect:"fade",className:"info-carousel",children:[Object(l.jsx)(v.a,{children:Object(l.jsx)("img",{src:N,alt:"karina"})}),Object(l.jsx)(v.a,{children:Object(l.jsx)("img",{src:k,alt:"karina"})}),Object(l.jsx)(v.a,{children:Object(l.jsx)("img",{src:w,alt:"karina"})}),Object(l.jsx)(v.a,{children:Object(l.jsx)("img",{src:y,alt:"karina"})})]}),Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("h1",{children:"Columbia Lions"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum, quibusdam cumque laudantium ex eligendi distinctio sequi a. Culpa excepturi dolorem nesciunt, aspernatur itaque velit esse eaque quasi laboriosam suscipit."})]})]})},D=(n(262),n(263),n(210)),C=n(211),A=n(212),E=n(235),S=n(606),L=n(613),M=n(231),q=n(98),G=n(236),I=n(215),T=n.n(I),B=function(e){Object(A.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(D.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={chartData:[]},e.componentDidMount=function(){e.setChartData()},e.setChartData=function(){T.a.get("/api/chartdata").then((function(t){return e.setState({chartData:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(C.a)(n,[{key:"render",value:function(){var e=this.state.chartData,t=window.innerWidth<=910?30:50;return Object(l.jsx)(S.a,{width:"100%",height:"90%",children:Object(l.jsxs)(L.a,{data:e,margin:{top:15,right:t,left:t},className:"linechart",children:[Object(l.jsx)(M.a,{dataKey:"name"}),Object(l.jsx)(q.a,{}),Object(l.jsx)(G.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"BTS",stroke:"#8884d8"}),Object(l.jsx)(G.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"Aespa",stroke:"#ADD8E6"}),Object(l.jsx)(G.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"Blackpink",stroke:"pink"})]})})}}]),n}(c.PureComponent),H=function(){return Object(l.jsxs)("div",{id:"top-donations",children:[Object(l.jsx)("div",{className:"chart-title-container",children:Object(l.jsx)("h3",{children:"Top 3 Most Donated Fandoms by Month"})}),Object(l.jsx)(B,{}),Object(l.jsxs)("div",{className:"chart-button-container",children:[Object(l.jsx)("button",{className:"see_chart_button",children:"Detailed Chart"}),Object(l.jsx)("button",{className:"see_data_button",children:"All Data"})]})]})},z=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{id:"dashboard-title",children:"Community Hub"}),Object(l.jsxs)("div",{id:"dashboard-container",children:[Object(l.jsx)(H,{}),Object(l.jsxs)("div",{className:"Gifts",children:[Object(l.jsx)("div",{className:"top-user",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"O"}),Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("p",{children:"Ghosts have just as good a right\u2014In every way, to fear the light, as men to fear the dark."}),Object(l.jsx)("div",{})]})]})}),Object(l.jsx)("div",{className:"whatever",children:Object(l.jsx)("h1",{children:"hewwo Wolrd"})})]})]})]})},J=n(232),K=n.n(J);function W(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var F=function(){var e=function(){var e=Object(c.useState)(W()),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){i(W())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=(e.height,e.width<=910?30:50);return Object(l.jsxs)("div",{id:"landing-page",children:[Object(l.jsx)(K.a,{className:"particle-background",params:{particles:{number:{value:t},size:{value:3},color:{value:"black"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),Object(l.jsx)(_,{}),Object(l.jsx)(z,{})]})},P=(n(593),function(){return Object(l.jsxs)("form",{className:"filterbar-container",children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Hello"}),Object(l.jsx)("li",{children:"Hello"}),Object(l.jsx)("li",{children:"Hello"}),Object(l.jsx)("li",{children:"Hello"})]}),Object(l.jsx)("input",{type:"text",placeholder:"...search"})]})}),X=(n(594),n.p+"static/media/btsdonation.f26b84c1.jpg"),Q=function(){return Object(l.jsxs)("div",{className:"donation-grid-container",children:[Object(l.jsx)("div",{className:"donation-gridbox",children:Object(l.jsxs)("div",{className:"graphics",children:[Object(l.jsx)("img",{src:X,alt:"btsdonation"}),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"BTS"})})]})}),Object(l.jsx)("div",{className:"donation-gridbox",children:Object(l.jsxs)("div",{className:"graphics",children:[Object(l.jsx)("img",{src:"https://www.iwmbuzz.com/wp-content/uploads/2020/11/in-pics-blackpink-girls-look-stunning-while-twinning-in-white-2.jpg",alt:"bpdonation"}),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Blackpink"})})]})}),Object(l.jsx)("div",{className:"donation-gridbox",children:Object(l.jsxs)("div",{className:"graphics",children:[Object(l.jsx)("img",{src:"https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/127046787_2907720446115008_6361009810562103148_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=M-tSIaZmQvsAX_jGJ7G&_nc_ht=scontent-ssn1-1.xx&oh=85792a85ef6f72a0c0e6d21f2852584c&oe=60EDAA9C",alt:"aespadonation"}),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Aespa"})})]})}),Object(l.jsx)("div",{className:"donation-gridbox",children:Object(l.jsxs)("div",{className:"graphics",children:[Object(l.jsx)("img",{src:"https://lastfm.freetls.fastly.net/i/u/770x0/f53bf0af41f6baeca6a4aa8b5c4a9aae.webp#f53bf0af41f6baeca6a4aa8b5c4a9aae",alt:"exodonation"}),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"EXO"})})]})}),Object(l.jsx)("div",{className:"donation-gridbox",children:Object(l.jsxs)("div",{className:"graphics",children:[Object(l.jsx)("img",{src:"https://vignette.wikia.nocookie.net/kpop/images/4/42/Jessi_Down_promo_photo.png/revision/latest?cb=20180719044133",alt:"btsdonation"}),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Jessi"})})]})}),Object(l.jsx)("div",{className:"donation-gridbox",children:Object(l.jsxs)("div",{className:"graphics",children:[Object(l.jsx)("img",{className:"Got7",src:"https://kpopgotmyseoul.weebly.com/uploads/2/5/6/0/25604243/9987248_orig.jpg",alt:"btsdonation"}),Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Got7"})})]})})]})},U=(n(595),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(P,{}),Object(l.jsx)(Q,{})]})}),V=(n(596),function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{}),Object(l.jsx)("div",{className:"Content",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",children:Object(l.jsx)(F,{})}),Object(l.jsx)(o.a,{exact:!0,path:"/login",children:Object(l.jsx)(h,{})}),Object(l.jsx)(o.a,{path:"/donations",children:Object(l.jsx)(U,{})})]})}),Object(l.jsx)(j.a,{columns:[{icon:Object(l.jsx)("img",{src:"https://img.icons8.com/material-outlined/100/000000/nut.png",alt:"footericon"}),title:"Acorns",url:"https://yuque.com",description:"\u77e5\u8bc6\u521b\u4f5c\u4e0e\u5206\u4eab\u5de5\u5177",openExternal:!0}],bottom:"Copyright 2021 Acorns",backgroundColor:"#333333"})]})})});a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(V,{})}),document.getElementById("root"))}},[[597,1,2]]]);
//# sourceMappingURL=main.cb301beb.chunk.js.map