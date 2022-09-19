import{_ as D}from"./TitleHead-2bc19d03.mjs";import{_ as C,a as N}from"./_guide-5589d6ec.mjs";import{_ as S,b as V,o as g,c as w,d as e,e as d,w as i,F as Q,h as $,a as x,t as h,g as s}from"./entry-0c936b54.mjs";const M={__name:"effect-coverflow3d",setup(b,{expose:v}){v();const _={fx:"coverflow3D",coverflow3D:{widthSlide:[940,"80%"],opacity:.7},speed:800,width:1140,margin:10},c={fx:"coverflow3D",coverflow3D:{widthSlide:"70%"},speed:800,width:940,margin:5,isNav:!1,pag:{type:"bullet"}},a=[{fx:"coverflow3D",coverflow3D:{widthSlide:"70%",zDeep:600,rotate:30,opacity:.7}},{fx:"coverflow3D",coverflow3D:{widthSlide:"70%",zDeep:0,rotate:0,opacity:.25}},{fx:"coverflow3D",coverflow3D:{widthSlide:"70%",zDeep:700,rotate:0,opacity:.25}},{fx:"coverflow3D",coverflow3D:{widthSlide:"70%",zDeep:400,rotate:-30,opacity:.25}}],f=function(){jQuery("#main .rs01nav").remove(),jQuery("#main .rs01pag").remove(),jQuery("#main .rs01overlay-ghost").remove(),jQuery("#main .rs01imgback").css({width:"",height:"",left:"",top:""});const t="coverflow3d--actived";jQuery(".coverflow3d__table");let u=jQuery(".effect-coverflow3d__slider").rubyslider(_);jQuery(".coverflow3d__item").each(function(o){const l=jQuery(this),j=l.find(".rs01"),k=jQuery.extend(!0,{},c,a[o]);j.rubyslider(k),o===0&&l.find(".fx-select").addClass(t)});const m=jQuery(".coverflow3d__select"),y=m.eq(0);m.on("click",function(){const o=jQuery(this);let l=a[o.data("fx-index")];return o.hasClass(t)?(o.removeClass(t),y.addClass(t),l=a[0]):(m.removeClass(t),o.addClass(t)),u.update({coverflow3D:l}),!1})};V(()=>{setTimeout(f,600)});const n={sliderOptions:_,optsDefault:c,aFxCustom:a,initSetup:f};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},B={id:"main"},H={class:"effect-coverflow3d wrapper"},z={class:"container"},F=e("h1",null,[s("HI\u1EC6U \u1EE8NG "),e("br",{class:"br--max-xs"}),s("COVERFLOW 3D")],-1),O=e("p",null,"Main Slider",-1),T=x('<div class="effect-coverflow3d__slider slider-preview rs01"><a class="rs01imgback" href="/img/vietnam-1140-1.jpg">Vi\u1EC7t Nam 1</a><a class="rs01imgback" href="/img/vietnam-1140-2.jpg">Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam-1140-4.jpg">Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam-1140-5.jpg">Vi\u1EC7t Nam 5</a><a class="rs01imgback" href="/img/vietnam-1140-6.jpg">Vi\u1EC7t Nam 6</a></div>',1),L={class:"coverflow3d"},A={class:"container"},G=e("div",{class:"hr hr--circle"},null,-1),I=e("h2",null,[s("TU\u1EF2 BI\u1EBEN"),e("br",{class:"br--max-xs"}),s("THAM S\u1ED0 HI\u1EC6U \u1EE8NG")],-1),U=e("p",null,"Hi\u1EC7u \u1EE9ng c\xF3 c\xE1c options kh\xE1c nhau, c\xF3 th\u1EC3 tu\u1EF3 bi\u1EBFn \u0111\u1EC3 thay \u0111\u1ED5i ki\u1EC3u d\xE1ng.",-1),q={class:"coverflow3d__table"},E=x('<div class="coverflow3d__live"><div class="coverflow3d__slider rs01"><a class="rs01imgback" href="/img/vietnam2-1140-2.jpg">Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam2-1140-4.jpg">Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam2-1140-6.jpg">Vi\u1EC7t Nam 6</a><a class="rs01imgback" href="/img/vietnam2-1140-7.jpg">Vi\u1EC7t Nam 7</a></div></div>',1),P={class:"coverflow3d__option codeprint"},R={class:"coverflow3d__item_footer"},W={class:"coverflow3d__tag"},J={class:"coverflow3d__btn btn"},K=["data-fx-index"],X=e("span",null,"C\u1EADp nh\u1EADt main slider",-1),Y=e("i",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-up-circle",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})])],-1),Z=[X,Y],ee=e("p",null,"Hi\u1EC7u \u1EE9ng Math s\u1EBD t\xEDnh to\xE1n k\xEDch th\u01B0\u1EDBc c\u1EE7a h\xECnh \u1EA3nh \u0111\u1EC3 ph\xE2n chia th\xE0nh nhi\u1EC1u ph\u1EA7n kh\xE1c nhau theo h\xECnh ch\u1EEF nh\u1EADt (rectangle) ho\u1EB7c h\xECnh vu\xF4ng (square).",-1),te=e("ul",null,[e("li",null,"Hi\u1EC7u \u1EE9ng h\u1ED7 tr\u1EE3 th\u1EDDi gian th\u1EF1c khi b\u1EA1n \u0111ang k\xE9o r\xEA tr\xEAn slider."),e("li",null,"RubySlider hi\u1EC7n t\u1EA1i h\u1ED7 tr\u1EE3 8 hi\u1EC7u \u1EE9ng Math kh\xE1c nhau."),e("li",null,[s("B\u1EA1n c\xF3 th\u1EC3 ch\u1ECDn ch\u1EBF \u0111\u1ED9 "),e("b",null,'"randomMath"'),s(" \u0111\u1EC3 slider c\xF3 th\u1EC3 ch\u1EA1y 8 hi\u1EC7u \u1EE9ng m\u1ED9t c\xE1ch ng\u1EABu nhi\xEAn.")]),e("li",null,[s("B\u1EA1n c\xF3 th\u1EC3 c\u1EADp nh\u1EADt hi\u1EC7u \u1EE9ng \u1EDF ph\u1EA7n danh s\xE1ch sang "),e("b",null,"Slider Main"),s(" \u0111\u1EC3 xem hi\u1EC7u \u1EE9ng Math d\u1EC5 d\xE0ng h\u01A1n.")])],-1);function se(b,v,_,c,a,f){const n=D,t=N,p=C;return g(),w("main",B,[e("section",H,[e("div",z,[d(n,null,{title:i(()=>[F]),desc:i(()=>[O]),_:1})]),T]),e("section",L,[e("div",A,[G,d(n,null,{title:i(()=>[I]),desc:i(()=>[U]),_:1})]),e("div",q,[(g(),w(Q,null,$(c.aFxCustom,(u,r)=>e("div",{key:r,class:"coverflow3d__item"},[E,e("pre",P,h(u),1),e("div",R,[e("h3",W,"#"+h(r+1)+" - Style "+h(r+1),1),e("div",J,[e("button",{class:"coverflow3d__select","data-fx-index":r},Z,8,K)])])])),64))])]),d(p,null,{"gioi-thieu":i(()=>[ee,te]),"thiet-lap":i(()=>[e("pre",{class:"codeprint"},h(c.sliderOptions))]),nav:i(()=>[d(t,{"prev-name":"Hi\u1EC7u \u1EE9ng CssOne","prev-to":"/slider/effect-css-one","next-name":"T\u1EA5t c\u1EA3 v\xED d\u1EE5","next-to":"/slider"})]),_:1})])}var ae=S(M,[["render",se]]);export{ae as default};