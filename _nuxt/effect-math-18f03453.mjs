import{_ as j}from"./TitleHead-2bc19d03.mjs";import{_ as w,a as V}from"./_guide-5589d6ec.mjs";import{_ as M,b as S,o as x,c as v,d as t,e as d,w as o,F as C,h as H,a as N,g as c,t as b}from"./entry-0c936b54.mjs";const B={__name:"effect-math",setup(y,{expose:u}){u();const f=["rectMove","rectRun","rectSlice","rubyFade","rubyMove","rubyRun","rubyScale","zigzagRun","randomMath"];let e={fx:"rectRun",speed:1e3,width:1140};const h=()=>{jQuery("#main .rs01nav").remove(),jQuery("#main .rs01pag").remove(),jQuery("#main .rs01overlay-ghost").remove(),jQuery("#main .rs01imgback").css({width:"",height:"",left:"",top:""});const l=jQuery(".effect-math__slider"),a="fxmath--actived";let r,s;l.length&&(r=l.rubyslider(e),s=r.optsCur().fx),jQuery(".fxmath__slider").each(function(n){const i=$(this),p=i.data("fx"),k={fx:p,speed:800,width:1140,idBegin:n%5,isNav:!1,pag:{type:"bullet"}};i.rubyslider(k),p==s&&i.parent().find(".fxmath__select").addClass(a)});const g=$(".fxmath__select");g.on("click",function(){const n=$(this);let i=n.data("fx");return n.hasClass(a)?(n.removeClass(a),i=s):(g.removeClass(a),n.addClass(a)),r.update({fx:i}),e=jQuery.extend(!0,{},e,{fx:i}),!1})};S(()=>{setTimeout(h,400)});const _={aFx:f,sliderOptions:e,initSetup:h};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},Q={id:"main"},F={class:"effect-math wrapper"},z={class:"container"},A=t("h1",null,"HI\u1EC6U \u1EE8NG MATH",-1),R=t("p",null,"Main Slider",-1),T=N('<div class="effect-math__slider slider-preview rs01"><a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Vi\u1EC7t Nam 1</a><a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Vi\u1EC7t Nam 5</a><a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Vi\u1EC7t Nam 6</a></div>',1),O={class:"fxmath"},P=t("div",{class:"container"},[t("div",{class:"hr hr--circle"}),t("div",{class:"fxmath__title"},[t("h2",null,[c("DANH S\xC1CH "),t("br",{class:"br--max-xs"}),c("HI\u1EC6U \u1EE8NG MATH")])])],-1),G={class:"fxmath__table grid-custom"},L={class:"fxmath__item_inner"},D=["data-fx"],I=N('<a class="rs01imgback" href="/img/vietnam2-1140-1.jpg">Vi\u1EC7t Nam 1</a><a class="rs01imgback" href="/img/vietnam2-1140-2.jpg">Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam2-1140-3.jpg">Vi\u1EC7t Nam 3</a><a class="rs01imgback" href="/img/vietnam2-1140-4.jpg">Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam2-1140-6.jpg">Vi\u1EC7t Nam 6</a>',5),U=[I],q={class:"fxmath__item_footer"},E={class:"fxmath__tag"},J={class:"fxmath__btn btn"},K=["data-fx"],W=t("span",null,"C\u1EADp nh\u1EADt main slider",-1),X=t("i",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-up-circle",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})])],-1),Y=[W,X],Z=t("p",null,"Hi\u1EC7u \u1EE9ng Math s\u1EBD t\xEDnh to\xE1n k\xEDch th\u01B0\u1EDBc c\u1EE7a h\xECnh \u1EA3nh \u0111\u1EC3 ph\xE2n chia th\xE0nh nhi\u1EC1u ph\u1EA7n kh\xE1c nhau theo h\xECnh ch\u1EEF nh\u1EADt (rectangle) ho\u1EB7c h\xECnh vu\xF4ng (square).",-1),tt=t("ul",null,[t("li",null,"Hi\u1EC7u \u1EE9ng h\u1ED7 tr\u1EE3 th\u1EDDi gian th\u1EF1c khi b\u1EA1n \u0111ang k\xE9o r\xEA tr\xEAn slider."),t("li",null,"RubySlider hi\u1EC7n t\u1EA1i h\u1ED7 tr\u1EE3 8 hi\u1EC7u \u1EE9ng Math kh\xE1c nhau."),t("li",null,[c("B\u1EA1n c\xF3 th\u1EC3 ch\u1ECDn ch\u1EBF \u0111\u1ED9 "),t("b",null,'"randomMath"'),c(" \u0111\u1EC3 slider c\xF3 th\u1EC3 ch\u1EA1y 8 hi\u1EC7u \u1EE9ng m\u1ED9t c\xE1ch ng\u1EABu nhi\xEAn.")]),t("li",null,[c("B\u1EA1n c\xF3 th\u1EC3 c\u1EADp nh\u1EADt hi\u1EC7u \u1EE9ng \u1EDF ph\u1EA7n danh s\xE1ch sang "),t("b",null,"Slider Main"),c(" \u0111\u1EC3 xem hi\u1EC7u \u1EE9ng Math d\u1EC5 d\xE0ng h\u01A1n.")])],-1),et={class:"codeprint"};function at(y,u,f,e,h,_){const l=j,a=V,r=w;return x(),v("main",Q,[t("section",F,[t("div",z,[d(l,null,{title:o(()=>[A]),desc:o(()=>[R]),_:1}),T])]),t("section",O,[P,t("div",G,[(x(),v(C,null,H(e.aFx,(s,m)=>t("div",{key:m,class:"fxmath__item grid-custom__item"},[t("div",L,[t("div",{class:"rs01 fxmath__slider","data-fx":s},U,8,D),t("div",q,[t("h3",E,"#"+b(m+1+" - "+s),1),t("div",J,[t("button",{class:"fxmath__select","data-fx":s},Y,8,K)])])])])),64))])]),d(r,null,{"gioi-thieu":o(()=>[Z,tt]),"thiet-lap":o(()=>[t("pre",et,b(e.sliderOptions),1)]),nav:o(()=>[d(a,{"prev-name":"Hi\u1EC7u \u1EE9ng Fade","prev-to":"/slider/effect-fade","next-name":"Hi\u1EC7u \u1EE9ng CssOne","next-to":"/slider/effect-css-one"})]),_:1})])}var ct=M(B,[["render",at]]);export{ct as default};
