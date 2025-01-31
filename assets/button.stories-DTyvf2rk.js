import{j as r}from"./jsx-runtime-CLpGMVip.js";import{f as P}from"./index-MpUCZ_R_.js";import{c as R,a as q,b as I}from"./index-DOY7CbiY.js";import"./index-CxvQnm3Y.js";const $=R("ui:ring-offset-background ui:focus-visible:ring-ring ui:inline-flex ui:items-center ui:justify-center ui:gap-2 ui:rounded-md ui:text-sm ui:font-medium ui:whitespace-nowrap ui:shadow-md ui:transition-colors ui:focus-visible:ring-2 ui:focus-visible:ring-offset-2 ui:focus-visible:outline-hidden ui:disabled:pointer-events-none ui:disabled:opacity-50",{variants:{variant:{default:"ui:bg-primary ui:text-primary-foreground ui:hover:bg-primary/90",destructive:"ui:bg-destructive ui:text-destructive-foreground ui:hover:bg-destructive/90",outline:"ui:border-border ui:bg-background ui:hover:bg-accent ui:hover:text-accent-foreground ui:border",secondary:"ui:bg-secondary ui:text-secondary-foreground ui:hover:bg-secondary/80",ghost:"ui:hover:bg-accent ui:hover:text-accent-foreground",link:"ui:text-primary ui:underline-offset-4 ui:hover:underline"},size:{default:"ui:h-10 ui:px-4 ui:py-2",sm:"ui:h-9 ui:rounded-md ui:px-3",lg:"ui:h-11 ui:rounded-md ui:px-8",icon:"ui:h-10 ui:w-10"}},defaultVariants:{variant:"default",size:"default"}});function n(t){const e=q.c(18);let o,a,u,s,i,c,d;e[0]!==t?({ref:s,className:a,children:o,variant:d,size:i,type:c,...u}=t,e[0]=t,e[1]=o,e[2]=a,e[3]=u,e[4]=s,e[5]=i,e[6]=c,e[7]=d):(o=e[1],a=e[2],u=e[3],s=e[4],i=e[5],c=e[6],d=e[7]);const h=c===void 0?"button":c;let l;e[8]!==a||e[9]!==i||e[10]!==d?(l=I($({variant:d,size:i,className:a})),e[8]=a,e[9]=i,e[10]=d,e[11]=l):l=e[11];let m;return e[12]!==o||e[13]!==u||e[14]!==s||e[15]!==l||e[16]!==h?(m=r.jsx("button",{className:l,type:h,ref:s,...u,children:o}),e[12]=o,e[13]=u,e[14]=s,e[15]=l,e[16]=h,e[17]=m):m=e[17],m}n.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["ComponentProps","VariantProps"]};const M={component:n,tags:["autodocs"],argTypes:{variant:{options:["default","destructive","outline","secondary","ghost","link"],control:{type:"select"}},size:{options:["default","sm","lg","icon"],control:{type:"select"}}},args:{onClick:P()}},p={args:{buttonText:"Hello, i am a default button",variant:"default",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},g={args:{buttonText:"Hello, i am a destructive button",variant:"destructive",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},b={args:{buttonText:"Hello, i am an outline button",variant:"outline",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},f={args:{buttonText:"Hello, i am a secondary button",variant:"secondary",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},x={args:{buttonText:"Hello, i am a ghost button",variant:"ghost",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})},v={args:{buttonText:"Hello, i am a link button",variant:"link",size:"default"},render:({buttonText:t,...e})=>r.jsx(n,{...e,children:t})};var y,T,z;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var B,H,k;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(H=g.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var j,S,w;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(S=b.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,V,_;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var E,N,O;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(N=x.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var C,G,L;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(G=v.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const Q=["Default","Destructive","Outline","Secondary","Ghost","Link"];export{p as Default,g as Destructive,x as Ghost,v as Link,b as Outline,f as Secondary,Q as __namedExportsOrder,M as default};
