import{_ as Q}from"./TitleHead-3654e918.mjs";import{_ as U,b as W,o as f,c as g,d as e,e as r,w as o,F as j,h as K,a as Y,t as V,g as t,f as q}from"./entry-babd6a76.mjs";import{_ as J,a as X}from"./_guide-0533946f.mjs";const Z={__name:"effect-css-four",setup(R,{expose:k}){k();const H={fx:"cssOne",cssOne:"roDeal",speed:800,width:1880,height:520,isNav:!0},a=["glueHor","glueVer","foldHor","foldVer","foldFromHor","foldFromVer","roomHor","roomVer","flitHor","flitVer","hinge","roll","br","moveHor","moveVer","fade","fadeHor","fadeVer","scaleInHor","scaleInVer","scaleOutHor","scaleOutVer","scalePulse","scaleWave","roEdgeHor","roEdgeVer","newspaper","pushFromHor","pushFromVer","slide","br","fall","pulseShort","roSoft","roDeal","wheelHor","wheelVer","snakeHor","snakeVer","shuffle","browseLeft","browseRight","slideBehind","vacuumHor","vacuumVer","br","scaleSoft","snapHor","snapVer","letInHor","letInVer","stickHor","stickVer","growthHor","growthVer","soEdgeHor","soEdgeVer","shake","tinHor","tinVer"],C=["Glue Horizontal","Glue Vertical","Fold Horizontal","Fold Vertical","Fold From Horizontal","Fold From Vertical","Room Horizontal","Room Vertical","Flit Horizontal","Flit Vertical","Hinge","Roll","br","Move Horizontal","Move Vertical","Fade","Fade Horizontal","Fade Vertical","Scale In Horizontal","Scale In Vertical","Scale Out Horizontal","Scale Out Vertical","Scale Pulse","Scale Wave","Rotate Edge Horizontal","Rotate Edge Vertical","Newspaper","Push From Horizontal","Push From Vertical","Slide","br","Fall","Pulse Short","Rotate Soft","Rotate Deal","Wheel Horizontal","Wheel Vertical","Snake Horizontal","Snake Vertical","Shuffle","Browse Left","Browse Right","Slide Behind","Vacuum Horizontal","Vacuum Vertical","br","Scale Soft","Snap Horizontal","Snap Vertical","Let In Horizontal","Let In Vertical","Stick Horizontal","Stick Vertical","Growth Horizontal","Growth Vertical","Soft Edge Horizontal","Soft Edge Vertical","Shake","Tin Horizontal","Tin Vertical"];let y=1;const c=()=>{jQuery("#main .rs01nav").remove(),jQuery("#main .rs01pag").remove(),jQuery("#main .rs01overlay-ghost").remove(),jQuery("#main .rs01imgback").css({width:"",height:"",left:"",top:""});let _=jQuery(".effect-cssone__slider").rubyslider(H);const v=jQuery(".cssone__item"),s="cssone--actived",I=800,L=0;$("#effects"),$(".cssone__table");let b;v.each(function(){const n=$(this);n.find(".cssone__name");const S=n.find(".cssone__preview"),h=n.find(".cssone__one"),N=n.find(".cssone__slide"),w=n.find(".cssone--slide-1"),x=n.find(".cssone--slide-2"),z=n.data("fx"),i=new RubyTween,T=N.attr("style")||"",A=N.attr("style")||"",u=$.extend(!0,{},_.one.va.rubyAnimateOne[z]);function p(O,B){const m=rs01MODULE.RUBYANIMATE.Tween(O,I,L,null,_.one.va.rubyAnimateKeyframes);if(!!$.isArray(m))for(var l=0,D=m.length;l<D;l++){var E=$.extend({},m[l].prop||m[l]);if(l==0)i.css(B,E,{type:"reset"});else{var G=$.extend({},m[l].opts);i.animate(B,E,G,!1)}}}function M(){p(u.next[0],x),p(u.next[1],w),u.isMask&&S.addClass("rs01mask"),i.eventComplete(function(){P()}),i.restart()}function P(){p(u.prev[0],w),p(u.prev[1],x),i.eventComplete(function(){w.attr("style",T),x.attr("style",A),n.removeClass(s),S.removeClass("rs01mask")}),i.restart()}S.on("click",function(O){return n.hasClass(s)||(n.addClass(s),M()),!1}),h.on("click",function(){h.hasClass(s)?h.removeClass(s):(b&&b.removeClass(s),h.addClass(s),b=h,_.update({cssOne:z}))})})};W(()=>{setTimeout(c,400)});const d={sliderOptions:H,aFx:a,aFxName:C,fxCount:y,initSetup:c};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},ee={id:"main"},se={id:"effect-cssone",class:"effect-cssone wrapper"},te={class:"container"},ne=e("h1",null,"HI\u1EC6U \u1EE8NG CSS ONE",-1),oe=e("p",null,"Main Slider",-1),ae=Y('<div class="effect-cssone__slider slider-preview rs01"><a class="rs01imgback" href="/img/vietnam-large1.jpg">Vi\u1EC7t Nam 1</a><a class="rs01imgback" href="/img/vietnam-large2.jpg">Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam-large4.jpg">Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam-large5.jpg">Vi\u1EC7t Nam 5</a><a class="rs01imgback" href="/img/vietnam-large6.jpg">Vi\u1EC7t Nam 6</a></div>',1),ie={class:"cssone"},le={class:"container"},re=e("div",{class:"hr hr--circle"},null,-1),ce=e("h2",null,"DANH S\xC1CH HI\u1EC6U \u1EE8NG CSS ONE",-1),de=e("p",null,"C\xF3 t\u1EA5t c\u1EA3 57 hi\u1EC7u \u1EE9ng CssOne. Click v\xE0o \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\u1EC3 xem t\u1EEBng hi\u1EC7u \u1EE9ng.",-1),_e={class:"cssone__table row"},he={key:0,class:"col-3 col-xxs-6"},ue=["data-fx"],me={class:"cssone__preview"},fe={class:"cssone__slide cssone--slide-1"},ge={class:"cssone__name"},ve=e("div",{class:"cssone__slide_name"},"Back",-1),pe={class:"cssone__slide cssone--slide-2"},Ve={class:"cssone__name"},He=e("div",{class:"cssone__slide_name"},"Front",-1),be={class:"cssone__item_footer"},Se={class:"cssone__tag"},we=e("div",{class:"cssone__select btn btn--small"},[e("button",{class:"cssone__one"},[e("span",null,"C\u1EADp nh\u1EADt main slider"),e("i",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-up-circle",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})])])])],-1),xe={key:1,class:"cssone__br"},ke=t("Hi\u1EC7u \u1EE9ng CssOne l\xE0 hi\u1EC7u \u1EE9ng d\u1EF1a tr\xEAn "),Ce=t("CSS Animations"),ye=t(", cho n\xEAn b\u1EA1n s\u1EBD th\u1EA5y n\xF3 th\xE2n thi\u1EC7n v\xE0 c\xF3 r\u1EA5t nhi\u1EC1u hi\u1EC7u \u1EE9ng kh\xE1c nhau. "),Fe=e("br",null,null,-1),Ne=t(" \u0110\u1EB7c bi\u1EC7t v\xEC d\u1EF1a tr\xEAn CSS Animations cho n\xEAn b\u1EA1n ho\xE0n to\xE0n c\xF3 th\u1EC3 tu\u1EF3 bi\u1EBFn hi\u1EC7u \u1EE9ng theo \xFD c\u1EE7a b\u1EA1n, d\u1EF1a theo c\u1EA5u tr\xFAc g\u1EA7n gi\u1ED1ng CSS Keyframes."),ze=e("br",null,null,-1),Oe=t(" B\u1EA1n c\xF3 th\u1EC3 th\u1EED nghi\u1EC7m v\xE0 tu\u1EF3 bi\u1EBFn hi\u1EC7u \u1EE9ng \u1EDF trang "),$e=t("c\xF4ng c\u1EE5"),Be=t("."),Ee=e("br",null,null,-1),je=t(" Th\u1EF1c t\u1EBF hi\u1EC7u \u1EE9ng CssOne l\xE0 t\xEAn bao g\u1ED3m 4 hi\u1EC7u \u1EE9ng css ri\xEAng l\u1EBB k\u1EBFt h\u1EE3p v\u1EDBi nhau th\xE0nh 1 hi\u1EC7u \u1EE9ng, do \u0111\xF3 ra \u0111\u1EDDi ch\u1EEF "),Re=e("b",null,'"One"',-1),Ie=t(" trong CssOne, \u0111\u1EC3 b\u1EA1n d\u1EC5 d\xE0ng thi\u1EBFt l\u1EADp slider h\u01A1n tr\u01B0\u1EDBc h\xE0ng tr\u0103m hi\u1EC7u \u1EE9ng css kh\xE1c nhau."),Le=e("ul",null,[e("li",null,"Hi\u1EC7u \u1EE9ng h\u1ED7 tr\u1EE3 th\u1EDDi gian th\u1EF1c khi b\u1EA1n \u0111ang k\xE9o r\xEA tr\xEAn slider."),e("li",null,"RubySlider hi\u1EC7n t\u1EA1i h\u1ED7 tr\u1EE3 57 hi\u1EC7u \u1EE9ng CssOne x\xE2y d\u1EF1ng s\u1EB5n."),e("li",null,[t("B\u1EA1n c\xF3 th\u1EC3 c\u1EADp nh\u1EADt hi\u1EC7u \u1EE9ng \u1EDF ph\u1EA7n danh s\xE1ch sang "),e("b",null,"Slider Main"),t(" \u0111\u1EC3 xem hi\u1EC7u \u1EE9ng Math d\u1EC5 d\xE0ng h\u01A1n.")]),e("li",null,"Hi\u1EC7u \u1EE9ng Fade thu\u1ED9c h\u1EC7 th\u1ED1ng c\u1EE7a hi\u1EC7u \u1EE9ng CssOne.")],-1);function Te(R,k,H,a,C,y){const c=Q,d=q,F=X,_=J;return f(),g("main",ee,[e("section",se,[e("div",te,[r(c,null,{title:o(()=>[ne]),desc:o(()=>[oe]),_:1}),ae])]),e("section",ie,[e("div",le,[re,r(c,null,{title:o(()=>[ce]),desc:o(()=>[de]),_:1})]),e("div",_e,[(f(),g(j,null,K(a.aFx,(v,s)=>(f(),g(j,{key:s},[v!="br"?(f(),g("div",he,[e("div",{class:"cssone__item","data-fx":v},[e("div",me,[e("div",fe,[e("div",ge,V(a.aFxName[s]),1),ve]),e("div",pe,[e("div",Ve,V(a.aFxName[s]),1),He])]),e("div",be,[e("div",Se,"#"+V(a.fxCount++),1),we])],8,ue)])):(f(),g("div",xe))],64))),64))])]),r(_,null,{"gioi-thieu":o(()=>[e("p",null,[ke,r(d,{to:"https://www.w3schools.com/css/css3_animations.asp",target:"_blank"},{default:o(()=>[Ce]),_:1}),ye,Fe,Ne,ze,Oe,r(d,{to:"/tools/create-css-effect"},{default:o(()=>[$e]),_:1}),Be,Ee,je,Re,Ie]),Le]),"thiet-lap":o(()=>[e("pre",{class:"codeprint"},V(a.sliderOptions))]),nav:o(()=>[r(F,{"prev-name":"Hi\u1EC7u \u1EE9ng CssTwo","prev-to":"/slider/effect-css-two","next-name":"Hi\u1EC7u \u1EE9ng Coverflow3Dr","next-to":"/slider/effect-coverflow3d"})]),_:1})])}var De=U(Z,[["render",Te]]);export{De as default};
