(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{245:function(e,t,c){},247:function(e,t,c){},270:function(e,t,c){},271:function(e,t,c){},272:function(e,t,c){},277:function(e,t,c){},278:function(e,t,c){},279:function(e,t,c){},592:function(e,t,c){},593:function(e,t,c){},594:function(e,t,c){},595:function(e,t,c){},596:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(88),s=c.n(a),r=(c(245),c(52)),o=c(29),l=c(235),j=(c(246),c(109)),d=c(110),b=c(111),h=c(116),u=(c(247),c(1)),x=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("section",{id:"nav-container",children:[Object(u.jsx)("div",{id:"logo-left",children:Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("img",{src:"https://img.icons8.com/material-outlined/100/000000/nut.png",alt:"logo"})})}),Object(u.jsxs)("div",{id:"rightside-container",children:[Object(u.jsxs)("div",{className:"profile-container",children:[Object(u.jsx)(r.b,{activeClassName:"is-active",to:"/login",className:"login-button",children:"\ub85c\uadf8\uc778"}),Object(u.jsx)(r.b,{activeClassName:"is-active",to:"/register",className:"reg-button",children:"\uacc4\uc815\uc0dd\uc131"})]}),Object(u.jsxs)("div",{className:"navlink-container",children:[Object(u.jsx)(r.b,{activeClassName:"is-active",to:"/donations",children:"\uae30\ubd80\ud558\uae30"}),Object(u.jsx)(r.b,{activeClassName:"is-active",to:"/gifts",children:"\uc120\ubb3c\ud558\uae30"}),Object(u.jsx)(r.b,{activeClassName:"is-active",to:"/campaigns",children:"\uce84\ud398\uc778"}),Object(u.jsx)(r.b,{activeClassName:"is-active",to:"/community",children:"\ucee4\ubba4\ub2c8\ud2f0"})]})]})]})}}]),c}(n.Component),O=c(24),m=c(75),p=c.n(m),g=(c(270),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(O.a)(a,2),r=s[0],o=s[1],l=function(e){"username"===e.target.name?i(e.target.value):o(e.target.value)};return Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==c&&""!==r){var t={username:c,password:r};p.a.post("/login-local",t).then((function(e){console.log(e)})).catch((function(){return console.log("fail")}))}},children:[Object(u.jsx)("label",{children:"\ub85c\uadf8\uc778"}),Object(u.jsx)("input",{onChange:l,type:"username",style:{width:"40vw",height:"50px"},id:"username",name:"username",placeholder:"\uc544\uc774\ub514"}),Object(u.jsx)("input",{onChange:l,type:"password",style:{width:"40vw",height:"50px"},id:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638"}),Object(u.jsx)("button",{type:"submit",children:"\uace0\uace0~!"})]})})}),v=(c(271),function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),s=Object(O.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(""),j=Object(O.a)(l,2),d=j[0],b=j[1],h=function(e){"username"===e.target.name?o(e.target.value):"password"===e.target.name?b(e.target.value):i(e.target.value)};return Object(u.jsx)("div",{className:"login-container",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==c){if(""!==r&&""!==d){var t={username:r,password:d,email:c};p.a.post("/register-local",t).then((function(e){console.log(e)})).catch((function(){return console.log("fail")}))}}else console.log("Email is empty")},children:[Object(u.jsx)("label",{children:"\uacc4\uc815 \ub9cc\ub4e4\uae30"}),Object(u.jsx)("input",{onChange:h,type:"email",style:{width:"40vw",height:"50px"},id:"email",name:"email",placeholder:"\uc774\uba54\uc77c"}),Object(u.jsx)("input",{onChange:h,type:"username",style:{width:"40vw",height:"50px"},id:"username",name:"username",placeholder:"\uc544\uc774\ub514"}),Object(u.jsx)("input",{onChange:h,type:"password",style:{width:"40vw",height:"50px"},id:"password",name:"password",minlength:"5",placeholder:"\ube44\ubc00\ubc88\ud638"}),Object(u.jsx)("button",{type:"submit",children:"\uace0\uace0~!"})]})})}),f=(c(272),c(609)),w=c(599),y=c(600),N=c(601),k=c(602),C=c(603),_=c(610),S=c(604),D=(c(273),c(274),c(275),c(276),c(277),c.p+"static/media/AespaKarina.2189a0d5.jpg"),A=c.p+"static/media/bts.79e796b4.jpg",E=c.p+"static/media/exo.0f9ca843.jpg",G=c.p+"static/media/lisa.3b0d8c91.jpg";f.a.use([w.a,y.a,N.a,k.a,C.a]);var q=function(){return Object(u.jsxs)("div",{id:"infocarousel-container",children:[Object(u.jsx)("div",{id:"ic-description-container",children:Object(u.jsx)("h1",{children:"\uc774\ubc88\uc8fc\uc758 Hot-Take"})}),Object(u.jsxs)(_.a,{spaceBetween:100,slidesPerView:1,loop:!0,speed:2e3,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},effect:"fade",className:"info-carousel",children:[Object(u.jsx)(S.a,{children:Object(u.jsx)("img",{src:E,alt:"karina"})}),Object(u.jsx)(S.a,{children:Object(u.jsx)("img",{src:G,alt:"karina"})}),Object(u.jsx)(S.a,{children:Object(u.jsx)("img",{src:D,alt:"karina"})}),Object(u.jsx)(S.a,{children:Object(u.jsx)("img",{src:A,alt:"karina"})})]}),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("h1",{children:"Columbia Lions"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laborum, quibusdam cumque laudantium ex eligendi distinctio sequi a. Culpa excepturi dolorem nesciunt, aspernatur itaque velit esse eaque quasi laboriosam suscipit."})]})]})},B=(c(278),c(279),c(605)),H=c(612),T=c(232),z=c(99),J=c(236),K=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={chartData:[]},e.componentDidMount=function(){e.setChartData()},e.setChartData=function(){p.a.get("/api/chartdata").then((function(t){return e.setState({chartData:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this.state.chartData,t=window.innerWidth<=910?30:50;return Object(u.jsx)(B.a,{width:"100%",height:"90%",children:Object(u.jsxs)(H.a,{data:e,margin:{top:15,right:t,left:t},className:"linechart",children:[Object(u.jsx)(T.a,{dataKey:"month"}),Object(u.jsx)(z.a,{}),Object(u.jsx)(J.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"BTS",stroke:"#8884d8"}),Object(u.jsx)(J.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"Aespa",stroke:"#ADD8E6"}),Object(u.jsx)(J.a,{type:"monotone",r:0,legendType:"diamond",dataKey:"Blackpink",stroke:"pink"})]})})}}]),c}(n.PureComponent),I=function(){return Object(u.jsxs)("div",{id:"top-donations",children:[Object(u.jsx)("div",{className:"chart-title-container",children:Object(u.jsx)("h3",{children:"\uac00\uc7a5 \ub9ce\uc774 \uae30\ubd80\ud55c \ud32c\ub364 (\ub2ec)"})}),Object(u.jsx)(K,{}),Object(u.jsxs)("div",{className:"chart-button-container",children:[Object(u.jsx)("button",{className:"see_chart_button",children:"\uc138\ubd80\ud55c \ucc28\ud2b8"}),Object(u.jsx)("button",{className:"see_data_button",children:"\ubaa8\ub4e0 \ub370\uc774\ud130"})]})]})},L=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{id:"dashboard-title",children:"\ucee4\ubba4\ub2c8\ud2f0 \ud5c8\ube0c"}),Object(u.jsxs)("div",{id:"dashboard-container",children:[Object(u.jsx)(I,{}),Object(u.jsxs)("div",{className:"Gifts",children:[Object(u.jsx)("div",{className:"top-user",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"O"}),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("p",{children:"Ghosts have just as good a right\u2014In every way, to fear the light, as men to fear the dark."}),Object(u.jsx)("div",{})]})]})}),Object(u.jsx)("div",{className:"whatever",children:Object(u.jsx)("h1",{children:"hewwo Wolrd"})})]})]})]})},M=c(233),W=c.n(M);function F(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var P=function(){var e=function(){var e=Object(n.useState)(F()),t=Object(O.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){i(F())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}(),t=(e.height,e.width<=910?30:50);return Object(u.jsxs)("div",{id:"landing-page",children:[Object(u.jsx)(W.a,{className:"particle-background",params:{particles:{number:{value:t},size:{value:3},color:{value:"black"}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),Object(u.jsx)(q,{}),Object(u.jsx)(L,{})]})},X=(c(592),function(){return Object(u.jsxs)("form",{className:"filterbar-container",children:[Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Hello"}),Object(u.jsx)("li",{children:"Hello"}),Object(u.jsx)("li",{children:"Hello"}),Object(u.jsx)("li",{children:"Hello"})]}),Object(u.jsx)("input",{type:"text",placeholder:"...search"})]})}),Q=(c(593),c.p+"static/media/btsdonation.f26b84c1.jpg"),V=function(){return Object(u.jsxs)("div",{className:"donation-grid-container",children:[Object(u.jsx)("div",{className:"donation-gridbox",children:Object(u.jsxs)("div",{className:"graphics",children:[Object(u.jsx)("img",{src:Q,alt:"btsdonation"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"BTS"})})]})}),Object(u.jsx)("div",{className:"donation-gridbox",children:Object(u.jsxs)("div",{className:"graphics",children:[Object(u.jsx)("img",{src:"https://www.iwmbuzz.com/wp-content/uploads/2020/11/in-pics-blackpink-girls-look-stunning-while-twinning-in-white-2.jpg",alt:"bpdonation"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Blackpink"})})]})}),Object(u.jsx)("div",{className:"donation-gridbox",children:Object(u.jsxs)("div",{className:"graphics",children:[Object(u.jsx)("img",{src:"https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/127046787_2907720446115008_6361009810562103148_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=M-tSIaZmQvsAX_jGJ7G&_nc_ht=scontent-ssn1-1.xx&oh=85792a85ef6f72a0c0e6d21f2852584c&oe=60EDAA9C",alt:"aespadonation"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Aespa"})})]})}),Object(u.jsx)("div",{className:"donation-gridbox",children:Object(u.jsxs)("div",{className:"graphics",children:[Object(u.jsx)("img",{src:"https://lastfm.freetls.fastly.net/i/u/770x0/f53bf0af41f6baeca6a4aa8b5c4a9aae.webp#f53bf0af41f6baeca6a4aa8b5c4a9aae",alt:"exodonation"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"EXO"})})]})}),Object(u.jsx)("div",{className:"donation-gridbox",children:Object(u.jsxs)("div",{className:"graphics",children:[Object(u.jsx)("img",{src:"https://vignette.wikia.nocookie.net/kpop/images/4/42/Jessi_Down_promo_photo.png/revision/latest?cb=20180719044133",alt:"btsdonation"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Jessi"})})]})}),Object(u.jsx)("div",{className:"donation-gridbox",children:Object(u.jsxs)("div",{className:"graphics",children:[Object(u.jsx)("img",{className:"Got7",src:"https://kpopgotmyseoul.weebly.com/uploads/2/5/6/0/25604243/9987248_orig.jpg",alt:"btsdonation"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Got7"})})]})})]})},Z=(c(594),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(X,{}),Object(u.jsx)(V,{})]})}),R=(c(595),function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),Object(u.jsx)("div",{className:"Content",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(P,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/login",children:Object(u.jsx)(g,{})}),Object(u.jsx)(o.a,{exact:!0,path:"/register",children:Object(u.jsx)(v,{})}),Object(u.jsx)(o.a,{path:"/donations",children:Object(u.jsx)(Z,{})})]})}),Object(u.jsx)(l.a,{columns:[{icon:Object(u.jsx)("img",{src:"https://img.icons8.com/material-outlined/100/000000/nut.png",alt:"footericon"}),title:"Acorns"},{title:"Donations"},{title:"Gifts"},{title:"Campaigns"},{title:"Community"}],bottom:"Copyright 2021 Acorns",backgroundColor:"#333333"})]})})});s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root"))}},[[596,1,2]]]);
//# sourceMappingURL=main.a2d063f1.chunk.js.map