import{_ as y}from"./TitleHead-2bc19d03.mjs";import{_ as v,b,o as u,c as _,d as e,e as a,w as i,a as x,g as s,f as C,F as h,h as g,t as f}from"./entry-0c936b54.mjs";const j={__name:"MV",setup(p,{expose:r}){r();const t={fx:"coverflow3D",coverflow3D:{widthSlide:[1040,"85%"],opacity:.3},speed:800,width:1140,imageback:{position:"fit"},isNav:!0,isKeyboard:!0,slideshow:{delay:4e3,isAutoRun:!0},timerArc:{stroke:"#cc0055"},video:{isPauseThenRemove:!0}},n=function(){jQuery(".mv__slider .rs01nav").remove(),jQuery(".mv__slider .rs01pag").remove(),jQuery(".mv__slider .rs01overlay-ghost").remove(),jQuery(".mv__slider .rs01imgback").css({width:"",height:"",left:"",top:""}),jQuery(".mv__slider").rubyslider(t)};b(()=>{setTimeout(n,400)});function m(){return Math.round(Math.random()*1e7)}const c={sliderOptions:t,initSetup:n,randomNum:m};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},$={class:"mv"},k={class:"container"},w=e("h1",null,"RUBY SLIDER",-1),N=e("p",null,"Plugin jQuery d\xE0nh cho Slider & Tabs",-1),S=x('<div class="mv__slider rs01 rs01timer-arcTop"><a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Vi\u1EC7t Nam 1</a><a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Vi\u1EC7t Nam 5</a><a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Vi\u1EC7t Nam 6</a></div><div class="mv__avatar"><figure><svg width="350" height="392" viewBox="0 0 350 392" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M335.837 119.619C342.964 82.0121 351.462 16.5625 327.483 2.71292C312.041 -6.20253 285.268 8.18227 260.65 26.5614C235.313 10.5971 207.066 1.40756 174.941 1.30313C143.861 1.40756 114.635 10.5971 89.2981 26.5614C64.6794 8.18227 37.9722 -6.20253 22.5432 2.71292C-1.43588 16.5756 7.04882 82.0121 14.189 119.619C5.06471 143.206 0 169.156 0 196.451C0 209.087 1.10953 221.396 3.13281 233.379L107.39 376.418C127.479 386.064 148.821 391.521 174.941 391.599C200.643 391.521 222.482 386.064 242.558 376.418L346.854 233.379C348.864 221.396 350 209.087 350 196.451C350.013 169.156 344.948 143.206 335.837 119.619ZM106.855 200.811C90.8775 200.811 77.9286 187.862 77.9286 171.885C77.9286 168.412 78.6465 165.123 79.7691 162.042C98.0961 161.116 119.073 163.061 135.755 172.211C135.559 188.019 122.715 200.811 106.855 200.811ZM243.197 200.811C227.337 200.811 214.493 188.032 214.31 172.224C230.992 163.074 251.969 161.116 270.296 162.055C271.419 165.136 272.137 168.425 272.137 171.898C272.124 187.862 259.175 200.811 243.197 200.811Z" fill="#CC0055"></path></svg></figure><p>Xin ch\u1EDD 1 ch\xFAt, \u0111ang load h\xECnh \u0111\u1EA7u ti\xEAn...</p></div>',2),q={class:"mv__btns"},V={class:"btn btn--btns btn--large"},L=e("span",null,[s("C\xC1C HI\u1EC6U \u1EE8NG"),e("br"),e("small",null,[e("b",null,"&")]),s(" LAYOUT KH\xC1C")],-1),O=e("span",null,[s("H\u01AF\u1EDANG D\u1EAAN"),e("br",{class:"br--max-sm"}),s("S\u1EEC D\u1EE4NG")],-1);function Q(p,r,t,n,m,c){const l=y,o=C;return u(),_("section",$,[e("div",k,[a(l,null,{title:i(()=>[w]),desc:i(()=>[N]),_:1}),S,e("div",q,[e("div",V,[a(o,{to:"/slider",class:"btn--primary"},{default:i(()=>[L]),_:1}),a(o,{to:"/docs/quick-start",class:"btn--alter"},{default:i(()=>[O]),_:1})])])])])}var T=v(j,[["render",Q]]);const M={__name:"OtherLayoutsEffects",setup(p,{expose:r}){r();const t=function(){jQuery(".effect-others .rs01nav").remove(),jQuery(".effect-others .rs01pag").remove(),jQuery(".effect-others .rs01overlay-ghost").remove(),jQuery(".effect-others .rs01imgback").css({width:"",height:"",left:"",top:""}),jQuery(".slider-math").rubyslider({fx:"rectRun",speed:800,width:1140,idBegin:0,pag:{type:"bullet"}}),jQuery(".slider-one-effect").rubyslider({fx:"cssOne",speed:800,width:1140,idBegin:1,pag:{type:"bullet"}}),jQuery(".slider-line-effect").rubyslider({fx:"line",speed:400,width:1140,imageback:{position:"fill"},idBegin:2,widthSlide:"80%",margin:1,pag:{type:"bullet"}}),jQuery(".slider-tabs").rubyslider({type:"tabs",fx:"cssOne",cssOne:"scalePulse",speed:800,pag:{align:"center"}})};b(()=>{setTimeout(t,400)});let n=1;function m(){const l=Math.round(Math.random()*1e6);return n=l,l}const c={initSetup:t,randomNum:n,getRandomNum:m};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},B={class:"effect-others anchor-first"},E=e("h2",null,[s("C\xC1C HI\u1EC6U \u1EE8NG"),e("span",null,"v\xE0"),s("B\u1ED0 C\u1EE4C KH\xC1C")],-1),R=e("p",null,[s("RubySlider h\u1ED7 tr\u1EE3 nhi\u1EC1u hi\u1EC7u \u1EE9ng kh\xE1c nhau, t\u1EEB hi\u1EC7u \u1EE9ng \u0111\u01A1n gi\u1EA3n \u0111\u1EBFn 3D n\u1ED5i b\u1EADt."),e("br"),s("\u0110\xE1p \u0111\u1EE9ng g\u1EA7n nh\u01B0 \u0111\u1EA7y \u0111\u1EE7 trong c\xE1c thi\u1EBFt k\u1EBF website th\xF4ng th\u01B0\u1EDDng.")],-1),H={class:"effect-others__items grid-custom"},P={class:"effect-others__item grid-custom__item"},A={class:"slider-math rs01"},D=["href"],F={class:"effect-others__btn btn"},I=s("8 hi\u1EC7u \u1EE9ng Math"),U={class:"effect-others__item grid-custom__item"},G={class:"slider-one-effect rs01"},Y=["href"],Z={class:"effect-others__btn btn"},K=s("50+ hi\u1EC7u \u1EE9ng CSS One"),W={class:"effect-others__item grid-custom__item"},X={class:"slider-line-effect rs01"},z=["href"],J={class:"effect-others__btn btn"},ee=s("B\u1ED1 c\u1EE5c ch\xEDnh gi\u1EEFa"),se={class:"effect-others__item grid-custom__item"},te=x('<div class="slider-tabs rs01 rs01flat"><div><div class="rs01pagitem">OVERVIEW</div><div class="font-blokk"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis aspernatur repellendus, esse illum suscipit nihil, minima beatae quaerat labore nisi fugit, officiis dignissimos saepe ab facilis qui non quas!</p><p>Nam facilis tempore maxime incidunt deserunt, ipsum pariatur, accusamus animi quidem velit tenetur eum nesciunt quos veniam architecto neque impedit! Sed accusamus commodi dignissimos dolorem distinctio, itaque dicta non maiores?</p></div></div><div><div class="rs01pagitem">LAYOUT</div><div class="row font-blokk"><div class="col-4"><p class="bo-l-h"><i>Consectetur adipisicing elit. Vel, sequi, quis, minima, dolor quisquam numquam quod in repudiandae officia.</i></p></div><div class="col-8"><p class="dropcap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, pariatur aliquam molestias aspernatur non. Facere, quibusdam, reiciendis, natus laudantium debitis suscipit consequatur voluptatibus mollitia temporibus quia ratione dignissimos magnam provident.</p><p>Assumenda, repudiandae, iste magni labore culpa eum expedita eligendi odio molestiae temporibus id ab nihil ad sunt mollitia veritatis excepturi. Ullam, odit nesciunt doloribus natus non repudiandae error itaque vero?</p></div></div></div><div><div class="rs01pagitem">SWIPE PREVENT</div><form class="block"><input type="text" class="large" placeholder="Username"><input type="text" class="large" placeholder="Password"><input type="text" class="large" placeholder="Repeat Password"><input type="text" class="large" placeholder="Email"><textarea name="" cols="30" rows="5" placeholder="Your bio"></textarea><label class="checkbox text-small muted pull-left" for="terms"><input id="terms" type="checkbox">I have read and I agree the Terms of Use </label><input class="btn large pull-right no-ma" type="submit" value="Register"></form></div><div><div class="rs01pagitem">IMAGE LAZYLOAD</div><div class="row"><div class="col-4 col-xs-4"><img class="rs01img card-img" src="/img/food-thumbnail1.jpg" alt="Food 1"></div><div class="col-4 col-xs-4"><img class="rs01img card-img" src="/img/food-thumbnail2.jpg" alt="Food 2"></div><div class="col-4 col-xs-4"><img class="rs01img card-img" src="/img/food-thumbnail3.jpg" alt="Food 3"></div><div class="col-4 col-xs-4"><img class="rs01img card-img" src="/img/food-thumbnail4.jpg" alt="Food 4"></div><div class="col-4 col-xs-4"><img class="rs01img card-img" src="/img/food-thumbnail6.jpg" alt="Food 6"></div><div class="col-4 col-xs-4"><img class="rs01img card-img" src="/img/food-thumbnail7.jpg" alt="Food 7"></div></div></div></div>',1),ie={class:"effect-others__btn btn"},ae=s("B\u1ED1 c\u1EE5c Tabs");function oe(p,r,t,n,m,c){const l=y,o=C;return u(),_("section",B,[a(l,null,{title:i(()=>[E]),desc:i(()=>[R]),_:1}),e("div",H,[e("div",P,[e("div",A,[(u(),_(h,null,g(4,d=>e("a",{class:"rs01imgback",href:"/img/vietnam2-1140-"+(d+1)+".jpg"},"H\xECnh \u1EA3nh Vi\u1EC7t Nam "+f(d+1),9,D)),64))]),e("div",F,[a(o,{to:"/slider/effect-math"},{default:i(()=>[I]),_:1})])]),e("div",U,[e("div",G,[(u(),_(h,null,g(4,d=>e("a",{class:"rs01imgback",href:"/img/vietnam2-1140-"+(d+1)+".jpg"},"H\xECnh \u1EA3nh Vi\u1EC7t Nam "+f(d+1),9,Y)),64))]),e("div",Z,[a(o,{to:"/slider/effect-css-one"},{default:i(()=>[K]),_:1})])]),e("div",W,[e("div",X,[(u(),_(h,null,g(4,d=>e("a",{class:"rs01imgback",href:"/img/vietnam2-1140-"+(d+1)+".jpg"},"H\xECnh \u1EA3nh Vi\u1EC7t Nam "+f(d+1),9,z)),64))]),e("div",J,[a(o,{to:"/slider/layout-center"},{default:i(()=>[ee]),_:1})])]),e("div",se,[te,e("div",ie,[a(o,{to:"/tabs"},{default:i(()=>[ae]),_:1})])])])])}var re=v(M,[["render",oe]]);const ne={__name:"index",setup(p,{expose:r}){r(),b(()=>{});const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},ce={id:"main"};function le(p,r,t,n,m,c){const l=T,o=re;return u(),_("main",ce,[a(l),a(o)])}var ue=v(ne,[["render",le]]);export{ue as default};
