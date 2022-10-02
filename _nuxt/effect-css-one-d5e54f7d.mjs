import{_ as Q}from"./TitleHead-e5309d4e.mjs";import{_ as U,b as W,o as g,c as f,d as e,e as r,w as o,F as E,h as K,a as Y,t as b,g as s,f as q}from"./entry-78b86168.mjs";import{_ as J,a as X}from"./_guide-c07fe57e.mjs";const Z={__name:"effect-css-one",setup(R,{expose:k}){k();const V={fx:"cssOne",cssOne:"roDeal",speed:800,width:1140,isNav:!0,imageback:{position:"fit"}},i=["glueHor","glueVer","foldHor","foldVer","foldFromHor","foldFromVer","roomHor","roomVer","flitHor","flitVer","hinge","roll","br","moveHor","moveVer","fade","fadeHor","fadeVer","scaleInHor","scaleInVer","scaleOutHor","scaleOutVer","scalePulse","scaleWave","roEdgeHor","roEdgeVer","newspaper","pushFromHor","pushFromVer","slide","br","fall","pulseShort","roSoft","roDeal","wheelHor","wheelVer","snakeHor","snakeVer","shuffle","browseLeft","browseRight","slideBehind","vacuumHor","vacuumVer","br","scaleSoft","snapHor","snapVer","letInHor","letInVer","stickHor","stickVer","growthHor","growthVer","soEdgeHor","soEdgeVer","shake","tinHor","tinVer"],y=["Glue Horizontal","Glue Vertical","Fold Horizontal","Fold Vertical","Fold From Horizontal","Fold From Vertical","Room Horizontal","Room Vertical","Flit Horizontal","Flit Vertical","Hinge","Roll","br","Move Horizontal","Move Vertical","Fade","Fade Horizontal","Fade Vertical","Scale In Horizontal","Scale In Vertical","Scale Out Horizontal","Scale Out Vertical","Scale Pulse","Scale Wave","Rotate Edge Horizontal","Rotate Edge Vertical","Newspaper","Push From Horizontal","Push From Vertical","Slide","br","Fall","Pulse Short","Rotate Soft","Rotate Deal","Wheel Horizontal","Wheel Vertical","Snake Horizontal","Snake Vertical","Shuffle","Browse Left","Browse Right","Slide Behind","Vacuum Horizontal","Vacuum Vertical","br","Scale Soft","Snap Horizontal","Snap Vertical","Let In Horizontal","Let In Vertical","Stick Horizontal","Stick Vertical","Growth Horizontal","Growth Vertical","Soft Edge Horizontal","Soft Edge Vertical","Shake","Tin Horizontal","Tin Vertical"];let C=1;const l=()=>{jQuery("#main .rs01nav").remove(),jQuery("#main .rs01pag").remove(),jQuery("#main .rs01overlay-ghost").remove(),jQuery("#main .rs01imgback").css({width:"",height:"",left:"",top:""});let _=jQuery(".effect-cssone__slider").rubyslider(V);const p=jQuery(".cssone__item"),t="cssone--actived",I=800,L=0;$("#effects"),$(".cssone__table");let x;p.each(function(){const n=$(this);n.find(".cssone__name");const H=n.find(".cssone__preview"),h=n.find(".cssone__one"),N=n.find(".cssone__slide"),w=n.find(".cssone--slide-1"),S=n.find(".cssone--slide-2"),O=n.data("fx"),a=new RubyTween,M=N.attr("style")||"",A=N.attr("style")||"",u=$.extend(!0,{},_.one.va.rubyAnimateOne[O]);function v(z,j){const m=rs01MODULE.RUBYANIMATE.Tween(z,I,L,null,_.one.va.rubyAnimateKeyframes);if(!!$.isArray(m))for(var c=0,D=m.length;c<D;c++){var B=$.extend({},m[c].prop||m[c]);if(c==0)a.css(j,B,{type:"reset"});else{var G=$.extend({},m[c].opts);a.animate(j,B,G,!1)}}}function T(){v(u.next[0],S),v(u.next[1],w),u.isMask&&H.addClass("rs01mask"),a.eventComplete(function(){P()}),a.restart()}function P(){v(u.prev[0],w),v(u.prev[1],S),a.eventComplete(function(){w.attr("style",M),S.attr("style",A),n.removeClass(t),H.removeClass("rs01mask")}),a.restart()}H.on("click",function(z){return n.hasClass(t)||(n.addClass(t),T()),!1}),h.on("click",function(){h.hasClass(t)?h.removeClass(t):(x&&x.removeClass(t),h.addClass(t),x=h,_.update({cssOne:O}))})})};W(()=>{setTimeout(l,400)});const d={sliderOptions:V,aFx:i,aFxName:y,fxCount:C,initSetup:l};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},ee={id:"main"},se={class:"effect-cssone wrapper"},te={class:"container"},ne=e("h1",null,"HI\u1EC6U \u1EE8NG CSS ONE",-1),oe=e("p",null,"Main Slider",-1),ie=Y('<div class="effect-cssone__slider slider-preview rs01"><picture class="rs01imgback-wrap"><source media="(max-width: 767px)" srcset="/img/vietnam-500-1.jpg"><a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Vi\u1EC7t Nam 1</a></picture><picture class="rs01imgback-wrap"><source media="(max-width: 767px)" srcset="/img/vietnam-500-2.jpg"><a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Vi\u1EC7t Nam 2</a></picture><picture class="rs01imgback-wrap"><source media="(max-width: 767px)" srcset="/img/vietnam-500-3.jpg"><a class="rs01imgback" href="/img/vietnam-1140-3.jpg">Vi\u1EC7t Nam 3</a></picture><picture class="rs01imgback-wrap"><source media="(max-width: 767px)" srcset="/img/vietnam-500-4.jpg"><a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Vi\u1EC7t Nam 4</a></picture><picture class="rs01imgback-wrap"><source media="(max-width: 767px)" srcset="/img/vietnam-500-5.jpg"><a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Vi\u1EC7t Nam 5</a></picture></div>',1),ae={class:"cssone"},ce={class:"container"},re=e("div",{class:"hr hr--circle"},null,-1),le=e("h2",null,[s("DANH S\xC1CH"),e("br",{class:"br--max-xs"}),s("HI\u1EC6U \u1EE8NG CSS ONE")],-1),de=e("p",null,"C\xF3 t\u1EA5t c\u1EA3 57 hi\u1EC7u \u1EE9ng CssOne. Click v\xE0o \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\u1EC3 xem t\u1EEBng hi\u1EC7u \u1EE9ng.",-1),_e={class:"cssone__table row gx-3 gx-sm-4"},he={key:0,class:"col-6 col-sm-4 col-lg-3"},ue=["data-fx"],me={class:"cssone__preview"},ge={class:"cssone__slide cssone--slide-1"},fe={class:"cssone__name"},pe=e("div",{class:"cssone__slide_name"},"Back",-1),ve={class:"cssone__slide cssone--slide-2"},be={class:"cssone__name"},Ve=e("div",{class:"cssone__slide_name"},"Front",-1),xe={class:"cssone__item_footer"},He={class:"cssone__tag"},we=e("div",{class:"cssone__select btn btn--small"},[e("button",{class:"cssone__one"},[e("span",null,"C\u1EADp nh\u1EADt main slider"),e("i",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-up-circle",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})])])])],-1),Se={key:1,class:"cssone__br"},ke=s("Hi\u1EC7u \u1EE9ng CssOne l\xE0 hi\u1EC7u \u1EE9ng d\u1EF1a tr\xEAn "),ye=s("CSS Animations"),Ce=s(", cho n\xEAn b\u1EA1n s\u1EBD th\u1EA5y n\xF3 th\xE2n thi\u1EC7n v\xE0 c\xF3 r\u1EA5t nhi\u1EC1u hi\u1EC7u \u1EE9ng kh\xE1c nhau. "),Fe=e("br",null,null,-1),Ne=s(" \u0110\u1EB7c bi\u1EC7t v\xEC d\u1EF1a tr\xEAn CSS Animations cho n\xEAn b\u1EA1n ho\xE0n to\xE0n c\xF3 th\u1EC3 tu\u1EF3 bi\u1EBFn hi\u1EC7u \u1EE9ng theo \xFD c\u1EE7a b\u1EA1n, d\u1EF1a theo c\u1EA5u tr\xFAc g\u1EA7n gi\u1ED1ng CSS Keyframes."),Oe=e("br",null,null,-1),ze=s(" B\u1EA1n c\xF3 th\u1EC3 th\u1EED nghi\u1EC7m v\xE0 tu\u1EF3 bi\u1EBFn hi\u1EC7u \u1EE9ng \u1EDF trang "),je=s("c\xF4ng c\u1EE5"),$e=s("."),Be=e("br",null,null,-1),Ee=s(" Th\u1EF1c t\u1EBF hi\u1EC7u \u1EE9ng CssOne l\xE0 t\xEAn bao g\u1ED3m 4 hi\u1EC7u \u1EE9ng css ri\xEAng l\u1EBB k\u1EBFt h\u1EE3p v\u1EDBi nhau th\xE0nh 1 hi\u1EC7u \u1EE9ng, do \u0111\xF3 ra \u0111\u1EDDi ch\u1EEF "),Re=e("b",null,'"One"',-1),Ie=s(" trong CssOne, \u0111\u1EC3 b\u1EA1n d\u1EC5 d\xE0ng thi\u1EBFt l\u1EADp slider h\u01A1n tr\u01B0\u1EDBc h\xE0ng tr\u0103m hi\u1EC7u \u1EE9ng css kh\xE1c nhau."),Le=e("ul",null,[e("li",null,"Hi\u1EC7u \u1EE9ng h\u1ED7 tr\u1EE3 th\u1EDDi gian th\u1EF1c khi b\u1EA1n \u0111ang k\xE9o r\xEA tr\xEAn slider."),e("li",null,"RubySlider hi\u1EC7n t\u1EA1i h\u1ED7 tr\u1EE3 57 hi\u1EC7u \u1EE9ng CssOne x\xE2y d\u1EF1ng s\u1EB5n."),e("li",null,[s("B\u1EA1n c\xF3 th\u1EC3 c\u1EADp nh\u1EADt hi\u1EC7u \u1EE9ng \u1EDF ph\u1EA7n danh s\xE1ch sang "),e("b",null,"Slider Main"),s(" \u0111\u1EC3 xem hi\u1EC7u \u1EE9ng Math d\u1EC5 d\xE0ng h\u01A1n.")]),e("li",null,"Hi\u1EC7u \u1EE9ng Fade thu\u1ED9c h\u1EC7 th\u1ED1ng c\u1EE7a hi\u1EC7u \u1EE9ng CssOne.")],-1);function Me(R,k,V,i,y,C){const l=Q,d=q,F=X,_=J;return g(),f("main",ee,[e("section",se,[e("div",te,[r(l,null,{title:o(()=>[ne]),desc:o(()=>[oe]),_:1}),ie])]),e("section",ae,[e("div",ce,[re,r(l,null,{title:o(()=>[le]),desc:o(()=>[de]),_:1})]),e("div",_e,[(g(),f(E,null,K(i.aFx,(p,t)=>(g(),f(E,{key:t},[p!="br"?(g(),f("div",he,[e("div",{class:"cssone__item","data-fx":p},[e("div",me,[e("div",ge,[e("div",fe,b(i.aFxName[t]),1),pe]),e("div",ve,[e("div",be,b(i.aFxName[t]),1),Ve])]),e("div",xe,[e("div",He,"#"+b(i.fxCount++),1),we])],8,ue)])):(g(),f("div",Se))],64))),64))])]),r(_,null,{"gioi-thieu":o(()=>[e("p",null,[ke,r(d,{to:"https://www.w3schools.com/css/css3_animations.asp",target:"_blank"},{default:o(()=>[ye]),_:1}),Ce,Fe,Ne,Oe,ze,r(d,{to:"/tools/create-css-effect"},{default:o(()=>[je]),_:1}),$e,Be,Ee,Re,Ie]),Le]),"thiet-lap":o(()=>[e("pre",{class:"codeprint"},b(i.sliderOptions))]),nav:o(()=>[r(F,{"prev-name":"Hi\u1EC7u \u1EE9ng Math","prev-to":"/slider/effect-math","next-name":"Hi\u1EC7u \u1EE9ng Coverflow3D","next-to":"/slider/effect-coverflow3d"})]),_:1})])}var De=U(Z,[["render",Me]]);export{De as default};
