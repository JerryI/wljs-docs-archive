(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4204],{11232:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});n(11504);var s=n(65456),o=n(15756),l=n(45864),c=n(3180),a=n(62824),r=n(75124),d=n(61528),i=n(47790),m=n(63408);const u={lastUpdated:"lastUpdated_JAkA"};var h=n(17624);function x(e){let{className:t,editUrl:n,lastUpdatedAt:o,lastUpdatedBy:l}=e;return(0,h.jsxs)("div",{className:(0,s.c)("row",t),children:[(0,h.jsx)("div",{className:"col",children:n&&(0,h.jsx)(i.c,{editUrl:n})}),(0,h.jsx)("div",{className:(0,s.c)("col",u.lastUpdated),children:(o||l)&&(0,h.jsx)(m.c,{lastUpdatedAt:o,lastUpdatedBy:l})})]})}const p={mdxPageWrapper:"mdxPageWrapper_j9I6"};function g(e){const{content:t}=e,{metadata:{title:n,editUrl:i,description:m,frontMatter:u,unlisted:g,lastUpdatedBy:j,lastUpdatedAt:f},assets:w}=t,{keywords:C,wrapperClassName:v,hide_table_of_contents:b}=u,_=w.image??u.image,k=!!(i||f||j);return(0,h.jsx)(o.cr,{className:(0,s.c)(v??l.W.wrapper.mdxPages,l.W.page.mdxPage),children:(0,h.jsxs)(c.c,{children:[(0,h.jsx)(o.U7,{title:n,description:m,keywords:C,image:_}),(0,h.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,h.jsxs)("div",{className:(0,s.c)("row",p.mdxPageWrapper),children:[(0,h.jsxs)("div",{className:(0,s.c)("col",!b&&"col--8"),children:[g&&(0,h.jsx)(d.c,{}),(0,h.jsx)("article",{children:(0,h.jsx)(a.c,{children:(0,h.jsx)(t,{})})}),k&&(0,h.jsx)(x,{className:(0,s.c)("margin-top--sm",l.W.pages.pageFooterEditMetaRow),editUrl:i,lastUpdatedAt:f,lastUpdatedBy:j})]}),!b&&t.toc.length>0&&(0,h.jsx)("div",{className:"col col--2",children:(0,h.jsx)(r.c,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level})})]})})]})})}},61528:(e,t,n)=>{"use strict";n.d(t,{c:()=>h});n(11504);var s=n(65456),o=n(33456),l=n(56952),c=n(17624);function a(){return(0,c.jsx)(o.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,c.jsx)(o.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function d(){return(0,c.jsx)(l.c,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var i=n(45864),m=n(30304);function u(e){let{className:t}=e;return(0,c.jsx)(m.c,{type:"caution",title:(0,c.jsx)(a,{}),className:(0,s.c)(t,i.W.common.unlistedBanner),children:(0,c.jsx)(r,{})})}function h(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{}),(0,c.jsx)(u,{...e})]})}},37872:(e,t,n)=>{"use strict";n.d(t,{c:()=>d});var s=n(11504),o=n(28176),l=n(93391),c=n(28264),a=n(66528),r=(n(98684),n(52964),n(93664),n(17624));const d={...o.c,Wl:function(e){let{children:t,data:n}=e;const o=(0,s.useRef)(null),{siteConfig:a}=(0,c.c)(),{baseUrl:d,url:i}=a;return(0,s.useEffect)((()=>{console.warn("Loading component...");const e=o.current;let n=document.createElement("div");n.classList.add("frontend-object"),n.setAttribute("data-object","loading..."),e.appendChild(n);let s={global:{call:Date.now()+Math.floor(100*Math.random())},element:n};console.warn("decrypting...");try{console.log(i),d.length<3?(console.log(i+"/expressions/"+(0,l.md5)(t.trim())+".json"),fetch(i+"/expressions/"+(0,l.md5)(t.trim())+".json").then((e=>{e.json().then((e=>{interpretate(["FrontEndVirtual",e],s)}))}))):(console.log(d+"/expressions/"+(0,l.md5)(t.trim())+".json"),fetch(d+"/expressions/"+(0,l.md5)(t.trim())+".json").then((e=>{e.json().then((e=>{interpretate(["FrontEndVirtual",e],s)}))})))}catch(c){console.warn("Error!"),console.warn(c)}}),[]),(0,r.jsx)("main",{id:"frontend-editor",className:"main-container styles-container-editor",children:(0,r.jsx)("div",{id:"frontend-editor-content",className:"group-container",children:(0,r.jsx)("div",{ref:o})})})},CodeMirror:function(e){let{children:t,data:n}=e;const o=(0,s.useRef)(null),{colorMode:l,setColorMode:c}=(0,a.U)();return(0,s.useEffect)((()=>{const e=o.current;console.log("Create Codemirror"),window.CMInitialized=!0,window.CMInitialized;const n=new window.SupportedCells.codemirror.view({element:e},t);return()=>{n&&console.log("Remove Codemirror")}}),[]),(0,r.jsx)("div",{style:{filter:"dark"==l?"invert(1) contrast(0.8) hue-rotate(-185deg)":"none"},className:"language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block",children:(0,r.jsx)("div",{className:"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,r.jsx)("pre",{tabIndex:"0",className:"prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)"},children:(0,r.jsx)("code",{ref:o,className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"})})})})}}},47944:()=>{},73223:()=>{}}]);