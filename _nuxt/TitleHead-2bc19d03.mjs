import{_ as c,u as d,o as s,c as o,d as l,i as n,j as a}from"./entry-0c936b54.mjs";const p={__name:"TitleHead",props:{title:String},setup(t,{expose:r}){r();const i=t,e=d(),_={props:i,slots:e};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},h={class:"title-head"},u={class:"title-head__inner"},m={key:0,class:"title-head__title"},f=["innerHTML"],v={key:1,class:"title-head__title"},k={key:2,class:"title-head__desc"};function S(t,r,i,e,_,y){return s(),o("div",h,[l("div",u,[e.props.title?(s(),o("div",m,[l("h1",{innerHTML:e.props.title},null,8,f)])):n("",!0),e.slots.title?(s(),o("div",v,[a(t.$slots,"title")])):n("",!0),e.slots.desc?(s(),o("div",k,[a(t.$slots,"desc")])):n("",!0)])])}var H=c(p,[["render",S]]);export{H as _};