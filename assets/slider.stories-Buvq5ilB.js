import{f as P}from"./index-MpUCZ_R_.js";import{j as x}from"./jsx-runtime-CLpGMVip.js";import{c as z,a as A,b as B}from"./index-DOY7CbiY.js";import{r as G}from"./index--SmMaMC_.js";import"./index-CxvQnm3Y.js";const J=z("slider ui:focus-visible:ring-accent ui:my-4 ui:h-2 ui:w-full ui:cursor-pointer ui:appearance-none ui:rounded-lg ui:outline-hidden ui:focus-visible:ring-2",{variants:{variant:{default:"ui:bg-primary ui:text-primary-foreground",outline:"ui:border-input ui:bg-background border",destructive:"ui:bg-destructive ui:text-destructive-foreground",secondary:"ui:bg-secondary ui:text-secondary-foreground"}},defaultVariants:{variant:"default"}});function I($){const e=A.c(18),{ref:H,min:d,max:m,step:p,value:M,onChange:f,className:v,variant:g,label:h,ariaLabel:b}=$,[n,k]=G.useState(M);let i;e[0]!==f?(i=function(F){const L=parseFloat(F.target.value);k(L),f(L)},e[0]=f,e[1]=i):i=e[1];const y=i,S=h?`${h}: ${n}`:n;let a;e[2]!==S?(a=x.jsx("span",{children:S}),e[2]=S,e[3]=a):a=e[3];let r;e[4]!==v||e[5]!==g?(r=B(J({variant:g,className:v})),e[4]=v,e[5]=g,e[6]=r):r=e[6];let t;e[7]!==b||e[8]!==y||e[9]!==m||e[10]!==d||e[11]!==n||e[12]!==p||e[13]!==r?(t=x.jsx("input",{"aria-label":b,ref:H,type:"range",min:d,max:m,step:p,value:n,onChange:y,className:r}),e[7]=b,e[8]=y,e[9]=m,e[10]=d,e[11]=n,e[12]=p,e[13]=r,e[14]=t):t=e[14];let s;return e[15]!==a||e[16]!==t?(s=x.jsxs("label",{className:"ui:flex ui:cursor-pointer ui:flex-col ui:items-center ui:text-sm ui:md:text-base",children:[a,t]}),e[15]=a,e[16]=t,e[17]=s):s=e[17],s}I.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},step:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const Z={component:I,tags:["autodocs"],argTypes:{variant:{options:["default","outline","primary","destructive","secondary"],control:{type:"select"}}},args:{onChange:P()}},l={args:{variant:"default",min:0,max:100,step:1,value:50,label:"Default Slider",ariaLabel:"Default Slider"}},u={args:{variant:"outline",min:0,max:100,step:1,value:50,label:"Outline Slider",ariaLabel:"Outline Slider"}},o={args:{variant:"destructive",min:0,max:100,step:1,value:50,label:"Destructive Slider",ariaLabel:"Destructive Slider"}},c={args:{variant:"secondary",min:0,max:100,step:1,value:50,label:"Secondary Slider",ariaLabel:"Secondary Slider"}};var T,D,q;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "default",
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    label: "Default Slider",
    ariaLabel: "Default Slider"
  }
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var C,E,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    label: "Outline Slider",
    ariaLabel: "Outline Slider"
  }
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var V,j,N;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    label: "Destructive Slider",
    ariaLabel: "Destructive Slider"
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,w,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    label: "Secondary Slider",
    ariaLabel: "Secondary Slider"
  }
}`,...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const ee=["Default","outline","destructive","secondary"];export{l as Default,ee as __namedExportsOrder,Z as default,o as destructive,u as outline,c as secondary};
