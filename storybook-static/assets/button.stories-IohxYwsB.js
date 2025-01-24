import{j as r}from"./jsx-runtime-CLpGMVip.js";import{f as P}from"./index-MpUCZ_R_.js";import{c as R,a as q,b as I}from"./index-DOY7CbiY.js";import"./index-CxvQnm3Y.js";const $=R("ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});function n(t){const e=q.c(18);let o,a,s,u,i,c,d;e[0]!==t?({ref:u,className:a,children:o,variant:d,size:i,type:c,...s}=t,e[0]=t,e[1]=o,e[2]=a,e[3]=s,e[4]=u,e[5]=i,e[6]=c,e[7]=d):(o=e[1],a=e[2],s=e[3],u=e[4],i=e[5],c=e[6],d=e[7]);const h=c===void 0?"button":c;let l;e[8]!==a||e[9]!==i||e[10]!==d?(l=I($({variant:d,size:i,className:a})),e[8]=a,e[9]=i,e[10]=d,e[11]=l):l=e[11];let m;return e[12]!==o||e[13]!==s||e[14]!==u||e[15]!==l||e[16]!==h?(m=r.jsx("button",{className:l,type:h,ref:u,...s,children:o}),e[12]=o,e[13]=s,e[14]=u,e[15]=l,e[16]=h,e[17]=m):m=e[17],m}n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["ComponentProps","VariantProps"]};const M={component:n,tags:["autodocs"],argTypes:{variant:{options:["default","destructive","outline","secondary","ghost","link"],control:{type:"select"}},size:{options:["default","sm","lg","icon"],control:{type:"select"}}},args:{onClick:P()}},p={args:{buttonText:"Hello, i am a default button",variant:"default",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},g={args:{buttonText:"Hello, i am a destructive button",variant:"destructive",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},b={args:{buttonText:"Hello, i am an outline button",variant:"outline",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},f={args:{buttonText:"Hello, i am a secondary button",variant:"secondary",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},v={args:{buttonText:"Hello, i am a ghost button",variant:"ghost",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},x={args:{buttonText:"Hello, i am a link button",variant:"link",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})};var y,T,z;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello, i am a default button",
    variant: "default",
    size: "default"
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var B,k,H;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello, i am a destructive button",
    variant: "destructive",
    size: "default"
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(H=(k=g.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var j,S,_;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello, i am an outline button",
    variant: "outline",
    size: "default"
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(_=(S=b.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var w,D,V;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello, i am a secondary button",
    variant: "secondary",
    size: "default"
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(V=(D=f.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var E,N,O;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello, i am a ghost button",
    variant: "ghost",
    size: "default"
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(O=(N=v.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var C,G,L;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    buttonText: "Hello, i am a link button",
    variant: "link",
    size: "default"
  },
  render: ({
    buttonText,
    ...args
  }) => {
    return <Button {...args}>{buttonText}</Button>;
  }
}`,...(L=(G=x.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const Q=["Default","Destructive","Outline","Secondary","Ghost","Link"];export{p as Default,g as Destructive,v as Ghost,x as Link,b as Outline,f as Secondary,Q as __namedExportsOrder,M as default};
