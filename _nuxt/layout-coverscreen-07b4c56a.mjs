import{_ as p,a as v}from"./_guide-020beea7.mjs";import{_ as h,b as g,o as b,c as f,d as e,e as _,w as l,a as y,p as x,n as w,t as N,g as u}from"./entry-b9c5d8e6.mjs";const S={__name:"layout-coverscreen",setup(o,{expose:a}){a();const n={fx:"line",speed:6e4,offsetBy:"#header",layout:"fullscreen",isSwipe:!1,isKeyboard:!0,pag:{type:"bullet"},isSlideshow:!0,slideshow:{delay:3e3,timer:"arc",isPlayPause:!0}};let t;const r=()=>{jQuery("#main .rs01nav").remove(),jQuery("#main .rs01pag").remove(),jQuery("#main .rs01overlay-ghost").remove(),jQuery("#main .rs01imgback").css({width:"",height:"",left:"",top:""}),t=jQuery(".layout-coverscreen__slider .rs01").rubyslider(n),console.log(t)},d=()=>{console.log("prev"),t.prev()},c=()=>{console.log("next"),t.next()};g(()=>{setTimeout(r,400)});const i={sliderOptions:n,rubyLayoutCoverscreen:t,initSetup:r,prev:d,next:c};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},s=o=>(x("data-v-19bf63d5"),o=o(),w(),o),k={id:"main"},j={class:"layout-coverscreen"},V=y('<div class="layout-coverscreen__slider" data-v-19bf63d5><div class="rs01" data-v-19bf63d5><a class="rs01imgback" href="/img/vietnam-large1.jpg" data-v-19bf63d5>Vi\u1EC7t Nam 1</a><a class="rs01imgback" href="/img/vietnam-large2.jpg" data-v-19bf63d5>Vi\u1EC7t Nam 2</a><a class="rs01imgback" href="/img/vietnam-large3.jpg" data-v-19bf63d5>Vi\u1EC7t Nam 3</a><a class="rs01imgback" href="/img/vietnam-large4.jpg" data-v-19bf63d5>Vi\u1EC7t Nam 4</a><a class="rs01imgback" href="/img/vietnam-large5.jpg" data-v-19bf63d5>Vi\u1EC7t Nam 5</a><a class="rs01imgback" href="/img/vietnam-large6.jpg" data-v-19bf63d5>Vi\u1EC7t Nam 6</a></div></div>',1),L={class:"layout-coverscreen__content"},C={class:"layout-coverscreen__content_inner"},B=s(()=>e("h1",null,[u("LAYOUT"),e("br"),u("TO\xC0N M\xC0N H\xCCNH")],-1)),I=s(()=>e("div",{class:"layout-coverscreen__content_p font-blokk"},[e("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt id incidunt officia facere nisi, molestias blanditiis explicabo placeat nemo eveniet sapiente excepturi repellat amet deleniti magni similique quaerat earum corporis?")],-1)),P={class:"layout-coverscreen__btns"},O={class:"btn btn--btns"},Q=s(()=>e("i",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-caret-left",viewBox:"0 0 16 16"},[e("path",{d:"M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"})])],-1)),T=s(()=>e("span",null,"SLIDE PH\xCDA SAU",-1)),z=[Q,T],A=s(()=>e("span",null,"SLIDE K\u1EBE TI\u1EBEP",-1)),M=s(()=>e("i",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-caret-right",viewBox:"0 0 16 16"},[e("path",{d:"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"})])],-1)),D=[A,M],E=s(()=>e("p",null,"Layout to\xE0n m\xE0n h\xECnh.",-1));function H(o,a,n,t,r,d){const c=v,i=p;return b(),f("main",k,[e("section",j,[V,e("div",L,[e("div",C,[B,I,e("div",P,[e("div",O,[e("button",{class:"btn--primary",onClick:a[0]||(a[0]=m=>t.prev())},z),e("button",{class:"btn--alter",onClick:a[1]||(a[1]=m=>t.next())},D)])])])])]),_(i,null,{"gioi-thieu":l(()=>[E]),"thiet-lap":l(()=>[e("pre",{class:"codeprint"},N(t.sliderOptions))]),nav:l(()=>[_(c,{"prev-name":"Layout tr\xEAn thi\u1EBFt b\u1ECB","prev-to":"/slider/layout-device","next-name":"Layout thumnail chi\u1EC1u d\u1ECDc","next-to":"/slider/layout-vertical-thumbnail"})]),_:1})])}var K=h(S,[["render",H],["__scopeId","data-v-19bf63d5"]]);export{K as default};
