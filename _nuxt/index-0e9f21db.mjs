import{_ as y,o as t,c as n,a as g,m as x,b as k,e as h,d as s,F as i,h as m,t as v,i as u,w as S,f as w}from"./entry-babd6a76.mjs";const L={},T={class:"typoslider"},E=g('<div class="container"><h1 class="typoslider__h1"><span class="typoslider__text_1">SLIDER</span><span class="typoslider__text_2">LIST</span><span class="typoslider__text_3">TEMPLATES</span><span class="typoslider__text_4">OVER 30+ SLIDER STARTER TEMPLATES</span></h1></div>',1),b=[E];function M(p,r){return t(),n("div",T,b)}var $=y(L,[["render",M]]);const N={__name:"index",setup(p,{expose:r}){r();const a=x(),c=a.value[0].menus,l={type:"tabs",fx:"line",speed:600,pag:{align:"center"},isNav:!0,isSwipe:!1,isKeyboard:!0,isDeeplinking:!0,load:{isLazy:!1}},d=()=>{jQuery("#main .rs01nav").remove(),jQuery("#main .rs01pag").remove(),jQuery("#main .rs01overlay-ghost").remove(),jQuery("#main .rs01imgback").css({width:"",height:"",left:"",top:""}),jQuery(".list-templates__slider").rubyslider(l)};k(()=>{setTimeout(d,200)});const _={MENUS:a,sliderData:c,sliderOptions:l,initSetup:d};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},j={id:"main"},Q={class:"list-templates"},R={class:"list-templates__slider rs01"},V={class:"rs01viewport"},C={class:"rs01canvas"},H=["id"],A={class:"rs01pagitem"},B={class:"container"},I={key:0,class:"list-templates__header"},O=["innerHTML"],P=["innerHTML"],F={class:"showfull row gx-2 gx-sm-3 gx-md-4"},U={key:0,class:"showfull__item col-4 col-sm-4 col-lg-3"},z={class:"showfull__item_inner"},K={class:"showfull__thumb"},q=["src","alt"],G={class:"showfull__name"};function J(p,r,a,c,l,d){const _=$,f=w;return t(),n("main",j,[h(_),s("div",Q,[s("div",R,[s("div",V,[s("div",C,[(t(!0),n(i,null,m(c.sliderData,e=>(t(),n(i,{key:e.key},[e.status&&e.menus?(t(),n("div",{key:0,id:"list-slider-"+e.slug.toLowerCase(),class:"rs01slide"},[s("div",A,v(e.name.toUpperCase()),1),s("div",B,[e.header?(t(),n("div",I,[s("h2",null,[s("span",{innerHTML:e.header.title},null,8,O)]),s("div",{innerHTML:e.header.desc},null,8,P)])):u("",!0),s("div",F,[(t(!0),n(i,null,m(e.menus,o=>(t(),n(i,{key:o.key},[o.status?(t(),n("div",U,[s("div",z,[h(f,{class:"showfull__link linkto",to:o.to},{default:S(()=>[s("figure",K,[s("img",{src:o.thumbnail,alt:o.name},null,8,q),s("figcaption",G,v(o.name),1)])]),_:2},1032,["to"])])])):u("",!0)],64))),128))])])],8,H)):u("",!0)],64))),128))])])])])])}var X=y(N,[["render",J]]);export{X as default};
